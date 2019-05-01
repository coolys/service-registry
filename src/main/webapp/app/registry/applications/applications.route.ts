import { Route } from '@angular/router';

import { ClbApplicationsComponent } from './applications.component';

export const applicationsRoute: Route = {
    path: 'applications',
    component: ClbApplicationsComponent,
    data: {
        pageTitle: 'Applications'
    }
};
