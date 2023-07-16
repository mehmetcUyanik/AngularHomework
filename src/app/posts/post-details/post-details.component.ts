import { Component, OnInit } from '@angular/core';
import { PostDetails } from './post-details';
import { PostDetailsService } from './post-details.service';
import { Posts } from '../posts';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Users } from 'src/app/users/user';
import { UserService } from 'src/app/users/user.service';
import { Categories } from 'src/app/categories/categories';
import { CategoryService } from 'src/app/categories/category.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit{
postItem?: Posts;
userItem?: Users;
categoryItem?: Categories;

  postDetailsList: PostDetails[]=[];

/*
Gönderi detaylarına erişmek için categoryService, userService, postService tanımlandı ve id'ye göre gönderi detayları listelendi.
*/

  constructor(private postDetailsService: PostDetailsService,
    private userService: UserService,
    private categoryService: CategoryService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
    
    const params = this.route.snapshot.params;
    const postId = parseInt(params['id']);
    this.postItem = this.postService.getPostContent(postId);
    this.userItem = this.userService.getUserContent(this.postItem.user_id);
    this.categoryItem =this.categoryService.getCategoryContent(this.postItem.category_id);
    if (!this.postItem) {
      this.router.navigateByUrl('/posts');
    }
    }

  ngOnInit(): void {
    this.postDetailsList = this.postDetailsService.getPostDetailsList();
  }

}
