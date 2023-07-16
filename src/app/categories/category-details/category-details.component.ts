import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{

/*
Kategori detaylarına erişmek için categoryService tanımlandı ve id'ye göre kategori detayları listelendi.
Kategorilerde bulunan gönderi sayısını bulmak için "getPostCount" methodu ile seçilen kategoride kaç tane
gönderi olduğu bulundu ve listelendi.
*/


  categoryItem?: Categories;

  categoryList: Categories[]=[];

  post_count: number;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router){

    const params = this.route.snapshot.params;
    const categoryId = parseInt(params['id']);
    this.categoryItem = this.categoryService.getCategoryContent(categoryId);
    this.post_count = this.categoryService.getPostCount(categoryId);
    if (!this.categoryItem) {
      this.router.navigateByUrl('/categories');
    }

  }


  ngOnInit(): void {
    this.categoryList = this.categoryService.getCategoryList();
  }

}
