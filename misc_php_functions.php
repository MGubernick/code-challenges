<?php
// misc functions created while working with CodeCademy. 

function convertToShout($cap_str) {
  $new = strtoupper($cap_str);
  return "$new!";
}

echo convertToShout("hi friends");

function tipGenerously($num) {
  $tip = $num * (20/100);
  return ceil($num + $tip);
}

echo "\n";

echo tipGenerously(100.00);

echo "\n";

function calculateCircleArea($diameter) {
  $pi = pi();
  $area = ($diameter/2)**2 * $pi;
  return $area;
}