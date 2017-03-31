// tslint:disable:no-access-missing-member
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_service_1 = require('./filter.service');
var base_filter_cell_component_1 = require('./base-filter-cell.component');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var stringOperators = base_filter_cell_component_1.localizeOperators({
    "filterEqOperator": "eq",
    "filterNotEqOperator": "neq",
    // tslint:disable-next-line:object-literal-sort-keys
    "filterContainsOperator": "contains",
    "filterNotContainsOperator": "doesnotcontain",
    "filterStartsWithOperator": "startswith",
    "filterEndsWithOperator": "endswith",
    "filterIsNullOperator": "isnull",
    "filterIsNotNullOperator": "isnotnull",
    "filterIsEmptyOperator": "isempty",
    "filterIsNotEmptyOperator": "isnotempty"
});
/**
 * Represents a string filter-cell component.
 *
 * @example
 *
 *  ```ts-no-run
 *      <kendo-grid-column field="ProductName" title="Product Name">
 *          <template kendoGridFilterCellTemplate let-filter let-column="column">
 *          <kendo-grid-string-filter-cell
 *              [showOperators]="false"
 *              [column]="column"
 *              [filter]="filter">
 *          </kendo-grid-string-filter-cell>
 *          </template>
 *      </kendo-grid-column>
 *   ```
 */
var StringFilterCellComponent = (function (_super) {
    __extends(StringFilterCellComponent, _super);
    function StringFilterCellComponent(filterService, localization) {
        _super.call(this, filterService);
        this.localization = localization;
        /**
         * Determines if the drop-down filter operators should be shown. The default value is `true`.
         * @type {boolean}
         */
        this.showOperators = true;
        /**
         * The default filter operator. Defaults to `contains`.
         * @type {string}
         */
        this.operator = "contains";
        this.defaultOperators = stringOperators(this.localization);
    }
    Object.defineProperty(StringFilterCellComponent.prototype, "currentFilter", {
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
    Object.defineProperty(StringFilterCellComponent.prototype, "currentOperator", {
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
    StringFilterCellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-grid-string-filter-cell',
                    template: "\n        <kendo-grid-filter-wrapper-cell\n            [column]=\"column\"\n            [filter]=\"filter\"\n            [operators]=\"operators\"\n            [defaultOperator]=\"operator\"\n            [showOperators]=\"showOperators\">\n            <input class=\"k-textbox\" kendoFilterInput ngModel [value]=\"currentFilter?.value\" />\n        </kendo-grid-filter-wrapper-cell>\n    "
                },] },
    ];
    /** @nocollapse */
    StringFilterCellComponent.ctorParameters = function () { return [
        { type: filter_service_1.FilterService, },
        { type: kendo_angular_l10n_1.LocalizationService, },
    ]; };
    StringFilterCellComponent.propDecorators = {
        'showOperators': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Input },],
        'operator': [{ type: core_1.Input },],
    };
    return StringFilterCellComponent;
}(base_filter_cell_component_1.BaseFilterCellComponent));
exports.StringFilterCellComponent = StringFilterCellComponent;
