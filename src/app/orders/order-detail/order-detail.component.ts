import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  
  
  
  

  showPrices:boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  constructor(private route : ActivatedRoute , private router : Router,private apiService : ApiService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.orderKey = this.route.snapshot.params['orderKey'];
    this.orderedBy = this.route.snapshot.params['orderedBy'];
    this.orderArea = this.route.snapshot.params['orderArea'];
    this.displayedColumns = ['Sno' , 'OrderedQuantity' , 'Item' , 'DispatchedQuantity' , 'Price'];
    this.getOrderItems();
  }

  goBackToOrders()
  {
    this.router.navigate(['/dailyReport']);
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
      this.orderDate = this.orderData['orderDate'];
      this.formBillData();
      this.isLoading = false;
    });
  }

  formBillData()
  {
    let items = this.orderData['items'];
    this.billData = [];
    for(let i=0;i<items.length;i++)
    {
      let item = items[i].item;
      let data = {"Sno" : i+1 , "OrderedQuantity" : items[i].quantity ,"Item" : item ,"DispatchedQuantity" : items[i].quantity , "Price" : items[i].price};
      this.billData.push(data);

    }
    this.dataSource = new MatTableDataSource<BillElement>(this.billData);
    this.setPaginator();
  }

  setPaginator()
  {
    this.dataSource.paginator = this.paginator;
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

}

export interface BillElement {
  'Item': string;
  'DispatchedQuantity' : number;
  'Sno': number;
  'OrderedQuantity': number;
  'Price': string;
}
