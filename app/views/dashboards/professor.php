<?php 
$pageEstilo = "styleteach.css";
include __DIR__ . '/../layout/header.php';
?>

<button class="sb-toggle" onclick="toggleSb()"><i class="fa fa-bars"></i></button>
<div class="sidebar" id="sidebar">
  <div class="sb-brand">
    <div class="sb-logo">
      <img <?php echo $logo ?> alt="icon logo SCOPE" onerror="this.style.display='none'">
    </div>

    <div><div class="sb-name">SCOPE</div><div class="sb-role">Professor</div></div>
  </div>
  
  <nav class="sb-nav">
    <div class="nav-sec">Principal</div>
    <button class="nav-item active" id="nav-aula" onclick="ir('aula')"><i class="fa fa-chalkboard-user"></i>Aula Atual</button>
    <button class="nav-item" id="nav-presencas" onclick="ir('presencas')"><i class="fa fa-clipboard-list"></i>Lista de Presenças</button>
    <div class="nav-sec">Turma</div>
    <button class="nav-item" id="nav-historico" onclick="ir('historico')"><i class="fa fa-calendar-check"></i>Histórico</button>
    <button class="nav-item" id="nav-alunos" onclick="ir('alunos')"><i class="fa fa-users-rectangle"></i>Alunos da Turma</button>
    <div class="nav-sec">Registos</div>
    <button class="nav-item" id="nav-sumario" onclick="ir('sumario')"><i class="fa fa-book-open"></i>Sumário</button>
    <button class="nav-item" id="nav-ocorrencias" onclick="ir('ocorrencias')"><i class="fa fa-triangle-exclamation"></i>Ocorrências</button>
  </nav>
  <div class="sb-user">
    <div class="sb-av">PS</div>
    <div style="flex:1;min-width:0"><div class="sb-uname">Prof. Silva</div><div class="sb-urole">Professor</div></div>
    <button class="btn-logout" onclick="if(confirm('Terminar sessão?'))toast('Até logo!','tb')" title="Sair"><i class="fa fa-right-from-bracket"></i></button>
  </div>
</div>

