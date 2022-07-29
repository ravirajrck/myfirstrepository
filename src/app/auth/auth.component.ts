import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  userdata: any[] = [];
  data: any;
  temp: any;
  checkemailid = false;
  submitted = false;
  emailalert = false;
  password_match = false;

  model = {
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    gender: '',
    password: '',
    confirmpassword: '',
  };

  formreset() {
    (this.model.firstname = ''),
      (this.model.lastname = ''),
      (this.model.mobilenumber = ''),
      (this.model.email = ''),
      (this.model.gender = ''),
      (this.model.password = '');
    this.model.confirmpassword = '';
  }

  ngOnInit(): void {}

  submit(form: any, value: any) {
    if (value) {
      console.log(value);
      this.submitted = false;

      //load  data
      this.temp = localStorage.getItem('userdata');
      this.userdata = JSON.parse(this.temp);

      if (this.userdata == null) {
        this.userdata = [];
      }

      //check email in database
      this.userdata.forEach((checkemail, index) => {
        if (this.model.email == this.userdata[index].email) {
          this.checkemailid = true;
          console.log(this.checkemailid);
          console.log('available');
        }
      });

      if (this.checkemailid == false) {
        // check password metch
        if (this.model.password == this.model.confirmpassword) {
          this.userdata.push(form.value);
          localStorage.setItem('userdata', JSON.stringify(this.userdata));
          form.reset();
          alert('Success');
          this.submitted = false;
          this.emailalert = false;
          this.password_match = false;
        } else {
          this.password_match = true;
        }
      } else {
        this.emailalert = true;
        this.checkemailid = false;
      }
      //end of check email in database
    } else {
      console.log(value);

      this.submitted = true;
    }

    /*

    if (this.model.password == this.model.confirmpassword) {
      this.temp = localStorage.getItem('userdata');
      this.userdata = JSON.parse(this.temp);

      if (this.userdata == null) {
        this.userdata = [];
      }

      this.userdata.forEach((checkemail, index) => {
        if (this.model.email == this.userdata[index].email) {
          this.checkemailid = true;
          console.log('available');
        }
      });

     
    } else {
      this.confirmpassworderror = 'Password does not match';
      console.log('Password does not match');
    }

      */
  }

  signup() {
    this.router.navigate(['']);
  }
  login() {
    this.router.navigate(['login']);
  }

  sim() {}
}
