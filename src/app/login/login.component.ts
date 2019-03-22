import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesServiceService } from '../sales-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public apiResponseVariable;
  imageUrlArray = [
    "../../assets/images/offer-banner.png",
    "../../assets/images/business-expansion-copy.png",
    "../../assets/images/customer-engagement-copy.png"
  ]
  constructor(private _routes: Router, private salesService: SalesServiceService, private _http: HttpClient) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required])
    })
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  login(loginFormStatus): Observable<any>{
    if(loginFormStatus.invalid){
     return;
    }else{
      //this._http.get('');
      console.log(loginFormStatus.valid) //routerLink="/dashboard" invalid
      this._routes.navigate(['/dashboard']);
    }   
  }
}
