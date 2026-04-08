<?php 
$pageEstilo = "styleadmin.css";
include __DIR__ . '/../layout/header.php';
?>

<div class="sb-overlay" id="sbOv" onclick="closeSb()"></div>

<!-- SIDEBAR -->
<aside class="sb" id="sidebar">
  <div class="sb-brand">
    <div class="sb-logo">
      <img <?php echo $logo ?> alt="icon logo SCOPE" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="sb-logo-fb">S</div>
    </div>
    <div>
      <span class="sb-wordmark">SCOPE</span>
      <span class="sb-role">Administrador</span>
    </div>
  </div>
  <nav class="sb-nav">
    <div class="nav-sec">Principal</div>
    <button class="ni active" id="nav-painel" onclick="ir('painel')"><i class="fa fa-gauge-high"></i><span class="lbl">Visão Geral</span></button>
    <div class="nav-sec">Gestão Académica</div>
    <button class="ni" id="nav-turmas" onclick="ir('turmas')"><i class="fa fa-school"></i><span class="lbl">Turmas</span></button>
    <button class="ni" id="nav-disciplinas" onclick="ir('disciplinas')"><i class="fa fa-book-open"></i><span class="lbl">Disciplinas</span></button>
    <button class="ni" id="nav-cadastro" onclick="ir('cadastro')"><i class="fa fa-layer-group"></i><span class="lbl">Cadastro</span></button>
    <button class="ni" id="nav-horarios" onclick="ir('horarios')"><i class="fa fa-calendar-week"></i><span class="lbl">Horários</span></button>
    <button class="ni" id="nav-assiduidade" onclick="ir('assiduidade')"><i class="fa fa-user-check"></i><span class="lbl">Assiduidade</span></button>
    <button class="ni" id="nav-substituicoes" onclick="ir('substituicoes')"><i class="fa fa-arrows-rotate"></i><span class="lbl">Ausências e Cobertura</span><span class="nb-badge" id="nbSubs">1</span></button>
    <div class="nav-sec">Alunos</div>
    <button class="ni" id="nav-alunos" onclick="ir('alunos')"><i class="fa fa-user-graduate"></i><span class="lbl">Gestão de Alunos</span></button>
    <button class="ni" id="nav-rfid" onclick="ir('rfid')"><i class="fa fa-id-card"></i><span class="lbl">Cartões e Leitores RFID</span></button>
    <div class="nav-sec">Sistema</div>
    <button class="ni" id="nav-utilizadores" onclick="ir('utilizadores')"><i class="fa fa-users-gear"></i><span class="lbl">Utilizadores</span></button>
    <button class="ni" id="nav-configuracoes" onclick="ir('configuracoes')"><i class="fa fa-sliders"></i><span class="lbl">Configurações</span></button>
  </nav>
  <div class="sb-user">
    <div class="su-av" id="adminAv">JJ</div>
    <div style="flex:1;min-width:0">
      <div class="su-name" id="adminNome">Julisandra Jorge</div>
      <div class="su-role">Administrador · SCOPE</div>
    </div>
    <button class="btn-logout" onclick="sair()" title="Terminar sessão"><i class="fa fa-right-from-bracket"></i></button>
  </div>
