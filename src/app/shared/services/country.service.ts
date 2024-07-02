import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../models/country.model';
import { BehaviorSubject, Observable, Subject, catchError, count, debounceTime, distinctUntilChanged, map, merge, of, startWith, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private _http = inject(HttpClient);
  private _apiUrl = "https://restcountries.com/v3.1";
  
  countries: Country[] = [];

  getAllCountries(region?: string): Observable<Country[]> {

    if (region) {
      return this.getCountriesByRegion(region);
    }

    return this._http.get<Country[]>(`${this._apiUrl}/all`);
  }

  getCountry(name: string, region?: string): Observable<Country[]> 
  {
    if (name && region) {
      return this.getCountriesByRegion(region).pipe(map(countries => countries.filter(country => country.name.common.includes(name))));
    }

    return this._http.get<Country[]>(`${this._apiUrl}/name/${name}`).pipe(map(item => [...item]));
  }

  getCountriesByRegion(region: string): Observable<Country[]> 
  {
    return this._http.get<Country[]>(`${this._apiUrl}/region/${region}`);
  }
}
