<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['nume'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['mesajul'];

    $mailTo = "livia.boer@novarion.ro";
    $headers = "Novarion Contact Leads";
    $txt = "Mesaj nou de la: ".$name.".\n\n".$mailFrom.".\n\n".$message;

    mail($mailTo, $headers, $txt);
    header("Location: index.html?mailsend");
}
