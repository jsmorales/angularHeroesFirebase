import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Heroe} from '../interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {
  URL_BASE = 'https://angularheroesfirebase.firebaseio.com/heroes';
  jsonUrl = '.json';
  constructor(private httpClient: HttpClient) {  }

  newHero(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(this.URL_BASE + this.jsonUrl, body, {headers});
  }

  updateHero(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.put(this.URL_BASE + '/' + key$ + this.jsonUrl, body, {headers});
  }

  deleteHero(key$: string) {
    // const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.delete(this.URL_BASE + '/' + key$ + this.jsonUrl, {headers});
  }

  getHero(key$: string) {
    // const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.get(this.URL_BASE + '/' + key$ + this.jsonUrl, {headers});
  }

  getAllTheHeros() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.get(this.URL_BASE  + this.jsonUrl, {headers});
  }
}
