var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `Contains` (**Contains**) filter operator.
 */
export var ContainsFilterOperatorComponent = (function (_super) {
    __extends(ContainsFilterOperatorComponent, _super);
    function ContainsFilterOperatorComponent() {
        _super.call(this, "contains");
    }
    ContainsFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return ContainsFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-contains-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ContainsFilterOperatorComponent.ctorParameters = function () { return []; };
    return ContainsFilterOperatorComponent;
}(FilterOperatorBase));
