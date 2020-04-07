import { Component, Input, EventEmitter } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockHeroComponent,
        MockGameComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'XvsO - Batalha Épica'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('XvsO - Batalha Épica');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content p').textContent).toContain('XvsO - Batalha Épica');
  });
});

@Component({
  selector: 'app-hero',
  template: ''
})
class MockHeroComponent {
}

@Component({
  selector: 'app-game',
  template: ''
})
class MockGameComponent {
  @Input() heroData = new EventEmitter<Array<Array<string>>>();
}
