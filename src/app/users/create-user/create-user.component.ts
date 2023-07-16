import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent{

/*
Yeni kullanıcı oluşturmak için method eklendi.
*/

  newUsername!: string;
  newEmail!: string;
  UserDatas: Users[]=[];
  isSuccess: boolean = false;
  
  constructor(private userService: UserService){

    this.UserDatas = this.userService.getUserList();
    
  }

  handleCreateUser(){
    this.userService.addNewUser({
    user_id: this.UserDatas.length + 1,
    username: this.newUsername,
    email: this.newEmail,
    creation_date: new Date().toISOString().slice(0,10),
    is_active: true
})

this.newUsername="";
this.newEmail="";

this.isSuccess = true;

setTimeout(() => {
  this.isSuccess = false;
},2000);


} 
}
