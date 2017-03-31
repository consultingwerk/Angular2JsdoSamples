"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `IsNull` (**Is null**) filter operator.
 */
var IsNullFilterOperatorComponent = (function (_super) {
    __extends(IsNullFilterOperatorComponent, _super);
    function IsNullFilterOperatorComponent() {
        _super.call(this, "isnull");
    }
    IsNullFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return IsNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isnull-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNullFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNullFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.IsNullFilterOperatorComponent = IsNullFilterOperatorComponent;
