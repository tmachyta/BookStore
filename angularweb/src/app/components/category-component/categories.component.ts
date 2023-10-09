import { Component, OnInit } from '@angular/core';
import { CategoryDto } from '../../model/category/category-dto';
import { CategoryService } from '../../service/category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoryDto[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (categories: CategoryDto[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategoryById(id).subscribe(
      () => {
        this.loadCategories();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }
}
