import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {


  orderKey : string = "";
  orderDate:string = "";
  isLoading : boolean = false;
  orderData : any = {};
  billData : BillElement[] = [];
  
  orderedBy : string = "";
  orderArea:string = "";

  displayedColumns : string[] = [];
  dataSource:any;

  changeDispatchVisible:boolean =false;
  changeDispatchItemName:string = "";
  changeDispatchItemOrderedQuantity:number = 0;
  changeDispatchItemDispatchedQuantity:number = 0;
  changeDispatchItemSerialNumber:number = -1;

  activeDiscounts:any = {}; //this will store the basic info of discount from price list
  discount:number = 0; //this will store the calculated discount on this order.

  subTotal:number = 0;
  
  
  
  

  showPrices:boolean = true;
  sureRejectVisible:boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(private route : ActivatedRoute , private router : Router,private apiService : ApiService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.orderKey = this.route.snapshot.params['orderKey'];
    this.orderedBy = this.route.snapshot.params['orderedBy'];
    this.orderArea = this.route.snapshot.params['orderArea'];
    this.displayedColumns = ['Sno' , 'Item','OrderedQuantity' ,   'DispatchedQuantity' , 'Price' , 'Lot No.'];
    this.getOrderItems();
  }

  goBackToOrders()
  {
    this.router.navigate(['/dailyReport']);
  }

  deleteOrder()
  {
    this.apiService.deleteActiveOrder(this.orderArea , this.orderedBy , this.orderKey).subscribe((_)=>{
      this.sureRejectVisible = false;
      this.router.navigate(['/dailyReport']);
    });
  }

  getOrderItems()
  {
    this.isLoading = true;
    this.apiService.getOrder(this.orderArea , this.orderedBy , this.orderKey).subscribe((orderDetail:any)=>{
      if(orderDetail == null)
      {
        this.orderData = {};
        this.isLoading = false;
        this.billData = [];
        return;
      }
      this.orderData = orderDetail;
      this.orderData['totalDispatchPrice'] = this.orderData['totalPrice'];
      this.orderDate = this.orderData['orderDate'];
      this.formBillData();
      this.seeDiscountInformation();
    });
  }

  seeDiscountInformation()
  {
    this.apiService.getPriceLists().subscribe((data:any)=>{
      for(let i=0;i<Object.values(data).length;i++)
      {
        let data_array = Object.values(data);
        let currentPriceList:any = data_array[i];
        let code = currentPriceList['code'];
        console.log("CODE = ",this.orderData);
        if(code.trim() == this.orderData['priceList'].trim())
        {
          this.activeDiscounts = currentPriceList;
          break;
        }
      }
      console.log("active discounts : ",this.activeDiscounts);
      this.calculateDiscountAndSubTotal();
      this.isLoading = false;

    });
  }

  calculateDiscountAndSubTotal()
  {
    this.discount = 0;
    this.subTotal = 0;
    let discount_qty = this.activeDiscounts['discountQuantity'];
    let disc = this.activeDiscounts['discount'];

    let onQuantity = 0;
    for(let i=0;i<this.billData.length;i++)
    {
      onQuantity += this.billData[i]['dispatchedQuantity']; 
    }

    let multiple = Math.floor(onQuantity/discount_qty);
    this.discount = disc*multiple;

    let total = 0;
    for(let i=0;i<this.billData.length;i++)
    {
      total = total + this.billData[i]['dispatchedPrice'];
    }

    this.subTotal = total - this.discount;
    this.orderData['discount'] = this.discount;
    this.orderData['subTotal'] = this.subTotal;
    this.orderData['totalDispatchPrice'] = total;
  }

  formBillData()
  {
    let items = this.orderData['items'];
    this.billData = [];
    for(let i=0;i<items.length;i++)
    {
      let item = items[i].item;
      console.log(items[i]);
      console.log("ORDER ITEM IN CATEGORY : ",items[i]['CategoryName']);
      let data = {"Sno" : i+1 , "orderedQuantity" : items[i].quantity ,"item" : item ,"dispatchedQuantity" : items[i].quantity , "dispatchedPrice" : items[i].price , "orderedPrice" : items[i].price , "priceOfOne" : items[i].price/items[i].quantity , "parentCategory" : items[i]['CategoryName']};
      this.billData.push(data);

    }
    this.dataSource = new MatTableDataSource<BillElement>(this.billData);
    this.setPaginator();
  }

  setPaginator()
  {
    this.dataSource.paginator = this.paginator;
  }

  acceptOrder()
  {
    let orderInformation = {...this.orderData};
    orderInformation['items'] = [...this.billData];
    orderInformation['acceptedBy'] = sessionStorage.getItem('loggedInUser');
    console.log("GOING TO API = ");
    console.log(orderInformation);
    orderInformation['orderKey'] = this.orderKey;
    this.isLoading = true;
    this.apiService.acceptOrderForReporting(orderInformation['area'] , orderInformation['orderedBy'] ,orderInformation).subscribe(()=>{
        this.apiService.acceptOrderForProcessed(orderInformation['area'] , orderInformation['orderedBy'] , orderInformation).subscribe(()=>{
          this.apiService.saveOrdersForSuperAdmins(orderInformation , orderInformation['orderDate']).subscribe((_)=>{
            this.apiService.deleteActiveOrder(orderInformation['area'] , orderInformation['orderedBy'] , this.orderKey).subscribe(()=>{
              this.apiService.sendPushNotification("Order accepted" , "Check My Orders section" , orderInformation['deviceToken']).subscribe((_)=>{
                this.router.navigate(['/dailyReport']);
                this.isLoading = false;
                this.toastr.success('Order Accepted!', 'Notification!' , {
                          timeOut : 4000 ,
                          closeButton : true , 
                          positionClass : 'toast-top-left'
                        });
              });  
          });
          });
        })
    });
  }
  // sendOrderToChef()
  // {
  //   this.isLoading = true;
  //   let orderInformation = {...this.orderData};
  //   let modifiedItemList = [];
  //   for(let i=0;i<orderInformation['items'].length;i++)
  //   {
  //     let item = orderInformation['items'][i];
  //     item['status'] = 'Being Prepared';
  //     item['yetToPrepare']  = item['quantity'];
  //     modifiedItemList.push(item);
  //   }
  //   orderInformation['items'] = modifiedItemList;
  //   orderInformation['orderKey'] = this.orderKey;
    
  //   console.log( " Going to Chef = ",orderInformation);
  //   this.apiService.makeOrderForChef(orderInformation , this.orderDate , this.orderedBy).subscribe((_)=>{
  //     this.apiService.deleteActiveOrder(this.orderKey , this.orderedBy).subscribe((_)=>{
  //       this.toastr.success('Order Given To Chefs Successfully', 'Notification!' , {
  //         timeOut : 4000 ,
  //         closeButton : true , 
  //         positionClass : 'toast-bottom-right'
  //       });
  //       if(this.orderedBy == "retailer")
  //       {
  //         this.router.navigate(['/dailyReport']);
  //       }
  //       else
  //       {
  //         this.router.navigate(['/dailyDistributorReport']);
  //       }
        
  //       this.isLoading = false;
  //     });
  //   });
  //   let deviceToken = "";
  //   console.log("FINDING TOKEN");
  //   let shopAddress = orderInformation['shopAddress'];
  //   if(this.orderedBy.toLowerCase() == "distributor")
  //   {
  //     shopAddress = "DISTRIBUTOR-"+shopAddress;
  //   }
  //   this.apiService.findToken(orderInformation['orderedBy'],shopAddress).subscribe((token)=>{
  //     console.log("FOUND TOKEN = "+token['token']);
  //     deviceToken = token['token'];  
  //     this.apiService.sendNotificationToParticularDevice("Check details in my orders.","REGULAR ORDER ACCEPTED!",deviceToken).subscribe((_)=>{
  //       console.log("SENT NOTIFICATION");
  //       this.toastr.success('Sent notification successfull!', 'Notification!' , {
  //         timeOut : 4000 ,
  //         closeButton : true , 
  //         positionClass : 'toast-bottom-right'
  //       });
  //     });
  //   });
    
  // }

  changeDispatchQuantityModal(element:any)
  {
    console.log(element);
    this.changeDispatchItemOrderedQuantity = element.orderedQuantity;
    this.changeDispatchItemName = element.item;
    this.changeDispatchItemDispatchedQuantity = element.dispatchedQuantity;
    this.changeDispatchItemSerialNumber = element.Sno;
     this.changeDispatchVisible = true;
  }

  changeDispatchQuantity()
  {
    console.log(this.changeDispatchItemDispatchedQuantity);
    //changeDispatchItemDispatchedQuantity update hogyi ngModel se.
    //update BillData with selectedSerialNumber , update Quantity and total for it.
    if(this.changeDispatchItemSerialNumber == -1)
    {
      return;
    }
    this.billData[this.changeDispatchItemSerialNumber-1]['dispatchedQuantity'] = this.changeDispatchItemDispatchedQuantity;
    let price:any = this.billData[this.changeDispatchItemSerialNumber-1]['dispatchedPrice'];
    let orderedQty = this.billData[this.changeDispatchItemSerialNumber-1]['orderedQuantity'];
    let newDispatchQuantity = this.billData[this.changeDispatchItemSerialNumber-1]['dispatchedQuantity'];
    let newPrice = this.billData[this.changeDispatchItemSerialNumber-1]['priceOfOne']*newDispatchQuantity;
    this.billData[this.changeDispatchItemSerialNumber-1]['dispatchedPrice'] = newPrice;
    //close the dialog.
    this.calculateDiscountAndSubTotal();
    this.changeDispatchVisible = false;
  }

  // getUpdatedTotal()
  // {
  //   let total = 0;
  //   for(let i=0;i<this.billData.length;i++)
  //   {
  //     total = total + this.billData[i]['dispatchedPrice'];
  //   }
  //   this.calculateDiscountAndSubTotal();
  // }

}

export interface BillElement {
  'item': string;
  'dispatchedQuantity' : number;
  'Sno': number;
  'orderedQuantity': number;
  'dispatchedPrice': number;
  'orderedPrice': number;
  'priceOfOne' : number;
  'parentCategory' : string,
}
