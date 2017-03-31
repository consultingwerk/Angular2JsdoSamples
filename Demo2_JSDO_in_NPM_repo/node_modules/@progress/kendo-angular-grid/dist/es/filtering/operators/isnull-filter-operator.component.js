var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `IsNull` (**Is null**) filter operator.
 */
export var IsNullFilterOperatorComponent = (function (_super) {
    __extends(IsNullFilterOperatorComponent, _super);
    function IsNullFilterOperatorComponent() {
        _super.call(this, "isnull");
    }
    IsNullFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return IsNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isnull-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNullFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNullFilterOperatorComponent;
}(FilterOperatorBase));
