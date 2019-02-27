import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HeroesServiceService } from '../../services/heroes-service.service';
import {Heroe} from '../../interfaces/hero.interface';
import * as $x from 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap';
import {subscribeOn} from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';
import {hasOwnProperty} from 'tslint/lib/utils';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  loading: boolean;
  hero: any;
  heroes: Heroe[] = [];
  key = 'name'; // set default
  reverse = false;
  p = 1;
  constructor(private heroesService: HeroesServiceService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAllHeroes();
  }
  // sorting
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  getAllHeroes() {
    this.loading = true;
    this.heroes = [];

    this.heroesService.getAllTheHeros().subscribe(data => {
      console.log(data);
      // @ts-ignore
      let hero: Heroe = {};
      for (const key in data) {
        const value = data[key];
        console.log(value);
        console.log(key);
        hero = value;
        if (!hasOwnProperty(hero, 'bio')) {
          hero.bio = '';
        }
        hero.key$ = key;
        this.heroes.push(hero);
      }
      this.loading = false;
    },
      error1 => console.log(error1));
  }

  getHeroEditForm($key: string) {
    console.log($key);
    this.router.navigate(['/hero', $key]);
  }

  deleteHero($key: string) {
    this.heroesService.deleteHero($key).subscribe(data => {
      console.log(data);
      this.getAllHeroes();
    });
    $('#deleteModal').click();
  }

  loadHero(key$: string) {
    this.heroesService.getHero(key$).subscribe(data => {
      console.log(data);
      this.hero = data;
      this.hero.key$ = key$;
    });
  }
}
