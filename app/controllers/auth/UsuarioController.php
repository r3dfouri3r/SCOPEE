<?php

require_once __DIR__ . '/../../models/UsuarioModel.php';

$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';

if (empty($email) || empty($senha)) {

    $_SESSION['error'] = "Preencha todos os campos.";
    header("Location: /");
    exit;
}

/* buscar usuário no banco */

$usuario = buscarUsuarioPorEmail($email);

/* verificar se usuário existe */

if (!$usuario) {

    $_SESSION['error'] = "Usuário não encontrado.";
    header("Location: /");
    exit;
}

/* verificar senha */

if (!password_verify($senha, $usuario['senha'])) {

    $_SESSION['error'] = "Senha inválida.";
    header("Location: /");
    exit;
}

/* verificar status */

if ($usuario['status'] !== 'ativo') {

    $_SESSION['error'] = "Usuário desativado pelo administrador.";
    header("Location: /");
    exit;
}

/* criar sessão do usuário */

$_SESSION['usuario'] = [
    'id' => $usuario['id'],
    'nome' => $usuario['nome'],
    'perfil' => $usuario['perfil']
];

/* redirecionar para dashboard */

header("Location: /dashboard");
exit;