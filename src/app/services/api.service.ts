import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../model/data';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:3000/data';

  constructor(private httpClient: HttpClient) { }

  public getData(type: string) {
    return this.httpClient.get<Data>(`${this.apiURL}?type=${type}`).pipe(
      take(1),
      map((result) => {
        return result[0];
      })
    );
  }

}
