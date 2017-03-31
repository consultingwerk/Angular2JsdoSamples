var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `IsNotEmpty` (**Is not empty**) filter operator.
 */
export var IsNotEmptyFilterOperatorComponent = (function (_super) {
    __extends(IsNotEmptyFilterOperatorComponent, _super);
    function IsNotEmptyFilterOperatorComponent() {
        _super.call(this, "isnotempty");
    }
    IsNotEmptyFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return IsNotEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isempty-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNotEmptyFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNotEmptyFilterOperatorComponent;
}(FilterOperatorBase));
