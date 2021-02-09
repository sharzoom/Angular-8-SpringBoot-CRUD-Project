import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'
import { AccountsComponent } from './accounts/accounts.component';
import { Accounts } from './accounts';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
private baseURL= "http://localhost:8080/registeraccount"
  constructor( private http: HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
  return this.http.post<any>("http://localhost:8080/login",user)
  }

  public signupUserFromRemote(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8080/registeruser",user);

  }
     public accountsUserFromRemote(accounts :Accounts):Observable<any>{
      return this.http.post<any>("http://localhost:8080/registeraccount",accounts);
     }

     getAccountslist(): Observable<Accounts[]>{
      return this.http.get<Accounts[]>(`${this.baseURL}`);
    }

    deleteAccounts(id: number): Observable<Object>{
      return this.http.delete(`${this.baseURL}/${id}`);
    }

    
  getAccountById(id: number): Observable<Accounts>{
    return this.http.get<Accounts>(`${this.baseURL}/${id}`);
  }

  updateAccount(id: number, account: Accounts): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, account);
  }

   public loginAdminFromRemote(admin : Admin):Observable<any>{
  return this.http.post<any>("http://localhost:8080/loginadmin",admin)
  }

  }