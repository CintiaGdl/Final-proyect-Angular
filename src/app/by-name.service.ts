import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ByNameService {

  public results: any[] = []

  constructor(private http: HttpClient) { }

  resultsApi(query: string = 'margarita') {

    query =  query.trim().toLocaleLowerCase();

    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
    .subscribe((resp: any) => {
      this.results = resp.drinks;
      console.log(resp.drinks)
    })


  }

  getDetail(id: string): any {
    return this.results.find(({idDrink}) => idDrink === id)
  }

}
