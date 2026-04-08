<?php

require_once __DIR__ . '/../../config/database.php';

function buscarUsuarioPorEmail($email)
{

    global $conn;

    $sql = "SELECT * FROM usuarios WHERE email = ? LIMIT 1";

    $stmt = $conn->prepare($sql);

    $stmt->execute([$email]);

    return $stmt->fetch(PDO::FETCH_ASSOC);
}