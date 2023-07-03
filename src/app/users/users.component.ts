import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Users } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

userList: Users[]=[];

constructor(private userService: UserService){}

ngOnInit(): void {

  this.userList = this.userService.getUserList();
}

}
