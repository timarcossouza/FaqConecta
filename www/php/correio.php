<? php
$message = "email: ".$_POST["correo"];
$message = htmlspecialchars($mensaje);
$message = stripslashes($mensaje);

$to = "alexis.970991@gmail.com";
$subject = "You have new email";
$header = "From:alexis.970991@gmail.com";
$enviar = mail($to,$subject,$message,$header);

?>