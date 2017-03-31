"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `IsEmpty` (**Is empty**) filter operator.
 */
var IsEmptyFilterOperatorComponent = (function (_super) {
    __extends(IsEmptyFilterOperatorComponent, _super);
    function IsEmptyFilterOperatorComponent() {
        _super.call(this, "isempty");
    }
    IsEmptyFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return IsEmptyFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-isempty-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    IsEmptyFilterOperatorComponent.ctorParameters = function () { return []; };
    return IsEmptyFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.IsEmptyFilterOperatorComponent = IsEmptyFilterOperatorComponent;
