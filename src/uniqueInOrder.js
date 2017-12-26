/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of
items without any elements with the same value next to each other and preserving the original order of elements.
 */

var uniqueInOrder = function (iterable) {
    if (array && array.length) {
        let result = [iterable[0]];
        for (let i = 1; i < iterable.length; ++i) {
            if (iterable[i] !== iterable[i - 1]) {
                result.push(iterable[i]);
            }
        }
        return result;
    } else {
        return [];
    }
}