<?php
// config/config.php

define('BASE_URL', '/scope/public');
define('APP_NAME', 'Sistema de Controle de Presença - SCOPE');
define('APP_VERSION', '1.0.0');

// MQTT - Home Assistant
define('HA_WEBHOOK_SECRET', '');
define('MQTT_TOPIC_PREFIX', 'escola/rfid/leitura');

// Tolerância de presença em minutos
define('PRESENCA_TOLERANCIA_MIN', 15);

// Sessão
session_name('sc_presenca_session');
session_start();

// Autoload helpers
require_once __DIR__ . '/../helpers/auth_helper.php';
require_once __DIR__ . '/../helpers/response_helper.php';
require_once __DIR__ . '/../helpers/date_helper.php';
