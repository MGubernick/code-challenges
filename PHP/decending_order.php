<?php
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// EX: Input: 42145 Output: 54421
// EX: Input: 145263 Output: 654321

// MY_SOLUTION:

function descendingOrder(int $n): int {
  $stringIt = strval($n);
  $broken = str_split($stringIt);
  rsort($broken);
  $answer = implode("",$broken);
  return intval($answer);
  
}
