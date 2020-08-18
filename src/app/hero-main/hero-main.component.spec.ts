import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMainComponent } from './hero-main.component';

describe('HeroMainComponent', () => {
  let component: HeroMainComponent;
  let fixture: ComponentFixture<HeroMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
