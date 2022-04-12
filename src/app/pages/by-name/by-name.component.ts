import { Component, OnInit } from '@angular/core';
import { ByNameService } from 'src/app/by-name.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent implements OnInit {

  get results() {
    return this.byNameService.results;
   } 
   
   constructor(private byNameService: ByNameService) { 
     this.byNameService.resultsApi();
   }

  ngOnInit(): void {
  }

}
