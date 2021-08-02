<?php

$count = 1;
while($count <= 100) {
  if ($count % 3 === 0 && $count % 5 === 0) {
    echo "FizzBuzz\n";
    $count++;
  } elseif ($count % 3 === 0) {
    echo "Fizz\n";
    $count++;
  } elseif ($count % 5 === 0) {
    echo "Buzz\n";
    $count++;
  } else {
    echo $count . "\n";
    $count++;
  }
}
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";
$output = [];

for ($i = 1; $i <= 100; $i++) {
  if ($i % 3 === 0 && $i % 5 === 0) {
    array_push($output, "FizzBuzz");
  } elseif ($i % 3 === 0) {
    array_push($output, "Fizz");
  } elseif ($i % 5 === 0) {
    array_push($output, "Buzz");
  } else {
    array_push($output, $i);
  }
}
print_r($output);

foreach ($output as $value) {
  echo $value . "\n";
}

echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n";

  foreach ($output as $value) {
    if ($value === "Fizz") {
      continue;
    } elseif ($value === "FizzBuzz") {
      echo $value . "\n";
      break;
    } else {
      echo $value . "\n";
    }
}
