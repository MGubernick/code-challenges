<?php

function highAndLow($numbers) {
//   echo "This is numbers: $numbers \n";
  $to_answer = [];
  $split = explode(" ", $numbers);
  rsort($split);
  
  if (count($split) === 1) {
    $answer = "$split[0] $split[0]";
  } else {
    array_push($to_answer, array_shift($split));
    array_push($to_answer, array_pop($split));
    $answer = implode(" ", $to_answer);
  }
  
  return $answer;
}