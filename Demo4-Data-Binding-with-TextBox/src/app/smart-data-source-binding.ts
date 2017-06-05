import { Component, OnInit, Injector} from '@angular/core';
import { DataSourceRegistry,
         DataSourceRegistryEventArgs,
         SmartServiceAdapter,
         SmartController,
         DefaultFormController,
         SmartDataSource
         } from '@consultingwerk/smartcomponents-core';

@SmartController('DemoController')

export class SmartDataSourceBindingComponent extends DefaultFormController implements OnInit {

    protected customerDatasource: SmartDataSource;

    constructor(private serviceAdapter: SmartServiceAdapter,
                private dsRegistry: DataSourceRegistry,
                injector: Injector) {
                  super(injector);
    }

    ngOnInit() {
        this.serviceAdapter.login();

        this.dsRegistry.dataSourceAdded.subscribe((ev: DataSourceRegistryEventArgs) => {
            if (ev.dataSourceName === 'customerDatasource') {
                this.customerDatasource = ev.dataSource;
            }
        });
    }
}

