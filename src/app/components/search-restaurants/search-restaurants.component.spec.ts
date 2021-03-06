import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRestaurantsComponent } from './search-restaurants.component';

describe('SearchRestaurantsComponent', () => {
  let component: SearchRestaurantsComponent;
  let fixture: ComponentFixture<SearchRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
