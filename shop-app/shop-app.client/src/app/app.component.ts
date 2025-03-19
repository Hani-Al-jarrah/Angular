import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DecimalPipe, CurrencyPipe, PercentPipe } from '@angular/common';
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  providers: [DecimalPipe, CurrencyPipe, PercentPipe] // Providing pipes
})
export class AppComponent {
  numberValue: number = 1234.567;
  decimalFormatted: string | null;
  currencyFormatted: string | null;
  percentFormatted: string | null;
  currentDate: Date = new Date();
  arrayValues: number[] = [10, 20, 30, 40, 50];
  objectValue = { name: 'Hani', age: 22, country: 'Jordan' };

  constructor(
    private decimalPipe: DecimalPipe,
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe
  ) {
    this.decimalFormatted = this.decimalPipe.transform(this.numberValue, '1.2-2');
    this.currencyFormatted = this.currencyPipe.transform(this.numberValue, 'USD');
    this.percentFormatted = this.percentPipe.transform(0.25);
  }
}
