import { Injectable } from '@angular/core';
import { StoreService } from '@core/services/store.service';
import { Observable } from 'rxjs/Observable';
import { Friend, Food } from '../models';

@Injectable()
export class FavoriteService {
  
  constructor(private friendStore: StoreService<Friend>, private foodStore: StoreService<Food>) {
  }
  
  public getFriend(): Observable<Friend> {
    return this.friendStore.getItem();
  }
  
  public getFood(): Observable<Food> {
    return this.foodStore.getItem();
  }
  
}
