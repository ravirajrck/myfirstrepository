import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(public userservice: UserService) {}

  userdata: any;
  ngOnInit(): void {
    this.userservice.getusers().subscribe((data) => {
      console.log(data);
      this.userdata = data;
    });
  }
}
