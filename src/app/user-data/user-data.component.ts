import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchUserdata().subscribe(

      (response)=>
      {
        this.data=response;
      }
    )
  }

  data:any=[]

}
