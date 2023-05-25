import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'Welcome';
  signupUser: any[] = [];
  signupObj:any = {
    username: '',
    email:'',
    password: ''
  };
  loginObj:any = {
    username : '',
    email:'',
    password: ''
  };

  ngOnInit(): void {
   //userName1 = localStorage.getItem(this.signupObj.username);
    const localdata = localStorage.getItem("signupUser");
    if(localdata != null){
    this.signupUser = JSON.parse(localdata);
   }   
  }

  signUp(){
    this.signupUser.push(this.signupObj);
    localStorage.setItem("signupUser",JSON.stringify(this.signupUser));
    this.signupObj = {
      username: '',
      email:'',
      password: ''
    };
  }
  displayName = '';
  displayEmail = '';
  signIn(){
    const userExist = this.signupUser.find(m => m.username == this.loginObj.username && m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(userExist != undefined){
        alert("User Login Successfully");
        this.displayName = this.loginObj.username;
        this.displayEmail = this.loginObj.email;
        console.log(this.loginObj.username)

    }else{
      alert("Invalid User cradential");
    
    }}}
