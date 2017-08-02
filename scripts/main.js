/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
// let hand = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]

function handValue (hand) {
  let sum = 0
  for (var i = 0; i < handValue.length; i++) {
    if ( hand[i] == "J" || hand[i] == "Q" || hand[i] == "K" ){
      sum += 10
      console.log(sum);
    } else if ( hand[i] == "A" ){
      sum += 1
    }
    else {
    sum += parseInt[hand[i]]
    }
  }
 return sum;
}

handValue();

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
