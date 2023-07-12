import { Component } from '@angular/core';
import { Posts } from '../posts';
import { PostService } from '../post.service';
import { PostDetails } from '../post-details/post-details';
import { PostDetailsService } from '../post-details/post-details.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postItem?: Posts;
  PostDatas: Posts[]=[];
  PostDetails: PostDetails[]=[];
  postId?: number;

  constructor(private postService: PostService,
    private postDetailsService : PostDetailsService,
    private route: ActivatedRoute,
    private router: Router){


    this.resetForm();
    this.PostDatas= this.postService.getPostList();
    this.PostDetails=this.postDetailsService.getPostDetailsList();
  }

  newTitle!: string;
  newContent!: string;
  newUserId!: number;
  newCategoryId!: number;

  isSuccess: boolean = false;

 
  private resetForm(){
    
    this.postItem = {
      post_id:0,
      user_id:0,
      category_id:0,
      title:"",
      viewCount:0,
      creation_date:"",
      is_published:true,
      content:""
    }

    setTimeout(() => {
      this.isSuccess = false;
    },2000);
  }

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
  post_id:this.PostDatas.length,
  content:this.newContent
})

this.isSuccess = true;
this.resetForm();
  }

  

}
