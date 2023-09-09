import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit{
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }
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

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupObj = {
      zid: '',
      Name: '',
      email: '',
      password: ''
    };
  }
  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find( m => m.zid == this.loginObj.zid && m.password == this.loginObj.password);
    if(isUserExist != undefined)
    {
      alert('User Login Successfull');
    }
    else
    {
      alert('Wrong Credentials');
    }
  }
}
