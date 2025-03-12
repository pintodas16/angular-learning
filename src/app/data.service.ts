import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string = 'assets/products/products.json';
  constructor(private http: HttpClient) {}

  getData(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
}
