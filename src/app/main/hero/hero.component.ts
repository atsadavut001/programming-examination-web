import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heros: any = [
    { id: 1, name: 'Teemo' },
    { id: 2, name: 'Anivia' },
    { id: 3, name: 'Ornn' },
    { id: 4, name: 'Jinx' },
    { id: 5, name: 'Lux' },
    { id: 6, name: 'Nasus' },
    { id: 7, name: 'Yasuo' },
    { id: 8, name: 'Ekko' },
    { id: 9, name: 'Graves' },
    { id: 10, name: 'Lee Sin' },
  ]
  myHero: any = null;
  constructor() { }

  ngOnInit() {
  }

  selectHero(hero: any) {
    this.myHero = hero;
  }

}
