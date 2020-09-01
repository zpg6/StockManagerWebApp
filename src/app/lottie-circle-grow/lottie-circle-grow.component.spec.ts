import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieCircleGrowComponent } from './lottie-circle-grow.component';

describe('LottieCircleGrowComponent', () => {
  let component: LottieCircleGrowComponent;
  let fixture: ComponentFixture<LottieCircleGrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottieCircleGrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieCircleGrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