</aside>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <button class="tb-ham" onclick="openSb()"><i class="fa fa-bars"></i></button>
    <span class="tb-title" id="tbTitle">Visão Geral</span>
    <div class="tb-right">
      <div class="chip"><i class="fa fa-shield-halved"></i><span class="ch-txt"> Admin · SCOPE</span></div>
      <span class="tb-date" id="tbDate"></span>
    </div>
  </div>

  <div class="page">

    <!--  VISÃO GERAL -->

    <div class="view active" id="view-painel">
      <div class="admin-banner">
        <div class="banner-inner">
          <div>
            <div style="font-size:22px;font-weight:800;margin-bottom:3px">Painel de Administração</div>
            <div style="font-size:13px;opacity:.75" id="bannerSub">—</div>
          </div>
          <div class="banner-kpis">
            <div class="banner-kpi"><div class="banner-kpi-n">7</div><div class="banner-kpi-l">Alunos</div></div>
            <div class="banner-kpi"><div class="banner-kpi-n">11</div><div class="banner-kpi-l">Professores</div></div>
            <div class="banner-kpi"><div class="banner-kpi-n">1</div><div class="banner-kpi-l">Turma</div></div>
            <div class="banner-kpi"><div class="banner-kpi-n" id="bkpiLeitores">2</div><div class="banner-kpi-l">Leitores RFID</div></div>
          </div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card c-b"><div class="stat-icon"><i class="fa fa-user-graduate"></i></div><div class="stat-val">7</div><div class="stat-label">Alunos Ativos</div></div>
        <div class="stat-card c-g"><div class="stat-icon"><i class="fa fa-tower-broadcast"></i></div><div class="stat-val" id="stLeitoresOn">1</div><div class="stat-label">Leitores Online</div></div>
        <div class="stat-card c-y"><div class="stat-icon"><i class="fa fa-id-card"></i></div><div class="stat-val" id="stRFIDHoje">14</div><div class="stat-label">Leituras Hoje</div></div>
        <div class="stat-card c-r"><div class="stat-icon"><i class="fa fa-bell"></i></div><div class="stat-val" id="stAlertas">2</div><div class="stat-label">Alertas Ativos</div></div>
      </div>

      <!-- Leitores RFID + Alertas -->
      <div class="g2">
        <!-- LEITORES RFID -->
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-tower-broadcast"></i>Leitores RFID</span>
            <button class="btn outline-b sm" onclick="ir('rfid')"><i class="fa fa-arrow-right"></i>Gerir</button>
          </div>
          <div class="card-body" style="display:flex;flex-direction:column;gap:10px" id="painelLeitores"></div>
        </div>
        <!-- ALERTAS -->
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-bell"></i>Alertas do Sistema</span>
            <span class="card-sub" id="alertasCount">—</span>
          </div>
          <div class="card-body" id="painelAlertas"></div>
        </div>
      </div>

      <!-- RFID Hoje + Atividades -->
      <div class="g2">
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-chart-bar"></i>Resumo RFID — Hoje</span>
            <button class="btn ghost sm" onclick="ir('rfid')"><i class="fa fa-list"></i>Ver Tudo</button>
          </div>
          <div class="card-body" id="rfidResumo"></div>
        </div>
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-clock-rotate-left"></i>Atividades Recentes</span>
            <button class="btn ghost sm" onclick="ir('utilizadores')">Ver Logs</button>
          </div>
          <div class="card-body" id="feedAtividades"></div>
        </div>
      </div>
    </div>

    <!-- TURMAS -->
    <div class="view" id="view-turmas">
      <div class="ph">
        <div>
          <div class="page-title">Gestão de Turmas</div>
          <div class="page-sub">Gerir turmas, coordenadores e alunos associados</div>
        </div>
        <div class="ph-actions">
          <button class="btn ghost sm"><i class="fa fa-download"></i>Exportar</button>
          <button class="btn primary" onclick="openModal('modalTurma','novo')"><i class="fa fa-plus"></i>Nova Turma</button>
        </div>
      </div>
      <div class="filter-bar">
        <button class="filter-pill active" onclick="setFPill(this,'todos')">Todas</button>
        <button class="filter-pill" onclick="setFPill(this,'ativa')">Ativas</button>
        <button class="filter-pill" onclick="setFPill(this,'inativa')">Inativas</button>
        <select class="fsel"><option>Todos os turnos</option><option>Tarde</option><option>Manhã</option></select>
        <div class="search-bar" style="flex:1;max-width:280px">
          <i class="fa fa-magnifying-glass"></i>
          <input type="text" placeholder="Pesquisar turma…" oninput="filterTurmas(this.value)">
        </div>
      </div>
      <div class="card">
        <div class="card-body np">
          <div class="tbl-wrap"><table class="tbl" id="tblTurmas">
            <thead><tr><th>ID</th><th>Nome</th><th>Classe</th><th>Turno</th><th>Curso</th><th>Sala</th><th>Alunos</th><th>Status</th><th style="min-width:160px">Operações</th></tr></thead>
            <tbody id="tblTurmasBody"></tbody>
          </table></div>
        </div>
      </div>
    </div>

    <!-- DISCIPLINAS -->
    <div class="view" id="view-disciplinas">
      <div class="ph">
        <div><div class="page-title">Disciplinas</div><div class="page-sub">Registo de disciplinas, professores e carga horária</div></div>
        <div class="ph-actions">
          <button class="btn primary" onclick="openModal('modalDisc','novo')"><i class="fa fa-plus"></i>Nova Disciplina</button>
        </div>
      </div>
      <div class="filter-bar">
        <div class="search-bar" style="flex:1;max-width:320px">
          <i class="fa fa-magnifying-glass"></i>
          <input type="text" placeholder="Pesquisar disciplina ou professor…" oninput="filterDiscs(this.value)">
        </div>
      </div>
      <div class="card">
        <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>ID</th><th>Disciplina</th><th>Professor</th><th>Carga Horária</th><th>Turma(s)</th><th>Status</th><th>Operações</th></tr></thead>
          <tbody id="tblDiscsBody"></tbody>
        </table></div></div>
      </div>
    </div>

    <!-- CADASTRO -->
    <div class="view" id="view-cadastro">
      <div class="ph">
        <div><div class="page-title">Cadastro</div><div class="page-sub">Classes, cursos, turnos e salas do sistema</div></div>
      </div>
      <div class="g2">
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-layer-group"></i>Classes</span>
            <button class="btn primary sm" onclick="openModal('modalClasse','novo')"><i class="fa fa-plus"></i>Nova</button>
          </div>
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>ID</th><th>Nome</th><th>Curso</th><th>Operações</th></tr></thead>
            <tbody id="tblClassesBody"></tbody>
          </table></div></div>
        </div>
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-graduation-cap"></i>Cursos</span>
            <button class="btn primary sm" onclick="openModal('modalCurso','novo')"><i class="fa fa-plus"></i>Novo</button>
          </div>
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>ID</th><th>Nome do Curso</th><th>Operações</th></tr></thead>
            <tbody id="tblCursosBody"></tbody>
          </table></div></div>
        </div>
      </div>
      <div class="g2">
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-clock"></i>Turnos</span>
            <button class="btn primary sm" onclick="openModal('modalPeriodo','novo')"><i class="fa fa-plus"></i>Novo</button>
          </div>
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>ID</th><th>Nome</th><th>Horário</th><th>Operações</th></tr></thead>
            <tbody id="tblPeriodosBody"></tbody>
          </table></div></div>
        </div>
        <div class="card" style="margin-bottom:0">
          <div class="card-header">
            <span class="card-title"><i class="fa fa-door-open"></i>Salas</span>
            <button class="btn primary sm" onclick="openModal('modalSala','novo')"><i class="fa fa-plus"></i>Nova</button>
          </div>
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>ID</th><th>Sala</th><th>Capacidade</th><th>RFID</th><th>Operações</th></tr></thead>
            <tbody id="tblSalasBody"></tbody>
          </table></div></div>
        </div>
      </div>
    </div>

    <!-- HORÁRIOS — com filtro por turma/professor -->
    <div class="view" id="view-horarios">
      <div class="ph">
        <div><div class="page-title">Horários</div><div class="page-sub">Grelha semanal</div></div>
        <div class="ph-actions">
          <button class="btn ghost sm"><i class="fa fa-download"></i>Exportar</button>
          <button class="btn primary sm" onclick="openModal('modalAula','novo')"><i class="fa fa-plus"></i>Adicionar Aula</button>
        </div>
      </div>
      <div class="horario-filter card" style="margin-bottom:8px">
        <div class="card-body" style="padding:10px 16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
          <div style="display:flex;align-items:center;gap:6px;font-size:11px;font-weight:700;color:var(--s500)"><i class="fa fa-filter" style="color:var(--b)"></i>Filtrar:</div>
          <select class="fsel" id="hFiltroTurma" onchange="buildHorario()">
            <option value="">Todas as turmas</option>
            <option value="12CFB">12ª CFB</option>
          </select>
          <select class="fsel" id="hFiltroProf" onchange="buildHorario()">
            <option value="">Todos os professores</option>
          </select>
          <div style="margin-left:auto;display:flex;gap:14px;flex-wrap:wrap;font-size:11px;color:var(--s600)">
            <span><i class="fa fa-clock" style="color:var(--b);margin-right:4px"></i>1º: 13:00–13:45</span>
            <span><i class="fa fa-clock" style="color:var(--b);margin-right:4px"></i>2º: 13:45–14:30</span>
            <span style="color:var(--y)"><i class="fa fa-bell" style="margin-right:4px"></i>Intervalo: 14:30–14:45</span>
            <span><i class="fa fa-clock" style="color:var(--b);margin-right:4px"></i>3º/4º: 14:45–16:15</span>
            <span style="color:var(--y)"><i class="fa fa-bell" style="margin-right:4px"></i>Intervalo: 16:15–16:30</span>
            <span><i class="fa fa-clock" style="color:var(--b);margin-right:4px"></i>5º/6º: 16:30–18:00</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body" style="overflow-x:auto;padding:10px 16px 16px">
          <div id="horarioGrid" style="display:grid;grid-template-columns:64px repeat(6,1fr);gap:3px;min-width:700px;font-size:11px"></div>
        </div>
      </div>
    </div>

    <!-- ASSIDUIDADE -->
    <div class="view" id="view-assiduidade">
      <div class="ph">
        <div><div class="page-title">Assiduidade</div><div class="page-sub">Registos de presença, validação e classificação</div></div>
        <div class="ph-actions">
          <button class="btn ghost sm"><i class="fa fa-download"></i>Exportar</button>
          <button class="btn primary sm" onclick="openModal('modalAssid','novo')"><i class="fa fa-plus"></i>Registar</button>
        </div>
      </div>
      <div class="filter-bar">
        <button class="filter-pill active" onclick="setFPill(this,'todos')">Todos</button>
        <button class="filter-pill" onclick="setFPill(this,'assiduo')"><span class="dot g" style="margin-right:4px"></span>Presente Assíduo</button>
        <button class="filter-pill" onclick="setFPill(this,'atrasado')"><span class="dot y" style="margin-right:4px"></span>Presente Atrasado</button>
        <button class="filter-pill" onclick="setFPill(this,'falta')"><span class="dot r" style="margin-right:4px"></span>Falta</button>
        <select class="fsel" id="assidTurmaFil"><option>12ª CFB</option></select>
        <input type="date" class="fsel" id="assidDataFil">
      </div>
      <div class="card">
        <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>ID</th><th>Aluno</th><th>Turma</th><th>Data</th><th>Hora Entrada</th><th>Estado</th><th>Validado</th><th>Operações</th></tr></thead>
          <tbody id="tblAssidBody"></tbody>
        </table></div></div>
      </div>
    </div>

    <!-- AUSÊNCIAS E COBERTURA -->
    <div class="view" id="view-substituicoes">
      <div class="ph">
        <div><div class="page-title">Ausências e Cobertura</div><div class="page-sub">Gerir ausências de professores e cobertura de aulas</div></div>
        <button class="btn primary" onclick="openModal('modalSub','novo')"><i class="fa fa-plus"></i>Registar</button>
      </div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="stat-card c-r"><div class="stat-icon"><i class="fa fa-circle-xmark"></i></div><div class="stat-val" id="stSemProfSubs">1</div><div class="stat-label">Sem Prof.</div></div>
        <div class="stat-card c-b"><div class="stat-icon"><i class="fa fa-arrows-rotate"></i></div><div class="stat-val">0</div><div class="stat-label">Com Substituto</div></div>
        <div class="stat-card c-y"><div class="stat-icon"><i class="fa fa-ban"></i></div><div class="stat-val">0</div><div class="stat-label">Canceladas</div></div>
      </div>
      <div class="card">
        <div class="card-header"><span class="card-title"><i class="fa fa-triangle-exclamation"></i>Aulas Pendentes de Cobertura</span></div>
        <div class="card-body" id="listaSubs"></div>
      </div>
    </div>

    <!-- GESTÃO DE ALUNOS -->
    <div class="view" id="view-alunos">
      <div class="ph">
        <div><div class="page-title">Gestão de Alunos</div><div class="page-sub">Cadastro, transferências e gestão de estado dos alunos</div></div>
        <div class="ph-actions">
          <button class="btn ghost sm"><i class="fa fa-download"></i>Exportar</button>
          <button class="btn primary" onclick="openModal('modalAluno','novo')"><i class="fa fa-plus"></i>Novo Aluno</button>
        </div>
      </div>
      <div class="filter-bar">
        <button class="filter-pill active" onclick="setFPill(this,'todos')">Todos</button>
        <button class="filter-pill" onclick="setFPill(this,'ativo')">Ativos</button>
        <button class="filter-pill" onclick="setFPill(this,'inativo')">Inativos</button>
        <button class="filter-pill" onclick="setFPill(this,'transferido')">Transferidos</button>
        <select class="fsel"><option>12ª CFB</option></select>
        <div class="search-bar" style="flex:1;max-width:280px">
          <i class="fa fa-magnifying-glass"></i>
          <input type="text" placeholder="Nome, nº processo…" oninput="filterAlunos(this.value)">
        </div>
      </div>
      <div class="card">
        <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
          <thead><tr><th>ID</th><th>Nome</th><th>Turma</th><th>Curso</th><th>Classe</th><th>Cartão RFID</th><th>Status</th><th>Operações</th></tr></thead>
          <tbody id="tblAlunosBody"></tbody>
        </table></div></div>
      </div>
    </div>

    <!-- CARTÕES E LEITORES RFID -->
    <div class="view" id="view-rfid">
      <!-- Tab row -->
      <div style="display:flex;gap:2px;margin-bottom:14px;background:var(--s100);border-radius:var(--r10);padding:3px;width:fit-content">
        <button class="filter-pill active" id="rtab-cartoes" onclick="setRtab('cartoes',this)" style="border-radius:var(--r8)">Cartões RFID</button>
        <button class="filter-pill" id="rtab-leitores" onclick="setRtab('leitores',this)" style="border-radius:var(--r8)">Leitores</button>
        <button class="filter-pill" id="rtab-historico" onclick="setRtab('historico',this)" style="border-radius:var(--r8)">Histórico de Leituras</button>
      </div>

      <!-- Cartões -->
      <div id="rt-cartoes">
        <div class="ph">
          <div><div class="page-title">Cartões RFID</div><div class="page-sub">Associação e gestão de cartões por aluno</div></div>
          <button class="btn primary" onclick="openModal('modalCartao','novo')"><i class="fa fa-id-card"></i>Associar Cartão</button>
        </div>
        <div class="filter-bar">
          <button class="filter-pill active" onclick="setFPill(this,'todos')">Todos</button>
          <button class="filter-pill" onclick="setFPill(this,'ativo')"><span class="dot g" style="margin-right:4px"></span>Ativos</button>
          <button class="filter-pill" onclick="setFPill(this,'inativo')"><span class="dot r" style="margin-right:4px"></span>Inativos</button>
          <button class="filter-pill" onclick="setFPill(this,'sem_cartao')"><span class="dot s" style="margin-right:4px"></span>Sem Cartão</button>
          <div class="search-bar" style="flex:1;max-width:260px">
            <i class="fa fa-magnifying-glass"></i>
            <input type="text" placeholder="UID ou nome do aluno…">
          </div>
        </div>
        <div class="card">
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>Proc.</th><th>Aluno</th><th>UID do Cartão</th><th>Turma</th><th>Status</th><th>Operações</th></tr></thead>
            <tbody id="tblRFIDBody"></tbody>
          </table></div></div>
        </div>
      </div>

      <!-- Leitores -->
      <div id="rt-leitores" style="display:none">
        <div class="ph">
          <div><div class="page-title">Leitores RFID</div><div class="page-sub">Estado, configuração e monitorização dos leitores instalados</div></div>
          <button class="btn primary" onclick="openModal('modalLeitor','novo')"><i class="fa fa-plus"></i>Novo Leitor</button>
        </div>
        <div id="leitoresGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px"></div>
      </div>

      <!-- Histórico -->
      <div id="rt-historico" style="display:none">
        <div class="ph">
          <div><div class="page-title">Histórico de Leituras</div><div class="page-sub">Registo completo de entradas e saídas via RFID</div></div>
          <button class="btn ghost sm"><i class="fa fa-download"></i>Exportar</button>
        </div>
        <div class="filter-bar">
          <select class="fsel"><option>Todos os leitores</option><option>RFID-01 — Lab. Ciências</option><option>RFID-02 — Sala 12</option></select>
          <input type="date" class="fsel" id="histRfidData">
        </div>
        <div class="card">
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>Data/Hora</th><th>Aluno</th><th>UID</th><th>Leitor</th><th>Estado</th></tr></thead>
            <tbody id="tblHistRfidBody"></tbody>
          </table></div></div>
        </div>
      </div>
    </div>

    <!-- UTILIZADORES -->
    <div class="view" id="view-utilizadores">
      <div class="ph">
        <div><div class="page-title">Gestão de Utilizadores</div><div class="page-sub">Perfis, permissões e registos de acesso</div></div>
        <button class="btn primary" onclick="openModal('modalUser','novo')"><i class="fa fa-plus"></i>Novo Utilizador</button>
      </div>
      <div style="display:flex;gap:2px;margin-bottom:14px;background:var(--s100);border-radius:var(--r10);padding:3px;width:fit-content">
        <button class="filter-pill active" id="utab-contas" onclick="setUtab('contas',this)" style="border-radius:var(--r8)">Contas</button>
        <button class="filter-pill" id="utab-perms" onclick="setUtab('perms',this)" style="border-radius:var(--r8)">Permissões</button>
        <button class="filter-pill" id="utab-logs" onclick="setUtab('logs',this)" style="border-radius:var(--r8)">Logs de Acesso</button>
      </div>
      <div id="ut-contas">
        <div class="card">
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>ID</th><th>Nome</th><th>Perfil</th><th>Último Acesso</th><th>Status</th><th>Operações</th></tr></thead>
            <tbody id="tblUsersBody"></tbody>
          </table></div></div>
        </div>
      </div>
      <div id="ut-perms" style="display:none">
        <div class="card">
          <div class="card-header"><span class="card-title"><i class="fa fa-shield-halved"></i>Matriz de Permissões por Perfil</span></div>
          <div class="card-body">
            <div style="display:grid;grid-template-columns:1fr repeat(3,80px);gap:0;margin-bottom:4px">
              <div></div>
              <div class="perm-head">Admin</div>
              <div class="perm-head">Coord.</div>
              <div class="perm-head">Prof.</div>
            </div>
            <div id="permMatrix"></div>
          </div>
        </div>
      </div>
      <div id="ut-logs" style="display:none">
        <div class="filter-bar">
          <select class="fsel"><option>Todos os utilizadores</option><option>Julisandra Jorge</option><option>Arnásio Mavunda</option><option>Jorgina Ferreira</option></select>
          <select class="fsel"><option>Todos os tipos</option><option>Login</option><option>Logout</option><option>Criar</option><option>Atualizar</option><option>Eliminar</option></select>
          <input type="date" class="fsel">
        </div>
        <div class="card">
          <div class="card-body np"><div class="tbl-wrap"><table class="tbl">
            <thead><tr><th>Data/Hora</th><th>Utilizador</th><th>Tipo</th><th>Descrição</th><th>IP</th></tr></thead>
            <tbody id="tblLogsBody"></tbody>
          </table></div></div>
        </div>
      </div>
    </div>

    <!-- CONFIGURAÇÕES -->
    <div class="view" id="view-configuracoes">
      <div class="ph" style="margin-bottom:16px">
        <div><div class="page-title">Configurações</div><div class="page-sub">Parâmetros globais do sistema SCOPE</div></div>
      </div>
      <div class="g2">
        <div class="conf-card">
          <h3><i class="fa fa-clock"></i>Regras de Presença</h3>
          <p>Critérios automáticos de assiduidade dos alunos</p>
          <div class="fg"><label class="fl"><i class="fa fa-clock" style="color:var(--g);margin-right:4px"></i>Hora Limite — Presente</label><input type="time" class="fi" value="13:10"></div>
          <div class="fg" style="margin-top:10px"><label class="fl"><i class="fa fa-clock" style="color:var(--y);margin-right:4px"></i>Hora Limite — Atraso</label><input type="time" class="fi" value="13:30"></div>
          <div class="fg" style="margin-top:10px"><label class="fl"><i class="fa fa-percent" style="color:var(--b);margin-right:4px"></i>% Mínima de Assiduidade</label><input type="number" class="fi" value="75" min="0" max="100"></div>
          <button class="btn primary conf-save" onclick="showToast('Regras de presença guardadas','tg')"><i class="fa fa-floppy-disk"></i>Guardar Regras</button>
        </div>
     
        <div class="conf-card">
          <h3><i class="fa fa-school"></i>Informações da Escola</h3>
          <p>Dados institucionais usados em documentos e relatórios</p>
          <div class="fg"><label class="fl">Nome da Escola</label><input type="text" class="fi" value="Escola Politécnica do Huambo"></div>
          <div class="fg" style="margin-top:10px"><label class="fl">Ano Letivo</label><input type="text" class="fi" value="2025/2026"></div>
          <div class="fg" style="margin-top:10px"><label class="fl">Morada</label><input type="text" class="fi" value=" Rua Vicente Ferreira 60-64 -Cidade Baixa, Huambo, Angola"></div>
          <button class="btn primary conf-save" onclick="showToast('Informações da escola guardadas','tg')"><i class="fa fa-floppy-disk"></i>Guardar</button>
        </div>
      </div>
      <div class="g2">
        <div class="conf-card">
          <h3><i class="fa fa-bell"></i>Notificações Automáticas</h3>
          <p>Alertas enviados automaticamente pelo sistema</p>
          <div class="fg"><label class="fl"><i class="fa fa-envelope" style="color:var(--b);margin-right:4px"></i>Email do Coordenador</label><input type="email" class="fi" placeholder="coordenador@EPH.ao"></div>
          <div class="fg" style="margin-top:10px"><label class="fl"><i class="fa fa-triangle-exclamation" style="color:var(--r);margin-right:4px"></i>Alerta de Faltas (Nº)</label><input type="number" class="fi" value="5" min="1"></div>
          <div class="fg" style="margin-top:10px"><label class="fl">Método de Notificação</label>
            <select class="fi"><option>Email</option><option>Notificação no sistema</option><option>Ambos</option></select>
          </div>
          <button class="btn primary conf-save" onclick="showToast('Notificações configuradas','tg')"><i class="fa fa-floppy-disk"></i>Guardar</button>
        </div>
        <div class="conf-card">
          <h3><i class="fa fa-gear"></i>Manutenção do Sistema</h3>
          <p>Operações técnicas e de manutenção do SCOPE</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <button class="btn ghost" style="width:100%;justify-content:center" onclick="showToast('Cache limpo com sucesso','tg')"><i class="fa fa-broom"></i>Limpar Cache</button>
            <button class="btn outline-b" style="width:100%;justify-content:center" onclick="showToast('A exportar backup…','tb')"><i class="fa fa-database"></i>Exportar Backup</button>
            <div style="height:1px;background:var(--s100);margin:4px 0"></div>
            <button class="btn danger" style="width:100%;justify-content:center" onclick="confirmReset()"><i class="fa fa-rotate-left"></i>Reset Dados do Dia</button>
            <p style="font-size:11px;color:var(--s400);text-align:center"><i class="fa fa-triangle-exclamation" style="color:var(--y);margin-right:3px"></i>Apaga registos temporários do dia atual</p>
          </div>
        </div>
      </div>
      <!-- Sobre o Sistema -->
      <div class="card">
        <div class="card-header"><span class="card-title"><i class="fa fa-circle-info"></i>Sobre o SCOPE</span></div>
        <div class="card-body">
          <div class="g2" style="margin-bottom:0">
            <div>
              <div style="font-size:16px;font-weight:800;color:var(--b);letter-spacing:2px;margin-bottom:4px">SCOPE</div>
              <div style="font-size:11px;color:var(--s500);margin-bottom:12px">Sistema de Controlo de Presença Escolare</div>
              <div style="display:flex;flex-direction:column;gap:6px;font-size:12px">
                <div style="display:flex;gap:6px"><span style="color:var(--s400);width:100px">Versão</span><strong>1.0.0</strong></div>
                <div style="display:flex;gap:6px"><span style="color:var(--s400);width:100px">Ano Letivo</span><strong>2025/2026</strong></div>
                <div style="display:flex;gap:6px"><span style="color:var(--s400);width:100px">Escola</span><strong>Escola Politécnica do Huambo</strong></div>
                <div style="display:flex;gap:6px"><span style="color:var(--s400);width:100px">Tecnologia</span><strong>HTML5 · CSS3 · JavaScript · RFID</strong></div>
              </div>
            </div>
            <div>
              <div style="font-size:11px;font-weight:700;color:var(--s400);text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">Equipa de Desenvolvimento</div>
              <div style="display:flex;flex-direction:column;gap:8px">
                <div class="av-row"><div class="av" style="background:#2563eb">AM</div><div class="ai"><div class="an">Arnásio Mavunda</div><div class="asub">Desenvolvimento Full-stack</div></div></div>
                <div class="av-row"><div class="av" style="background:#7c3aed">JF</div><div class="ai"><div class="an">Jorgina Ferreira</div><div class="asub">Desenvolvimento Full-stack</div></div></div>
                <div class="av-row"><div class="av" style="background:#0891b2">JJ</div><div class="ai"><div class="an">Julisandra Jorge</div><div class="asub">Desenvolvimento Full-stack</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div> <!-- /page -->

  <!-- FOOTER -->
  <div class="page-footer">
    <span class="footer-copy">© 2026 SCOPE - Todos os direitos reservados</span> 
  </div>
