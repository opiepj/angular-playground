import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataFetchingService<Type> {
  
  private baseUrl: string = '/assets/mocks';
  private headers: Headers;
  
  constructor(private http: Http) {
    this.setHeaders();
  }
  
  /**
   * @param item can either be 'food', or 'friends'
   * @param headers
   * @returns {Observable<R>}
   */
  public getData(item: string, headers?: Headers): Observable<Type> {
    const options: RequestOptions = new RequestOptions({headers: headers ? headers : this.headers});
    return this.http.get(`${this.baseUrl}/${item}.json`, options).map((res: Response) => {
      return res.json();
    });
  }
  
  private setHeaders(): void {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }
}
