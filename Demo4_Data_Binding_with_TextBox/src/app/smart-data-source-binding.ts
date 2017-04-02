import { Component, OnInit } from '@angular/core';
import { SmartServiceAdapter } from 'smartcomponent-library/core';
import { DataSourceRegistry, SmartDataSource, DataSourceRegistryEventArgs } from 'smartcomponent-library/smart-datasource';
@Component({
    selector: 'app-root',
    templateUrl: './smart-data-source-binding.html'
})
export class SmartDataSourceBindingComponent implements OnInit {

    protected customerDatasource: SmartDataSource;

    constructor(private serviceAdapter: SmartServiceAdapter,
                private dsRegistry: DataSourceRegistry) {

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

