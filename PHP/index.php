<?php
// متغيرات
$tital = "Mohammed Alattas";
$num = 10;
$float = 3.14;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $tital ?></title>
</head>
<body>
    <?php 
        echo "<h1> Hello World </h1>";
        echo $num;
        echo $float;
    ?>
</body>
</html>

<?php
//$string = "Mohammed Alattas";
//echo $string;
//echo "<br>";
//echo strtolower($string);
//echo strtoupper($string);
//echo strlen($string);
//echo $string[7]
//$string[7] = "n";
//echo str_replace("Mohammed", "Majed", $string);
//echo substr($string, 5, 4)
?>

<?php
//echo 10 / 2
//echo pow(2,4)
//echo sqrt(9)
//echo round(7.5)
//echo floor(4.9)
//echo ceil(6.6)
//echo substr($string, 5, 4)
//echo max(6, 10, 8, 3)
//echo min(8, 6, 2, 1)

$num++; // num = 10
echo $num;
?>

<form action="form.php" method="GET">
    Name:<input type="text" name="Fname">
    Name:<input type="text" name="Lname">
    <input type="submit">
</form>

<?php
 echo $_GET["Fname"];
 echo $_GET["Lname"];
 echo $_REQUEST["Lname"]; // GET, POST تحتوي على
?>

<?php
    $check = false;
    $username = "Mohammed Alattas";
    $email = "MA@gmail.com";

    if($username !== "Mohammed Alattas" AND $email !== "MA@gmail.com"){
        echo "Welcome Admin";
    }

?>

<?php
/*
$number1 = 20;
$number2 = 30;

if($number1 > $number2){
    echo "الرقم الأول أكبر" ;
    
    if($number1 === 20){
        echo "<br>";
        echo "الرقم الأول عشرين" ;
    }

}elseif($number1 < $number2){
    echo "الرقم الأول أصغر" ;
}else{
    echo "الرقمين متساويين" ;
}*/
?>

<?php
//$names = array("Ali", "Ahmed", "Saad");
$names = ["Ali", "Ahmed", "Saad"];
echo "I know " . $names[0] . ", " . $names[1] . " and " . $names[2] . ".";
$names1 = ["Ali" => "10",
          "Ahmed" => "20",
           "Saad" => "30"];

echo $names1[names];
?>

<?php
function hello($x){
    $user1 = $x;
    if($user === "Ali"){
        echo "Hello " . $user1;
    }else{
        echo "bye " . $user1;
    }
}

hello("Ali");
?>

<?php
function add($x, $y){
    return $x + $y;
}
echo add(1, 2);
echo add(7, 4);
?>

<?php
//$names = array("Ali", "Ahmed", "Saad");
for($i = 0; $i<=count($names); $i++){
    echo "$names [$i] <br>";
}
/*foreach($names as $member){
    echo "$member <br>";
}*/
?>

