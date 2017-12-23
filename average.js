/*
Write function avg which calculates average of numbers in given list.
 */

function findAverage(array) {
    var sum = array.reduce((a, b) => a + b, 0);
    return sum/array.length;
}