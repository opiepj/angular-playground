import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// @TODO support key identity
@Injectable()
export class StoreService<Type> {
  
  private item: Subject<Type>;
  
  constructor() {
    this.item = new Subject<Type>();
  }
  
  public getItem(): Observable<Type> {
    return this.item.asObservable();
  }
  
  public setItem(item: Type): void {
    this.item.next(item);
  }
  
}
