import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.userdata = localStorage.getItem('userdata');
    this.userdata = JSON.parse(this.userdata);
    console.log(this.userdata);
  }

  userdata: any;
  validationerror: any;
  submitted = false;
  emailandpass = false;

  logindata = {
    email: '',
    password: '',
  };

  submit(loginform: any, value: any) {
    if (value) {
      this.submitted = false;
      this.emailandpass = false;
      let formdata = loginform.value;
      for (let i in this.userdata) {
        console.log(this.userdata[i]);
        this.emailandpass = false;
        if (
          formdata.email == this.userdata[i].email &&
          formdata.password == this.userdata[i].password
        ) {
          console.log('login success');
          loginform.reset();
          alert('Login Success');
          this.router.navigate(['product']);
          this.emailandpass = false;
        } else {
          loginform.reset();
          this.emailandpass = true;
        }
      }
    } else {
      this.submitted = true;
    }
  }

  signup() {
    this.router.navigate(['']);
  }
  login() {
    this.router.navigate(['login']);
  }
}
