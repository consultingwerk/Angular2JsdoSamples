"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/*
 * Represents the `Greater` (**Is greater than**) numeric filter operator.
 */
var GreaterFilterOperatorComponent = (function (_super) {
    __extends(GreaterFilterOperatorComponent, _super);
    function GreaterFilterOperatorComponent() {
        _super.call(this, "gt");
    }
    GreaterFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return GreaterFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-gt-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    GreaterFilterOperatorComponent.ctorParameters = function () { return []; };
    return GreaterFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.GreaterFilterOperatorComponent = GreaterFilterOperatorComponent;
