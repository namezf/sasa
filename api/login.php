<?php
    $username = $_POST['username2'];
    $password = $_POST['password'];

    include "./conn.php";

    $password = md5($password);
    
    $sql = "
        SELECT `id` FROM `users`
        WHERE `users`.`username2`='$username' AND `users`.`password`='$password'
    ";

    $ret = $conn->query($sql);

    if($ret->num_rows > 0) {
        $userid = $ret->fetch_assoc()["id"];
        header("set-cookie: userid=$userid;path=/");
        echo "{\"result\": true}";
    } else {
        echo "{\"result\": false}";
    }
