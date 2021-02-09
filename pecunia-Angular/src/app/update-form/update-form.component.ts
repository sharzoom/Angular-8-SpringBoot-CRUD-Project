import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Accounts } from '../accounts';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  id: number;
  account: Accounts = new Accounts();
  constructor(private service: RegistrationService,private route: ActivatedRoute, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getAccountById(this.id).subscribe(data => {
      this.account = data;
    }, error => console.log(error));
  }

  updateaccount(){
    this.service.updateAccount(this.id, this.account).subscribe( data =>{
      this.getAccountslist();
    }
    , error => console.log(error));
  }

  getAccountslist(){
    this.router.navigate(['/update']);
  }
 
} 

