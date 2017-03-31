var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/*
 * Represents the `Less` (**Is less than**) numeric filter operator.
 */
export var LessFilterOperatorComponent = (function (_super) {
    __extends(LessFilterOperatorComponent, _super);
    function LessFilterOperatorComponent() {
        _super.call(this, "lt");
    }
    LessFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return LessFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-lt-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    LessFilterOperatorComponent.ctorParameters = function () { return []; };
    return LessFilterOperatorComponent;
}(FilterOperatorBase));
