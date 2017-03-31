// tslint:disable:no-access-missing-member
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Input } from '@angular/core';
import { FilterService } from './filter.service';
import { BaseFilterCellComponent, localizeOperators } from './base-filter-cell.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
var stringOperators = localizeOperators({
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
export var StringFilterCellComponent = (function (_super) {
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
        { type: Component, args: [{
                    selector: 'kendo-grid-string-filter-cell',
                    template: "\n        <kendo-grid-filter-wrapper-cell\n            [column]=\"column\"\n            [filter]=\"filter\"\n            [operators]=\"operators\"\n            [defaultOperator]=\"operator\"\n            [showOperators]=\"showOperators\">\n            <input class=\"k-textbox\" kendoFilterInput ngModel [value]=\"currentFilter?.value\" />\n        </kendo-grid-filter-wrapper-cell>\n    "
                },] },
    ];
    /** @nocollapse */
    StringFilterCellComponent.ctorParameters = function () { return [
        { type: FilterService, },
        { type: LocalizationService, },
    ]; };
    StringFilterCellComponent.propDecorators = {
        'showOperators': [{ type: Input },],
        'column': [{ type: Input },],
        'filter': [{ type: Input },],
        'operator': [{ type: Input },],
    };
    return StringFilterCellComponent;
}(BaseFilterCellComponent));
