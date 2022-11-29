import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchQuotes().subscribe(

      (response)=>
      {
        this.data=response;
      }
    )
  }

  data:any=[]
}
