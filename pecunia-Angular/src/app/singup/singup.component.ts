import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import{ NgModule} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})

export class SingupComponent implements OnInit {

  user=new User();
  msg='';

  constructor(private _service : RegistrationService) { }

  ngOnInit(): void {
  }
  signupUser(){
   this._service.signupUserFromRemote(this.user).subscribe(
     data  =>{
       console.log("response recieved");
       this.msg="Registration successful";
     },
     error =>{
      console.log("exception occured");
      this.msg=error.error;
     }
     
   )
}
}