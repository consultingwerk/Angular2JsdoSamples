"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `StartsWith` (**Starts with**) filter operator.
 */
var StartsWithFilterOperatorComponent = (function (_super) {
    __extends(StartsWithFilterOperatorComponent, _super);
    function StartsWithFilterOperatorComponent() {
        _super.call(this, "startswith");
    }
    StartsWithFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return StartsWithFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-startswith-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    StartsWithFilterOperatorComponent.ctorParameters = function () { return []; };
    return StartsWithFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.StartsWithFilterOperatorComponent = StartsWithFilterOperatorComponent;
