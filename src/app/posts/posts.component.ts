import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Posts } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  postList: Posts[]=[];

  constructor(private postService: PostService){}

ngOnInit(): void {
  this.postList = this.postService.getPostList();
}

}
