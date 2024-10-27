<!-- Цей документ було створено для відправки форми, однак він не знадобився -->

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail=new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

// от кого
$mail->setFrom('test@gmail.com','Dima');
// кому
$mail->addAdress('pelexov.mitya@gmail.com');
// тема
$mail->Subject='Hail!';

// тело письма
$body='Test letter';

// проверка на пустоту полей
if(trim(!empty($_POST['email']))){
    $body.= '<p>E-mail:' .$_POST['email'].'</p>'
}

$mail->Body=$body;

// отправка
if(!$mail->send()){
    $message='Php-error';
}else{
    $message='Дані відправлено';
}

$response=['message'=>$message];

header('Content-type:application/json');
echo json_encode($response);