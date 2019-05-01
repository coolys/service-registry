import { Route } from '@angular/router';

import { ClbConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'clb-configuration',
    component: ClbConfigurationComponent,
    data: {
        pageTitle: 'Cloud configuration'
    }
};
