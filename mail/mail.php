<?
$name = $_POST{'name'};
$email = $_POST{'email'};
$phone = $_POST{'phone'};
$jobtitle = $_POST{'jobtitle'};
$date = $_POST{'date'};
$message = $_POST['message'];

$email_message = "

Name: ".$name."
Email: ".$email."
Phone: ".$phone."
jobtitle".$jobtitle."
Subject: ".$subject."
Message: ".$message."

";

mail ("adm.jakaria@gmail.com" , "New Message", $email_message);
header("location: ../mail-success.html");
?>


