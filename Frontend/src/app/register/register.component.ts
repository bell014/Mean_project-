import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {

  user = {
    email:'',
  password:'' ,
  username: '',
  lastname:''
  
  }
  
constructor( private auth_s :AuthService , private router :Router){



}


  register(){  
let fd = new FormData();
fd.append('email', this.user.email);
fd.append('password',this.user.password );
fd.append('username', this.user.username) ;
fd.append('lastname' , this.user.lastname );


this.auth_s.register(this.user)
.subscribe(
  (res)=>{

this.router.navigate(['/login']);

})

}
}