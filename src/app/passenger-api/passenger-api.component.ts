import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-passenger-api',
  templateUrl: './passenger-api.component.html',
  styleUrls: ['./passenger-api.component.css']
})
export class PassengerApiComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchPassengers().subscribe(

      (response)=>
      {
        this.passenger=response;
      }
    )
  }

  passenger:any=[]

}
