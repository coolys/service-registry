import { Route } from '@angular/router';
import { ClbHistoryComponent } from './history.component';

export const historyRoute: Route = {
    path: 'history',
    component: ClbHistoryComponent,
    data: {
        pageTitle: 'History'
    }
};
