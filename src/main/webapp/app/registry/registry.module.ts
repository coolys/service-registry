import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoolybotRegistrySharedModule } from '../shared';
import { CommonModule } from '@angular/common';

import {
    registryState,
    ClbApplicationsComponent,
    ClbConfigComponent,
    ClbEncryptionComponent,
    ClbHistoryComponent,
    ClbReplicasComponent,
    ClbSSHComponent,
    ClbApplicationsService,
    ClbConfigService,
    ClbEncryptionService,
    ClbHistoryService,
    ClbReplicasService,
    ClbSSHService
} from './';

@NgModule({
    imports: [CoolybotRegistrySharedModule, CommonModule, RouterModule.forRoot(registryState, { useHash: true })],
    declarations: [
        ClbApplicationsComponent,
        ClbConfigComponent,
        ClbEncryptionComponent,
        ClbHistoryComponent,
        ClbReplicasComponent,
        ClbSSHComponent
    ],
    entryComponents: [],
    providers: [ClbApplicationsService, ClbConfigService, ClbEncryptionService, ClbHistoryService, ClbReplicasService, ClbSSHService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoolybotRegistryModule {}
