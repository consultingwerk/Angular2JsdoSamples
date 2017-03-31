var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { FilterOperatorBase } from './filter-operator.base';
/**
 * Represents the `DoesNotContain` (**Does not contain**) filter operator.
 */
export var DoesNotContainFilterOperatorComponent = (function (_super) {
    __extends(DoesNotContainFilterOperatorComponent, _super);
    function DoesNotContainFilterOperatorComponent() {
        _super.call(this, "doesnotcontain");
    }
    DoesNotContainFilterOperatorComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: FilterOperatorBase,
                            useExisting: forwardRef(function () { return DoesNotContainFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-not-contains-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DoesNotContainFilterOperatorComponent.ctorParameters = function () { return []; };
    return DoesNotContainFilterOperatorComponent;
}(FilterOperatorBase));
