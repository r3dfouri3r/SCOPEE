<?php

$routes = [

    'GET' => [

        '/' => __DIR__ . '/../controllers/auth/LoginController.php',

        'dashboard' => __DIR__ . '/../controllers/dashboards/DashboardController.php',

        'logout' => __DIR__ . '/../controllers/UsuarioController.php'

    ],

    'POST' => [

        'login' => __DIR__ . '/../controllers/auth/UsuarioController.php'

    ]

];