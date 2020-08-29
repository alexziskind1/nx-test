import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components';
import { WeatherModule } from '@myworkspace/nativescript/features/weather';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    SharedModule,
    NativeScriptRouterModule.forChild(routes),
    WeatherModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
