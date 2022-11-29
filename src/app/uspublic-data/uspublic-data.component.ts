import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-uspublic-data',
  templateUrl: './uspublic-data.component.html',
  styleUrls: ['./uspublic-data.component.css']
})
export class USpublicDataComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchUSpublicData().subscribe(

      (response)=>
      {
        this.usData=response;
      }
    )
  }

  usData:any=[]
}
