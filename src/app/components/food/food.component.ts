import { Component, OnInit } from '@angular/core';
import { FoodBin } from './models/food-bin';
import { FoodService } from './services/food.service';
import { Food } from './models/food';

@Component({
  selector: 'acn-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  providers: [FoodService]
})
export class FoodComponent implements OnInit {
  
  public bin: FoodBin;
  public selectedFood: Food;
  
  constructor(private foodService: FoodService) {
  }
  
  public ngOnInit(): void {
    this.loadBin();
  }
  
  public select(food: Food): void {
    this.selectedFood = food;
  }
  
  public update(): void {
    this.foodService.updateFavoriteFood(this.selectedFood);
  }
  
  private loadBin(): void {
    this.foodService.getFood().subscribe((res: Food[]) => {
      this.bin = new FoodBin(res);
      console.log(this.bin);
    });
  }
  
}
