<?php
header('Content-Type: text/plain');

$to = "jawadshahidoffical@gmail.com";

$name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$email   = isset($_POST['email']) ? trim(strip_tags($_POST['email'])) : '';
$subject = isset($_POST['subject']) ? trim(strip_tags($_POST['subject'])) : 'New message from website contact form';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo "Please fill in all required fields.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please enter a valid email address.";
    exit;
}

$body  = "You have received a new message from your website contact form.\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Message:\n" . $message . "\n";

$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo "Thanks for reaching out! Your message has been sent successfully.";
} else {
    http_response_code(500);
    echo "Oops! Something went wrong and your message could not be sent.";
}
