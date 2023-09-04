import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  signupUsers: any[] = [];
  signupObj:any = {
    zid: '',
    Name: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    zid: '',
    password: ''
  };
}
