import { Component, Input } from '@angular/core';
import { CountryItemComponent } from './country-item/country-item.component';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-country-items-list',
  standalone: true,
  imports: [CountryItemComponent],
  templateUrl: './country-items-list.component.html',
  styleUrl: './country-items-list.component.scss'
})
export class CountryItemsListComponent {
  @Input({ required: true }) countryItemsList: Country[] = [];
}
