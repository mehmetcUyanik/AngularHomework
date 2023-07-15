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


  categoryItem?: Categories;

  categoryList: Categories[]=[];

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router){

    const params = this.route.snapshot.params;
    const categoryId = parseInt(params['id']);
    this.categoryItem = this.categoryService.getCategoryContent(categoryId);
    if (!this.categoryItem) {
      this.router.navigateByUrl('/categories');
    }

  }


  ngOnInit(): void {
    this.categoryList = this.categoryService.getCategoryList();
  }

}
