"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `Equal` (**Is equal to**) filter operator.
 */
var EqualFilterOperatorComponent = (function (_super) {
    __extends(EqualFilterOperatorComponent, _super);
    function EqualFilterOperatorComponent() {
        _super.call(this, "eq");
    }
    EqualFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return EqualFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-eq-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    EqualFilterOperatorComponent.ctorParameters = function () { return []; };
    return EqualFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.EqualFilterOperatorComponent = EqualFilterOperatorComponent;
