import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataFetchingService } from '@core/services/data-fetching.service';
import { Friend } from '../models/friend';
import { StoreService } from '@core/services/store.service';

@Injectable()
export class FriendsService {
  
  constructor(private dataFetchService: DataFetchingService<Friend[]>, private storeService: StoreService<Friend>) {
  }
  
  public getFriends(): Observable<Friend[]> {
    return this.dataFetchService.getData('friends');
  }
  
  public updateFavoriteFriend(friend: Friend): void {
    this.storeService.setItem(friend);
  }
}
