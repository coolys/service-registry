import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoolybotRegistrySharedModule } from 'app/shared';

import {
    adminState,
    LogsComponent,
    ClbMetricsMonitoringModalComponent,
    ClbMetricsMonitoringComponent,
    ClbHealthModalComponent,
    ClbHealthCheckComponent,
    ClbConfigurationComponent,
    ClbDocsComponent,
    ClbConfigurationService,
    ClbLogfileComponent,
    ClbHealthService,
    ClbMetricsService,
    LogsService,
    ClbLogfileService
} from './';

@NgModule({
    imports: [CoolybotRegistrySharedModule, RouterModule.forChild(adminState)],
    declarations: [
        LogsComponent,
        ClbConfigurationComponent,
        ClbDocsComponent,
        ClbHealthCheckComponent,
        ClbHealthModalComponent,
        ClbMetricsMonitoringComponent,
        ClbMetricsMonitoringModalComponent,
        ClbLogfileComponent
    ],
    entryComponents: [ClbHealthModalComponent, ClbMetricsMonitoringModalComponent],
    providers: [ClbConfigurationService, ClbHealthService, ClbMetricsService, LogsService, ClbLogfileService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoolybotRegistryAdminModule {}
