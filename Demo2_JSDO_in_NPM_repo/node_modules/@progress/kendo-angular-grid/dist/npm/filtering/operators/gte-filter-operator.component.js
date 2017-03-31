"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `GreaterOrEqualTo` (**Is greater than or equal to**) numeric filter operator.
 */
var GreaterOrEqualToFilterOperatorComponent = (function (_super) {
    __extends(GreaterOrEqualToFilterOperatorComponent, _super);
    function GreaterOrEqualToFilterOperatorComponent() {
        _super.call(this, "gte");
    }
    GreaterOrEqualToFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return GreaterOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-gte-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    GreaterOrEqualToFilterOperatorComponent.ctorParameters = function () { return []; };
    return GreaterOrEqualToFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.GreaterOrEqualToFilterOperatorComponent = GreaterOrEqualToFilterOperatorComponent;