</div> <!-- /main -->

<!-- MODALS  -->

<!-- MODAL TURMA -->
<div class="overlay" id="modalTurma">
  <div class="modal">
    <div class="modal-head"><h3><i class="fa fa-school"></i><span id="mTurmaTitle">Nova Turma</span></h3><button class="modal-close" onclick="closeModal('modalTurma')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="fg"><label class="fl">Nome da Turma</label><input type="text" class="fi" id="tNome" placeholder="Ex: 12ª CFB"></div>
        <div class="fg"><label class="fl">Classe</label><select class="fi" id="tClasse"><option>10ª Classe</option><option>11ª Classe</option><option>12ª Classe</option><option>13ª Classe</option></select></div>
        <div class="fg"><label class="fl">Curso</label>
          <select class="fi" id="tCurso">
            <option>Ciências Físicas e Biológicas</option>
            <option>Ciências Económicas e Jurídicas</option>
            <option>Curso Técnico de Informática</option>
            <option>Contabilidade e Gestão</option>
            <option>Obras de Construção Civil</option>
            <option>Eletrónica</option>
          </select>
        </div>
        <div class="fg"><label class="fl">Turno</label><select class="fi" id="tPeriodo"><option>Tarde</option><option>Manhã</option></select></div>
        <div class="fg"><label class="fl">Sala Principal</label><input type="text" class="fi" id="tSala" placeholder="Ex: Sala 12"></div>
        <div class="fg"><label class="fl">Ano Letivo</label><input type="text" class="fi" id="tAno" value="2025/2026"></div>
        <div class="fg span2"><label class="fl">Status</label><select class="fi" id="tStatus"><option value="ativa">Ativa</option><option value="inativa">Inativa </option></select></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalTurma')">Cancelar</button>
      <button class="btn primary" onclick="saveTurma()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<!-- MODAL DISCIPLINA -->
