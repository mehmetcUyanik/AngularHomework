import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Users } from './user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

userList: Users[]=[];

@Input() newUsername:string = "";
@Input() newEmail:string = "";

constructor(private userService: UserService, private Router: Router){}

ngOnInit(): void {

  this.userList = this.userService.getUserList();
}

routeCreateUser(){
  this.Router.navigateByUrl("/create-user");
}


}

