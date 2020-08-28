import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';

@Component({
  selector: 'myworkspace-weather',
  templateUrl: 'weather.component.html',
})
export class WeatherComponent extends BaseComponent {
  constructor() {
    super();
  }
}
