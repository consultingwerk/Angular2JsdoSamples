"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/*
 * Represents the `LessOrEqualTo` (**Is less than or equal to**) numeric filter operator.
 */
var LessOrEqualToFilterOperatorComponent = (function (_super) {
    __extends(LessOrEqualToFilterOperatorComponent, _super);
    function LessOrEqualToFilterOperatorComponent() {
        _super.call(this, "lte");
    }
    LessOrEqualToFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return LessOrEqualToFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-lte-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    LessOrEqualToFilterOperatorComponent.ctorParameters = function () { return []; };
    return LessOrEqualToFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.LessOrEqualToFilterOperatorComponent = LessOrEqualToFilterOperatorComponent;
