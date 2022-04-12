import { Component, OnInit } from '@angular/core';
import { ByLetterService } from 'src/app/by-letter.service';

@Component({
  selector: 'app-byletter',
  templateUrl: './byletter.component.html',
  styleUrls: ['./byletter.component.css']
})
export class ByletterComponent implements OnInit {

  get results() {
    return this.byLetterService.results;
   } 
   
   constructor(private byLetterService: ByLetterService) { 
     this.byLetterService.resultsApi();
   }

  ngOnInit(): void {
  }

}