<div class="overlay" id="modalDisc">
  <div class="modal">
    <div class="modal-head"><h3><i class="fa fa-book-open"></i><span id="mDiscTitle">Nova Disciplina</span></h3><button class="modal-close" onclick="closeModal('modalDisc')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="fg span2"><label class="fl">Nome da Disciplina</label><input type="text" class="fi" id="dNome" placeholder="Ex: Matemática"></div>
        <div class="fg"><label class="fl">Professor Responsável</label><select class="fi" id="dProf"><option value="">Selecionar...</option></select></div>
        <div class="fg"><label class="fl">Carga Horária (h/semana)</label><input type="number" class="fi" id="dCarga" placeholder="Ex: 4" min="1" max="20"></div>
        <div class="fg"><label class="fl">Turma</label><select class="fi" id="dTurma"><option>12ª CFB</option></select></div>
        <div class="fg"><label class="fl">Status</label><select class="fi" id="dStatus"><option value="ativa">Ativa</option><option value="inativa">Inativa</option></select></div>
      </div>
      <div style="background:var(--bp);border-radius:var(--r8);padding:8px 12px;font-size:11px;color:var(--b);margin-top:10px"><i class="fa fa-circle-info" style="margin-right:5px"></i>Um professor pode ser associado a disciplinas em múltiplas turmas.</div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalDisc')">Cancelar</button>
      <button class="btn primary" onclick="saveDisc()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<!-- MODAL ALUNO -->
