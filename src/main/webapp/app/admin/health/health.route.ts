import { Route } from '@angular/router';

import { ClbHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'clb-health',
    component: ClbHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};
