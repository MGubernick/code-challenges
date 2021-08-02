<!-- index.php -->
<?php

// Global Variable Initialization
$rounds_left = 25;
$location = "kitchen";
$wearing_glasses = TRUE;
$wearing_contacts = FALSE;
$has_mushroom = FALSE;
$has_soup = FALSE;
$moved_cupboard = FALSE;
$is_hungry = TRUE;
$needs_to_pee = TRUE;

// Include each of the function definitions

include "printHelp.php";
include "gameRound.php";

include "printStatus.php";
include "changeLocation.php";
include "lookAround.php";

include "pickMushrooms.php";
include "cookSoup.php";
include "eatSoup.php";

include "pee.php";

include "moveCupboard.php";
include "searchSafe.php";




//Display Intro Text
printHelp();
echo "\nOk, the game is about to begin. Will you be able to find the golden mouse statuette and save your great-aunt's farm? We wish you good luck!\n**********BEGIN GAME***********\n";

echo "\nHello there. It's been a harrowing few weeks. First your toenail issue, and now Great-Aunt Natasha's emu farm is in danger of being reposessed! So here you are---after a brief stopover at the Mayo clinic---in uncle Boris's remote cabin in the heart of the Terror Woods. Family legend holds that a golden statue of immense value is hidden somewhere within these walls. Unfortunately, you have a lot of stuff to do today, so you can only devote about 25 minutes to finding the statue. I guess we'll see what happens ;) \n\n";


// Play 25 rounds
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();
gameRound();


// Game Is Over
echo "\n**********ATTENTION***********\n The game is over!" ;


// changeLocation.php

  // Change player location
function changeLocation(){	
  // Write your code here:
  global $location;

  echo "Where do you want to go?\n";
  $where_to = readline(">> ");
  $lets_go = strtolower($where_to);

  if ($location === "kitchen" && $lets_go === "bathroom") {
    echo "You go to: bathroom.\n";
    $location = "bathroom";
  } elseif ($location === "kitchen" && $lets_go === "woods") {
    echo "You follow the winding path, shivering as you make your way deep into the Terror Woods.";
    $location = "woods";
  } elseif ($location === "bathroom" && $lets_go === "kitchen") {
    echo "You go to: kitchen.\n";
    $location = "kitchen";
  } elseif ($location === "woods" && $lets_go === "kitchen") {
    echo "You go to: kitchen.\n";
    $location = "kitchen";
  } elseif ($lets_go === "woods" || $lets_go === "kitchen" || $lets_go === "bathroom") {
    echo "You can't go directly to there from your current location. Try going somewhere else first.\n";
  } else {
    echo "That doesn't make sense. Are you confused? Try 'look around'.\n";
  }
  
  
  
  
}

// cookSoup.php 
  
function cookSoup(){
	// Write your code here:
  global $location, $has_ushrooms, $has_soup;

  if (!$location === "kitchen" && $has_mushrooms) {
    echo "You can't cook like this! You need something to cook AND to be in the kitchen.\n";
  } else {
    echo "You made some mushroom soup. Mushroom is the queen of all soups!\n";
    $has_mushrooms = FALSE;
    $has_soup = TRUE;
  }
  
  
  
  
  
  
}

// eatSoup.php 

function eatSoup(){
	// Write your code here:
  global $has_soup, $is_hungry;

  if (!$has_soup && $is_hungry) {
    echo "You don't have any cooked food to eat!\n";
  } else {
    echo "You have eaten the soup!\n";
    $has_soup = FALSE;
    $is_hungry = FALSE;
  }
  
  
  
  
  
}

// gameRound.php 

// One Turn
function gameRound(){
    global $rounds_left, $location, $wearing_glasses, $wearing_contacts, $has_mushrooms, $moved_cupboard, $has_soup, $is_hungry, $needs_to_pee;

 //Skip Turn If It's Been Used Up
    if ($rounds_left <= 0){
        return;
    }

    printStatus();

 //Read Command And Respond
    $cmd = readline ("> ");
    $cmd =  strtolower($cmd);
    echo "\n";
    switch ($cmd) {
        case "help":
            printHelp();
            break;
      	case "put on glasses":
            echo "Your glasses are on.";
            $wearing_glasses = TRUE;
            break;
        case "put on contacts":
            echo "Your contacts are on.";
            $wearing_contacts = TRUE;
            break;
        case "take off contacts":
            echo "Your contacts are off.";
            $wearing_contacts = FALSE;
            break;
        case "take off glasses":
            echo "Your glasses are off.";
            $wearing_glasses = FALSE;
            break;
        case "go":
            changeLocation();
            break;
        case "look around":
            lookAround();
            break;
        case "pee":
            pee();
            break;
        case "pick mushrooms":
            pickMushrooms();
            break;
       case "cook":
            cookSoup();
            break;
        case "eat":
            eatSoup();
            break;
        case "move cupboard":
            moveCupboard();
            break;
       case "search safe":
            searchSafe();
            break;
        case "search toilet":
            if ( $location === "bathroom"){
            	echo "The toilet contains an amazing secret. The bowl is filled with ordinary water, but in the tank: the golden mouse statuette. The mouse's nose seems to follow you as you move. The mouse is beautiful! You love it! You're never going to sell it! Forget Great-Aunt Natasha's emu farm!\nYOU LOSE THE GAME!!!\n\n";
            $rounds_left = 1;
            }
            break;
        default:
            echo "Sorry, that doesn't work :( Please use one of the valid commands. You can see the list of valid commands by entering 'help'.\n";
    } // End of command switch

    // Use Up A Round
    $rounds_left = $rounds_left - 1;
    echo "\nYou now have $rounds_left rounds left.\n\n";
} // End of gameRound() function

