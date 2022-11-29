import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchUserinfo().subscribe(

      (response)=>
      {
        this.userinfo=response;
      }
    )
  }

  userinfo:any=[]

}
