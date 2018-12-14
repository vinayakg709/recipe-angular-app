import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipewasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe ('recipe name','its desc','https://i.ytimg.com/vi/CpaDl02ouPI/maxresdefault.jpg'),
    new Recipe ('recipe name','its desc','https://i.ytimg.com/vi/CpaDl02ouPI/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipewasSelected.emit(recipe);

  }

}
