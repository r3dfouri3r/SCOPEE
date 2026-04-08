<?php 
$pageEstilo = "stylecoordenador.css";
include __DIR__ . '/../layout/header.php';
?>

<div class="sidebar">
  <div class="sb-brand">
    <div class="sb-logo"><img <?php echo $logo ?> alt="icon logo SCOPE" onerror="this.style.display='none'"></div>
    <div><div class="sb-name">SCOPE</div><div class="sb-sub">Coordenador</div></div>
  </div>
  <nav class="sb-nav">
    <div class="nav-sec">Principal</div>
    <button class="ni active" id="nav-visao" onclick="ir('visao')"><i class="fa fa-gauge-high"></i>Visão Geral</button>
    <button class="ni" id="nav-turma" onclick="ir('turma')"><i class="fa fa-school"></i>Ver Turma</button>
    <div class="nav-sec">Análise</div>
    <button class="ni" id="nav-relatorios" onclick="ir('relatorios')"><i class="fa fa-chart-column"></i>Relatórios e Estatísticas</button>
    <button class="ni" id="nav-aulas" onclick="ir('aulas')"><i class="fa fa-calendar-day"></i>Aulas de Hoje</button>
    <div class="nav-sec">Gestão</div>
    <button class="ni" id="nav-ocorrencias" onclick="ir('ocorrencias')">
      <i class="fa fa-triangle-exclamation"></i>Ocorrências
      <span class="nb" id="nbOc">3</span>
    </button>
    <button class="ni" id="nav-professores" onclick="ir('professores')"><i class="fa fa-chalkboard-user"></i>Professores</button>
  </nav>
  <div class="sb-ft">
    <div class="sb-av">AC</div>
    <div style="flex:1;min-width:0"><div class="sb-uname">A. Chipaco</div><div class="sb-urole">Coordenador · 12ª CFB</div></div>
    <button class="btn-out" onclick="if(confirm('Terminar sessão?'))toast('Até logo!','tb')" title="Sair"><i class="fa fa-right-from-bracket"></i></button>
  </div>
</div>

