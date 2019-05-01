import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GroupByPipe } from './pipe/group-by.pipe';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';
import {
    CoolybotRegistrySharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent,
    JhiRouteSelectorComponent,
    JhiRefreshSelectorComponent
} from './';

@NgModule({
    imports: [CoolybotRegistrySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent, JhiRouteSelectorComponent, JhiRefreshSelectorComponent, GroupByPipe],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        }
    ],
    exports: [
        CoolybotRegistrySharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent,
        JhiRouteSelectorComponent,
        JhiRefreshSelectorComponent,
        GroupByPipe
    ]
})
export class CoolybotRegistrySharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
