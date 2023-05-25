import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  providers : [DialogService]
})
export class CategoryItemComponent implements OnInit {

  @Input()
  category : any;

  @Input()
  categoryKeyInDb:any;

  ref:DynamicDialogRef | undefined;

  constructor(private dialogService:DialogService , private utilityService:UtilityService) { }

  ngOnInit(): void {
  }

  getCategoryName()
  {
    return this.category.categoryName;
  }

  onAddItem()
  {
    this.ref = this.dialogService.open(AddItemComponent, { 
      data: {
          key:this.categoryKeyInDb
      },
      header: 'Add an item'
  });
  }

}
