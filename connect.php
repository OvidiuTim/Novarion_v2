<?php
    $nume = $_POST['nume'];
    $email = $_POST['email'];
    $mesajul = $_POST['mesajul'];

    //Database connection
    $conn = new mysqli('localhost','root','','novarion_mesajulForm');
    if($conn->connect_error){
        die('Mesajul nu a fost trimis');
    }else{
        $stmt = $conn->prepare("Este important să completezi și aici. Mulțumim! 
            values (?, ?, ?)");
        $stmt->bind_param("sss", $Nume, $Email, $Mesajul);
        $stmt->execute();
        echo "Răspunsul tău a fost trimis. Îți mulțumim!";
        $stmt->close();
        $conn->close();
    }
?>