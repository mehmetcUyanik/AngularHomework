import { Component, OnInit } from '@angular/core';
import { PostDetails } from './post-details';
import { PostDetailsService } from './post-details.service';
import { Posts } from '../posts';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
postItem?: PostDetails;

  postDetailsList: PostDetails[]=[];

  constructor(private postDetailsService: PostDetailsService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
    
    const params = this.route.snapshot.params;
    const postId = parseInt(params['id']);
    this.postItem = this.postDetailsService.getPostContent(postId);
    if (!this.postItem) {
      this.router.navigateByUrl('/posts');
    }
    }

  ngOnInit(): void {
    this.postDetailsList = this.postDetailsService.getPostDetailsList();
  }

}
