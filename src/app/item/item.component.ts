import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MenuItem } from 'primeng/api';
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


  isDeleting : boolean = false;
  isBeingUpdated : boolean = false;

  isEditMode:boolean = false;

  editItemName : string = "";
  editItemOffer : any;
  editItemShopPrice:any;
  editItemCustomerPrice:any;
  editDesignCategory:any;
  editFlavour:any;
  editItemImgUrl:string = "";
  editDistributorItemName:any;
  editDistributorPrice:any;

  selectedImageForEdit:any;
  imgEditSrc:string = "";


  constructor(private storage : AngularFireStorage,private apiService : ApiService , private utilityService : UtilityService) { }

  ngOnInit(): void {
    this.isDeleting = false;
    this.isEditMode = false;
    this.isBeingUpdated = false;
    this.items = [
      {
          icon: 'pi pi-pencil',
          command: () => {
              
          }
      },
      {
          icon: 'pi pi-trash',
          command: () => {
              
          }
      },
  ];
  }

  
  deleteItem()
  {
    this.isDeleting = true;
    this.apiService.deleteItem(this.parentCategoryKey , this.item.key).subscribe((_)=>{
      //this.utilityService.itemDeleted.next(this.item.key);
      this.isDeleting = false;
    });
  }

  editItem()
  {
    this.isEditMode = true;
    this.editItemName = this.item.itemName.toUpperCase();
    this.editItemOffer = this.item.offer
    this.editItemCustomerPrice = this.item.customerPrice;
    this.editItemShopPrice = this.item.shopPrice;
    this.editItemImgUrl = this.item.imageUrl;
    this.imgEditSrc = this.item.imageUrl;

    //CHANGE PARAMS
  }

  showPreview(event : any)
  {
    if(event.target.files && event.target.files[0])
    {
      const reader = new FileReader();
      reader.onload = (e:any)=>{
        this.imgEditSrc = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImageForEdit = event.target.files[0];
    }
    //if someone clicks cancel
    else {
      this.imgEditSrc = this.editItemImgUrl;
      this.selectedImageForEdit = null;
    }
  }

  updateItem()
  {
    this.isBeingUpdated = true;
    let updatedItem = {'itemName' : this.editItemName , 'offer' : this.editItemOffer , 'shopPrice' : this.editItemShopPrice , 
    'customerPrice' : this.editItemCustomerPrice , 'imageUrl' : this.item.imageUrl , 'cakeFlavour' : "not-valid" , 'designCategory' : "not-valid"};
    
    if(this.item.imageUrl!=this.imgEditSrc) //means image change occured.
    {
      
      var filePath = `items/${this.selectedImageForEdit.name}_${new Date().getTime()}`;
      var fileRef = this.storage.ref(filePath);
      // this.storage.upload(filePath,this.selectedImageForEdit).snapshotChanges().pipe(
      //   finalize(()=>{
      //     //RETRIEVING THE UPLOADED IMAGE URL.
      //     fileRef.getDownloadURL().subscribe((url)=>{
      //       updatedItem = {'itemName' : this.editItemName , 'offer' : this.editItemOffer , 'shopPrice' : this.editItemShopPrice , 
      //       'customerPrice' : this.editItemCustomerPrice , 'imageUrl' : url , 'cakeFlavour' : "not-valid" , 'designCategory' : "not-valid"};

      //     if(this.forDistributor)
      //     {
      //         updatedItem["distributorPrice"] = this.editDistributorPrice;
      //         updatedItem["distributorItemName"] = this.editDistributorItemName;
      //     }
            
      //       this.apiService.editItem(this.item.key , this.parentSubcategoryKey , this.parentCategoryKey , updatedItem).subscribe((_)=>{
      //         this.utilityService.itemUpdated.next(this.item.key);
      //         this.isEditMode = false;
      //         this.isBeingUpdated = false;
      //       });
      //     });
      //   })
      // ).subscribe();
    }
    else
    {
      this.apiService.editItem(this.item.key , this.parentCategoryKey , updatedItem).subscribe((_)=>{
       // this.utilityService.itemUpdated.next(this.item.key);
        this.isEditMode = false;
        this.isBeingUpdated = false;
      });
    }
  }
}
