import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchProducts().subscribe(

      (response)=>
      {
        this.prod=response;
      }
    )
  }

  prod:any=[]
}
