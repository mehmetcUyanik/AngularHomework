import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  

  constructor(private categoryService: CategoryService){

    this.CategoryDatas = this.categoryService.getCategoryList();
  }

  newCategoryName!: string;
  CategoryDatas: Categories[]=[];
  isSuccess: boolean = false;
  
  handleCreateCategory(){
    this.categoryService.addNewCategory({
    category_id: this.CategoryDatas.length +1,
    category_name: this.newCategoryName,
    creation_date: new Date().toISOString().slice(0,10),
 })

 this.newCategoryName="";

 this.isSuccess = true;

setTimeout(() => {
  this.isSuccess = false;
},2000);

}
}
