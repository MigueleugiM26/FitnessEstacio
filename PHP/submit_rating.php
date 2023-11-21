<?php
$servername = "localhost";
$username = "u304537606_miguel";
$password = ":e9MLQ[@>";
$dbname = "u304537606_fitnessEstacio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$description = $_POST['description'];
$stars = $_POST['rate']; 

$stmt = $conn->prepare("INSERT INTO tbAvaliacao (nome, descricao, ava) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $name, $description, $stars);

if ($stmt->execute()) {
    echo "Avaliação enviada com sucesso!";
    echo <button href="../index.html">Voltar</button>
} else {
    echo "Erro ao enviar avaliação: " . $stmt->error;
    echo <button href="../index.html">Voltar</button>
}

$stmt->close();
$conn->close();
?>
