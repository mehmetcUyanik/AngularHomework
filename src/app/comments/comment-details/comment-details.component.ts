import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments';
import { CommentService } from '../comments.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit{

  commentItem?: Comments;

  commentList: Comments[]=[];

  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router){

      const params = this.route.snapshot.params;
      const commentId = parseInt(params['id']);
      this.commentItem = this.commentService.getCommentContent(commentId);
      if (!this.commentItem) {
        this.router.navigateByUrl('/comments');
      }

    }


    ngOnInit(): void {

      this.commentList = this.commentService.getCommentList();
      
    }
}
