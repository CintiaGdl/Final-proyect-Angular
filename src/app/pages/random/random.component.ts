import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  get results() {
    return this.randomService.results;
  }

  constructor(private randomService: RandomService) { 
    this.randomService.resultsApi();
  }

  
  ngOnInit(): void {

  }

}
