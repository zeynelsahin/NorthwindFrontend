import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category;
  currentCategory1: Category;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  setCurrentCategory(category: Category) {

    this.currentCategory = category;
  }

  setCurrentCategoryNull() {
    this.currentCategory = this.currentCategory1;
  }

  getCurrentCategoryClass(category: Category) {

    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }


  getCategories() {
    this.categoryService.getProducts().subscribe((response) => {
      this.categories = response.data;
    })
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active";
    } else {
      return "list-group-item ";
    }
  }
}
