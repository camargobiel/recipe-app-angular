import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public recipes: any = []

  constructor(private readonly recipeService: RecipeService) { }

  async ngOnInit() {
    const recipes = await this.recipeService.loadRecipes()
  }

}
