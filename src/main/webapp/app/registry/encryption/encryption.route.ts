import { Route } from '@angular/router';
import { ClbEncryptionComponent } from './encryption.component';

export const encryptionRoute: Route = {
    path: 'encryption',
    component: ClbEncryptionComponent,
    data: {
        pageTitle: 'Encryption'
    }
};
