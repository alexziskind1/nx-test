import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { WeatherService } from '@myworkspace/features/weather/services';
import { WeatherForecast } from '@myworkspace/features/weather/models/weather.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'myworkspace-weather',
  templateUrl: 'weather.component.html',
})
export class WeatherComponent extends BaseComponent {
  forecast$: Observable<WeatherForecast[]>;

  constructor(private weather: WeatherService) {
    super();
  }

  public ngOnInit(): void {
    this.forecast$ = this.weather.getWeather();
  }
}
