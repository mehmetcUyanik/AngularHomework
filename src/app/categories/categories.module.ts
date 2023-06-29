import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./categories.component";
import { CommonModule } from "@angular/common";
import { CategoryService } from "../category.service";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        CategoryService
    ],
    exports: [
        CategoriesComponent
    ]
})

export class CategoriesModule {}