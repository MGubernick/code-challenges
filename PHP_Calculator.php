<!-- code for index.php -->
<html>
  <body>
    <!-- addition form -->
    <form method="get" action="addition.php">
    <strong>Addition!</strong>
    <br>
    Num1: <input type="number" name="addNum1">
    <br>
    Num2: <input type="number" name="addNum2">
    <button type="submit">Add Me</button>
    <br>
    </form>

    <!-- subtraction form -->
    <form method="get" action="addition.php">
    <strong>Subtract!</strong>
    <br>
    Num1: <input type="number" name="subNum1">
    <br>
    Num2: <input type="number" name="subNum2">
    <button type="submit">Sub Me</button>
    <br>
    </form>

    <!-- multiplication form  -->
    <form method="get" action="division.php">
    <strong>Multiply!</strong>
    <br>
    Num1: <input type="number" name="multNum1">
    <br>
    Num2: <input type="number" name="multNum2">
    <button type="submit">Multiply Me</button>
    <br>
    </form>

    <!-- division form  -->
    <form method="get" action="division.php">
    <strong>Divide!</strong>
    <br>
    Numerator: <input type="number" name="numerator">
    <br>
    Denominator: <input type="number" name="denominator">
    <button type="submit">Divide Me</button>
    <br>
    </form>
    <button href="index.php">Reset</button>
  </body>
</html>

<!-- code for addition.php (to handle addition and subtraction) -->
<html>
  <body>
    <div>
      <p>Problem is: <?=$_GET['addNum1'] . " + " . $_GET['addNum2'];?></p>
      <h3>The added answer is: <?=$_GET['addNum1'] + $_GET['addNum2'];?></h3>
    </div>
    <div>
      <p>Problem is: <?=$_GET['subNum1'] . " - " . $_GET['subNum2'];?></p>
      <h3>The subtracted answer is: <?=$_GET['subNum1'] - $_GET['subNum2'];?></h3>
    </div>
    <button href="index.php">Reset</button>
  </body>
</html>

<!-- code for division.php (to handle division and multiplication) -->
<html>
  <body>
    <div>
      <p>Problem is: <?=$_GET['numerator'] . " / " . $_GET['denominator'];?></p>
      <h3>The divided answer is: <?=$_GET['numerator'] / $_GET['denominator'];?></h3>
    </div>
    <div>
      <p>Problem is: <?=$_GET['multNum1'] . " x " . $_GET['multNum2'];?></p>
      <h3>The multiplied answer is: <?=$_GET['multNum1'] * $_GET['multNum2'];?></h3>
    </div>
    <button href="index.php">Reset</button>
  </body>
</html>