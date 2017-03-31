import { Component, Input } from '@angular/core';
import { isPresent, isNullOrEmptyString } from '../utils';
/**
 * @hidden
 */
export var FilterCellComponent = (function () {
    function FilterCellComponent() {
    }
    Object.defineProperty(FilterCellComponent.prototype, "hasTemplate", {
        get: function () {
            return isPresent(this.column.filterCellTemplateRef);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterCellComponent.prototype, "isFilterable", {
        get: function () {
            return isPresent(this.column) && !isNullOrEmptyString(this.column.field) && this.column.filterable;
        },
        enumerable: true,
        configurable: true
    });
    FilterCellComponent.decorators = [
        { type: Component, args: [{
                    selector: '[kendoGridFilterCell]',
                    template: "\n        <template [ngIf]=\"isFilterable\">\n            <ng-container [ngSwitch]=\"hasTemplate\">\n                <ng-container *ngSwitchCase=\"false\">\n                    <ng-container kendoFilterHost [column]=\"column\" [filter]=\"filter\"></ng-container>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"true\">\n                    <template\n                        *ngIf=\"column.filterCellTemplateRef\"\n                        [ngTemplateOutlet]=\"column.filterCellTemplateRef\"\n                        [ngOutletContext]=\"{\n                            $implicit: filter,\n                            column: column\n                        }\">\n                    </template>\n                </ng-container>\n            </ng-container>\n        </template>\n    "
                },] },
    ];
    /** @nocollapse */
    FilterCellComponent.ctorParameters = function () { return []; };
    FilterCellComponent.propDecorators = {
        'column': [{ type: Input },],
        'filter': [{ type: Input },],
    };
    return FilterCellComponent;
}());
