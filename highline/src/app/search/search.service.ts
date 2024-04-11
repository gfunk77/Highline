import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http: HttpClient = inject(HttpClient);
  url = 'https://api.giphy.com/v1/gifs/search';
  apiKey = '6EVcVP3DXqZEg9lFh9tuCUcdF41DLsgP';

  constructor() {}

  searchGiphy(term: string): Observable<any> {
    return this.http
      .get<any>(`${this.url}`, {
        params: {
          api_key: this.apiKey,
          q: term,
          limit: 8,
          rating: 'g',
        },
      })
      .pipe(map((res: any) => res['data']));
  }
}
