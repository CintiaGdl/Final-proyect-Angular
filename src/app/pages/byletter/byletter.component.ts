import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ByLetterService } from 'src/app/by-letter.service';

@Component({
  selector: 'app-byletter',
  templateUrl: './byletter.component.html',
  styleUrls: ['./byletter.component.css']
})
export class ByletterComponent implements OnInit {

  // @ViewChild('value') value!: ElementRef<HTMLOptionElement>

  get results() {
    return this.byLetterService.results;
   } 
   
   /* getValue() {
     console.log(document.querySelector('option')?.value) 
   } */

   constructor(private byLetterService: ByLetterService, private activeRoute: ActivatedRoute) { 
     this.byLetterService.resultsApi();
   }

  ngOnInit(): void {
    console.log(this.activeRoute) 
  }

}
