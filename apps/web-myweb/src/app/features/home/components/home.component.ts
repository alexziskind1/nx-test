import { Component, Inject } from '@angular/core';

import { BaseComponent } from '@myworkspace/core';
import { ENVIRONMENT_CONFIGURATION_TOKEN } from '@myworkspace/core/environments/environment-configuration-token';
import { IEnvironmentConfiguration } from '@myworkspace/core/environments/environment-configuration-interface';

@Component({
  selector: 'myworkspace-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent extends BaseComponent {
  public envName = '';

  constructor(
    @Inject(ENVIRONMENT_CONFIGURATION_TOKEN)
    protected env: IEnvironmentConfiguration
  ) {
    super();
    this.envName = this.env.environmentName;
  }
}