<div class="overlay" id="modalAluno">
  <div class="modal wide">
    <div class="modal-head"><h3><i class="fa fa-user-graduate"></i><span id="mAlunoTitle">Novo Aluno</span></h3><button class="modal-close" onclick="closeModal('modalAluno')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="fg"><label class="fl">Nº Ordem</label><input type="number" class="fi" id="aOrd" placeholder="Ex: 8"></div>
        <div class="fg"><label class="fl">Nº Processo</label><input type="text" class="fi" id="aProc" placeholder="Ex: 3000"></div>
        <div class="fg span2"><label class="fl">Nome Completo</label><input type="text" class="fi" id="aNome" placeholder="Nome completo do aluno"></div>
        <div class="fg"><label class="fl">Turma</label><select class="fi" id="aTurma"><option value="12CFB">12ª CFB</option></select></div>
        <div class="fg"><label class="fl">Classe</label><select class="fi" id="aClasse"><option>12ª Classe</option><option>11ª Classe</option></select></div>
        <div class="fg"><label class="fl">Curso</label>
          <select class="fi" id="aCurso">
            <option>Ciências Físicas e Biológicas</option>
            <option>Ciências Económicas e Jurídicas</option>
            <option>Curso Técnico de Informática</option>
            <option>Contabilidade e Gestão</option>
            <option>Obras de Construção Civil</option>
            <option>Eletrónica</option>
          </select>
        </div>
        <div class="fg"><label class="fl">Status</label><select class="fi" id="aStatus"><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></div>
        <div class="fg span2"><label class="fl">UID Cartão RFID (opcional)</label><input type="text" class="fi" id="aRfid" placeholder="Ex: A4:3F:BC:01"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalAluno')">Cancelar</button>
      <button class="btn primary" onclick="saveAluno()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<!-- MODAL UTILIZADOR -->
