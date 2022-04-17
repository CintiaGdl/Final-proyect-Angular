import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ByLetterService } from 'src/app/by-letter.service';
import { ByNameService } from 'src/app/by-name.service';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  card!: any;

  listIngredient: string [] = [];

  constructor(private byLetterService: ByLetterService, private byNameService: ByNameService, 
    private randomService: RandomService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      // console.log(this.activeRoute)
      // console.log(params)
      const {id} = params
      this.card = this.byNameService.getDetail(id) || this.byLetterService.getDetail(id) || this.randomService.getDetail(id)
      console.log(this.card)

      for (let i = 1; i <= 15; i++) {
        const ingredient = this.card[`strIngredient${i}`];
        this.listIngredient.push(ingredient);
      }


    })
  }

}
