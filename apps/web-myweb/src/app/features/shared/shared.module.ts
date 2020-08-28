import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@myworkspace/web';

@NgModule({
  imports: [UIModule],
  exports: [UIModule],
})
export class SharedModule {}
