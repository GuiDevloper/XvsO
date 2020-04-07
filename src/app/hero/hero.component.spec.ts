import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero.component';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../core';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let service: HeroService;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [HeroService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*fixture = TestBed.createComponent(new HeroComponent(HeroService));
    component = fixture.componentInstance;
    fixture.detectChanges();*/
    service = new HeroService(null);
    component = new HeroComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hero data', async(() => {
    spyOn(service, 'getHero').and.callFake(() => {
      const result = {
        'Iron Man': {
          name: 'Iron Man',
          thumbnail: {
            path: '',
            extension: 'jpg'
          }
        },
        Thor: {}
      };
      const apiData = {
        data: {
          results: [result[name]]
        }
      };
      const Obs: Observable<object> = of(apiData);
      return Obs;
    });
    component.heroNames = ['Iron Man', 'Thor'];
    component.loadHeros();
    // console.log(component.hero.getHero().toString());
    setTimeout(() => {
      console.log(component.wo);
      expect(true).toBeTruthy();
    }, 4000);
  }));

});

@Injectable({
  providedIn: 'root'
})
class MHeroService {
  constructor(private http: HttpClient) { }

  getHero(name) {
    const result = {
      'Iron Man': {
        name: 'Iron Man',
        thumbnail: {
          path: '',
          extension: 'jpg'
        }
      },
      Thor: {}
    };
    const apiData = {
      data: {
        results: [result[name]]
      }
    };
    const Obs: Observable<object> = of(apiData);
    return Obs;
  }
}