<div class="main">
  <div class="topbar">
    <span class="tb-title" id="tbTitle">Aula Atual</span>
    <div class="tb-right">
      <div class="rfid-pill"><div class="rfid-dot"></div><span>Leitor Online</span></div>
      <span class="tb-date" id="tbDate"></span>
    </div>
  </div>
  <div class="page">

    <!-- AULA ATUAL -->
    <div class="view active" id="view-aula">
      <div class="hero">
        <div class="hero-top">
          <div>
            <div class="hero-badge"><span class="hero-dot"></span>AULA EM CURSO</div>
            <div class="hero-turma">12ª CFB</div>
            <div class="hero-disc">Ciências Físicas e Biológicas · 2025/2026</div>
          </div>
          <div class="hero-clock">
            <div class="hero-hora" id="hora">--:--</div>
            <div class="hero-hora-lbl">HORA ATUAL</div>
          </div>
        </div>
        <div class="hero-row">
          <div class="hero-info"><div class="hero-info-lbl">SALA</div><div class="hero-info-val">Sala 12</div></div>
          <div class="hero-info"><div class="hero-info-lbl">HORÁRIO</div><div class="hero-info-val">13:00 – 14:30</div></div>
          <div class="hero-info"><div class="hero-info-lbl">ANO LETIVO</div><div class="hero-info-val">2025 / 2026</div></div>
        </div>
      </div>
      <div class="stats-row">
        <div class="sc sg"><div class="sc-ic"><i class="fa fa-circle-check"></i></div><div><div class="sc-n" id="stP">0</div><div class="sc-l">Presentes</div></div></div>
        <div class="sc sy"><div class="sc-ic"><i class="fa fa-clock"></i></div><div><div class="sc-n" id="stAt">0</div><div class="sc-l">Atraso</div></div></div>
        <div class="sc sr"><div class="sc-ic"><i class="fa fa-circle-xmark"></i></div><div><div class="sc-n" id="stAu">7</div><div class="sc-l">Ausentes</div></div></div>
        <div class="sc sb"><div class="sc-ic"><i class="fa fa-chart-pie"></i></div><div><div class="sc-n" id="stT">0%</div><div class="sc-l">Taxa Presença</div></div></div>
      </div>
      <div class="grid2">
        <div class="card">
          <div class="ch">
            <span class="ct"><i class="fa fa-clipboard-list"></i>Lista de Presenças — 12ª CFB</span>
            <span class="cs" id="subA">0 de 7 registados</span>
          </div>
          <div class="cb"><div class="aluno-list" id="alunoList"></div></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div class="card">
            <div class="ch">
              <span class="ct"><i class="fa fa-tower-broadcast"></i>Leituras RFID</span>
              <span style="font-size:10px;color:var(--g);font-weight:700;display:flex;align-items:center;gap:4px"><span style="width:6px;height:6px;border-radius:50%;background:var(--g);display:inline-block;animation:pg 2s infinite"></span>LIVE</span>
            </div>
            <div class="cb">
              <div class="rfid-list" id="rfidList">
                <div class="rfid-empty" id="rfidEmpty"><i class="fa fa-tower-broadcast"></i>Aguardando leitura de cartão…</div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="ch"><span class="ct"><i class="fa fa-bolt"></i>Ações Rápidas</span></div>
            <div class="cb">
              <button class="btn-act prim" onclick="toast('Aula confirmada!','tg')"><i class="fa fa-circle-check"></i>Confirmar Aula</button>
              <button class="btn-act succ" onclick="if(confirm('Encerrar aula?'))toast('Aula encerrada. Dados guardados.','tb')"><i class="fa fa-flag-checkered"></i>Encerrar Aula</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LISTA DE PRESENÇAS -->
    <div class="view" id="view-presencas">
      <div class="card">
        <div class="ch">
          <span class="ct"><i class="fa fa-clipboard-list"></i>Lista de Presenças — 12ª CFB</span>
          <select class="fsel" id="discFilter">
            <option value="">Todas as disciplinas</option>
            <option>Matemática</option><option>Física</option><option>Língua Inglesa</option>
            <option>Língua Portuguesa</option><option>Biologia</option><option>Geologia</option>
            <option>Química</option><option>Empreendedorismo</option><option>Filosofia</option>
            <option>Geometria Descritiva</option><option>Educação Física</option>
          </select>
        </div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="ptable">
            <thead><tr><th>Nº</th><th>Aluno</th><th>% Presença</th><th>Presenças</th><th>Faltas</th><th>Atrasos</th><th>Estado</th></tr></thead>
            <tbody id="presBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- HISTÓRICO -->
    <div class="view" id="view-historico">
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center">
        <button class="filter-btn active" onclick="setF(this)">Semana</button>
        <button class="filter-btn" onclick="setF(this)">Mês</button>
        <button class="filter-btn" onclick="setF(this)">Trimestre</button>
        <button class="filter-btn" onclick="setF(this)">Ano</button>
        <select class="fsel"><option>Março 2026</option><option>Fevereiro 2026</option></select>
        <select class="fsel"><option>Todas as disciplinas</option></select>
        <button class="btn-act prim" style="width:auto;padding:6px 14px;margin:0;font-size:12px" onclick="toast('A exportar…','tb')"><i class="fa fa-download"></i>Exportar</button>
      </div>
      <div class="hist-stats">
        <div class="hs"><div class="hs-n" style="color:var(--bm)">12</div><div class="hs-l">Aulas</div></div>
        <div class="hs"><div class="hs-n" style="color:var(--g)">68</div><div class="hs-l">Presenças</div></div>
        <div class="hs"><div class="hs-n" style="color:var(--r)">16</div><div class="hs-l">Ausências</div></div>
        <div class="hs"><div class="hs-n" style="color:var(--y)">8</div><div class="hs-l">Atrasos</div></div>
        <div class="hs"><div class="hs-n" style="color:var(--bm)">81%</div><div class="hs-l">Média</div></div>
      </div>
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-calendar-check"></i>Histórico Detalhado</span></div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="htable">
            <thead><tr><th>Data</th><th>Hora</th><th>Disciplina</th><th>Presentes</th><th>Ausentes</th><th>Atrasos</th><th>Observações</th></tr></thead>
            <tbody id="histBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ALUNOS DA TURMA -->
    <div class="view" id="view-alunos">
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-users-rectangle"></i>Alunos — 12ª CFB (7 alunos)</span></div>
        <div class="cb"><div class="aluno-list" id="alunosTurma"></div></div>
      </div>
    </div>



    <!-- SUMÁRIO -->
    <div class="view" id="view-sumario">
      <div class="grid2">
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-pen-to-square"></i>Sumário da Aula</span><span class="cs" id="sumData"></span></div>
          <div class="cb">
            <div class="fg"><label class="fl">Disciplina</label><select class="fi" id="sumDisc"><option>Matemática</option><option>Física</option><option>Língua Inglesa</option><option>Língua Portuguesa</option><option>Biologia</option><option>Geologia</option><option>Química</option><option>Empreendedorismo</option><option>Filosofia</option><option>Geometria Descritiva</option><option>Educação Física</option></select></div>
            <div class="fg"><label class="fl">Sumário</label><textarea class="txa" style="height:120px" id="sumText" placeholder="Escreve o sumário da aula…"></textarea></div>
            <div class="fg"><label class="fl">Observações</label><textarea class="txa" id="sumObs" placeholder="Observações adicionais (opcional)…"></textarea></div>
            <button class="btn-act prim" onclick="guardarSum()"><i class="fa fa-floppy-disk"></i>Guardar Sumário</button>
          </div>
        </div>
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-clock-rotate-left"></i>Sumários Anteriores</span></div>
          <div id="sumHist"></div>
        </div>
      </div>
    </div>

    <!-- OCORRÊNCIAS -->
    <div class="view" id="view-ocorrencias">
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-triangle-exclamation"></i>Registar Ocorrência</span></div>
        <div class="cb">
          <div class="fg"><label class="fl">Aluno (opcional)</label>
            <select class="fi" id="ocAluno">
              <option value="">Toda a turma</option>
              <option>1 — Agnalda Kunjikisse Jelembi Vapor</option>
              <option>2 — Alexandre Fernando Monteiro Pereira</option>
              <option>3 — Domingos Caselo Kalwiji Samanjata</option>
              <option>4 — Haziel Simboyala Chitau Hamuyela Tchitavila</option>
              <option>5 — Larissa Fato Botelho</option>
              <option>6 — Luís Caison Zango Caica</option>
              <option>7 — Maria Da Conceição José Pena</option>
            </select>
          </div>
          <div class="fg"><label class="fl">Tipo</label>
            <select class="fi"><option>Comportamento</option><option>Advertência</option><option>Elogio</option><option>Outro</option></select>
          </div>
          <div class="fg"><label class="fl">Descrição</label>
            <textarea class="txa" id="ocText" style="height:100px" placeholder="Descreve a ocorrência…"></textarea>
          </div>
          <button class="btn-act prim" onclick="guardarOc()"><i class="fa fa-floppy-disk"></i>Guardar Ocorrência</button>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- MODAL -->
<div class="ov" id="modalEst">
  <div class="modal">
    <div class="mt" id="modalNome">Editar Estado</div>
    <div class="est-btns">
      <button class="eb" id="eb-presente" onclick="selE('presente')"><i class="fa fa-circle-check"></i>Presente</button>
      <button class="eb" id="eb-atraso" onclick="selE('atraso')"><i class="fa fa-clock"></i>Atraso</button>
      <button class="eb" id="eb-ausente" onclick="selE('ausente')"><i class="fa fa-circle-xmark"></i>Ausente</button>
    </div>
    <div class="mft">
      <button class="btn-c" onclick="closeM()">Cancelar</button>
      <button class="btn-s" onclick="saveM()">Guardar</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>
<div id="ov" onclick="toggleSb(false)" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:45"></div>

<?php 
$pageScript = "scripteach.js";
include __DIR__ . '/../layout/rodape.php'; 
?>
