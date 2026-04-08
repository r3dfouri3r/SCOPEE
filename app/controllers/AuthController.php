<?php

$usuario = $_POST['usuario'] ?? '';
$senha = $_POST['senha'] ?? '';

if($usuario == "Administrador"){

    $_SESSION['perfil'] = "Administrador";

    header("Location: /admin");
    exit;

}

if($usuario == "Coordenador"){

    $_SESSION['perfil'] = "Coordenador";

    header("Location: /usuario");
    exit;

}

if($usuario == "Professor"){

    $_SESSION['perfil'] = "Professor";

    header("Location: /usuario");
    exit;

}

echo "Login inválido";