import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable } from 'rxjs';
import { User } from '../model/user';
const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type':  'application/json'
  })
 };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  response : Observable<User>;  

  constructor(private http : HttpClient) { }

  postLogin(userObj : any) : Observable<User> {
    
    this.response =  this.http.post<User>("http://localhost:8888/api/v1/login",userObj,httpOptions);
    return this.response;
  }
}
