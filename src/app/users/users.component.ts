import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Users } from './user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

userList: Users[]=[];


@Input() newUsername:string = "";
@Input() newEmail:string = "";

userFormGroup: FormGroup;

constructor(private userService: UserService,
   private Router: Router,
   fb: FormBuilder){

  this.selectedUser=this.userService.getUserById(this.id);

  this.userFormGroup = fb.group({
    'user_id':0,
    'username':"",
    'email':"",
    'creation_date':"",
    'is_active':true
  })
}

editClick: boolean=false;
id: number=0;

selectedUser: Users;


ngOnInit(): void {

  this.userList = this.userService.getUserList();
}

routeCreateUser(){
  this.Router.navigateByUrl("/create-user");
}


handleUserDeleteButton(id: number){

  let text = "Are you sure about deleting?";
  if(confirm(text) == true){
    this.userService.deleteUser(id);
  }

}

handleEditButton(id: number){
  this.editClick=!this.editClick;
  this.id=id;
  this.selectedUser=this.userService.getUserContent(this.id);
}

updateUser(fg: FormGroup, id: number){
  let User : Users = fg.value;

  this.userService.updateUser1(User,id);
}

handleCancelButton(){
  this.editClick = !this.editClick;
}


}

