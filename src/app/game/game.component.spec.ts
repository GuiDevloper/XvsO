import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.heroData = [
      [
        'gato',
        'url("http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_fantastic.jpg")'
      ],
      [
        'gato',
        'url("http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/standard_fantastic.jpg")'
      ]
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
