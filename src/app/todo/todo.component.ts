import { Component } from '@angular/core';
import { ApiIntegrationService } from '../api-integration.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(private api:ApiIntegrationService)
  {
    api.fetchTodos().subscribe(

      (response)=>
      {
        this.data=response;
      }
    )
  }

  data:any=[]

}
