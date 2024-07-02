import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject, input } from '@angular/core';
import { CountriesRegionFilterDropdownComponent } from '../../countries-region-filter-dropdown/countries-region-filter-dropdown.component';
import { CountrySearchInputComponent } from '../../country-search-input/country-search-input.component';
import { CountryItemsListComponent } from '../../country-items-list/country-items-list.component';
import { CountryService } from '../../shared/services/country.service';
import { BehaviorSubject, Observable, Subject, count, debounceTime, distinctUntilChanged, startWith, switchMap, takeUntil, tap, toArray } from 'rxjs';
import { Country } from '../../shared/models/country.model';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page-countries',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CountrySearchInputComponent, CountriesRegionFilterDropdownComponent, CountryItemsListComponent],
  templateUrl: './page-countries.component.html',
  styleUrl: './page-countries.component.scss'
})
export class PageCountriesComponent implements OnInit, OnDestroy {
  @ViewChild(CountrySearchInputComponent) searchInputCmp!: CountrySearchInputComponent;
  countries: Country[] = [];
  countryService = inject(CountryService);

  regionText = '';
  searchText$ = new Subject<string>;
  destroy$ = new Subject<void>;

  ngOnInit(): void {
    this.perpareCountrySubscriptions();
  }

  /**
   * Emit searchText$ when country search input changes
   * 
   * @param {string} inputValue input value 
   */
  onInputChange(inputValue: string) {
    this.searchText$.next(inputValue)
  }

  /**
   * Select country region then fetch the related countries to that region
   * 
   * @param selectedRegion selected region from the regions dropdown
   */
  onDropdownItemSelected(selectedRegion: string) {
    this.searchInputCmp.resetInput();
    this.regionText = selectedRegion;

    this.countryService.getCountriesByRegion(selectedRegion)
    .pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => this.countryService.countries = value);
  }

  /**
   * Initialized necessary subscriptions
   * to initialize the component
   * 
   */
  perpareCountrySubscriptions() {
    this.countryService.getAllCountries().pipe(
      takeUntil(this.destroy$),
    ).subscribe(value => this.countryService.countries = value);

    this.searchText$.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchText => searchText ? this.countryService.getCountry(searchText, this.regionText) : this.countryService.getAllCountries(this.regionText))
    ).subscribe(value => this.countryService.countries = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
