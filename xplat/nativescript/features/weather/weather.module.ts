import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { WeatherModule as SharedWeatherModule } from '@myworkspace/features';
import { UIModule } from '../ui/ui.module';
import { WeatherComponent } from './components';

@NgModule({
  imports: [SharedWeatherModule, UIModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class WeatherModule {}
