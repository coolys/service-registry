import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClbReplicasService } from './replicas.service';
import { ClbRefreshService } from 'app/shared/refresh/refresh.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'clb-replicas',
    templateUrl: './replicas.component.html',
    styleUrls: ['replicas.component.scss']
})
export class ClbReplicasComponent implements OnInit, OnDestroy {
    showMore: boolean;
    replicas: any;

    refreshReloadSubscription: Subscription;

    constructor(private replicasService: ClbReplicasService, private refreshService: ClbRefreshService) {
        this.showMore = true;
    }

    ngOnInit() {
        this.refreshReloadSubscription = this.refreshService.refreshReload$.subscribe((empty) => this.refresh());
        this.refresh();
    }

    ngOnDestroy() {
        this.refreshReloadSubscription.unsubscribe();
    }

    refresh() {
        this.replicasService.findAll().subscribe((replicas) => {
            this.replicas = replicas;
        });
    }
}
