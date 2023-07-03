import { Component, OnInit } from '@angular/core';
import { Categories } from './categories';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categoryList: Categories[]=[];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.categoryList = this.categoryService.getCategoryList();
  }

}
