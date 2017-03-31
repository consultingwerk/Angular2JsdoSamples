var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `EndsWith` (**Ends with**) string filter operator.
 */
export var EndsWithFilterOperatorComponent = (function (_super) {
    __extends(EndsWithFilterOperatorComponent, _super);
    function EndsWithFilterOperatorComponent() {
        _super.call(this, "endswith");
    }
    EndsWithFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return EndsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-endswith-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    EndsWithFilterOperatorComponent.ctorParameters = function () { return []; };
    return EndsWithFilterOperatorComponent;
}(FilterOperatorBase));
