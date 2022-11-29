import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  constructor(private http:HttpClient) { }

  fetchPassengers=() =>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  fetchProducts=() =>
  {
    return this.http.get("https://dummyjson.com/products")
  }

  fetchQuotes=() =>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }

  fetchTodos=() =>
  {
    return this.http.get("https://dummyjson.com/todos")
  }

  fetchUserdata=() =>
  {
    return this.http.get("https://dummyjson.com/users")
  }

  fetchUserinfo=() =>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }

  fetchUSpublicData=() =>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  
}