<div class="overlay" id="modalUser">
  <div class="modal">
    <div class="modal-head"><h3><i class="fa fa-user-gear"></i><span id="mUserTitle">Novo Utilizador</span></h3><button class="modal-close" onclick="closeModal('modalUser')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="form-grid">
        <div class="fg span2"><label class="fl">Nome Completo</label><input type="text" class="fi" id="uNome" placeholder="Nome do utilizador"></div>
        <div class="fg"><label class="fl">Nome de Utilizador</label><input type="text" class="fi" id="uUsername" placeholder="Ex: jferrer"></div>
        <div class="fg"><label class="fl">Email</label><input type="email" class="fi" id="uEmail" placeholder="email@EPH.ao"></div>
        <div class="fg"><label class="fl">Perfil</label><select class="fi" id="uPerfil"><option value="admin">Administrador</option><option value="coordenador">Coordenador</option><option value="professor">Professor</option></select></div>
        <div class="fg"><label class="fl">Status</label><select class="fi" id="uStatus"><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></div>
        <div class="fg span2"><label class="fl">Password Temporária</label><input type="password" class="fi" id="uPass" placeholder="Mínimo 8 caracteres"></div>
      </div>
      <div style="background:var(--bp);border-radius:var(--r8);padding:9px 12px;font-size:11px;color:var(--b);margin-top:10px"><i class="fa fa-circle-info" style="margin-right:5px"></i>O utilizador deverá alterar a password no primeiro acesso.</div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalUser')">Cancelar</button>
      <button class="btn primary" onclick="saveUser()"><i class="fa fa-floppy-disk"></i>Criar Conta</button>
    </div>
  </div>
