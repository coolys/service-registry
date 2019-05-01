import { Route } from '@angular/router';
import { ClbReplicasComponent } from './replicas.component';

export const replicasRoute: Route = {
    path: 'replicas',
    component: ClbReplicasComponent,
    data: {
        pageTitle: 'Replicas'
    }
};
