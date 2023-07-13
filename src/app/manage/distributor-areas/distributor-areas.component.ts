import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-distributor-areas',
  templateUrl: './distributor-areas.component.html',
  styleUrls: ['./distributor-areas.component.scss']
})
export class DistributorAreasComponent implements OnInit {

  isLoading:boolean = false;
  areaData:any[] = [];
  areaKeys:any[] = [];

  constructor(private apiService:ApiService , private toastr:ToastrService){}

  ngOnInit()
  {
    this.isLoading = true;
    this.getAreas();
  }

  getAreas()
  {
    this.isLoading = true;
    this.apiService.getDistributorships().subscribe((areas)=>{
      if(areas == null)
      {
        this.areaData = [];
        this.areaKeys = [];
        this.isLoading = false;
        return;
      }
      this.areaData = Object.values(areas);
      this.areaKeys = Object.keys(areas);
      this.isLoading = false;
    });
  }

  deleteArea(index:number)
  {
    this.isLoading = true;
    this.apiService.deleteDistributorship(this.areaKeys[index]).subscribe((_:any)=>{
      this.toastr.success('Shop Deleted Successfully', 'Notification!' , {
        timeOut : 4000 ,
        closeButton : true , 
        positionClass : 'toast-bottom-right'
      });
      this.getAreas();
    });
  }

}
