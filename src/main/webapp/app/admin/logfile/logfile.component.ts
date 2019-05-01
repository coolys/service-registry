import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ClbLogfileService } from './logfile.service';

import { ClbRoutesService, Route } from 'app/shared';

@Component({
    selector: 'clb-logfile',
    templateUrl: './logfile.component.html',
    styleUrls: ['logfile.scss']
})
export class ClbLogfileComponent implements OnInit, OnDestroy {
    activeRoute: Route;
    updatingLogfile: boolean;
    logtxt: string;
    subscription: Subscription;

    @ViewChild('logfile') private logFileViewer: ElementRef;

    constructor(private clbLogfileService: ClbLogfileService, private routesService: ClbRoutesService) {}

    ngOnInit() {
        this.subscription = this.routesService.routeChanged$.subscribe((route) => {
            this.activeRoute = route;
            this.displayActiveRouteLog();
        });
    }

    displayActiveRouteLog() {
        this.updatingLogfile = true;
        if (this.activeRoute && this.activeRoute.status !== 'DOWN') {
            this.clbLogfileService.getInstanceLogfile(this.activeRoute).subscribe(
                (logtxt) => {
                    this.logtxt = logtxt;
                    this.updatingLogfile = false;
                },
                (error) => {
                    if (error.status === 503 || error.status === 500 || error.status === 404) {
                        this.logtxt =
                            'No available logfile. Please note that it is not available by default, you need to set up the Spring Boot properties below! \n' +
                            'Please check:\n ' +
                            '- if the microservice is up\n ' +
                            '- if these properties are set: \n ' +
                            '    - logging.path\n ' +
                            '    - logging.file (to avoid using the same spring.log)\n\n' +
                            'See:\n ' +
                            '- https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-endpoints.html\n ' +
                            '- https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html';
                        this.updatingLogfile = false;
                    }
                }
            );
        }
    }

    scrollToBottom() {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrollHeight;
    }

    scrollToTop() {
        this.logFileViewer.nativeElement.scrollTop = this.logFileViewer.nativeElement.scrolledUp;
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }
}
