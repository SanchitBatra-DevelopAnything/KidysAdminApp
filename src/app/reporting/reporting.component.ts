
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit{

  constructor(private apiService:ApiService){}

  jsonData:any;
  isLoading:boolean = false;
  selectedDistributor = "SANCHIT";
  selectedArea = "JODHPUR";
  selectedCategory = "ALL";
  excelOutputData:any = [];


  ngOnInit()
  {
    this.apiService.getOrdersForReports("2023" , this.selectedArea , this.selectedDistributor).subscribe((o)=>{
      this.jsonData = o;
      this.isLoading = false;
      this.doChatGPT();
    });
  }

  doChatGPT()
  {
    // Consolidate data for each item across all months
    const consolidatedData = this.consolidateDataByItem(this.jsonData);
    const months = Object.keys(this.jsonData);

    // Prepare the data in the format for exporting to Excel
    const excelData = this.prepareExcelData(consolidatedData,months);
    this.excelOutputData = excelData;


    console.log(excelData);
    // this.exportToExcel(excelData, 'consolidated_data.xlsx');
  }

  exportToExcel(data: any[][], filename: string) {
    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, filename);
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
        if (this.selectedCategory !== 'ALL') {
          items = items.filter((item:any) => item.parentCategory === this.selectedCategory);
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
