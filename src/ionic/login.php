<?php
    require "conf.php";

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Method: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
    header("Content-Type: application/json");
    
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // $user = "test1";
    // $pass = "123456";

    $sql = "SELECT * FROM users WHERE username = '".$user."' AND password = '".$pass."'";
    $query = mysqli_query($conn, $sql);
    $numrow = mysqli_num_rows($query);

    if($numrow == 0){
        $ret = "denied";
    }else{
        $list = mysqli_fetch_row($query);
        $ret = $list[1];
    }

    $arlist = array($ret);
    echo json_encode($arlist);
    mysqli_close($conn);

?>