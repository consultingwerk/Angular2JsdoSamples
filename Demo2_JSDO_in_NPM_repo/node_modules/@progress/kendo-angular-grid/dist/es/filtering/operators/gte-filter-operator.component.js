var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `GreaterOrEqualTo` (**Is greater than or equal to**) numeric filter operator.
 */
export var GreaterOrEqualToFilterOperatorComponent = (function (_super) {
    __extends(GreaterOrEqualToFilterOperatorComponent, _super);
    function GreaterOrEqualToFilterOperatorComponent() {
        _super.call(this, "gte");
    }
    GreaterOrEqualToFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return GreaterOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-gte-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    GreaterOrEqualToFilterOperatorComponent.ctorParameters = function () { return []; };
    return GreaterOrEqualToFilterOperatorComponent;
}(FilterOperatorBase));
