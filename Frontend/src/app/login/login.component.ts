import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {
  user = {
    email:'',
  password:'' 
  
  }
  constructor(private auth_s:AuthService , private router :Router ) {}


token:any;
login(){  


this.auth_s.login(this.user)
.subscribe((res:any)=>{
let token:any= JSON.parse(res);
localStorage.setItem("Token",token.mytoken);
this.router.navigate(['/list']);
},
err=>{console.log("error", err)});}







}