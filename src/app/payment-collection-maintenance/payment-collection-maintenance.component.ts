import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-payment-collection-maintenance',
  templateUrl: './payment-collection-maintenance.component.html',
  styleUrls: ['./payment-collection-maintenance.component.scss']
})
export class PaymentCollectionMaintenanceComponent implements OnInit {

    @Input()
    showButton!:boolean;

    constructor(private apiService:ApiService , private utilityService:UtilityService){}

    ngOnInit()
    {

    }

    skipMaintenance()
    {
      this.utilityService.skippedMaintenance.next(true);
    }
}
