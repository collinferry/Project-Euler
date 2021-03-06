// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function sumFib(cap){
  var fibArray = [1, 2, 3], sum = 2, next = 0;
  while (fibArray.slice(-1)[0] < cap) {
    //calculate next sequence number and add to array
    var next = fibArray[2]+fibArray[1];
    fibArray.push(next);

    // if even, add to sum
    if (next % 2 == 0) { sum += next; }

    // remove first array entity (to save memory)
    fibArray.shift();
  }

  console.log(sum);
}

sumFib(4000000);
