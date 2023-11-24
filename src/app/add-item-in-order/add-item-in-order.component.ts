import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-add-item-in-order',
  templateUrl: './add-item-in-order.component.html',
  styleUrls: ['./add-item-in-order.component.scss']
})
export class AddItemInOrderComponent implements OnInit {

  ref:DynamicDialogRef | undefined;
  orderedBy:any;
  orderKey:any;
  orderArea:any;
  fullConfig:any;

  categoriesOptions:any;
  itemOptions:any;

  quantity:number=1;
  selectedCategory:any;
  selectedItem:any;
  isLoading:boolean = false;

  constructor(private config:DynamicDialogConfig , private apiService:ApiService){}

  ngOnInit()
  {
    this.fullConfig = this.config;
    this.orderedBy = this.fullConfig["data"]["orderedBy"];
    this.orderArea = this.fullConfig["data"]["orderArea"];
    this.orderKey = this.fullConfig["data"]["orderKey"];
    this.getCategories();
  }

  getCategories()
  {
    this.categoriesOptions = [];
    this.apiService.getCategories().subscribe((cats:any)=>{
      if(cats == null)
      {
        return;
      }
      let cat_keys = Object.keys(cats);
      let cat_values:any = Object.values(cats);
      for(let i=0;i<cat_values.length;i++)
      {
        cat_values[i]["key"] =  cat_keys[i];
      }
      this.categoriesOptions = [{"key" : "dummy"} , ...cat_values];
    });
  }

  selectCategory(e:any)
  {
    this.selectedCategory = {};
    this.selectedCategory=e.value;
    this.itemOptions = [];
    this.apiService.getItems(e.value.key).subscribe((items:any)=>{
      if(items!=null)
      {
        this.itemOptions = [{"dummy" : true},...Object.values(items)];
      }
    });
  }

  selectItem(e:any)
  {
    this.selectedItem = {};
    this.selectedItem = e.value;
  }

  addItem()
  {
    this.isLoading = true;
    setTimeout(()=>{
      this.isLoading = false;
    },3000);
  }
  
}