</div>

<!-- MODAL SUBSTITUIÇÃO -->
<div class="overlay" id="modalSub">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-arrows-rotate"></i>Registar Ausência / Cobertura</h3><button class="modal-close" onclick="closeModal('modalSub')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Aula</label>
        <select class="fi" id="subAula">
          <option value="">Selecionar aula…</option>
          <option>Matemática — Seg 13:00–14:30 (Alberto)</option>
          <option>Física — Qui 14:45–16:15 (Euclides)</option>
          <option>Língua Inglesa — Sex 13:00–13:45 (Jelson)</option>
          <option>Língua Portuguesa — Sex 13:45–14:30 (A. Chipaco)</option>
          <option>Biologia — Seg 14:45–16:15 (A. Gourgel)</option>
          <option>Geologia — Ter 14:45–16:15 (Margarido)</option>
          <option>Química — Qua 14:45–16:15 (Beatriz)</option>
          <option>Filosofia — Qui 16:30–18:00 (João Cassoma)</option>
          <option>Ed. Física — Sex 08:00 (Edgar Somak)</option>
        </select>
      </div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">Data</label><input type="date" class="fi" id="subData"></div>
        <div class="fg"><label class="fl">Ação</label>
          <select class="fi" id="subAcao" onchange="toggleSubAcao(this.value)">
            <option value="sem_prof">Marcar Sem Professor</option>
            <option value="substituto">Definir Substituto</option>
            <option value="cancelar">Cancelar Aula</option>
          </select>
        </div>
      </div>
      <div id="subDiv" style="display:none;margin-top:10px">
        <div class="fg"><label class="fl">Professor Substituto</label>
          <select class="fi" id="subProf">
            <option value="">Selecionar…</option>
            <option>Alberto</option><option>Euclides</option><option>Jelson</option>
            <option>A. Chipaco</option><option>A. Gourgel</option><option>Margarido</option>
            <option>Beatriz</option><option>Madaleno</option><option>João Cassoma</option>
            <option>L. Magalhães</option><option>Edgar Somak</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalSub')">Cancelar</button>
      <button class="btn primary" onclick="saveSub()"><i class="fa fa-check"></i>Registar</button>
    </div>
  </div>
</div>

<!-- MODAL CARTÃO RFID -->
<div class="overlay" id="modalCartao">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-id-card"></i>Gerir Cartão RFID</h3><button class="modal-close" onclick="closeModal('modalCartao')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Aluno</label><select class="fi" id="cAluno"><option value="">Selecionar aluno…</option></select></div>
      <div class="fg" style="margin-top:10px"><label class="fl">UID do Cartão</label><input type="text" class="fi" id="cUID" placeholder="Ex: A4:3F:BC:01"></div>
      <div class="fg" style="margin-top:10px"><label class="fl">Ação</label>
        <select class="fi" id="cAcao">
          <option value="associar">Associar Novo Cartão</option>
          <option value="substituir">Substituir Cartão</option>
          <option value="desativar">Desativar Cartão</option>
        </select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalCartao')">Cancelar</button>
      <button class="btn primary" onclick="saveCartao()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<!-- MODAL LEITOR -->
