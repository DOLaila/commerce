import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _http: any;

  constructor(private_http:HttpClient) { }
userData:any=null;

saveUserData(){
 let enCodedToken:any = localStorage.getItem('userToken')
 let decodeToken = jwtDecode(enCodedToken);
 
 this.userData = decodeToken;
 console.log(this.userData)
}




 register(formData:any):Observable<any>{
  return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signup',formData)
 }
 login(formData:any):Observable<any>{
  return this._http.post('https://ecommerce.routemisr.com/api/v1/auth/signin',formData)
 }

}
