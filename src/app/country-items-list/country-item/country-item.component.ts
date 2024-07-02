import { Component, Input } from '@angular/core';
import { Country } from '../../shared/models/country.model';

@Component({
  selector: 'app-country-item',
  standalone: true,
  imports: [],
  templateUrl: './country-item.component.html',
  styleUrl: './country-item.component.scss'
})
export class CountryItemComponent {
  @Input({required: true}) item!: Country;
}
