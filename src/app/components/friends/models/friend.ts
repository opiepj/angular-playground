import { Item } from '@core/models/item';

export interface Friend extends Item {
  /**
   * First Name
   */
  first: string;
  
  /**
   * Last Name
   */
  last: string;
}
