
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit{

  constructor(private apiService:ApiService , private toastr:ToastrService){}

  jsonData:any;
  isLoading:boolean = false;
  
  
  selectedCategory:any = {};
  excelOutputData:any = [];
  selectedYear : any;
  yearList:any = [];
  distributorList:any = [];
  selectedDistributor:any = {};
  categoriesList:any = [];

  ngOnInit()
  {
    this.formYearList();
    this.fetchDistributors();
    this.fetchCategories();
    // this.apiService.getOrdersForReports("2023" , this.selectedArea , this.selectedDistributor).subscribe((o)=>{
    //   this.jsonData = o;
    //   this.isLoading = false;
    //   this.doWork();
    // });
  }

  buildFileName()
  {
    let str = "";
    str+=this.selectedDistributor.view+"--"+this.selectedCategory['categoryName'];
    return str;
  }

  fetchCategories()
  {
    this.apiService.getCategories().subscribe((catData)=>{
      if(catData == null)
      {
        this.selectedCategory = {"categoryName" : "ERROR"};
        this.categoriesList.push(this.selectedCategory);
        return;
      }
      this.selectedCategory = {"categoryName" : "ALL"};
      this.categoriesList = [];
      this.categoriesList.push(this.selectedCategory);
      for(let i=0;i<Object.values(catData).length;i++)
      {
        this.categoriesList.push(Object.values(catData)[i]);
      }
    });
  }

  fetchDistributors()
  {
    this.selectedDistributor = {};
    this.apiService.getDistributors().subscribe((distributors)=>{
      if(distributors == null)
      {
        this.selectedDistributor = {"area" : "ERROR" , "distributor" : "ERROR"};
        this.distributorList.push(this.selectedDistributor);
        return;
      }
      let dist : any = Object.values(distributors);
      this.distributorList = [];
      for(let i=0;i<dist.length;i++)
      {
        this.distributorList.push({'view' : dist[i].distributorName + " from "+dist[i].area , 'distributor' : dist[i].distributorName , 'area' : dist[i].area});
      }
      this.distributorList.sort((a:any, b:any) => (a.distributor.trim() > b.distributor.trim()) ? 1 : -1)
    });
  }

  formYearList()
  {
    let curr_year =  new Date().getFullYear();
    for(let i=0;i<4;i++)
    {
      this.yearList.push({'year' : curr_year-i});
    }
  }

  doWork()
  {
    // Consolidate data for each item across all months
    this.isLoading = true;
    console.log("params - year = "+this.selectedYear.year + "-" + this.selectedDistributor.area + "-"+ this.selectedDistributor.distributor);
    this.apiService.getOrdersForReports(this.selectedYear.year , this.selectedDistributor.area , this.selectedDistributor.distributor).subscribe((orders)=>{
      if(orders == null || orders == undefined)
      {
        this.isLoading = false;
        this.toastr.warning('No Data Found', 'Notification!' , {
          timeOut : 4000 ,
          closeButton : true , 
          positionClass : 'toast-top-right'
        });
        return;
      }
      this.jsonData = orders;
      const consolidatedData = this.consolidateDataByItem(this.jsonData);
      const months = Object.keys(this.jsonData);
      const excelData = this.prepareExcelData(consolidatedData,months);
      this.excelOutputData = excelData;
      this.exportToExcel(excelData, this.buildFileName());
    });
  }

  exportToExcel(data: any[][], filename: string) {
    this.isLoading = true;
    setTimeout(()=>{
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, filename);
    this.isLoading = false;
    },1000);
  }

  consolidateDataByItem(data: any): any[] {
    const consolidatedData:any = [];

    // Get all available months from the JSON data
    const months = Object.keys(data);

    // Loop through each month's data (e.g., 'JULY', 'AUGUST', etc.)
    months.forEach((month) => {
      const monthData = data[month];
      let itemMap = new Map();

      // Loop through each order within the month
      Object.values(monthData).forEach((order:any) => {
        let items = order.items;

        // Apply filtering based on selectedCategory
        let selectedCategoryName = this.selectedCategory.categoryName;
        if (selectedCategoryName !== 'ALL') {
          items = items.filter((item:any) => item.parentCategory === selectedCategoryName);
        }

        // Consolidate quantities for each item
        items.forEach((item:any) => {
          const itemId = item.item;
          if (itemMap.has(itemId)) {
            // If the item already exists, update the quantities for the current month
            let existing_item_data = itemMap.get(itemId);
            let key1 = month+" - Ordered Qty";
            let key2 = month+" - Dispatched Qty";
            let key3 = month+" - Amount"
            existing_item_data[key1] += item.orderedQuantity;
            existing_item_data[key2] += item.dispatchedQuantity;
            existing_item_data[key3] +=item.dispatchedPrice;
            itemMap.set(itemId , existing_item_data);
          } else {
            // If the item is new, add it to the map with initial quantities for all months as 0
              let key1 = month+" - Ordered Qty";
              let key2 = month+" - Dispatched Qty";
              let key3 = month+" - Amount"

              let curr_item_data:any = {};
              curr_item_data[key1] = item.orderedQuantity;
              curr_item_data[key2] = item.dispatchedQuantity;
              curr_item_data[key3] = item.dispatchedPrice;
              itemMap.set(itemId , curr_item_data);
              //console.log("INSERTED , ",curr_item_data);
          }
        });
         // Convert the map to an array
         console.log("MAP = ",itemMap);
         itemMap.forEach((value, key) => {
          consolidatedData.push({...value , 'Item Name' : key});
        });
      });
    });

    
    //make map on itemName basis
    var main_map = new Map();
    consolidatedData.forEach((itemData:any)=>{
      if(main_map.has(itemData['Item Name']))
      {
        //matlab july me tha ye item , ab september me fir se hai , to sept ka add karna hai ab
        let existing_data = main_map.get(itemData['Item Name']);
        let updated_data = {...existing_data};
        for(let key in itemData)
        {
          if(key!="Item Name")
          {
            updated_data[key] = itemData[key];
          }
        }
        main_map.set(itemData['Item Name'] , updated_data);
      }
      else
      {
        main_map.set(itemData['Item Name'] , itemData);
      }
    });
    
    let final_map_to_array:any = [];
    main_map.forEach((value, key) => {
      final_map_to_array.push(value);
    });
    return final_map_to_array;
  }

  prepareExcelData(consolidatedData: any[], months: string[]): any[] {
    // Create headers dynamically based on available months
    //const headers = ['Item Name', ...months.map((month) => `${month} - Ordered Qty`), ...months.map((month) => `${month} - Dispatched Qty`)];
    const headers = ['Item Name'];
    const excelData = [headers];

    months.forEach((month)=>{
      headers.push(month+" - Ordered Qty");
      headers.push(month + " - Dispatched Qty");
      headers.push(month +" - Amount");
    });



    console.log("HEADERS ARE = ",headers);

    console.log("ITEMS TO PREPARE EXCEL = ");
    for (const item of consolidatedData) {
      
      console.log(item);
      const row = [item['Item Name']];
      // Loop through each month to populate ordered and dispatched quantities
      months.forEach((month) => {
        row.push(item[`${month} - Ordered Qty`] || 0, item[`${month} - Dispatched Qty`] || 0 , item[`${month} - Amount`] || 0);
      });

      excelData.push(row);
    }

    return excelData;
  }
    
}
