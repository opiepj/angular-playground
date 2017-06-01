import { Food } from './food';
import { FoodCategory } from './food-category';

export class FoodBin {
  
  public basket: FoodCategory[];
  
  constructor(food: Food[]) {
    this.basket = [];
    this.buildBasket(food);
  }
  
  private buildBasket(food: Food[]): void {
    for (let i: number = 0; i < food.length; i++) {
      const index = this.findCategory(food[i].category);
      if (index > -1) {
        this.basket[index].items.push(food[i]);
      } else {
        this.basket.push(new FoodCategory(food[i].category, [food[i]]));
      }
    }
    
  }
  
  // @TODO use a map
  private findCategory(category: string): number {
    for (let i: number = 0; i < this.basket.length; i++) {
      if (this.basket[i].name === category) {
        return i;
      }
    }
    return -1;
  }
}

