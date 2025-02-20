import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  activeOrders:any = [];
  activeOrdersKeys :any= [];
  isLoading = false;

  constructor(private apiService:ApiService , private router:Router)
  {

  }

  ngOnInit() : void{
    this.isLoading = true;
    this.getActiveOrders();
  }

  getActiveOrders()
  {
    this.apiService.getActiveOrders().subscribe((orders)=>{
      if(orders == null)
      {
        this.isLoading = false;
        this.activeOrders = [];
        this.activeOrdersKeys = [];
        return;
      }
      this.activeOrders = Object.values(orders);
      this.activeOrdersKeys = Object.keys(orders);
      this.isLoading = false;
    });
    
  }

  showBill(area:string , orderedBy : string, orderKey:string)
  {
    this.router.navigate(['orderBill/'+orderKey]);
  }

  oldOrderPage()
  {
    this.router.navigate(['/processedOrders']);
  }
}
