import { Component, OnInit } from '@angular/core';
import { CommentService } from './comments.service';
import { Comments } from './comments';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

/*
Yorum detayları "comment-details" sayfasında listelendi.
Edit kısmında tıklanan yorumun bilgilerini değiştirmek için "FormBuilder" yapısı kullanıldı.
Create Comment sayfasına yönlendirmek için "Router" yapısı kullanıldı.
Yeni yorum oluşturma işlemi "create-comment" sayfasında tanımlandı.
Delete, Edit ve Update fonksiyonları için methodlar eklendi.
Tablo verileri en fazla 10 satır gösterilecek şekilde düzenlendi ve "handlePreviousPageButton",
"handleNextPageButton" methodları ile tabloda dolaşım sağlandı.
*/


  commentList: Comments[]=[];

  id:number=0;
  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;
  editClick: boolean = false;
  commentFormGroup: FormGroup;

  constructor(private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder
    ){
     
     this.commentFormGroup = fb.group({
      'comment_id':undefined,
      'post_id':undefined,
      'user_id':undefined,
      'comment':undefined,
      'creation_date':undefined,
      "is_confirmed":undefined
     })

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

  handleContentEvent(id : number) {
    console.log(id);
    this.router.navigateByUrl(`comments/${id}`);
  }

  routeCreateComment(){
    this.router.navigateByUrl("/create-comment");
  }

  handleCommentDeleteButton(id: number){

    let text = "Are you sure about deleting?";
    if(confirm(text) == true){
      this.commentService.deleteComment(id);
    }
  }

  handleEditPageButton(id: number){
    this.editClick = !this.editClick;
    this.id = id;
  }

  handleCancelButton(){
    this.editClick = !this.editClick;
  }

  updateComment(fg: FormGroup, id: number){

    let Comment : Comments = fg.value;

    this.commentService.updateComment1(Comment, id);

    this.editClick = !this.editClick;
  }

}
