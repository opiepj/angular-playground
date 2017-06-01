import { Food } from './food';
import { colors } from './colors';

export class FoodCategory {
  public items: Food[];
  public color: string;
  
  constructor(public name: string, food?: Food[]) {
    if (food) {
      this.items = food;
    } else {
      this.items = [];
    }
    this.assignColor();
  }
  
  private assignColor(): void {
    this.color = colors[Math.floor(Math.random() * (colors.length))];
  }
  
}
