/*
Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings.
All words must have their first letter capitalized without spaces.
 */

String.prototype.camelCase = function() {
    return this.split(' ')
        .map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
};
