<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "siteFitnessDatabase";

    // Crie uma conexão com o banco de dados
    $conn = new mysqli($servername, $username, $password);

    // Verifique a conexão
    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }

    echo "Conexão bem-sucedida!";
?>
