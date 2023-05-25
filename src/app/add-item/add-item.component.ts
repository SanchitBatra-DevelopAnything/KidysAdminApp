import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  parentCategoryData:any;

  addItemForm: FormGroup = new FormGroup({

  });
  photoPreview: string | undefined;

  constructor(private config:DynamicDialogConfig , private utilityService:UtilityService , private formBuilder:FormBuilder){}
  
  ngOnInit()
  {
    this.fullConfig = this.config;
    this.categoryKey = this.fullConfig["data"]["key"];
    this.parentCategoryData = this.fullConfig["data"]["category"];

    this.addItemForm = this.formBuilder.group({
      itemName: ['', Validators.required],
      delhi_ncr_price: ['', Validators.required],
      out_station_price: ['', Validators.required],
      western_price: ['', Validators.required],
      super_stockist_price: ['', Validators.required],
      modern_trade_price: ['', Validators.required]
    });
  }

  submit()
  {
    console.log(this.categoryKey);
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.photoPreview = reader.result as string;
      };
    }
  }

  onSubmit() {
    if (this.addItemForm.valid) {
      // Process form data here
      console.log(this.addItemForm.value);
    } else {
      // Display validation errors or take appropriate action
    }
  }
}
