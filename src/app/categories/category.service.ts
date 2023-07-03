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
    category_id: 2,
    category_name: "Home Design",
    creation_date: "2020-05-06",
    
  }
  ]

  getCategoryList(): Categories[]{
    return this.categoryList;
  }
  constructor() { }
}
