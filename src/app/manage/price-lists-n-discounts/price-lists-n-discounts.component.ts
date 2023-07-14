import { Component, OnInit } from '@angular/core';
import { throws } from 'assert';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-price-lists-n-discounts',
  templateUrl: './price-lists-n-discounts.component.html',
  styleUrls: ['./price-lists-n-discounts.component.scss']
})
export class PriceListsNDiscountsComponent implements OnInit{

  isLoading:boolean = false;
  isLoadingModal:boolean = false;
  priceListsKeys:any[] = [];
  priceListsData:any[] = [];

  selectedPriceList = "";
  selectedPriceListKey = "";
  editDiscountVisible = false;
  bulkQuantity:number = 0;
  discountValue:number = 0;


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

  editPriceList(index:any)
  {
    this.selectedPriceList = this.priceListsData[index]['priceList'];
    this.selectedPriceListKey = this.priceListsKeys[index];
    this.bulkQuantity = this.priceListsData[index]['discountQuantity'];
    this.discountValue = this.priceListsData[index]['discount'];
    this.editDiscountVisible = true;
  }

  saveNewQuantityAndDiscount()
  {
    this.isLoadingModal = true;
    let params = {'discountQuantity' : this.bulkQuantity , 'discount' : this.discountValue};
    this.apiService.updatePriceList(this.selectedPriceListKey , params).subscribe((_)=>{
      this.isLoadingModal = false;
      this.editDiscountVisible = false;
      this.loadPriceLists();
    }); 
  }

}
