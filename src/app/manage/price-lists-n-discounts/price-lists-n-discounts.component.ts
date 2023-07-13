import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-price-lists-n-discounts',
  templateUrl: './price-lists-n-discounts.component.html',
  styleUrls: ['./price-lists-n-discounts.component.scss']
})
export class PriceListsNDiscountsComponent implements OnInit{

  isLoading:boolean = false;
  priceListsKeys:any[] = [];
  priceListsData:any[] = [];


  constructor(private apiService:ApiService){}

  ngOnInit()
  {
    this.loadPriceLists();
  }

  loadPriceLists()
  {
    this.isLoading = true;
    this.apiService.getPriceLists().subscribe((pl:any)=>{
      if(pl == null)
      {
        this.isLoading = false;
        this.priceListsData = [];
        this.priceListsKeys = [];
        return;
      }
      this.priceListsData = Object.values(pl);
      this.priceListsKeys = Object.keys(pl);
      this.isLoading = false;
    });
  }

  editPriceList(i:any)
  {

  }

}
