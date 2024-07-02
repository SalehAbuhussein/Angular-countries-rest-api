import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesRegionFilterDropdownComponent } from './countries-region-filter-dropdown.component';

describe('CountriesRegionFilterDropdownComponent', () => {
  let component: CountriesRegionFilterDropdownComponent;
  let fixture: ComponentFixture<CountriesRegionFilterDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesRegionFilterDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesRegionFilterDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
