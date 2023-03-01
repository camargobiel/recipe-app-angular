import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';
import { HttpClient } from '@angular/common/http';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClient] });
    service = TestBed.inject(RecipeService);
  });
});
