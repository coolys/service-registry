import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CoolybotRegistryTestModule } from '../../../test.module';
import { ClbHistoryComponent, ClbHistoryService } from '../../../../../../main/webapp/app/registry';

describe('Component Tests', () => {
    describe('HistoryComponent', () => {
        let comp: ClbHistoryComponent;
        let fixture: ComponentFixture<ClbHistoryComponent>;

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [CoolybotRegistryTestModule],
                    declarations: [ClbHistoryComponent],
                    providers: [ClbHistoryService]
                })
                    .overrideTemplate(ClbHistoryComponent, '')
                    .compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(ClbHistoryComponent);
            comp = fixture.componentInstance;
            fixture.detectChanges();
        });

        it(
            'refresh data',
            fakeAsync(
                inject([ClbHistoryService], (service: ClbHistoryService) => {
                    const response = {
                        canceled: {
                            '11052017': 'instance1'
                        },
                        registered: {
                            '11022017': 'instance2'
                        }
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.refresh();
                    tick();

                    expect(service.findAll).toHaveBeenCalled();
                    expect(comp.data).toEqual(response);
                })
            )
        );

        it(
            'activate registered tab',
            fakeAsync(
                inject([ClbHistoryService], (service: ClbHistoryService) => {
                    const response = {
                        canceled: {
                            '11052017': 'instance1'
                        },
                        registered: {
                            '11022017': 'instance2'
                        }
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.ngOnInit();
                    tick();
                    comp.activate('registered');

                    expect(comp.items[0]).toEqual({ key: '11022017', value: 'instance2' });
                })
            )
        );
    });
});
