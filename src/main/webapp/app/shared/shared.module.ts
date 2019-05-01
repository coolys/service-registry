import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie';

import {
    CoolybotRegistrySharedLibsModule,
    CoolybotRegistrySharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AuthSessionServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    LoginModalService,
    LoginOAuth2Service,
    Principal,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent,
    JhiRoutesService,
    JhiRefreshService
} from './';

@NgModule({
    imports: [CoolybotRegistrySharedLibsModule, CoolybotRegistrySharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
    providers: [
        JhiRoutesService,
        JhiRefreshService,
        AuthServerProvider,
        AuthSessionServerProvider,
        CookieService,
        LoginService,
        LoginModalService,
        LoginOAuth2Service,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [CoolybotRegistrySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoolybotRegistrySharedModule {}
