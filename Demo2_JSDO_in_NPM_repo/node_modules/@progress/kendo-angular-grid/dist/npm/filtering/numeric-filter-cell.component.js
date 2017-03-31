"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// tslint:disable:no-access-missing-member
var core_1 = require('@angular/core');
var filter_service_1 = require('./filter.service');
var base_filter_cell_component_1 = require('./base-filter-cell.component');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var utils_1 = require('../utils');
var numericOperators = base_filter_cell_component_1.localizeOperators({
    "filterEqOperator": "eq",
    "filterNotEqOperator": "neq",
    // tslint:disable-next-line:object-literal-sort-keys
    "filterGteOperator": "gte",
    "filterGtOperator": "gt",
    "filterLteOperator": "lte",
    "filterLtOperator": "lt",
    "filterIsNullOperator": "isnull",
    "filterIsNotNullOperator": "isnotnull",
    "filterIsEmptyOperator": "isempty",
    "filterIsNotEmptyOperator": "isnotempty"
});
var extractFormat = function (format) {
    if (!utils_1.isNullOrEmptyString(format) && format.startsWith('{0:')) {
        return format.slice(3, format.length - 1);
    }
    return format;
};
/**
 * Represents a numeric filter cell.
 *
 * @example
 *  ```ts-no-run
 *      <kendo-grid-column field="ProductName" title="Product Name">
 *          <template kendoGridFilterCellTemplate let-filter let-column="column">
 *          <kendo-grid-numeric-filter-cell
 *              [column]="column"
 *              [filter]="filter">
 *          </kendo-grid-numeric-filter-cell>
 *          </template>
 *      </kendo-grid-column>
 *   ```
 */
var NumericFilterCellComponent = (function (_super) {
    __extends(NumericFilterCellComponent, _super);
    function NumericFilterCellComponent(filterService, localization) {
        _super.call(this, filterService);
        this.localization = localization;
        /**
         * Determines if the drop-down filter operators should be shown. The default value is `true`.
         * @type {boolean}
         */
        this.showOperators = true;
        /**
         * The default filter operator. Defaults to `eq`.
         * @type {string}
         */
        this.operator = "eq";
        /**
         * Specifies the value used to increment or decrement the component value.
         * @type {numeric}
         */
        this.step = 1;
        /**
         * Specifies whether the **Up** and **Down** spin buttons should be rendered.
         * @type {boolean}
         */
        this.spinners = true;
        /**
         * Specifies whether the value should be rounded or truncated. The length of the fraction is defined by the value of decimals.
         * @type {boolean}
         */
        this.round = true;
        this.defaultOperators = numericOperators(this.localization);
    }
    Object.defineProperty(NumericFilterCellComponent.prototype, "format", {
        /**
         * Specifies the number format used when the component is not focused.
         * By default, the `column.format` value is used, if set.
         *
         * @readonly
         * @type {string}
         */
        get: function () {
            return !utils_1.isNullOrEmptyString(this._format) ? this._format : this.columnFormat;
        },
        /**
         * Specifies the number format used when the component is not focused.
         * By default, the `column.format` value is used, if set.
         */
        set: function (value) {
            this._format = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericFilterCellComponent.prototype, "currentFilter", {
        /**
         * The current filter for the associated column field.
         * @readonly
         * @type {FilterDescriptor}
         */
        get: function () {
            return this.filterByField(this.column.field);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericFilterCellComponent.prototype, "currentOperator", {
        /**
         * The current filter operator for the associated column field.
         * @readonly
         * @type {string}
         */
        get: function () {
            return this.currentFilter ? this.currentFilter.operator : this.operator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumericFilterCellComponent.prototype, "columnFormat", {
        get: function () {
            return this.column && !utils_1.isNullOrEmptyString(this.column.format) ?
                extractFormat(this.column.format) : "n2";
        },
        enumerable: true,
        configurable: true
    });
    NumericFilterCellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-grid-numeric-filter-cell',
                    template: "\n        <kendo-grid-filter-wrapper-cell\n            [column]=\"column\"\n            [filter]=\"filter\"\n            [operators]=\"operators\"\n            [defaultOperator]=\"operator\"\n            [showOperators]=\"showOperators\">\n            <kendo-numerictextbox\n                kendoFilterInput\n                [autoCorrect]=\"true\"\n                [value]=\"currentFilter?.value\"\n                [format]=\"format\"\n                [decimals]=\"decimals\"\n                [spinners]=\"spinners\"\n                [round]=\"round\"\n                [min]=\"min\"\n                [max]=\"max\"\n                [step]=\"step\">\n            </kendo-numerictextbox>\n        </kendo-grid-filter-wrapper-cell>\n    "
                },] },
    ];
    /** @nocollapse */
    NumericFilterCellComponent.ctorParameters = function () { return [
        { type: filter_service_1.FilterService, },
        { type: kendo_angular_l10n_1.LocalizationService, },
    ]; };
    NumericFilterCellComponent.propDecorators = {
        'showOperators': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Input },],
        'operator': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'spinners': [{ type: core_1.Input },],
        'decimals': [{ type: core_1.Input },],
        'round': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
    };
    return NumericFilterCellComponent;
}(base_filter_cell_component_1.BaseFilterCellComponent));
exports.NumericFilterCellComponent = NumericFilterCellComponent;
