import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
recipes: Recipe[] = [
  new Recipe("Rice", "The best asian rice ever made.!", "https://hips.hearstapps.com/hmg-prod/images/fried-rice-secondary-642edb6852991.jpg?crop=1xw:1xh;center,top&resize=980:*")
];
}
