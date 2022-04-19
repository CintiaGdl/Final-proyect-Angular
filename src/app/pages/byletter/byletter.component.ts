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

  @ViewChild('select') select!: ElementRef<HTMLOptionElement>

  options: any [] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'
  ]
  selectLetter = ''

  classCard(alcholic: string) {
    if (alcholic === 'Non alcoholic')
      alcholic = 'nonAlcoholic';
      if (alcholic === 'Optional alcohol')
      alcholic = 'optionalAlcoholic'
      if (alcholic === 'Alcoholic')
      alcholic = 'alcoholic'
    return alcholic;
   }

  get results() {
    return this.byLetterService.results;
   } 
   
   selected() {
    //  console.log(document.querySelector('select')!.value)
    //  console.log(this.select.nativeElement.value)
     this.byLetterService.resultsApi(this.select.nativeElement.value)
   }

   constructor(private byLetterService: ByLetterService, private activeRoute: ActivatedRoute) { 
     this.byLetterService.resultsApi();
   }

  ngOnInit(): void {
    // console.log(this.activeRoute) 
  }

}
