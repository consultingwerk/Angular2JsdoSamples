"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `IsNotEmpty` (**Is not empty**) filter operator.
 */
var IsNotEmptyFilterOperatorComponent = (function (_super) {
    __extends(IsNotEmptyFilterOperatorComponent, _super);
    function IsNotEmptyFilterOperatorComponent() {
        _super.call(this, "isnotempty");
    }
    IsNotEmptyFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return IsNotEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isempty-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsNotEmptyFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsNotEmptyFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.IsNotEmptyFilterOperatorComponent = IsNotEmptyFilterOperatorComponent;
