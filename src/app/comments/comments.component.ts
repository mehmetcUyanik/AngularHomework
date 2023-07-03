import { Component, OnInit } from '@angular/core';
import { CommentService } from './comments.service';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  commentList: Comments[]=[];

  constructor(private commentService: CommentService){}

  ngOnInit(): void {

    this.commentList = this.commentService.getCommentList();
  }

}
