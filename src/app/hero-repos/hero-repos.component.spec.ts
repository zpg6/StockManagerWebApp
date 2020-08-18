import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroReposComponent } from './hero-repos.component';

describe('HeroReposComponent', () => {
  let component: HeroReposComponent;
  let fixture: ComponentFixture<HeroReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
