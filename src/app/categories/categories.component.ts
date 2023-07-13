import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { CategoryService } from './category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categoryList: Categories[]=[];

  selectedCategory!: Categories;  


  id: number=0;
  pageIndex: number = 0;
  editClick: boolean=false;
  categoryFormGroup: FormGroup;

  constructor(private categoryService: CategoryService,
    private route:ActivatedRoute,
    private Router:Router,
    fb: FormBuilder){

      const queryParams = this.route.snapshot.queryParams;
      if(queryParams['p'] !== undefined){
       this.pageIndex =parseInt( queryParams['p']);
      }

      this.selectedCategory=this.categoryService.getCategoryById(this.id);

      this.categoryFormGroup = fb.group({
        'category_id':0,
        'category_name':"",
        'creation_date':""
      })


    }

  ngOnInit(): void {
    this.categoryList = this.categoryService.getCategoryList();
  }

  handleContentEvent(id : number) {
    console.log(id);
    this.Router.navigateByUrl(`categories/${id}`);
  }

  routeCreateCategory(){
    this.Router.navigateByUrl("/create-category");
  }

  handleCategoryDeleteButton(id: number){

    let text = "Are you sure about deleting?";
    if(confirm(text) == true){
      this.categoryService.deleteCategory(id);
    }
  
  }

  handleEditPageButton(id: number){
    this.editClick = !this.editClick;
    this.id = id;
    this.selectedCategory=this.categoryService.getCategoryContent(this.id);
  }

  handleCancelButton(){
    this.editClick = !this.editClick;
  }

  updateCategory(fg: FormGroup, id: number){

    let Category : Categories = fg.value;

    this.categoryService.updateCategory1(Category, id);
  }

}
