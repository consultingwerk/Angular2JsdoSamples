var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/*
 * Represents the `LessOrEqualTo` (**Is less than or equal to**) numeric filter operator.
 */
export var LessOrEqualToFilterOperatorComponent = (function (_super) {
    __extends(LessOrEqualToFilterOperatorComponent, _super);
    function LessOrEqualToFilterOperatorComponent() {
        _super.call(this, "lte");
    }
    LessOrEqualToFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return LessOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-lte-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    LessOrEqualToFilterOperatorComponent.ctorParameters = function () { return []; };
    return LessOrEqualToFilterOperatorComponent;
}(FilterOperatorBase));
