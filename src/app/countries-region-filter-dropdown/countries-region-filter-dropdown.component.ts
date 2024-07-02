import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ClickOutsideDirective } from '../shared/directives/click-outside.directive';
import { CountryService } from '../shared/services/country.service';

@Component({
  selector: 'app-countries-region-filter-dropdown',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ClickOutsideDirective],
  templateUrl: './countries-region-filter-dropdown.component.html',
  styleUrl: './countries-region-filter-dropdown.component.scss'
})
export class CountriesRegionFilterDropdownComponent {
  @Output() dropdownItemSelected = new EventEmitter<string>;
  regionsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  isMenuOpened = false;
  placeholder = 'Filter by Region';

  countryService = inject(CountryService);

  /**
   * Open country regions dropdown
   * 
   */
  onDropdownClick() {
    this.isMenuOpened = true;
  }

  /**
   * Close country region dropdown
   * when clicking outside it
   * 
   */
  onOutsideClick() {
    this.isMenuOpened = false;
  }

  /**
   *
   * Select region from the region dropdown
   * then close the region dropdown
   *  
   * @param selectedRegion selected region from the regions dropdown 
   */
  onDropdownItemClick(selectedRegion: string) {
    this.dropdownItemSelected.emit(selectedRegion);
    this.placeholder = selectedRegion;
    this.onOutsideClick();
  }
}