<div class="main">
  <div class="topbar">
    <span class="tb-title" id="tbTitle">Visão Geral</span>
    <div class="tb-right">
      <div class="chip"><i class="fa fa-user-shield"></i>Coordenador · 12ª CFB</div>
      <span class="tb-date" id="tbDate"></span>
    </div>
  </div>
  <div class="page">

    <!-- VISÃO GERAL -->
    <div class="view active" id="view-visao">
      <div class="banner">
        <div class="banner-top">
          <div>
            <h2>Painel de Coordenação</h2>
            <p id="bannerData">—</p>
          </div>
          <div class="banner-stats">
            <div class="bst"><div class="bst-n">1</div><div class="bst-l">Turma</div></div>
            <div class="bst"><div class="bst-n">7</div><div class="bst-l">Alunos</div></div>
            <div class="bst"><div class="bst-n">11</div><div class="bst-l">Professores</div></div>
          </div>
        </div>
      </div>
      <div class="stats-row">
        <div class="sc sb"><div class="sc-ic"><i class="fa fa-chart-pie"></i></div><div><div class="sc-n">81%</div><div class="sc-l">Presença Média</div></div></div>
        <div class="sc sr"><div class="sc-ic"><i class="fa fa-circle-exclamation"></i></div><div><div class="sc-n" id="stRisco">3</div><div class="sc-l">Alunos em Risco</div></div></div>
        <div class="sc sy"><div class="sc-ic"><i class="fa fa-bell"></i></div><div><div class="sc-n" id="stAlertas">2</div><div class="sc-l">Alertas Ativos</div></div></div>
        <div class="sc sg"><div class="sc-ic"><i class="fa fa-circle-check"></i></div><div><div class="sc-n">5</div><div class="sc-l">Sem Ocorrências</div></div></div>
      </div>
      <div class="g2">
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-bell"></i>Alertas</span><span class="cs">2 ativos</span></div>
          <div class="cb">
            <div class="alerta">
              <div class="alerta-ic"><i class="fa fa-exclamation"></i></div>
              <div><div class="alerta-t">Domingos Caselo — 12ª CFB</div><div class="alerta-s">6 faltas não justificadas — risco de reprovação</div></div>
            </div>
            <div class="alerta y">
              <div class="alerta-ic"><i class="fa fa-clock"></i></div>
              <div><div class="alerta-t">Alexandre Fernando — 12ª CFB</div><div class="alerta-s">3 atrasos consecutivos esta semana</div></div>
            </div>
            <div class="alerta b">
              <div class="alerta-ic"><i class="fa fa-wifi"></i></div>
              <div><div class="alerta-t">Leitor RFID — Sala B12</div><div class="alerta-s">Sinal intermitente nas últimas 2 horas</div></div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-chalkboard-user"></i>Professores em Aula</span><span class="cs">Agora</span></div>
          <div class="cb">
            <div class="prof-row">
              <div class="av" style="background:#3B82F6;width:32px;height:32px">AC</div>
              <div class="ai"><div class="an">A. Chipaco</div><div class="asub">Língua Portuguesa · Sala B12</div></div>
              <span class="badge g">Online</span>
            </div>
            <div class="prof-row">
              <div class="av" style="background:#8B5CF6;width:32px;height:32px">Al</div>
              <div class="ai"><div class="an">Alberto</div><div class="asub">Matemática · 13:00</div></div>
              <span class="badge" style="background:var(--s100);color:var(--s400)">Aguarda</span>
            </div>
            <div class="prof-row">
              <div class="av" style="background:#F97316;width:32px;height:32px">Eu</div>
              <div class="ai"><div class="an">Euclides</div><div class="asub">Física · 14:45</div></div>
              <span class="badge" style="background:var(--s100);color:var(--s400)">Aguarda</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="ch">
          <span class="ct"><i class="fa fa-chart-bar"></i>Taxa de Presença — 12ª CFB (Março 2026)</span>
          <button class="btn sec" style="font-size:11px;padding:5px 11px" onclick="toast('A exportar relatório…','tb')"><i class="fa fa-download"></i>Exportar</button>
        </div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="table">
            <thead><tr><th>Nº</th><th>Aluno</th><th>Presenças</th><th>Faltas</th><th>Atrasos</th><th>% Assiduidade</th><th>Estado</th></tr></thead>
            <tbody id="resumoBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- VER TURMA -->
    <div class="view" id="view-turma">
      <div class="card" style="margin-bottom:14px">
        <div class="cb">
          <div style="display:flex;align-items:center;gap:20px;flex-wrap:wrap">
            <div style="flex:1;min-width:200px">
              <div style="font-size:28px;font-weight:800;color:var(--bm)">12ª CFB</div>
              <div style="font-size:13px;color:var(--s400);margin-top:2px">Ciências Físicas e Biológicas · 12.º Ano</div>
              <div style="margin-top:14px;display:flex;gap:20px;flex-wrap:wrap">
                <div><div style="font-size:22px;font-weight:800">7</div><div style="font-size:11px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px">Alunos</div></div>
                <div><div style="font-size:22px;font-weight:800;color:var(--g)">81%</div><div style="font-size:11px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px">Assiduidade</div></div>
                <div><div style="font-size:22px;font-weight:800;color:var(--bm)">11</div><div style="font-size:11px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px">Professores</div></div>
                <div><div style="font-size:22px;font-weight:800;color:var(--r)">3</div><div style="font-size:11px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px">Em Risco</div></div>
              </div>
            </div>
            <div style="background:var(--bp);border-radius:var(--rad);padding:16px 20px;min-width:180px">
              <div style="font-size:11px;color:var(--s400);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Leitor RFID</div>
              <div style="display:flex;align-items:center;gap:7px;font-size:13px;font-weight:700;color:var(--g)">
                <span style="width:8px;height:8px;border-radius:50%;background:var(--g);display:inline-block"></span>Sala B12 — Online
              </div>
              <div style="font-size:11px;color:var(--s400);margin-top:5px">RFID-B12-001 · Coord: A. Chipaco</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="ch">
          <span class="ct"><i class="fa fa-users-rectangle"></i>Análise Detalhada — 7 Alunos</span>
          <button class="btn sec" style="font-size:11px;padding:5px 11px" onclick="toast('A exportar…','tb')"><i class="fa fa-download"></i>Exportar Relatório</button>
        </div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="table">
            <thead><tr><th>Nº</th><th>Aluno</th><th>Proc.</th><th>% Presença</th><th>Faltas</th><th>Atrasos</th><th>Estado</th><th>Ações</th></tr></thead>
            <tbody id="turmaDetBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- RELATÓRIOS -->
    <div class="view" id="view-relatorios">
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center">
        <button class="filter-btn active" onclick="setF(this)">Semana</button>
        <button class="filter-btn" onclick="setF(this)">Mês</button>
        <button class="filter-btn" onclick="setF(this)">Trimestre</button>
        <button class="filter-btn" onclick="setF(this)">Ano</button>
        <select class="fsel"><option>Março 2026</option><option>Fevereiro 2026</option><option>Janeiro 2026</option></select>
        <button class="btn prim" style="font-size:12px;padding:6px 14px" onclick="toast('A exportar…','tb')"><i class="fa fa-download"></i>Exportar</button>
      </div>
      <div class="stats-row">
        <div class="sc sg"><div class="sc-ic"><i class="fa fa-circle-check"></i></div><div><div class="sc-n">68</div><div class="sc-l">Total Presenças</div></div></div>
        <div class="sc sb"><div class="sc-ic"><i class="fa fa-chart-pie"></i></div><div><div class="sc-n">81%</div><div class="sc-l">Taxa Presença</div></div></div>
        <div class="sc sr"><div class="sc-ic"><i class="fa fa-circle-xmark"></i></div><div><div class="sc-n">16</div><div class="sc-l">Total Ausências</div></div></div>
        <div class="sc sy"><div class="sc-ic"><i class="fa fa-clock"></i></div><div><div class="sc-n">8</div><div class="sc-l">Total Atrasos</div></div></div>
      </div>
      <div class="g2">
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-chart-column"></i>Evolução Mensal de Presenças</span></div>
          <div class="cb">
            <div class="chart-wrap">
              <div class="bar-chart" id="barChart"></div>
            </div>
            <div class="chart-legend">
              <span class="leg-item"><span class="leg-dot" style="background:var(--g)"></span>Presenças</span>
              <span class="leg-item"><span class="leg-dot" style="background:var(--r)"></span>Ausências</span>
              <span class="leg-item"><span class="leg-dot" style="background:var(--y)"></span>Atrasos</span>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="ch"><span class="ct"><i class="fa fa-chart-pie"></i>Distribuição — Março 2026</span></div>
          <div class="cb">
            <div class="pie-wrap">
              <svg class="pie-svg" width="120" height="120" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--g)" stroke-width="20" stroke-dasharray="255 69" stroke-dashoffset="0" transform="rotate(-90 60 60)"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--r)" stroke-width="20" stroke-dasharray="50 274" stroke-dashoffset="-255" transform="rotate(-90 60 60)"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--y)" stroke-width="20" stroke-dasharray="19 305" stroke-dashoffset="-305" transform="rotate(-90 60 60)"/>
                <text x="60" y="64" text-anchor="middle" font-size="14" font-weight="800" fill="var(--s800)" font-family="Plus Jakarta Sans">81%</text>
              </svg>
              <div class="pie-legend">
                <div class="pie-leg-item"><div class="pie-leg-dot" style="background:var(--g)"></div><div><div class="pie-leg-lbl">Presenças</div><div class="pie-leg-val">68 (81%)</div></div></div>
                <div class="pie-leg-item"><div class="pie-leg-dot" style="background:var(--r)"></div><div><div class="pie-leg-lbl">Ausências</div><div class="pie-leg-val">16 (10%)</div></div></div>
                <div class="pie-leg-item"><div class="pie-leg-dot" style="background:var(--y)"></div><div><div class="pie-leg-lbl">Atrasos</div><div class="pie-leg-val">8 (9%)</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-table"></i>Taxa por Aluno — Março 2026</span></div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="table">
            <thead><tr><th>Nº</th><th>Aluno</th><th>Presenças</th><th>Atrasos</th><th>Faltas</th><th>% Assiduidade</th><th>Estado</th></tr></thead>
            <tbody id="relBody"></tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-graduation-cap"></i>Taxa por Disciplina</span></div>
        <div class="cb">
          <div id="discTaxa"></div>
        </div>
      </div>
    </div>

    <!-- AULAS DE HOJE -->
    <div class="view" id="view-aulas">
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-calendar-day"></i>Aulas Hoje — 12ª CFB</span><span class="cs" id="aulasHojeData"></span></div>
        <div class="cb" style="padding:0 16px 16px;overflow-x:auto">
          <table class="table">
            <thead><tr><th>Hora</th><th>Disciplina</th><th>Professor</th><th>Sala</th><th>Estado</th></tr></thead>
            <tbody id="aulasBody"></tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- OCORRÊNCIAS -->
    <div class="view" id="view-ocorrencias">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px">
        <div>
          <div style="font-size:18px;font-weight:800">Gestão de Ocorrências</div>
          <div style="font-size:12px;color:var(--s400);margin-top:3px">Registo de advertências e ocorrências disciplinares</div>
        </div>
        <button class="btn prim" onclick="toast('Formulário de nova ocorrência…','tb')"><i class="fa fa-plus"></i>Nova Ocorrência</button>
      </div>
      <div class="stats-row">
        <div class="sc sb"><div class="sc-ic"><i class="fa fa-list-check"></i></div><div><div class="sc-n">4</div><div class="sc-l">Total</div></div></div>
        <div class="sc sy"><div class="sc-ic"><i class="fa fa-hourglass-half"></i></div><div><div class="sc-n">1</div><div class="sc-l">Pendentes</div></div></div>
        <div class="sc sg"><div class="sc-ic"><i class="fa fa-circle-check"></i></div><div><div class="sc-n">2</div><div class="sc-l">Resolvidas</div></div></div>
        <div class="sc sr"><div class="sc-ic"><i class="fa fa-triangle-exclamation"></i></div><div><div class="sc-n">1</div><div class="sc-l">Graves</div></div></div>
      </div>
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-filter"></i>Filtrar</span></div>
        <div class="cb">
          <div class="search-wrap">
            <i class="fa fa-magnifying-glass"></i>
            <input type="text" placeholder="Pesquisar por aluno, número ou descrição…" oninput="filterOc(this.value)">
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <button class="filter-btn active" onclick="setOcF(this,'todos')">Todos</button>
            <button class="filter-btn" onclick="setOcF(this,'pendente')">Pendente</button>
            <button class="filter-btn" onclick="setOcF(this,'analise')">Em Análise</button>
            <button class="filter-btn" onclick="setOcF(this,'resolvida')">Resolvida</button>
          </div>
        </div>
      </div>
      <div id="ocList"></div>
    </div>

    <!-- PROFESSORES -->
    <div class="view" id="view-professores">
      <div class="card">
        <div class="ch"><span class="ct"><i class="fa fa-chalkboard-user"></i>Docentes — 12ª CFB (11 professores)</span></div>
        <div class="cb" id="profList"></div>
      </div>
    </div>

  </div>
</div>

<div class="toast" id="toast"></div>


<?php 
$pageScript = "scriptcoordenador.js";
include __DIR__ . '/../layout/rodape.php'; 
?>
