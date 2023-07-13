import { Injectable } from '@angular/core';
import { Users } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: Users[]=
    [
      {
        user_id: 1,
        username: "olummis0",
        email: "wcomettoi0@google.pl",
        creation_date: "2021-02-10",
        is_active: false
      },
      {
        user_id: 2,
        username: "aisaksson1",
        email: "oburchett1@purevolume.com",
        creation_date: "2021-01-20",
        is_active: true
      },
      {
        user_id: 3,
        username: "bmargerrison2",
        email: "vmanketell2@about.com",
        creation_date: "2022-09-02",
        is_active: true
      },
      {
        user_id: 4,
        username: "atroubridge3",
        email: "jhammarberg3@ucoz.com",
        creation_date: "2022-03-21",
        is_active: false
      },
      {
        user_id: 5,
        username: "mmuckle4",
        email: "ytebbett4@state.gov",
        creation_date: "2023-02-21",
        is_active: true
      },
      {
        user_id: 6,
        username: "jhallewell5",
        email: "mjudd5@cbslocal.com",
        creation_date: "2021-04-10",
        is_active: false
      },
      {
        user_id: 7,
        username: "btullis6",
        email: "plorkings6@sphinn.com",
        creation_date: "2023-03-06",
        is_active: true
      }
    ]


    getUserList(): Users[]{
      return this.userList;
    }

    addNewUser(newUser: Users): void {
      this.userList.push(newUser);
    }

    deleteUser(id: number){
      const userIndex = this.userList.findIndex((_user: Users) => {
        return _user.user_id === Number(id);
      })
      this.userList.splice(userIndex, 1);
    }

    getUserContent(id: number):Users{
      return this.userList.find((user) => user.user_id===id)!
    }

    getUserById(id:number){
      for(let users of this.userList){
        if(users.user_id === id){
          return users;
        }
      }

      return this.userList[0];
    }

    updateUser1(user: Users, id:number){
      for(let i=0;i<this.userList.length;i++){
        if(this.userList[i].user_id === id){
          this.userList[i]=user;
        }
      }
    }
  

  constructor() { }
}
