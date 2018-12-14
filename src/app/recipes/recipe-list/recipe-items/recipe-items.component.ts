import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {

  @Input() recipe:Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
   }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();

  }

}
