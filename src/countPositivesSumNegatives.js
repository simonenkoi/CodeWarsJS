/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second
element is sum of negative numbers.

If the input array is empty or null, return an empty array:
 */

function countPositivesSumNegatives(input) {
    if (input != null && input.length > 0) {
        let count = 0;
        let sum = 0;
        for (let i = 0; i < input.length; ++i) {
            if (input[i] > 0) {
                ++count;
            } else {
                sum += input[i];
            }
        }
        return [count, sum];
    } else {
        return [];
    }
}
