"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `DoesNotContain` (**Does not contain**) filter operator.
 */
var DoesNotContainFilterOperatorComponent = (function (_super) {
    __extends(DoesNotContainFilterOperatorComponent, _super);
    function DoesNotContainFilterOperatorComponent() {
        _super.call(this, "doesnotcontain");
    }
    DoesNotContainFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return DoesNotContainFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-not-contains-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DoesNotContainFilterOperatorComponent.ctorParameters = function () { return []; };
    return DoesNotContainFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.DoesNotContainFilterOperatorComponent = DoesNotContainFilterOperatorComponent;
