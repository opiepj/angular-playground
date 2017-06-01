import { Component, OnInit } from '@angular/core';
import { FavoriteService } from './services/favorite.service';
import { Observable } from 'rxjs/Observable';
import { Friend, Food } from './models';

@Component({
  selector: 'acn-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
  providers: [FavoriteService]
})
export class FavoriteComponent implements OnInit {
  
  public favFriend: string;
  public favFood: string;
  
  constructor(private favoriteService: FavoriteService) {
  }
  
  public ngOnInit(): void {
    this.listen();
  }
  
  private listen(): void {
    this.favoriteService.getFriend().subscribe((res: Friend) => {
      if (res.first && res.last) {
        this.favFriend = `${res.first} ${res.last}`;
      }
    });
    this.favoriteService.getFood().subscribe((res: Food) => {
      if (res.name) {
        this.favFood = res.name;
      }
    });
  }
  
}
