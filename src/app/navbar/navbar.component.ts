import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin:boolean=false;
  constructor(private_auth:AuthService){
// if(_auth.userData !== null){
//   this.isLogin=true;
// }else{
//   this.isLogin=false;
// }

  }

}
