import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the filter-cell template.
 */
export var FilterCellTemplateDirective = (function () {
    function FilterCellTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    FilterCellTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridFilterCellTemplate]'
                },] },
    ];
    /** @nocollapse */
    FilterCellTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return FilterCellTemplateDirective;
}());
