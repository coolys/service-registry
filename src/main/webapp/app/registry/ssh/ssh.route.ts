import { Route } from '@angular/router';
import { ClbSSHComponent } from './ssh.component';

export const sshRoute: Route = {
    path: 'ssh',
    component: ClbSSHComponent,
    data: {
        pageTitle: 'SSH public key'
    }
};
