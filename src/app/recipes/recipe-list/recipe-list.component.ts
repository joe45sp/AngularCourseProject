import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://s17-us2.ixquick.com/cgi-bin/serveimage?url=http:%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F250x250%2F1167319.jpg&sp=4db49da3ae8a8aaf76bc7bb87d2d9bfd')
  ];

  constructor() { }

  ngOnInit() {
  }

}
