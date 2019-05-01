import { Route } from '@angular/router';

import { ClbDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: ClbDocsComponent,
    data: {
        pageTitle: 'API'
    }
};
