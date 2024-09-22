<?php

    // Collect form data
    $email = $_POST['email'];
    $to = "mdj524156@gmail.com";
    $subject = "Projoss User Data";
    
    // Include the sex information in the email body
    $txt = "Email: " . $email;
    
    $headers = "From: info@projoss.com" . "\r\n";
    
    if($email != NULL){
        mail($to, $subject, $txt, $headers);
    }
    
    header("location:thanks.html");

?>