import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  public results: any[] = []

  constructor(private http: HttpClient) { }
  
  resultsApi() {
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .subscribe((resp: any) => {
      this.results = resp.drinks;
      console.log(resp.drinks)
    })
  }

  getDetail(id: string): any {
    return this.results.find(({idDrink}) => idDrink === id)
  }

}
