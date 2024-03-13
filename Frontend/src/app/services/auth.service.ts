import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) {}


   private url = 'http://127.0.0.1:3001/user/';

register (user: any ) {
return this.http.post(this.url + "signup", user, { responseType: 'text' });


}

login (user: any ) {
  return this.http.post(this.url + "login", user, { responseType: 'text' });
  
  
  }



 is_logged_in() {
    let token = localStorage.getItem('Token');
    if(token!=undefined){
      return true;
    } else{
      return false;
    }
  }

}