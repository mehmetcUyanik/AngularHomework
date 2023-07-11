import { Component, OnInit } from '@angular/core';
import { CommentService } from './comments.service';
import { Comments } from './comments';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  commentList: Comments[]=[];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router){
     const queryParams = this.route.snapshot.queryParams;
     if(queryParams['p'] !== undefined){
      this.pageIndex =parseInt( queryParams['p']);
     }
    }

  ngOnInit(): void {

    this.commentList = this.commentService.getCommentList();
    this.calculateTotalPage();
  }

  private calculateTotalPage() {
    let totalPage = this.commentList.length / this.pageSize;
    const remainingItems = this.commentList.length % this.pageSize;
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

}
