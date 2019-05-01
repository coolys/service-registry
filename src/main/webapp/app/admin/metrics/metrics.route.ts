import { Route } from '@angular/router';

import { ClbMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'clb-metrics',
    component: ClbMetricsMonitoringComponent,
    data: {
        pageTitle: 'Application Metrics'
    }
};
