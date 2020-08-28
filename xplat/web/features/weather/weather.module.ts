import { NgModule } from '@angular/core';
import { WeatherModule as SharedWeatherModule } from '@myworkspace/features';
import { UIModule } from '../ui/ui.module';
import { WeatherComponent } from './components';

@NgModule({
  imports: [SharedWeatherModule, UIModule],
  declarations: [WeatherComponent],
  exports: [WeatherComponent],
})
export class WeatherModule {}
