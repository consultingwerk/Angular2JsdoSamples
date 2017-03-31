var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `NotEqual` (**Is not equal to**) filter operator.
 */
export var NotEqualFilterOperatorComponent = (function (_super) {
    __extends(NotEqualFilterOperatorComponent, _super);
    function NotEqualFilterOperatorComponent() {
        _super.call(this, "neq");
    }
    NotEqualFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return NotEqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-neq-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    NotEqualFilterOperatorComponent.ctorParameters = function () { return []; };
    return NotEqualFilterOperatorComponent;
}(FilterOperatorBase));
