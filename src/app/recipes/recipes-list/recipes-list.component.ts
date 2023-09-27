import { Component } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
recipes: Recipe[] = [
  new Recipe("Rice", "the best asian rice", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcooking.nytimes.com%2Frecipes%2F1019204-basic-stovetop-rice&psig=AOvVaw3Ew7StlA_N5_PC3Xm6x5-l&ust=1695859805357000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjN-pvAyYEDFQAAAAAdAAAAABAE")
];
}
