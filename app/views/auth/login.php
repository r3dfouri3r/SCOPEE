<?php 
$pageEstilo = "style.css";
include __DIR__ . '/../layout/header.php';

?>


<!-- Partículas -->
<canvas id="particles"></canvas>

<!-- SPLASH -->
<div class="section" id="splash">
  <div class="logo-circle">
    <img <?php echo $logo ?> alt="icon logo SCOPE">
  </div>
  <h1>SCOPE</h1>
  <div class="subtitle">Sistema de Controlo de Presença Escolar</div>
  <div class="progress-bar">
    <div class="progress" id="progress"></div>
  </div>
</div>

<!-- LOGIN -->
<div class="section hidden" id="login">
  <div class="login-container">
    <div class="login-header">
      <img <?php echo $logo ?> alt="icon logo SCOPE">
      <h2>SCOPE</h2>
      <p>Sistema de Controlo de Presença Escolar</p>
    </div>

<?php if(isset($_SESSION['error'])): ?>

<p style="color:red">
    <?= $_SESSION['error']; ?>
</p>

<?php unset($_SESSION['error']); ?>

<?php endif; ?>

  <form method="POST" action="<?= BASE_URL ?>login">
    <div class="input-group">
      <label>Utilizador</label>
      <i class="fa fa-user left-icon"></i>
      <input type="text" id="username" name="email" placeholder="Inserir e-mail">
    </div>

    <div class="input-group">
      <label>Palavra-Passe</label>
      <i class="fa fa-lock left-icon"></i>
      <input type="password" id="password" name="senha" placeholder="Palavra-passe">
      <i class="fa fa-eye right-icon" id="togglePassword"></i>
    </div>
<!--
    <div class="input-group">
      <label>Perfil</label>
      <i class="fa fa-user-tag left-icon"></i>
      <select id="perfilSelect">
        <option value="professor">Professor</option>
        <option value="coordenador">Coordenador</option>
        <option value="administrador">Administrador</option>
      </select>
    </div>
-->
    <button class="btn-login" type="submit">
      <i class="fa fa-right-to-bracket"></i> Entrar no Sistema
    </button>

</form>


    <div class="login-footer">© 2026 SCOPE — Todos os direitos reservados</div>
  </div>
</div>

<!-- PROCESSING -->
<div class="section hidden" id="processing">
  <div class="progress-bar">
    <div class="progress" id="progress2"></div>
  </div>
  <div class="loader"></div>
</div>


<?php 
$pageScript = "script.js";
include __DIR__ . '/../layout/rodape.php'; 

?>