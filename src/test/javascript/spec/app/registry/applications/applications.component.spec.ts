import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { CoolybotRegistryTestModule } from '../../../test.module';
import { ClbApplicationsComponent, ClbApplicationsService } from '../../../../../../main/webapp/app/registry';

describe('Component Tests', () => {
    describe('ApplicationsComponent', () => {
        let comp: ClbApplicationsComponent;
        let fixture: ComponentFixture<ClbApplicationsComponent>;

        beforeEach(
            async(() => {
                TestBed.configureTestingModule({
                    imports: [CoolybotRegistryTestModule],
                    declarations: [ClbApplicationsComponent],
                    providers: [ClbApplicationsService]
                })
                    .overrideTemplate(ClbApplicationsComponent, '')
                    .compileComponents();
            })
        );

        beforeEach(() => {
            fixture = TestBed.createComponent(ClbApplicationsComponent);
            comp = fixture.componentInstance;
        });

        it(
            'refresh data',
            fakeAsync(
                inject([ClbApplicationsService], (service: ClbApplicationsService) => {
                    const response = {
                        applications: [
                            {
                                name: 'app1',
                                instances: [
                                    {
                                        instanceId: 1,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    }
                                ]
                            },
                            {
                                name: 'app2',
                                instances: [
                                    {
                                        instanceId: 2,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    },
                                    {
                                        instanceId: 3,
                                        status: 'UP',
                                        homePageUrl: 'home'
                                    }
                                ]
                            }
                        ]
                    };
                    spyOn(service, 'findAll').and.returnValue(Observable.of(response));

                    comp.ngOnInit();
                    tick();

                    expect(service.findAll).toHaveBeenCalled();
                    expect(comp.data).toEqual(response);
                })
            )
        );
    });
});
