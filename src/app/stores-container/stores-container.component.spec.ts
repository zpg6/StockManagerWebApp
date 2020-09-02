import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresContainerComponent } from './stores-container.component';

describe('StoresContainerComponent', () => {
  let component: StoresContainerComponent;
  let fixture: ComponentFixture<StoresContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
