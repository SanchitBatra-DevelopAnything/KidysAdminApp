
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

    showCategories:boolean = false;

    noOrdersFound:boolean = false;

    orders:any = []; //list of all orders data jiske items analyze karke report banaaunga!

    totalOrderedQuantity = 0;
    totalDispatchedQuantity = 0;

    categories:any = [];
    selectedCategory:any = {categoryName : "ALL"};

    constructor(private nodeService: NodeService , private apiService: ApiService) {
      
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    handleCategoryChange(e:any)
    {
      //show items of particular category here whatever is selected!
      
      console.log(this.selectedCategory);
      this.analyzeItems(this.orders); //selectedCategory se pakadlega niche
    }

    handle(e:any)
    {
        this.noOrdersFound = false;
        this.isLoading = true;
        this.selectedCategory = {categoryName : "ALL"};
        let key = this.makeKeyForFetch(e['key']);
        this.orders = [];
        this.apiService.getOrdersForReports(key).subscribe((orders)=>{
          if(orders == null)
          {
            this.orders = [];
            this.isLoading = false;
            this.noOrdersFound = true;
            this.isDataSelected = true;
            this.showCategories = false;
            return;
          }
          this.orders = this.removeNest(orders,key);
          this.analyzeItems(this.orders);
          this.isDataSelected = true;
          this.noOrdersFound = false;
          this.isLoading = false;
          this.showCategories = true;
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
     for(let i=0;i<person_removed!.length;i++)
     {
        let current_person_orders_object = person_removed[i]; //this is an object.
        let current_person_orders = Object.values(current_person_orders_object);
        for(let j=0;j<current_person_orders!.length;j++)
        {
          clubbed_orders.push(current_person_orders[j]);
        }
     }

     console.log("All clubbed orders = ",clubbed_orders);

     // ab clubbed_orders ke items ko analyze karna hai for reports! ;)
     return clubbed_orders;

    }

    makeKeyForFetch(k:string)
    {
      console.log(k);
      let arr = k.split("-");
      let formedString = "";
      for(let i=0;i<arr!.length-1;i++)
      {
        formedString+=arr[i]+"/";
      }
      formedString+=arr[arr.length-1];

      console.log("Formed = "+formedString);
      return formedString;
    }

    analyzeItems(orderList:any)
    {
      this.totalOrderedQuantity = 0;
      this.totalDispatchedQuantity = 0;
      for(let i=0;i<orderList!.length;i++)
      {
        let current_items = orderList[i]['items'];
        
        for(let j=0;j<current_items!.length;j++)
        {
          if(this.selectedCategory.categoryName == "ALL" || current_items[j].parentCategory == this.selectedCategory.categoryName)
          {
            this.totalDispatchedQuantity += +current_items[j]['dispatchedQuantity'];
            this.totalOrderedQuantity+= +current_items[j]['orderedQuantity'];
          }
        }
      }


      console.log("Total ordered = "+this.totalOrderedQuantity);
      console.log("Total dispatched = "+this.totalDispatchedQuantity);

      this.basicData = {
        labels: ['Ordered Qty.' , 'Dispatched Qty.'],
        datasets: [
            {
                label: 'Item Quantity',
                data: [this.totalOrderedQuantity, this.totalDispatchedQuantity],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)'],
                borderWidth: 1
            }
        ]
    };
    }



    basicData: any;

    basicOptions: any;

    loadCategories()
    {
      this.isLoading = true;
      this.apiService.getCategories().subscribe((catData)=>{
        if(catData == null)
        {
          this.categories = [];
          this.selectedCategory = {};
          this.isLoading = false;
          return;
        }
        this.categories = [{categoryName : "ALL"} , ...Object.values(catData)];
        this.isLoading = false;
      });
    }

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.loadCategories();

        this.basicData = {
            labels: ['Ordered Qty.' , 'Dispatched Qty.'],
            datasets: [
                {
                    label: 'Item Quantity',
                    data: [this.totalOrderedQuantity, this.totalDispatchedQuantity],
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
                } , 
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
            },
        };
    }
}
