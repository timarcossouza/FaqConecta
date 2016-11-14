<html>
<body>

<?php
$to = "bianca.rocha.lol@gmail.com";
$subject = "teste";
$email = $REQUEST['email'];
$message = $_REQUEST['message'];
$headers = "From: #email";
$sent = mail($to, $subject, $message, $headers);
if(isset($_POST['submit']) && $sent)
{ 
	print('foi');
};
else
{
	print("n foi");
}

?>

</body>
</html>