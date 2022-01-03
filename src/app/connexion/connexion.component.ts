import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})

export class ConnexionComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  loginForm = this.fb.group({email: ["",Validators.required],
  pass: ["",Validators.required]});
  constructor(private route:Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.loginForm.value);
    this.route.navigate(['dashboard']);
  }

  getPassErrorMessage(){
    if (this.loginForm.controls['pass'].hasError("required")) {
      return "you have to enter your password ..."
    }
    return "you have to enter your password";
  }

  getMailErrorMessage(){
    if (this.loginForm.controls['email'].hasError('required')) {
      return "you have to enter your email ...";
    }
    return "you have to enter your email ...";
  }
}

