import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-old-orders',
  templateUrl: './old-orders.component.html',
  styleUrls: ['./old-orders.component.scss']
})
export class OldOrdersComponent {

  selected : Date | null = null;
  processedOrders: any;
  processedOrderKeys : any;
  isLoading : boolean = false;
  options:any;

  constructor(private apiService : ApiService , private router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.processedOrders = [];
    this.processedOrderKeys = [];
  }

  changeDate()
  {
    this.isLoading = true;
    let date = this.selected!.getDate();
    let month = this.selected!.getMonth();
    let year = this.selected!.getFullYear();
    let fullDate = date+""+(month+1)+""+year;
      this.apiService.getProcessedDistributorViewOrders(fullDate).subscribe((orders)=>{
        if(orders == null)
        {
          this.processedOrderKeys= [];
          this.processedOrders = [];
          this.isLoading = false;
          return;
        }
        this.processedOrders = Object.values(orders);
        this.processedOrderKeys = Object.keys(orders);
        this.isLoading = false;
      });
    
    
  }

  showBill(order :any, processedOrderKey:any)
  {
    let d = new Date(this.selected!);
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let selectedDate = date+""+month+""+year;
    this.router.navigate(['/orderBill/'+order['orderKey']+"/processed?"+processedOrderKey+"/"+selectedDate]);
  }
}
