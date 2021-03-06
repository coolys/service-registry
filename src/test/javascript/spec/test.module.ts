import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModule, ElementRef, Renderer } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { ClbRefreshService } from '../../../main/webapp/app/shared/refresh/refresh.service';
import { LoginOAuth2Service } from '../../../main/webapp/app/shared/oauth2/login-oauth2.service';
import { AuthSessionServerProvider } from '../../../main/webapp/app/core/auth/auth-session.service';
import { ProfileService } from '../../../main/webapp/app/layouts/profiles/profile.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClbDataUtils, ClbDateUtils, ClbEventManager, ClbAlertService, ClbParseLinks } from 'ng-coolybot';

import { Principal, AccountService, LoginModalService } from '../../../main/webapp/app/shared';
import { MockPrincipal } from './helpers/mock-principal.service';
import { MockAccountService } from './helpers/mock-account.service';
import { MockActivatedRoute, MockRouter } from './helpers/mock-route.service';
import { MockActiveModal } from './helpers/mock-active-modal.service';
import { MockEventManager } from './helpers/mock-event-manager.service';

@NgModule({
    providers: [
        DatePipe,
        ClbDataUtils,
        ClbDateUtils,
        ClbParseLinks,
        SessionStorageService,
        ClbRefreshService,
        LoginOAuth2Service,
        AuthSessionServerProvider,
        ProfileService,
        {
            provide: ClbEventManager,
            useClass: MockEventManager
        },
        {
            provide: NgbActiveModal,
            useClass: MockActiveModal
        },
        {
            provide: ActivatedRoute,
            useValue: new MockActivatedRoute({ id: 123 })
        },
        {
            provide: Router,
            useClass: MockRouter
        },
        {
            provide: Principal,
            useClass: MockPrincipal
        },
        {
            provide: AccountService,
            useClass: MockAccountService
        },
        {
            provide: LoginModalService,
            useValue: null
        },
        {
            provide: ElementRef,
            useValue: null
        },
        {
            provide: Renderer,
            useValue: null
        },
        {
            provide: ClbAlertService,
            useValue: null
        },
        {
            provide: NgbModal,
            useValue: null
        }
    ],
    imports: [HttpClientTestingModule]
})
export class CoolybotRegistryTestModule {}
