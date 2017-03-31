var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `StartsWith` (**Starts with**) filter operator.
 */
export var StartsWithFilterOperatorComponent = (function (_super) {
    __extends(StartsWithFilterOperatorComponent, _super);
    function StartsWithFilterOperatorComponent() {
        _super.call(this, "startswith");
    }
    StartsWithFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return StartsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-startswith-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    StartsWithFilterOperatorComponent.ctorParameters = function () { return []; };
    return StartsWithFilterOperatorComponent;
}(FilterOperatorBase));
