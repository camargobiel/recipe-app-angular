import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

type RecipesResponse = { data: { recipes: object } }

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(
    private readonly http: HttpClient
  ) { }

  public async loadRecipes() {
    const response = this.http.post(environment.apiKey, {
      query: `#graphql
        query Recipes {
          recipes {
            id
            description
            title
          }
        }
      `
    })
    const { data } = await <Promise<RecipesResponse>>lastValueFrom(response)
    return data?.recipes
  }
}
