<?php

$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "\nWelcome to the guessing game! I'm going to think of numbers between 1 and 10. Do you think you can guess correctly? 10 tries, let's go!\n";

function guessNumber() {
  global $play_count, $correct_guesses, $guess_high, $guess_low;
  // increment the play_count
  $play_count++;

  // generate a random number for the round
  $randoNum = rand(1, 10);

  echo "\nGuess Away!\n";
  $player_guess = readline("(>'')> ");

  $player_val = intval($player_guess);
  echo "\nThe Current Round: $play_count \n";
  echo "\nThe Number Was: $randoNum \n";
  echo "\nYour Guess Was: $player_guess \n";
  echo "\nSo far you have been correct $correct_guesses of times...";

  if ($player_val === $randoNum) {
    $correct_guesses++;
  } elseif ($player_guess < $randoNum) {
    $guess_low++;
  } elseif ($player_guess > $randoNum) {
    $guess_high++;
  }

}

echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();
echo "\n";
echo guessNumber();

$how_right = $correct_guesses/$play_count * 100;
echo "\nCongrats! You were right $how_right% of the time!\n";

echo $guess_high > $guess_low ? "\nWhen you guessed wrong, you tended to guess high.\n" : "\nWhen you guessed wrong, you tended to guess low.\n";

