import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { ButtonComponent } from './button/button.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CategoriesComponent } from './categories/categories.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDetailsComponent,
    ButtonComponent,
    UsersComponent,
    PostsComponent,
    CategoriesComponent,
    CommentsComponent,
    HomeComponent,
    CreateUserComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
