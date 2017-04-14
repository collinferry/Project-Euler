/*
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/
function sumMultiples(cap) {
    var multiples = [], sum = 0;
    for (var i = 1; i < cap; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        multiples.push(i);
      }
    }
    sum = multiples.reduce(function(count, val) {
        return count + val;
    });
    console.log(sum);
}

sumMultiples(1000);
