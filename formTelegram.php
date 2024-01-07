<?php

/* https://api.telegram.org/bot6461976811:AAHZFRxA93xbTUKtuSfD-ZkKEYBu77xeuo8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$message = $_POST['user_message'];
$budget = $_POST['user_budget'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "6461976811:AAHZFRxA93xbTUKtuSfD-ZkKEYBu77xeuo8";
$chat_id = "-4057984731";
$arr = array(
    'Имя: ' => $name,
  'Почта: ' => $email,
  'Телефон: ' => $phone,
  'Бюджет: ' => $email,
  'Сообщение' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>