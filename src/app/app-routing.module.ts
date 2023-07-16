import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { CreateCommentComponent } from './comments/create-comment/create-comment.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';

const routes: Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'users',component: UsersComponent},
  {path:'posts',component: PostsComponent},
  {path:'posts/:id',component: PostDetailsComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'categories/:id',component: CategoryDetailsComponent},
  {path:'comments',component: CommentsComponent},
  {path:'post-details',component: PostDetailsComponent},
  {path:'create-user',component: CreateUserComponent},
  {path:'create-post',component: CreatePostComponent},
  {path:'create-category',component: CreateCategoryComponent},
  {path:'create-comment', component: CreateCommentComponent},
  {path:'comment-details', component: CommentDetailsComponent},
  {path:'comments/:id',component: CommentDetailsComponent}

]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }

