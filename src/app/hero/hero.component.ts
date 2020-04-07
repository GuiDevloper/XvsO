import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HeroService } from '../core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroNames: Array<string> = ['', ''];
  heroes: Array<Array<string>> = [[], []];
  @Output() showGame = new EventEmitter<boolean>();
  @Output() heroData = new EventEmitter<Array<Array<string>>>();
  wo = null;

  constructor(public hero: HeroService) { }

  ngOnInit() {
  }

  loadHeros() {
    this.heroNames.forEach((name, i) => {
      this.hero.getHero(name).subscribe((data: any) => {
        this.wo = data;
        const res = data.data.results[0];
        if (res) {
          console.log(res);
          const thumb = res.thumbnail.path.replace('http', 'https');
          this.heroes[i] = [
            res.name,
            `url('` + thumb + '/standard_fantastic.' + res.thumbnail.extension + `')`
          ];
          if (i === 1) {
            this.heroData.emit(this.heroes);
            this.showGame.emit();
          }
        } else {
          console.log('não');
        }
      });
    });
  }

}
