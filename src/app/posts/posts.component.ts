import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Posts } from './posts';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

/*
Gönderi detayları "post-details" sayfasında listelendi.
Edit kısmında tıklanan yorumun bilgilerini değiştirmek için "FormBuilder" yapısı kullanıldı.
Create Post sayfasına yönlendirmek için "Router" yapısı kullanıldı.
Yeni gönderi oluşturma işlemi "create-post" sayfasında tanımlandı.
Delete, Edit ve Update fonksiyonları için methodlar eklendi.
Tablo verileri en fazla 10 satır gösterilecek şekilde düzenlendi ve "handlePreviousPageButton",
"handleNextPageButton" methodları ile tabloda dolaşım sağlandı.
*/

  postList: Posts[]=[];


  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;
  editClick: boolean=false;
  id: number=0;
  postFormGroup: FormGroup;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder){
      

     this.postFormGroup = fb.group({
      'post_id':undefined,
      'user_id':undefined,
      'category_id':undefined,
      'title':undefined,
      'viewCount':undefined,
      'creation_date':undefined,
      'is_published':undefined,
      'content':undefined
      
     })
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

routeCreatePost(){
  this.router.navigateByUrl("/create-post");
}

handleEditPageButton(id: number){

  this.editClick = !this.editClick;
  this.id = id;
  
}

handleCancelButton(){
  this.editClick = !this.editClick;
}

updatePost(fg: FormGroup, id: number){

  console.log(id);

  let Post : Posts = fg.value;

  this.postService.updatePost1(Post,id);

  this.editClick = !this.editClick;

}

handlePostDeleteButton(id: number){

  let text = "Are you sure about deleting?";
  if(confirm(text) == true){
    this.postService.deletePost(id);
  }

}

}
