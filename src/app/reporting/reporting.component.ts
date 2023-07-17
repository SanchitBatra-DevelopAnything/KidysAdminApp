
import { Component } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { ApiService } from '../services/api/api.service';

import { NodeService } from '../services/treeSelect/node.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent {

    nodes!:any[];
    
    selectedNodes: any;

    isLoading = false;
    isDataSelected = false;

    noOrdersFound:boolean = false;

    orders:any = [];

    constructor(private nodeService: NodeService , private apiService: ApiService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    handle(e:any)
    {
        this.noOrdersFound = false;
        this.isLoading = true;
        let key = this.makeKeyForFetch(e['key']);
        this.orders = [];
        this.apiService.getOrdersForReports(key).subscribe((orders)=>{
          if(orders == null)
          {
            this.orders = [];
            this.isLoading = false;
            this.noOrdersFound = true;
            this.isDataSelected = true;
            return;
          }
          this.orders = this.removeNest(orders,key);
          this.isDataSelected = true;
          this.noOrdersFound = false;
          this.isLoading = false;
        });
    }

    removeNest(orders:any,key:string)
    {
      let key_array = key.split("/");
      let nesting_level = key_array.length;
      let order_copy = orders;
      //4->week level , 3-->Month level , 2-->Quarter level , 1-->year level.
      
      if(nesting_level == 1)
      {
        order_copy = Object.values(orders);
        order_copy = Object.values(order_copy[0]);
        order_copy = Object.values(order_copy[0]);
        order_copy = order_copy[0];
      }
      else if(nesting_level == 2)
      {
        order_copy = Object.values(orders);
        order_copy = Object.values(order_copy[0]);
        order_copy = order_copy[0];
      }
      else if(nesting_level == 3)
      {
        order_copy = Object.values(orders);
        order_copy = order_copy[0];
      }
      else if(nesting_level == 4)
      {
        order_copy = order_copy;
      }

     // return order_copy; //object with all orders. nesting objects..

     
     order_copy = Object.values(order_copy);
     console.log(order_copy);

     let person_removed:any = [];
     for(let i=0;i<order_copy.length;i++)
     {
       person_removed.push(...Object.values(order_copy[i]));
     }

     //abhi ek person ke orders grouped hain , par person ke naam hattgaye.

     let clubbed_orders = [];
     for(let i=0;i<person_removed.length;i++)
     {
        let current_person_orders_object = person_removed[i]; //this is an object.
        let current_person_orders = Object.values(current_person_orders_object);
        for(let j=0;j<current_person_orders.length;j++)
        {
          clubbed_orders.push(current_person_orders[j]);
        }
     }

     console.log("All clubbed orders = ",clubbed_orders);

     console.log(person_removed);

    }

    makeKeyForFetch(k:string)
    {
      console.log(k);
      let arr = k.split("-");
      let formedString = "";
      for(let i=0;i<arr.length-1;i++)
      {
        formedString+=arr[i]+"/";
      }
      formedString+=arr[arr.length-1];

      console.log("Formed = "+formedString);
      return formedString;
    }



    basicData: any;

    basicOptions: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Ordered Qty.' , 'Dispatched Qty.'],
            datasets: [
                {
                    label: 'Item Quantity',
                    data: [540, 325],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}
