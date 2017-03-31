"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `IsNotNull` (**Is not null**) filter operator.
 */
var IsNotNullFilterOperatorComponent = (function (_super) {
    __extends(IsNotNullFilterOperatorComponent, _super);
    function IsNotNullFilterOperatorComponent() {
        _super.call(this, "isnotnull");
    }
    IsNotNullFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return IsNotNullFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isnotnull-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNotNullFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNotNullFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.IsNotNullFilterOperatorComponent = IsNotNullFilterOperatorComponent;
