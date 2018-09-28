<?php
    $server = "localhost";
    $usr = "root";
    $password = "";
    $db = "ionic";

    $conn = mysqli_connect($server,$usr,$password,$db);
    if(!$conn){
        echo "Connected Fail!!";
    }
?>