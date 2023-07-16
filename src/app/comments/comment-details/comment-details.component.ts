import { Component, OnInit } from '@angular/core';
import { Comments } from '../comments';
import { Users } from 'src/app/users/user';
import { CommentService } from '../comments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/posts/post.service';
import { Posts } from 'src/app/posts/posts';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit{

  commentItem?: Comments;
  userItem?: Users;
  postItem?: Posts;

  commentList: Comments[]=[];

  constructor(private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){

      const params = this.route.snapshot.params;
      const commentId = parseInt(params['id']);
      this.commentItem = this.commentService.getCommentContent(commentId);
      this.postItem = this.postService.getPostContent(this.commentItem.post_id);
      this.userItem = this.userService.getUserContent(this.commentItem.user_id);
      if (!this.commentItem) {
        this.router.navigateByUrl('/comments');
      }

    }


    ngOnInit(): void {

      this.commentList = this.commentService.getCommentList();
      
    }
}
