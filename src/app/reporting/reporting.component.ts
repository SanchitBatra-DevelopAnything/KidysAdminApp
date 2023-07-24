
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';


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
    const consolidatedData = [];

    // Initialize a map to store item data
    const itemMap: { [key: string]: { 'Item Name': string } & { [key: string]: number } } = {};

    // Get all available months from the JSON data
    const months = Object.keys(data);

    // Loop through each month's data (e.g., 'JULY', 'AUGUST', etc.)
    months.forEach((month) => {
      const monthData = data[month];

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
          if (itemMap[itemId]) {
            // If the item already exists, update the quantities for the current month
            itemMap[itemId][`${month} - Ordered Qty`] = (itemMap[itemId][`${month} - Ordered Qty`] || 0) + item.orderedQuantity;
            itemMap[itemId][`${month} - Dispatched Qty`] = (itemMap[itemId][`${month} - Dispatched Qty`] || 0) + item.dispatchedQuantity;
          } else {
            // If the item is new, add it to the map with initial quantities for all months as 0
            const itemData: { 'Item Name': string } & { [key: string]: number } = { 'Item Name': item.item };
            months.forEach((m) => {
              itemData[`${m} - Ordered Qty`] = 0;
              itemData[`${m} - Dispatched Qty`] = 0;
            });
            itemData[`${month} - Ordered Qty`] = item.orderedQuantity;
            itemData[`${month} - Dispatched Qty`] = item.dispatchedQuantity;
            itemMap[itemId] = itemData;
          }
        });
      });
    });

    // Convert the map to an array
    for (const itemId of Object.keys(itemMap)) {
      consolidatedData.push(itemMap[itemId]);
    }

    return consolidatedData;
  }

  prepareExcelData(consolidatedData: any[], months: string[]): any[] {
    // Create headers dynamically based on available months
    const headers = ['Item Name', ...months.map((month) => `${month} - Ordered Qty`), ...months.map((month) => `${month} - Dispatched Qty`)];
    const excelData = [headers];

    for (const item of consolidatedData) {
      const row = [item['Item Name']];
      // Loop through each month to populate ordered and dispatched quantities
      months.forEach((month) => {
        row.push(item[`${month} - Ordered Qty`] || 0, item[`${month} - Dispatched Qty`] || 0);
      });

      excelData.push(row);
    }

    return excelData;
  }
    
}
