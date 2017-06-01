import { Item } from '@core/models/item';

export interface Food extends Item {
  name: string;
  category: string;
}
