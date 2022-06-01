import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()

  }
  createForm(){
    this.LoginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  signIn(){
    console.log("values",this.LoginForm.value.email, 'Password',this.LoginForm.value.password)
  }
  createAccount(){

  }

}
