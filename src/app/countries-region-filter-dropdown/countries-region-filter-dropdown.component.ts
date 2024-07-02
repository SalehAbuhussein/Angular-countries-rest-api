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

  onDropdownClick() {
    this.isMenuOpened = true;
  }

  onOutsideClick() {
    this.isMenuOpened = false;
  }

  onDropdownItemClick(selectedItem: string) {
    this.dropdownItemSelected.emit(selectedItem);
    this.placeholder = selectedItem;
    this.onOutsideClick();
  }
}
