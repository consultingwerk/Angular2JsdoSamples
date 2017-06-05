import { Component, OnInit, Injector} from '@angular/core';
import { SmartServiceAdapter, SmartController, DefaultFormController } from '@consultingwerk/smartcomponents-core';
@SmartController('DemoController')
export class SmartDataSourceBindingComponent extends DefaultFormController implements OnInit {

    constructor(private serviceAdapter: SmartServiceAdapter,
                injector: Injector) {
                  super(injector);
    }

    ngOnInit() {
        this.serviceAdapter.login();
    }
}

