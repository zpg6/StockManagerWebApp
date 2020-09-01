import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageHowToTextComponent } from './search-page-how-to-text.component';

describe('SearchPageHowToTextComponent', () => {
  let component: SearchPageHowToTextComponent;
  let fixture: ComponentFixture<SearchPageHowToTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageHowToTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageHowToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
