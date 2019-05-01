import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { ClbEventManager } from 'ng-coolybot';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { CoolybotRegistrySharedModule, UserRouteAccessService } from './shared';
import { CoolybotRegistryAppRoutingModule } from './app-routing.module';
import { CoolybotRegistryHomeModule } from './home/home.module';
import { CoolybotRegistryAdminModule } from './admin/admin.module';
import { CoolybotRegistryModule } from './registry/registry.module';

import { PaginationConfig } from './blocks/config/uib-pagination.config';

import { ClbMainComponent, NavbarComponent, FooterComponent, ProfileService, PageRibbonComponent, ErrorComponent } from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        CoolybotRegistryAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'clb', separator: '-' }),
        CoolybotRegistrySharedModule,
        CoolybotRegistryHomeModule,
        CoolybotRegistryAdminModule,
        CoolybotRegistryModule
    ],
    declarations: [ClbMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
    providers: [
        ProfileService,
        PaginationConfig,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [ClbEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [ClbMainComponent]
})
export class CoolybotRegistryAppModule {}
