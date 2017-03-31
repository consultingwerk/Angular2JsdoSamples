var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/*
 * Represents the `Greater` (**Is greater than**) numeric filter operator.
 */
export var GreaterFilterOperatorComponent = (function (_super) {
    __extends(GreaterFilterOperatorComponent, _super);
    function GreaterFilterOperatorComponent() {
        _super.call(this, "gt");
    }
    GreaterFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return GreaterFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-gt-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    GreaterFilterOperatorComponent.ctorParameters = function () { return []; };
    return GreaterFilterOperatorComponent;
}(FilterOperatorBase));
