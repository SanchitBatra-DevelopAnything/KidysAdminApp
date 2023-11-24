import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

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

  constructor(private config:DynamicDialogConfig){}

  ngOnInit()
  {
    this.fullConfig = this.config;
    this.orderedBy = this.fullConfig["data"]["orderedBy"];
    this.orderArea = this.fullConfig["data"]["orderArea"];
    this.orderKey = this.fullConfig["data"]["orderKey"];
    this.getCategories();

  }

  selectCategory(e:any)
  {

  }

  selectItem(e:any)
  {

  }
  



}
