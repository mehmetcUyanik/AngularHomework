import { Component } from '@angular/core';
import { Posts } from '../posts';
import { PostService } from '../post.service';
import { PostDetails } from '../post-details/post-details';
import { PostDetailsService } from '../post-details/post-details.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postItem?: Posts;
  PostDatas: Posts[]=[];
  PostDetails: PostDetails[]=[];

  constructor(private postService: PostService,
    private postDetailsService : PostDetailsService){

    this.PostDatas= this.postService.getPostList();
    this.PostDetails=this.postDetailsService.getPostDetailsList();
  }

  newTitle!: string;
  newContent!: string;
  newUserId!: number;
  newCategoryId!: number;

   handleCreatePost(){
   this.postService.addNewPost({
   post_id: this.PostDatas.length+1,
   user_id: this.newUserId,
   category_id: this.newCategoryId,
   title: this.newTitle,
   viewCount: 0,
   creation_date: new Date().toISOString().slice(0,10),
   is_published: true,
   content: this.newContent
})

this.postDetailsService.addNewPostDetails({
  post_id:this.PostDatas.length+1,
  content:this.newContent
})


  }

  

}
