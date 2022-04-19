import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ByNameService } from 'src/app/by-name.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent implements OnInit {
  @ViewChild('txtInput') txtInput!: ElementRef<HTMLInputElement>

  get results() {
    return this.byNameService.results;
   } 
   
   search() {
     console.log(this.txtInput.nativeElement.value)

     this.byNameService.resultsApi(this.txtInput.nativeElement.value)
   }

   classCard(alcholic: string) {
    if (alcholic === 'Non alcoholic')
      alcholic = 'nonAlcoholic';
      if (alcholic === 'Optional alcohol')
      alcholic = 'optionalAlcoholic'
      if (alcholic === 'Alcoholic')
      alcholic = 'alcoholic'
    return alcholic;
   }

   constructor(private byNameService: ByNameService) { 
     this.byNameService.resultsApi();
   }

  ngOnInit(): void {
  }

}
