import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroToolsComponent } from './hero-tools.component';

describe('HeroToolsComponent', () => {
  let component: HeroToolsComponent;
  let fixture: ComponentFixture<HeroToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
