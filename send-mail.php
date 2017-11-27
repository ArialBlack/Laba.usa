<?php

/* ==============================================
Variables you can change
============================================== */

$mailto = 'andreyturik@gmail.com'; // Enter your mail addres here. 
$subject = 'Mail from Laba.us'; // Enter the subject here.

$error_message = 'Error'; // Message displayed if an error occurs
$success_message = 'Sended'; // Message displayed id the email has been sent successfully

/* ==============================================
Do not modify anything below
============================================== */

$frm_name = stripcslashes($_POST['name']);
$frm_email = stripcslashes($_POST['email']);
$frm_message = stripcslashes($_POST['message']);


$message = "Name: $frm_name\r\nEmail: $frm_email\r\nMessage: $frm_message";

$headers = "From: $frm_name <$frm_email>" . "\r\n" . "Reply-To: $frm_email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

function validateEmail($email) {
   if(preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email))
	  return true;
   else
	  return false;
}

if((strlen($frm_name) < 1 ) || (strlen($frm_email) < 1 ) || (strlen($frm_message) < 1 ) || validateEmail($frm_email) == FALSE ) {

  header('Refresh: 5; URL=http://schroedingerscatlab.us');
	echo($error_message);
	echo('<p>You are being automatically redirected to a new location.<br />
    If your browser does not redirect you in 5 seconds, or you do
    not wish to wait, <a href="http://schroedingerscatlab.us">click here</a>.</p>');

} else {

	if( mail($mailto, $subject, $message, $headers) ) {
    header('Refresh: 5; URL=http://schroedingerscatlab.us');
		echo($success_message);
    echo('<p>You are being automatically redirected to a new location.<br />
    If your browser does not redirect you in 5 seconds, or you do
    not wish to wait, <a href="http://schroedingerscatlab.us">click here</a>.</p>');

	} else {
    header('Refresh: 5; URL=http://schroedingerscatlab.us');
		echo($error_message);
    echo('<p>You are being automatically redirected to a new location.<br />
    If your browser does not redirect you in 5 seconds, or you do
    not wish to wait, <a href="http://schroedingerscatlab.us">click here</a>.</p>');

	}

}

?>