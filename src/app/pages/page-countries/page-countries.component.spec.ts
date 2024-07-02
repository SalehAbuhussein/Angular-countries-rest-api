import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCountriesComponent } from './page-countries.component';

describe('PageCountriesComponent', () => {
  let component: PageCountriesComponent;
  let fixture: ComponentFixture<PageCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCountriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
