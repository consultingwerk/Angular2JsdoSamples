import { ColumnComponent } from '../column.component';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
/**
 * @hidden
 */
export declare class FilterCellComponent {
    column: ColumnComponent;
    filter: CompositeFilterDescriptor;
    readonly hasTemplate: boolean;
    readonly isFilterable: boolean;
}
