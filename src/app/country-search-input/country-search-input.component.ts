import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  standalone: true,
  imports: [],
  templateUrl: './country-search-input.component.html',
  styleUrl: './country-search-input.component.scss'
})
export class CountrySearchInputComponent {
  @Output() inputChange = new EventEmitter<string>;
  @ViewChild('input') inputElement!: ElementRef;

  onInputChange(event: Event) {
      this.inputChange.emit((<HTMLInputElement>event.target).value);
  }

  resetInput() {
    (<HTMLInputElement>this.inputElement.nativeElement).value = "";
  }
}
