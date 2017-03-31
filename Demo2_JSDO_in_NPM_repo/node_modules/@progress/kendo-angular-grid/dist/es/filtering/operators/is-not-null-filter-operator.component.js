var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `IsNotNull` (**Is not null**) filter operator.
 */
export var IsNotNullFilterOperatorComponent = (function (_super) {
    __extends(IsNotNullFilterOperatorComponent, _super);
    function IsNotNullFilterOperatorComponent() {
        _super.call(this, "isnotnull");
    }
    IsNotNullFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return IsNotNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isnotnull-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNotNullFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNotNullFilterOperatorComponent;
}(FilterOperatorBase));
