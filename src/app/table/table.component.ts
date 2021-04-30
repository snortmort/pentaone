import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  heroes: Hero[] = [];
  

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  
  getHeroes(): void {
    this.heroService.getHeroes().pipe(tap(heros => console.log(heros)))
    .subscribe((heroes: Hero[]) => {
      this.heroes = heroes as Hero[];
    }
      )};
  

  // getHeroes(): void {
  //   this.heroService.getHeroes().pipe(tap(heros => console.log(heros)))
  //   .toPromise()
  //   .then(data => { return data; });
  // }



}