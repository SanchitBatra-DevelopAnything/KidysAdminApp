
import { Component } from '@angular/core';
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
          this.orders = orders;
          console.log("FETCHED DATA = "+orders);
          this.isDataSelected = true;
          this.noOrdersFound = false;
          this.isLoading = false;
        });
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
