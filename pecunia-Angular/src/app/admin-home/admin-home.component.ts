import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts } from '../accounts';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  accounts: Accounts[];
  constructor(private router : Router,private service: RegistrationService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  private getAccounts(){
    this.service.getAccountslist().subscribe(data => {
      this.accounts = data;
    });
  }

  deleteAccounts(id: number){
    this.service.deleteAccounts(id).subscribe( data => {
      console.log(data);
      this.getAccounts();
    })
  }

  updateAccounts(id: number){
    this.router.navigate(['updateform', id]);
  }

  accountDetails(id: number){
    this.router.navigate(['viewaccounts', id]);
  }

}
