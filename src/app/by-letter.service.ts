import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ByLetterService {

  public results: any[] = []

  constructor(private http: HttpClient) { }

  resultsApi(query: string = 'a') {

    query =  query.trim().toLocaleLowerCase();

    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`)
    .subscribe((resp: any) => {
      this.results = resp.drinks;
      console.log(resp.drinks)
    })
  }

  getDetail(id: string): any {
    return this.results.find(({idDrink}) => idDrink === id)
  }

}
