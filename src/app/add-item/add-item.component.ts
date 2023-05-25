import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit{

  ref:DynamicDialogRef | undefined;
  categoryKey:string = "";
  fullConfig:any;

  constructor(private config:DynamicDialogConfig , private utilityService:UtilityService){}
  
  ngOnInit()
  {
    this.fullConfig = this.config;
    this.categoryKey = this.fullConfig["data"]["key"];
  }

  submit()
  {
    console.log(this.categoryKey);
  }
}