<div class="overlay" id="modalLeitor">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-tower-broadcast"></i>Novo Leitor RFID</h3><button class="modal-close" onclick="closeModal('modalLeitor')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Nome / Localização</label><input type="text" class="fi" id="lNome" placeholder="Ex: Laboratório de Ciências"></div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">ID do Leitor</label><input type="text" class="fi" id="lId" placeholder="Ex: RFID-03"></div>
        <div class="fg"><label class="fl">Sala Associada</label><select class="fi" id="lSala"><option>Sala 12</option><option>Sala 10</option><option>Lab. Ciências</option><option>Sala 12</option><option>Alpendre</option></select></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalLeitor')">Cancelar</button>
      <button class="btn primary" onclick="saveLeitor()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<!-- MODAL VER TURMA -->
<div class="overlay" id="modalVerTurma">
  <div class="modal wide">
    <div class="modal-head"><h3><i class="fa fa-school"></i><span id="vTurmaTitulo">12ª CFB — Detalhes</span></h3><button class="modal-close" onclick="closeModal('modalVerTurma')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body" id="vTurmaBody"></div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalVerTurma')">Fechar</button>
      <button class="btn primary" onclick="ir('alunos');closeModal('modalVerTurma')"><i class="fa fa-users"></i>Ver Alunos</button>
    </div>
  </div>
</div>

<!-- MODAIS CADASTRO -->
<div class="overlay" id="modalClasse">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-layer-group"></i>Nova Classe</h3><button class="modal-close" onclick="closeModal('modalClasse')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Nome</label><input type="text" class="fi" id="clNome" placeholder="Ex: 12ª Classe"></div>
      <div class="fg" style="margin-top:10px"><label class="fl">Curso Associado</label>
        <select class="fi">
          <option>Ciências Físicas e Biológicas</option><option>Ciências Económicas e Jurídicas</option>
          <option>Curso Técnico de Informática</option><option>Contabilidade e Gestão</option>
          <option>Obras de Construção Civil</option><option>Eletrónica</option>
        </select>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalClasse')">Cancelar</button>
      <button class="btn primary" onclick="saveCadastro('classe')"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<div class="overlay" id="modalCurso">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-graduation-cap"></i>Novo Curso</h3><button class="modal-close" onclick="closeModal('modalCurso')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Nome do Curso</label><input type="text" class="fi" placeholder="Ex: Eletrónica"></div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalCurso')">Cancelar</button>
      <button class="btn primary" onclick="saveCadastro('curso')"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<div class="overlay" id="modalPeriodo">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-clock"></i>Novo Turno</h3><button class="modal-close" onclick="closeModal('modalPeriodo')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Nome</label><select class="fi"><option>Tarde</option><option>Manhã</option></select></div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">Início</label><input type="time" class="fi" value="13:00"></div>
        <div class="fg"><label class="fl">Fim</label><input type="time" class="fi" value="18:00"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalPeriodo')">Cancelar</button>
      <button class="btn primary" onclick="saveCadastro('periodo')"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<div class="overlay" id="modalSala">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-door-open"></i>Nova Sala</h3><button class="modal-close" onclick="closeModal('modalSala')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Identificação da Sala</label><input type="text" class="fi" placeholder="Ex: Sala B12"></div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">Capacidade</label><input type="number" class="fi" placeholder="Ex: 35" min="1"></div>
        <div class="fg"><label class="fl">RFID Instalado</label><select class="fi"><option value="sim">Sim</option><option value="nao">Não</option></select></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalSala')">Cancelar</button>
      <button class="btn primary" onclick="saveCadastro('sala')"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<div class="overlay" id="modalAula">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-calendar-plus"></i>Adicionar Aula ao Horário</h3><button class="modal-close" onclick="closeModal('modalAula')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Turma</label>
        <select class="fi" id="haTurma"><option value="12CFB">12ª CFB</option></select>
      </div>
      <div class="fg" style="margin-top:10px"><label class="fl">Disciplina</label><select class="fi" id="haDisc"></select></div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">Dia da Semana</label>
          <select class="fi" id="haDia"><option value="1">Segunda</option><option value="2">Terça</option><option value="3">Quarta</option><option value="4">Quinta</option><option value="5">Sexta</option><option value="6">Sábado</option></select>
        </div>
        <div class="fg"><label class="fl">Início</label><input type="time" class="fi" id="haInicio" value="13:00"></div>
        <div class="fg"><label class="fl">Fim</label><input type="time" class="fi" id="haFim" value="13:45"></div>
        <div class="fg"><label class="fl">Sala</label><input type="text" class="fi" id="haSala" placeholder="Ex: Sala B12"></div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalAula')">Cancelar</button>
      <button class="btn primary" onclick="saveAula()"><i class="fa fa-floppy-disk"></i>Guardar</button>
    </div>
  </div>
</div>

<div class="overlay" id="modalAssid">
  <div class="modal sm">
    <div class="modal-head"><h3><i class="fa fa-user-check"></i>Registar Presença</h3><button class="modal-close" onclick="closeModal('modalAssid')"><i class="fa fa-xmark"></i></button></div>
    <div class="modal-body">
      <div class="fg"><label class="fl">Aluno</label><select class="fi" id="asAluno"></select></div>
      <div class="form-grid" style="margin-top:10px">
        <div class="fg"><label class="fl">Data</label><input type="date" class="fi" id="asData"></div>
        <div class="fg"><label class="fl">Hora de Entrada</label><input type="time" class="fi" id="asHora" value="13:00"></div>
        <div class="fg span2"><label class="fl">Estado</label>
          <select class="fi" id="asEstado">
            <option value="assiduo">Presente Assíduo</option>
            <option value="atrasado">Presente Atrasado</option>
            <option value="falta">Falta</option>
          </select>
        </div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn ghost" onclick="closeModal('modalAssid')">Cancelar</button>
      <button class="btn primary" onclick="saveAssid()"><i class="fa fa-floppy-disk"></i>Registar</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>


<?php 
$pageScript = "scriptadmin.js";
include __DIR__ . '/../layout/rodape.php'; 
?>
