import { Component, OnInit } from '@angular/core';
import { ClbSSHService } from './ssh.service';

@Component({
    selector: 'clb-applications',
    templateUrl: './ssh.component.html'
})
export class ClbSSHComponent implements OnInit {
    data: any;
    showMore: boolean;

    constructor(private sshService: ClbSSHService) {
        this.showMore = true;
    }

    ngOnInit() {
        this.sshService.getSshPublicKey().subscribe((response) => {
            this.data = response;
        });
    }
}
