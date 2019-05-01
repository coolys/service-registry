import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClbEncryptionService } from './encryption.service';

@Component({
    selector: 'clb-encryption',
    templateUrl: './encryption.component.html'
})
export class ClbEncryptionComponent implements OnInit, OnDestroy {
    showMore: boolean;
    textToEncrypt: string;
    encryptedText: string;
    result: string;

    constructor(private encryptionService: ClbEncryptionService) {
        this.showMore = true;
        this.textToEncrypt = '';
        this.encryptedText = '';
        this.result = '';
    }

    ngOnInit() {}

    ngOnDestroy() {}

    encrypt() {
        this.encryptionService.encrypt(this.textToEncrypt).subscribe(
            (response) => {
                this.result = response;
                this.encryptedText = response;
            },
            () => {
                this.result = '';
            }
        );
    }

    decrypt() {
        this.encryptionService.decrypt(this.encryptedText.replace(/^{cipher}/, '')).subscribe(
            (response) => {
                this.result = response;
                this.textToEncrypt = response;
            },
            () => {
                this.result = '';
            }
        );
    }
}
