import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

const routes: Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'users',component: UsersComponent},
  {path:'posts',component: PostsComponent},
  {path:'categories',component: CategoriesComponent},
  {path:'comments',component: CommentsComponent},
  {path:'post-details',component: PostDetailsComponent},
  {path:'create-user',component: CreateUserComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }

