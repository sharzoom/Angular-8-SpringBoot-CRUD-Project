import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin();
  msg ='';
    constructor(private service: RegistrationService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
      loginadmin(){
        this.service.loginAdminFromRemote(this.admin).subscribe(
          data =>{
          console.log("Data Recieved");
          this.router.navigate(['/update'])
          }, 
          error =>{
          console.log("Exception Occured");
          this.msg="Please Enter Valid Email Id or Password";
          } 
        )
      }
  }