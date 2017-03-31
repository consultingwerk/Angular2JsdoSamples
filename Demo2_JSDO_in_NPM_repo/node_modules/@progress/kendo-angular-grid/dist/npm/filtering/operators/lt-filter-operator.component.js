"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/*
 * Represents the `Less` (**Is less than**) numeric filter operator.
 */
var LessFilterOperatorComponent = (function (_super) {
    __extends(LessFilterOperatorComponent, _super);
    function LessFilterOperatorComponent() {
        _super.call(this, "lt");
    }
    LessFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return LessFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-lt-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    LessFilterOperatorComponent.ctorParameters = function () { return []; };
    return LessFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.LessFilterOperatorComponent = LessFilterOperatorComponent;
