import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../models/country.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _http = inject(HttpClient);
  private _apiUrl = "https://restcountries.com/v3.1";
  
  countries: Country[] = [];

  /**
   * Get all countries from api
   * 
   * @param {string} region region of the countries
   * @returns {Observable<Country[]>}
   */
  getAllCountries(region?: string): Observable<Country[]> {

    if (region) {
      return this.getCountriesByRegion(region);
    }

    return this._http.get<Country[]>(`${this._apiUrl}/all`);
  }

  /**
   * 
   * Get country from api
   * 
   * @param name name of the country
   * @param region region of the country 
   * @returns {Observable<Country[]>}
   */
  getCountry(name: string, region?: string): Observable<Country[]> 
  {
    if (name && region) {
      return this.getCountriesByRegion(region).pipe(map(countries => countries.filter(country => country.name.common.includes(name))));
    }

    return this._http.get<Country[]>(`${this._apiUrl}/name/${name}`).pipe(map(item => [...item]));
  }

  /**
   * Get countries filtered by region from api
   * 
   * @param region region of the countries 
   * @returns {Observable<Country[]>}
   */
  getCountriesByRegion(region: string): Observable<Country[]> 
  {
    return this._http.get<Country[]>(`${this._apiUrl}/region/${region}`);
  }
}
