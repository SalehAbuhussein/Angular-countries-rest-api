import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryItemsListComponent } from './country-items-list.component';

describe('CountryItemsListComponent', () => {
  let component: CountryItemsListComponent;
  let fixture: ComponentFixture<CountryItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryItemsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
