import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  
    isLoadion:boolean=false;
  
  errors!: boolean;
  _auth: any;
  _Router: any;
  
  constructor(private_auth:AuthService,_private_Router:Router){}
 loginForm:FormGroup=new FormGroup ({
  
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
 
 })

 loginSubmit(form:FormGroup){
  this.isLoadion=true;
 
  if (this.loginForm.valid){
    this._auth.login(form.value).subscribe({
      next:(response: any)=>{
        if(response.message == 'success'){
          localStorage.setItem('userToken',response.token)
          this._auth.saveUserData()
          this._Router.navigate('/home')
        }
        this.isLoadion=false
        },
      error:(err: any)=>{console.log(err)
      this.errors=err.error.errors.msg;
      this.isLoadion=false;
      
      
      },
    })
  }
 }

}
