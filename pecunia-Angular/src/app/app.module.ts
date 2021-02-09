import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SingupComponent } from './singup/singup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { SuccessLoginComponent } from './success-login/success-login.component';
import { LoanComponent } from './loan/loan.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { SuccessRegisterComponent } from './success-register/success-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { AccountRegistrationFormComponent } from './account-registration-form/account-registration-form.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,routingComponents,
    SingupComponent,
    AboutComponent,
    ContactComponent,
    NavComponentComponent,
    SuccessLoginComponent,
    LoanComponent,
    AccountsComponent,
    FooterComponent,
    UpdateFormComponent,
    ViewAccountsComponent,
    SuccessRegisterComponent,
    AdminLoginComponent,
    HomeComponent,
    AccountRegistrationFormComponent,
    AdminHomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}