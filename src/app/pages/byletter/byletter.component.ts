import { query } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ByLetterService } from 'src/app/by-letter.service';

@Component({
  selector: 'app-byletter',
  templateUrl: './byletter.component.html',
  styleUrls: ['./byletter.component.css']
})
export class ByletterComponent implements OnInit {

  // @ViewChild('select') select!: ElementRef<HTMLOptionElement>
  // selectLetter: string = 'a'

  options: any [] = [
    { name: 'a', value: 'a'},
    { name: 'b', value: 'b'},
  ]
  // selectLetter = 'a'


  get results() {
    return this.byLetterService.results;
   } 
   
   selected() {
     console.log(document.querySelector('select')!.value) 
   }

   constructor(private byLetterService: ByLetterService, private activeRoute: ActivatedRoute) { 
     this.byLetterService.resultsApi();
   }

  ngOnInit(): void {
    // console.log(this.activeRoute) 
  }

}
