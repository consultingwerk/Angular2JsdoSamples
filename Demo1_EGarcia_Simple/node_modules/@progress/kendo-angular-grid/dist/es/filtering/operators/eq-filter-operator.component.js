var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `Equal` (**Is equal to**) filter operator.
 */
export var EqualFilterOperatorComponent = (function (_super) {
    __extends(EqualFilterOperatorComponent, _super);
    function EqualFilterOperatorComponent() {
        _super.call(this, "eq");
    }
    EqualFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return EqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-eq-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    EqualFilterOperatorComponent.ctorParameters = function () { return []; };
    return EqualFilterOperatorComponent;
}(FilterOperatorBase));
