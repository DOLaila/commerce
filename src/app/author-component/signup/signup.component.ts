import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  private _auth: any;
  private _Route: any;
  
  errors!:string;
     isLoadion:boolean=false;
  constructor(private_auth:AuthService,private_Route:Router){}

 registerForm:FormGroup=new FormGroup ({
  name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email: new FormControl(null,[Validators.required,Validators.email]),
  password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  rePassword: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  phone: new FormControl(null,[Validators.required,Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
 })

 registerSubmit(form:FormGroup){
  this.isLoadion=true;
 
  if (this.registerForm.valid){
    this._auth.register(form.value).subscribe({
      next:(response: any)=>{
        if(response.message == 'success'){
          this._Route.navigate('/signin')
        }
        this.isLoadion=false
        },
      error:(err: any)=>{console.log(err)
      this.errors=err.error.message;
      this.isLoadion=false;
      
      
      },
    })
  }
 }

}
