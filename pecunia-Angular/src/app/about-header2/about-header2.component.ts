import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../accounts';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-about-header2',
  templateUrl: './about-header2.component.html',
  styleUrls: ['./about-header2.component.css']
})
export class AboutHeader2Component implements OnInit {
  accounts = new Accounts();
  msg ='';
  constructor(private service: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }
  accountsUser(){
    this.service.accountsUserFromRemote(this.accounts).subscribe(
      data =>{
      console.log("Data Recieved");
      this.router.navigate(['/registersuccess'])
      
      }, 
      error =>{
      console.log("Exception Occured");
      this.msg="Please Enter Valid EmailId or Password";
      })  
  }
}