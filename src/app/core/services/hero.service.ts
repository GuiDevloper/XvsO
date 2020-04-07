import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getHero(heroName: string) {
    return this.http.get('https://gateway.marvel.com/v1/public/characters?name='
      + heroName + '&apikey=346b1e472cf83a3fd584aa4136e5d1d5');
  }

}
