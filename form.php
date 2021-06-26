<?php


$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


// Datos correo
$destinatario = "francovega04@gmail.com";
$asunto = "Contacto desde la Web";


$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje; $mensaje";

//Enviar Msg
mail($destinatario, $asunto, $carta);
header('Location:send.html');

?>