<?php
echo "값 들어오는지 확인";
$url = "localhost";
$id = "root";
$password="111111";
$db = "t_dkdk";

$conn = mysqli_connect($url,$id,$password,$db);

// html로부터 값 가져오기
$uid = $_POST["id"];
$uname = $_POST["name"];

$sql = "insert into user(id, name) values('$uid', '$uname')";
mysqli_query($conn, $sql);



?>