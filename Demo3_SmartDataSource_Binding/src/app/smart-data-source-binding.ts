import { Component, OnInit } from '@angular/core';
import { SmartServiceAdapter } from 'smartcomponent-library/core';
@Component({
    selector: 'app-root',
    templateUrl: './smart-data-source-binding.html'
})
export class SmartDataSourceBindingComponent implements OnInit {

    constructor(private serviceAdapter: SmartServiceAdapter) {

    }

    ngOnInit() {
        this.serviceAdapter.login();
    }
}

