import { Route } from '@angular/router';

import { JhiHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'clb-health',
    component: JhiHealthCheckComponent,
    data: {
        pageTitle: 'Health Checks'
    }
};
