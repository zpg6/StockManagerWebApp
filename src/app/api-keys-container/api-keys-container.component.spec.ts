import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeysContainerComponent } from './api-keys-container.component';

describe('ApiKeysContainerComponent', () => {
  let component: ApiKeysContainerComponent;
  let fixture: ComponentFixture<ApiKeysContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiKeysContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeysContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
