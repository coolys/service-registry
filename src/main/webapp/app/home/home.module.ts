import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoolybotRegistrySharedModule } from 'app/shared';

import { HOME_ROUTE, HomeComponent } from './';
import { EurekaStatusService } from './eureka.status.service';
import { JhiLoginModalComponent } from 'app/core/login/login.component';

@NgModule({
    imports: [CoolybotRegistrySharedModule, RouterModule.forRoot([HOME_ROUTE], { useHash: true })],
    declarations: [HomeComponent],
    entryComponents: [JhiLoginModalComponent],
    providers: [EurekaStatusService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoolybotRegistryHomeModule {}
