import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCoolybotModule } from 'ng-coolybot';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [NgbModule.forRoot(), NgCoolybotModule.forRoot({}), InfiniteScrollModule],
    exports: [FormsModule, HttpClientModule, CommonModule, NgbModule, NgCoolybotModule, InfiniteScrollModule]
})
export class CoolybotRegistrySharedLibsModule {}
