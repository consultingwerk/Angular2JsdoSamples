"use strict";
var core_1 = require('@angular/core');
var utils_1 = require('../utils');
/**
 * @hidden
 */
var FilterCellComponent = (function () {
    function FilterCellComponent() {
    }
    Object.defineProperty(FilterCellComponent.prototype, "hasTemplate", {
        get: function () {
            return utils_1.isPresent(this.column.filterCellTemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterCellComponent.prototype, "isFilterable", {
        get: function () {
            return utils_1.isPresent(this.column) && !utils_1.isNullOrEmptyString(this.column.field) && this.column.filterable;
        },
        enumerable: true,
        configurable: true
    });
    FilterCellComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[kendoGridFilterCell]',
                    template: "\n        <template [ngIf]=\"isFilterable\">\n            <ng-container [ngSwitch]=\"hasTemplate\">\n                <ng-container *ngSwitchCase=\"false\">\n                    <ng-container kendoFilterHost [column]=\"column\" [filter]=\"filter\"></ng-container>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"true\">\n                    <template\n                        *ngIf=\"column.filterCellTemplateRef\"\n                        [ngTemplateOutlet]=\"column.filterCellTemplateRef\"\n                        [ngOutletContext]=\"{\n                            $implicit: filter,\n                            column: column\n                        }\">\n                    </template>\n                </ng-container>\n            </ng-container>\n        </template>\n    "
                },] },
    ];
    /** @nocollapse */
    FilterCellComponent.ctorParameters = function () { return []; };
    FilterCellComponent.propDecorators = {
        'column': [{ type: core_1.Input },],
        'filter': [{ type: core_1.Input },],
    };
    return FilterCellComponent;
}());
exports.FilterCellComponent = FilterCellComponent;
