import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  public results: any[] = []

  constructor(private http: HttpClient) { 
    
    this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .subscribe((resp: any) => {
      this.results = resp.drinks;
      console.log(resp.drinks)
    })
  }

  resultsApi() {

    
    
  }
  
  ngOnInit(): void {

  }

}
