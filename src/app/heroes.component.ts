import { Component, OnInit } from '@angular/core';
import { Hero } from './hero'
import {HeroService} from './hero.service'
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class HeroesComponent extends OnInit{

  constructor(private heroService: HeroService, private router: Router){
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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  goToDetails(): void {
    this.router.navigate(['./detail', this.selectedHero.id]);
  }
}




