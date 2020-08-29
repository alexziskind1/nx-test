import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WeatherForecast } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  public getWeather(): Observable<WeatherForecast[]> {
    return this.http
      .get<WeatherForecast[]>(
        'http://webapplicationhttp20200828202849.azurewebsites.net/weatherforecast'
      )
      .pipe(tap((r) => console.log(r)));
  }
}
