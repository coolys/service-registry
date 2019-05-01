import { SpyObject } from './spyobject';
import { ClbEventManager } from 'ng-coolybot';
import Spy = jasmine.Spy;

export class MockEventManager extends SpyObject {
    broadcastSpy: Spy;

    constructor() {
        super(ClbEventManager);
        this.broadcastSpy = this.spy('broadcast').andReturn(this);
    }
}
