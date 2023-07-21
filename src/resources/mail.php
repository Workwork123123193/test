<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/Exception.php";
require "PHPMailer/src/PHPMailer.php";

$mail = new PHPMailer(true);

$mail->CharSet = "UTF-8";
$mail->IsHTML(true);

$name = $_POST["Name"];
$email = $_POST["Email"];
$message = $_POST["Message"];


$body = '<html><body>';
$body .= '<h3>Данные с формы обратной связи</h3>';
$body .= '<p>Имя: '.$name.'</p>';
$body .= '<p>Почта: '.$email.'</p>';
$body.= '<p>Сообщение: '.$message.'</p>';
$body .= '</body></html>';

$mail->addAddress("rosipenko@yandex.ru");
$mail->setFrom("reg.ru@gmail.com");
$mail->Subject = "Заявка с формы";
$mail->MsgHTML($body);

if (!$mail->send()) {
    $message = "Ошибка отправки";
} else {
    $message = "Данные отправлены!";
}

$response = ["message" => $message];

header('Content-type: application/json');
echo json_encode($response);

?>
