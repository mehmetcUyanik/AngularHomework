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
editClick: boolean=false;
id: number=0;
userFormGroup: FormGroup;

constructor(private userService: UserService,
   private Router: Router,
   fb: FormBuilder){

  

  this.userFormGroup = fb.group({
    'user_id':undefined,
    'username':undefined,
    'email':undefined,
    'creation_date':undefined,
    'is_active':undefined
  })
}

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
}

updateUser(fg: FormGroup, id: number){
  let User : Users = fg.value;

  this.userService.updateUser1(User,id);
}

handleCancelButton(){
  this.editClick = !this.editClick;
}


}

