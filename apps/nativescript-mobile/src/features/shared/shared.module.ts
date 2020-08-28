import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@myworkspace/nativescript';

@NgModule({
  imports: [UIModule],
  exports: [UIModule]
})
export class SharedModule {}
