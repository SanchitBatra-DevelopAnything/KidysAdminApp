import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ConfirmationService, ConfirmEventType, MenuItem } from 'primeng/api';
import { finalize } from 'rxjs';
import { ApiService } from '../services/api/api.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{

  @Input()
  item : any; //comes with a key.

  @Input()
  parentCategoryKey:any; 

  @Input()
  parentCategoryName:any;

  items:MenuItem[] = [];

  isDeleting:boolean = false;

  dialogVisible:boolean = false;



  constructor(private storage : AngularFireStorage,private apiService : ApiService , private utilityService : UtilityService) { }

  ngOnInit(): void {
    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => {
              
          }
      },
      {
          icon: 'pi pi-trash',
          command: ($event) => {
              // this.confirmPosition('left');
              console.log("Hello");
              this.showDialog();
          }
      },
  ];
  }

  showDialog()
  {
    this.dialogVisible = true;
  }



  
  deleteItem()
  {
    this.isDeleting = true;
    this.dialogVisible = false;
    this.apiService.deleteItem(this.parentCategoryKey , this.item.key).subscribe((_)=>{
      this.utilityService.itemDeleted.next(this.item.key);
      console.log("sent the key");
      this.isDeleting = false;
    });
  }
}
