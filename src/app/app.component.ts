import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import {HeroService} from './hero.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent extends OnInit{

  constructor(private heroService: HeroService){
    super();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  title = 'Tour of Heroes';
  selectedHero: Hero;

  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeores().then(heroes => this.heroes = heroes);
  }
}




