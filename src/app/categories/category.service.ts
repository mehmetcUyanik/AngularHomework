import { Injectable } from '@angular/core';
import { Categories } from './categories';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryList: Categories[]=[

  {
    category_id: 1,
    category_name: "Sport",
    creation_date: "2020-03-06",
    
  },

  {
    category_id: 2,
    category_name: "Cooking",
    creation_date: "2020-04-05",
    
  },

  {
    category_id: 3,
    category_name: "Home Design",
    creation_date: "2020-05-06",
    
  }
  ]

  constructor() { }

  getCategoryList(): Categories[]{
    return this.categoryList;
  }
  
  getCategoryContent(id: number):Categories{
    return this.categoryList.find((category) => category.category_id === id)!
  }


  addNewCategory(newCategory: Categories): void {
    this.categoryList.push(newCategory);
  }

  deleteCategory(id: number){
    const categoryIndex = this.categoryList.findIndex((_category: Categories) => {
      return _category.category_id === Number(id);
    })
    this.categoryList.splice(categoryIndex, 1);
  }

  updateCategory1(category: Categories, id: number){
    for(let i=0;i<this.categoryList.length;i++){
      if(this.categoryList[i].category_id === id){
        this.categoryList[i]=category;
      }
    }
  }
}
