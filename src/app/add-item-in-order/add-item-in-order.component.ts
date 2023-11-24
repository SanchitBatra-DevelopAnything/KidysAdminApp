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

  constructor(private config:DynamicDialogConfig){}

  ngOnInit()
  {
    this.fullConfig = this.config;
    this.orderedBy = this.fullConfig["data"]["orderedBy"];
    this.orderArea = this.fullConfig["data"]["orderArea"];
    this.orderKey = this.fullConfig["data"]["orderKey"];

    
  }



}
