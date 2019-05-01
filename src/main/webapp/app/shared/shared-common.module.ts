import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupByPipe } from './pipe/group-by.pipe';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
import {
    CoolybotRegistrySharedLibsModule,
    ClbAlertComponent,
    ClbAlertErrorComponent,
    ClbRouteSelectorComponent,
    ClbRefreshSelectorComponent
} from './';

@NgModule({
    imports: [CoolybotRegistrySharedLibsModule],
    declarations: [ClbAlertComponent, ClbAlertErrorComponent, ClbRouteSelectorComponent, ClbRefreshSelectorComponent, GroupByPipe],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        }
    ],
    exports: [
        CoolybotRegistrySharedLibsModule,
        ClbAlertComponent,
        ClbAlertErrorComponent,
        ClbRouteSelectorComponent,
        ClbRefreshSelectorComponent,
        GroupByPipe
    ]
})
export class CoolybotRegistrySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
