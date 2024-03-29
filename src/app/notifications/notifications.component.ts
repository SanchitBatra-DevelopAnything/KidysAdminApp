import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  isLoading:boolean = false;
  notificationData:any;
  notificationKeys:any;

  priceListOptions:any = [];



  constructor(private apiService:ApiService , private toastr : ToastrService){}

  ngOnInit()
  {
    this.loadNotifications();
    this.loadPriceLists();
  //   this.priceListOptions = [
  //     { name: 'DELHI-NCR PRICE LIST', code: 'ncr_delhi_price' },
  //     { name: 'WESTERN PRICE LIST', code: 'western_price' },
  //     { name: 'OUT STATION PRICE LIST', code: 'out_station_price' },
  //     { name: 'SUPER STOCKIST PRICE LIST', code: 'super_stockist_price' },
  //     { name: 'MODERN TRADE PRICE LIST', code: 'modern_trade_price' } //code is matched with actual form control name on item. IT MAKES distributor price selection easy.
  // ];
  this.priceListOptions = [];
  }

  loadPriceLists()
  {
    this.isLoading = true;
    this.apiService.getPriceLists().subscribe((prices:any)=>{
      if(prices == null)
      {
        this.priceListOptions = [];
        return;
      }
      this.priceListOptions = Object.values(prices).map((pl:any)=>{
        return {"name" : pl['priceList'] , "code" : pl['code']}
      });
      this.isLoading = false;
    });
  }

  loadNotifications()
  {
    this.isLoading = true;
    this.apiService.getDistributorRequests().subscribe((allNotis)=>{
      if(allNotis == null)
      {
        this.notificationData = [];
        this.notificationKeys = [];
        this.isLoading = false;
        return;
      }
      else
      {
        this.notificationData = Object.values(allNotis);
        this.notificationData.forEach((data : any)=>{
          data["attachedPriceList"] = "delhi_ncr_price"; //default to delhi , change pe change krdenge.
        });
        this.notificationKeys = Object.keys(allNotis);
        this.isLoading = false;
        return;
      }
    });
  }

  attachPriceList(e:any , index:any)
  {
    this.notificationData[index]["attachedPriceList"] = e.value.code;
  }

  onApprove(index:any)
  {
    this.isLoading = true;
    this.apiService.deleteNotification(this.notificationKeys[index]).subscribe((_)=>{
      this.apiService.makeDistributor(this.notificationData[index]).subscribe((_)=>{
        this.apiService.sendPushNotification("Your request has been approved." , "Please login." , this.notificationData[index]['deviceToken']).subscribe((_)=>{
          this.loadNotifications();
          this.toastr.success('Request Approved Successfully!', 'Notification!' , {
            timeOut : 4000 ,
            closeButton : true , 
            positionClass : 'toast-top-right'
          });
        });
      });
    });
  }

  onReject(index:any)
  {
    this.isLoading = true;
    this.apiService.deleteNotification(this.notificationKeys[index]).subscribe((_)=>{
      this.loadNotifications();
      this.toastr.success('Request Rejected Successfully!', 'Notification!' , {
        timeOut : 4000 ,
        closeButton : true , 
        positionClass : 'toast-top-right'
      });
    });
  }

}
