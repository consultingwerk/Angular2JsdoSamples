"use strict";
var core_1 = require('@angular/core');
var utils_1 = require('../../utils');
var operatorTexts = {
    eq: "Is equal to",
    neq: "Is not equal to",
    startswith: "Starts with",
    contains: "Contains",
    doesnotcontain: "Does not contain",
    endswith: "Ends with",
    isnull: "Is null",
    isnotnull: "Is not null",
    isempty: "Is empty",
    isnotempty: "Is not empty"
};
/**
 * @hidden
 */
exports.toJSON = function (xs) { return xs.map(function (x) { return x.toJSON(); }); };
/**
 * @hidden
 */
var FilterOperatorBase = (function () {
    function FilterOperatorBase(operator) {
        this.operator = operator;
        this._text = operatorTexts[this.operator];
    }
    Object.defineProperty(FilterOperatorBase.prototype, "text", {
        /**
         * The text to be displayed in the DropDownList.
         * @readonly
         * @type {string}
         * @memberOf FilterOperatorBase
         */
        get: function () {
            return this._text;
        },
        /**
         *
         */
        set: function (value) {
            this._text = utils_1.isNullOrEmptyString(value) ? operatorTexts[this.operator] : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    FilterOperatorBase.prototype.toJSON = function () {
        return {
            text: this.text,
            value: this.operator
        };
    };
    FilterOperatorBase.propDecorators = {
        'text': [{ type: core_1.Input },],
    };
    return FilterOperatorBase;
}());
exports.FilterOperatorBase = FilterOperatorBase;
