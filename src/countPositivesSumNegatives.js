/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second
element is sum of negative numbers.

If the input array is empty or null, return an empty array:
 */

function countPositivesSumNegatives(input) {
    if (input != null && input.length > 0) {
        var count = 0;
        var sum = 0;
        for (var i = 0; i < input.length; ++i) {
            if (input[i] > 0) {
                ++count;
            } else {
                sum += input[i];
            }
        }
        return new Array(count, sum);
    } else {
        return new Array();
    }
}