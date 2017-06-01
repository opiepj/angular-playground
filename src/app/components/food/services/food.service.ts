import { Injectable } from '@angular/core';
import { DataFetchingService } from '@core/services/data-fetching.service';
import { Observable } from 'rxjs/Observable';
import { Food } from '../models/food';
import { StoreService } from '@core/services/store.service';

@Injectable()
export class FoodService {
  
  constructor(private dataFetchService: DataFetchingService<Food[]>, private storeService: StoreService<Food>) {
  }
  
  public getFood(): Observable<Food[]> {
    return this.dataFetchService.getData('food');
  }
  
  public updateFavoriteFood(food: Food): void {
    this.storeService.setItem(food);
  }
  
}
