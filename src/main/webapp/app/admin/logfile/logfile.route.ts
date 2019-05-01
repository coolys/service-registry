import { Route } from '@angular/router';

import { ClbLogfileComponent } from './logfile.component';

export const logfileRoute: Route = {
    path: 'logs',
    component: ClbLogfileComponent,
    data: {
        pageTitle: 'Logs'
    }
};
