import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPadComponent } from './number-pad.component';

describe('NumberPadComponent', () => {
  let component: NumberPadComponent;
  let fixture: ComponentFixture<NumberPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
