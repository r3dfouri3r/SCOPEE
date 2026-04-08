<?php

if (!isset($_SESSION['usuario'])) {
    header("Location: /");
    exit;
}

$perfil = $_SESSION['usuario']['perfil'];


switch ($perfil) {

    case 'Administrador':
        require __DIR__ . '/../../views/dashboards/admin.php';
        break;

    case 'Coordenador':
        require __DIR__ . '/../../views/dashboards/coordenador.php';
        break;

    case 'Professor':
        require __DIR__ . '/../../views/dashboards/professor.php';
        break;

    default:
        echo "Perfil inválido.";
}