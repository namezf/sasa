<?php
    $user = $_GET['username2'];
    $pw = $_GET['password'];    

    include "./conn.php";
    $sql = "
        SELECT `id` FROM `users`
        WHERE `users`.`username2`='$user'
    ";
    $pw = md5($pw);
    $ret = $conn->query($sql);
    if($ret->num_rows > 0) {
        echo "用户名已经存在";
    } else {
        $sql = "
            INSERT INTO `users`
            (`id`, `username2`,`password`)
            VALUES
            (NULL, '$user','$pw')
        ";
        $ret = $conn->query($sql);
        if($ret) {
            echo '注册成功';
        } else {
            echo "注册失败";
        }
    }