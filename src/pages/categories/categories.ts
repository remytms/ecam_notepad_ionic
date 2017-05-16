import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Category } from '../../app/category';
import { CategoryService } from '../../app/category.service';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage implements OnInit {
  title = 'Categories';

  categories = null;
  category_edited = -1;
  new_category: Category = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private category_service: CategoryService
  ){
  }

  getCategories(): void {
    this.category_service.getCategories().subscribe(
      // function that runs on success
      data => { this.categories = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      //() => console.log(this.categories)
      null
    );
  }

  validate(category: Category) {
    console.log(category);
    this.category_edited = -1;
  }

  newCategory(category: Category) {
    this.category_service.newCategory(category).subscribe(
      data => { this.categories.unshift(data) },
      err => console.error(err),
      () => { this.new_category = null }
    );
  }

  updateCategory(category: Category, index: number) {
    this.category_service.updateCategory(category).subscribe(
      data => { this.categories[index] = data},
      err => console.error(err),
      () => { this.category_edited = -1; }
    );
  }

  deleteCategory(category: Category, index: number) {
    this.category_service.deleteCategory(category).subscribe(
      data => { this.categories.splice(index, 1) },
      err => console.error(err),
      () => { }
    );
  }

  initNewCategory() {
    this.new_category = new Category();
  }

  deleteNewCategory() {
    this.new_category = null;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Categories');
  }

}
