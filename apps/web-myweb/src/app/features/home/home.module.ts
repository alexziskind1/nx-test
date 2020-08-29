import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components';
import { WeatherModule } from '@myworkspace/web/features/weather';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), WeatherModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
