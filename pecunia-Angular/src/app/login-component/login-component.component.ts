import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  user = new User();
  msg ='';
    constructor(private service: RegistrationService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
      loginUser(){
        this.service.loginUserFromRemote(this.user).subscribe(
          data =>{
          console.log("Data Recieved");
          this.router.navigate(['/loginsuccess'])
          }, 
          error =>{
          console.log("Exception Occured");
          this.msg="Please Enter Valid Email Id or Password";
          } 
        )
      }
  }
  
