<?php

$url = "localhost";
$id = "root";
$password="111111";
$db = "t_dkdk";

$conn = mysqli_connect($url,$id,$password,$db);


    if(isset($_POST['id'])&&isset($_POST['name'])){
        $uid = $_POST['id'];
        $uname = $_POST['name'];

        $sql="SELECT * FROM user where id='$uid'&&name='$uname'";
        if($result=mysqli_fetch_array(mysqli_query($conn,$sql))){
          echo "사용자 이름= $uname";
          echo "</br>로그인 성공";
        } else echo "아이디 또는 비밀번호가 일치하지 않습니다.";
      }


?>