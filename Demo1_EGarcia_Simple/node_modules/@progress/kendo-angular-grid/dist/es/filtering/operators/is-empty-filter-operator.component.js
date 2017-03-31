var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `IsEmpty` (**Is empty**) filter operator.
 */
export var IsEmptyFilterOperatorComponent = (function (_super) {
    __extends(IsEmptyFilterOperatorComponent, _super);
    function IsEmptyFilterOperatorComponent() {
        _super.call(this, "isempty");
    }
    IsEmptyFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return IsEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isempty-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsEmptyFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsEmptyFilterOperatorComponent;
}(FilterOperatorBase));
