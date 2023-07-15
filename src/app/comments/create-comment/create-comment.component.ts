import { Component } from '@angular/core';
import { CommentService } from '../comments.service';
import { Comments } from '../comments';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {

  CommentDatas: Comments[]=[];
  newPostId!: number;
  newUserId!: number;
  newComment!: string;
  isSuccess: boolean = false;


  constructor(private commentService: CommentService){

    this.CommentDatas = this.commentService.getCommentList();
  }

  handleCreateComment(){
    this.commentService.addNewComment({
      comment_id:this.CommentDatas.length +1,
      post_id:this.newPostId,
      user_id:this.newUserId,
      comment:this.newComment,
      creation_date: new Date().toISOString().slice(0,10),
      is_confirmed: true
    })

    this.newPostId=0;
    this.newUserId=0;
    this.newComment="";

    this.isSuccess = true;

setTimeout(() => {
  this.isSuccess = false;
},2000);
  }

}
