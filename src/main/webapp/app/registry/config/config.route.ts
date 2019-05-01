import { Route } from '@angular/router';
import { ClbConfigComponent } from './config.component';

export const configRoute: Route = {
    path: 'config',
    component: ClbConfigComponent,
    data: {
        pageTitle: 'Configuration'
    }
};
