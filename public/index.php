<?php

session_start();

require_once __DIR__ . "/../app/core/router.php";

$method = $_SERVER['REQUEST_METHOD'];

$route = $_GET['route'] ?? '/';

$route = trim($route, '/');

if ($route == '') {
    $route = '/';
}

if (isset($routes[$method][$route])) {

    require $routes[$method][$route];

} else {

    require __DIR__ . '/../app/views/404.php';
}