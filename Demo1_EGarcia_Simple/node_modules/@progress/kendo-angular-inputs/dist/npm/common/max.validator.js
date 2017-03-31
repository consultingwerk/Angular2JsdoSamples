"use strict";
/**
 * @hidden
 */
exports.createMaxValidator = function (maxValue) {
    return function (c) {
        var err = {
            maxError: {
                maxValue: maxValue,
                value: c.value
            }
        };
        return (c.value > maxValue) ? err : null;
    };
};
