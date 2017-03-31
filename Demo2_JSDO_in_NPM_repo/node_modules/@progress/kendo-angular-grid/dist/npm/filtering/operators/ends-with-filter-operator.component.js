"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `EndsWith` (**Ends with**) string filter operator.
 */
var EndsWithFilterOperatorComponent = (function (_super) {
    __extends(EndsWithFilterOperatorComponent, _super);
    function EndsWithFilterOperatorComponent() {
        _super.call(this, "endswith");
    }
    EndsWithFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return EndsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-endswith-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    EndsWithFilterOperatorComponent.ctorParameters = function () { return []; };
    return EndsWithFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.EndsWithFilterOperatorComponent = EndsWithFilterOperatorComponent;
