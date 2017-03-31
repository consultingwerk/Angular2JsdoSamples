"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `NotEqual` (**Is not equal to**) filter operator.
 */
var NotEqualFilterOperatorComponent = (function (_super) {
    __extends(NotEqualFilterOperatorComponent, _super);
    function NotEqualFilterOperatorComponent() {
        _super.call(this, "neq");
    }
    NotEqualFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return NotEqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-neq-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    NotEqualFilterOperatorComponent.ctorParameters = function () { return []; };
    return NotEqualFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.NotEqualFilterOperatorComponent = NotEqualFilterOperatorComponent;
