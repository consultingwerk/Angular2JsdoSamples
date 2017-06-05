import { Component, ViewChild, Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

// Include progress JSDO module
import { progress } from '@consultingwerk/smartcomponents-jsdo';

/* Example service */
@Injectable()
export class CustomerJsdoDataService extends BehaviorSubject<GridDataResult> {
    private tableName: string = 'eCustomer';
    private jsdo: progress.data.JSDO;

    public jsdoLoaded: EventEmitter<any> = new EventEmitter<any>();

    constructor(private http: Http) {
        super(null);

        const serviceURI = 'http://192.168.0.44:8820/web';
        const catalogURI = 'http://192.168.0.44:8820/web/Catalog/Consultingwerk.SmartComponentsDemo.OERA.Sports2000.CustomerBusinessEntity';

        // TODO: Change Session to JSDOSession
        let session = new progress.data.JSDOSession({
            serviceURI: serviceURI,
            authenticationModel: progress.data.Session.AUTH_TYPE_FORM
        });
        session.login('demo', 'demo')
            .done(() => {
                session.addCatalog(catalogURI)
                    .done(() => {
                        let jsdo1 = new progress.data.JSDO({
                            name: 'Consultingwerk.SmartComponentsDemo.OERA.Sports2000.CustomerBusinessEntity',
                            tableRef: this.tableName
                        });
                        this.jsdo = jsdo1;
                        this.jsdoLoaded.emit();
                    });
            });
    }

    public query(state: any): Observable<GridDataResult> {
        let obs =  this.fetch(this.tableName, state);
        obs.subscribe(x => this.next(x));
        return obs;

    }

    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        let that = this;
        let query = {
            skip: state.skip,
            top: state.take
        };
        let promise = new Promise((resolve, reject) => {
            let afterFill = (jsdo: progress.data.JSDO, success: boolean, request: any) => {
                jsdo.unsubscribe('AfterFill', afterFill, this);

                if (success) {
                    let data = jsdo[tableName].getData();
                    console.table(data);
                    if (query.top) {
                        let afterInvoke = (jsdo1: progress.data.JSDO, success1: boolean, request1: any): void => {
                            jsdo.unsubscribe('AfterInvoke', 'count', afterInvoke, this);
                            console.log(request1.response);
                            resolve(<GridDataResult>{
                                data: data,
                                total: request1.response.piNumRecs
                            });
                        };
                        jsdo.subscribe('AfterInvoke', 'count', afterInvoke, this);
                        jsdo.count(query);
                    } else {
                        resolve(<GridDataResult>{
                            data: data,
                            total: data.length
                        });
                    }
                } else {
                    reject(new Error('Error while executing query'));
                }
            };
            that.jsdo.subscribe('AfterFill', afterFill, this);
            that.jsdo.fill(query);
        });

        return Observable.fromPromise(promise) as Observable<GridDataResult>;
    }
}
@Component({
    providers: [CustomerJsdoDataService],
    selector: 'my-app',
    template: `
      <h1>Kendo UI Grid with JSDO from Consultingwerk NPM repository</h1>
      <kendo-grid
          [data]="view | async"
          [pageSize]="pageSize"
          [skip]="skip"
          [pageable]="true"
        >
        <kendo-grid-column field="CustNum" width="100"></kendo-grid-column>
        <kendo-grid-column field="Name" width="200"></kendo-grid-column>
        <kendo-grid-column field="SalesRep"></kendo-grid-column>
      </kendo-grid>
  `
})

export class AppComponent {
    private view: Observable<GridDataResult>;
    private pageSize: number = 10;
    private skip: number = 0;

    @ViewChild(GridComponent) private grid: GridComponent;
    constructor(private service: CustomerJsdoDataService) {
        this.view = service;
        this.service.jsdoLoaded.subscribe(() => {
            this.service.query({ skip: this.skip, take: this.pageSize });
        });
    }

    public ngAfterViewInit(): void {
        this.grid.dataStateChange
            .do(({ skip, take }: DataStateChangeEvent) => {
                this.skip = skip;
                this.pageSize = take;
            })
            .subscribe(x => this.service.query(x));
    }
}
