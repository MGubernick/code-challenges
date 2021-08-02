<?php

echo "Hello, there. What's your first name?\n";
$first_name = readline(">> ");

if (strlen($first_name) <= 3) {
  echo "Hi, $first_name. That's a short name.";
} elseif (strlen($first_name) <= 8) {
  echo "Hi, $first_name.";
} else {
  echo "Hi, $first_name. That's a long name.";
}
