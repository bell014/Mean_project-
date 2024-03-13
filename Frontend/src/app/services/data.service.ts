import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { 

  }

  private url = 'http://127.0.0.1:3001/product/';
  getall(){
  
    return this.http.get(this.url + "show");
  
    }
}
