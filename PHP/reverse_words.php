<?php
function reverseWords($str) {
  $rev = [];
  $split = explode(" ", $str);  
  foreach($split as $word) {
    array_push($rev, strrev($word));
  }
  $answer = implode(" ", $rev);
  return $answer;
}