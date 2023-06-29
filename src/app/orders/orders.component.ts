import { Component, OnInit } from '@angular/core';
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

  constructor(private apiService:ApiService)
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
      let areaDeleted = Object.values(orders);
      let allOrders = [];
      for(let i=0;i<areaDeleted.length;i++)
      {
        let areaOrder:any = areaDeleted[i];
        for(const name in areaOrder)
        {
          allOrders.push(areaOrder[name]);
        }
      }
      for(let i=0;i<allOrders.length;i++)
      {
        for(const o in allOrders[i])
        {
          this.activeOrdersKeys.push(o);
          this.activeOrders.push(allOrders[i][o]);
        }
      }
      this.isLoading = false;
    });
    
  }



}
