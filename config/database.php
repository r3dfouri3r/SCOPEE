<?php
// config/database.php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'sc_presenca');
define('DB_CHARSET', 'utf8mb4');

function db_connect() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die(json_encode(['error' => 'Falha na conexão: ' . $conn->connect_error]));
    }
    $conn->set_charset(DB_CHARSET);
    return $conn;
}