// lookAround.php 

  // Describe current location
	function lookAround(){
	// Write your code here:
  global $location, $wearing_glasses, $wearing_contacts, $moved_cupboard;

  if (($wearing_glasses && !$wearing_contacts) || ($wearing_contacts && !$wearing_glasses)) {
    switch($location) {
      case "kitchen":
        echo "This kitchen comes with all the tools and ingredients needed to cook mushroom soup--- except the mushrooms!\n\nFrom here, you see the door to the *bathroom* and the back door, which leads to the *woods*.\n\n";
        if ($moved_cupboard) {
          echo "The cupboard has been moved aside, and reveals a safew built into the wall.\n";
        } else {
          echo "Also, there's a conspicuously large cupboard against a perculiarly word piece of the wall.\n";
        }
        break;
      case "bathroom":
        echo "Normal bathroom. There's a mirror here. You can get back out to the *kitchen*. You sense a magic presenec in the toilet, but you decide to ignore it.\n";
        break;
      case "woods":
        echo "These woods aren't actually that terrifying. Unless you're afraid of mushrooms. There's millions of them here!\nYou see the path leading back to your cabin's *kitchen*.\n";
    }
  } else {
    echo "It's really hard to make out any details...\n";
  } 
}

// moveCupboard.php 

// Move the cupboard
  
function moveCupboard(){
    global $is_hungry, $wearing_contacts, $wearing_glasses, $needs_to_pee, $location, $moved_cupboard;

	// Write your code here:
  if (!$is_hungry && !$needs_to_pee && $wearing_glasses) {
    $ready_to_work = TRUE;
  } else {
    $ready_to_work = FALSE;
  }

  if ($location !== "kitchen") {
    echo "You don't see a cupboard here!\n";
  } elseif ($moved_cupboard) {
    echo "You've already moved the cupboard!\n";
  } elseif (!$ready_to_work) {
    echo "You're not ready to work! You needto be properly fed, have an empty bladder, and have corrected vision (without dealing with those pesky glasses). Without these things, there's no point in even trying to move the cupboard.\n";
  } else {
    echo "You move the cupboard aside. You have revealed a save crudely fit into the wall behind where the cupboard used to be.\n";
    $moved_cupboard = TRUE;
  } 
}

// pee.php 
  
function pee(){
	// Write your code here:
  global $location, $needs_to_pee;

  if ($location === "bathroom" || $location === "woods") {
    echo "You relieve yourself.\n";
    $needs_to_pee = FALSE;
  } else {
    echo "Are you crazy? You can't pee here!\n";
  }
}

// pickMushrooms.php 
  
function pickMushrooms(){
	// Write your code here:
  global $location, $has_mushrooms;

  if (!$location === "woods") {
    echo "There aren't any mushrooms to pick!\n";
  } else {
    echo "You've picked some mushrooms.\n";
    $has_mushrooms = TRUE;
  } 
}

// printHelp.php 

// Display Help Text
function printHelp(){
 $commands=["help", "look around", "go", "put on glasses", "take off glasses", "put on contacts", "take off contacts", "eat", "cook", "pee", "pick mushrooms", "move cupboard", "search safe"];
 echo "\n**********WELCOME***********\nWelcome to the adventure! You have 25 total rounds before the game ends. On each round you can type one of the following commands:\n* " ;
 echo implode("\n* ", $commands);
 echo "\nThese commands have to be entered precisely, with no extra spaces. The \"help\" command will re-print this message.\n";
}

// printStatus.php 

// Print Current Status
function printStatus(){
    global $location, $wearing_glasses, $wearing_contacts, $has_mushrooms, $has_soup, $is_hungry, $needs_to_pee;
  
    echo "You are in: $location\n";
  
  // Write your code here:
  if ($wearing_contacts) {
    echo "You are wearing contacts. \n";
  } elseif ($wearing_glasses) {
    echo "You are wearing glasses. \n";
  } elseif ($has_mushrooms) {
    echo "You are holding mushrooms. \n";
  } elseif ($has_soup) {
    echo "You are holding a scalding-hot bowl of mushroom soup. \n";
  } elseif ($needs_to_pee) {
    echo "You need to pee!\n";
  } elseif ($is_hungry) {
    echo "You are hungry. \n";
  } else {
    echo "You are well-fed and energetic. \n";
  }
}

// searchSafe.php 

function searchSafe(){
	// Write your code here:
  global $location, $moved_cupboard, $rounds_left;

  if(!$location === "kitchen" || !$moved_cupboard) {
    echo "You don't see any safe here!\n";
  } else {
    echo "You search through the safe (the passcode is \"1234\"). With baited breath, you pull out the contents! It's a chocolate Mickey Mouse, wrapped in gold foil. Delicious!\nYOU WIN THE GAME!!!\n]n";
    $rounds_left = 1;
  }
}  
