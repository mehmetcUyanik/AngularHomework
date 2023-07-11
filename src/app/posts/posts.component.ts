import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Posts } from './posts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  postList: Posts[]=[];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
     const queryParams = this.route.snapshot.queryParams;
     if(queryParams['p'] !== undefined){
      this.pageIndex =parseInt( queryParams['p']);
     }
    }

ngOnInit(): void {
  this.postList = this.postService.getPostList();
  this.calculateTotalPage();
}

private calculateTotalPage() {
  let totalPage = this.postList.length / this.pageSize;
  const remainingItems = this.postList.length % this.pageSize;
  if(remainingItems > 0){
    totalPage++;
  }
  this.totalPage = totalPage;
}

handlePreviousPageButton(){
  if(this.pageIndex > 0){
    this.pageIndex--;
  }

}

handleNextPageButton() {
  if(this.pageIndex < this.totalPage -1) {
    this.pageIndex++;
  } 
}

handleContentEvent(id : number) {
  console.log(id);
  this.router.navigateByUrl(`posts/${id}`);
}

}
