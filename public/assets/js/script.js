/* ─── PARTÍCULAS ─── */
const canvas = document.getElementById('particles');
const ctx    = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() { this.reset(true); }
  reset(init) {
    this.x       = Math.random() * canvas.width;
    this.y       = init ? Math.random() * canvas.height : 0;
    this.radius  = Math.random() * 2;
    this.speed   = Math.random() * .9 + .4;
    this.opacity = Math.random() * .5 + .1;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) this.reset(false);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
}

const particles = Array.from({length: 130}, () => new Particle());
function animParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animParticles);
}
animParticles();
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ─── SPLASH → LOGIN ─── */
const splashEl  = document.getElementById('splash');
const loginEl   = document.getElementById('login');
const progEl    = document.getElementById('progress');
let w = 0;
const iv = setInterval(() => {
  if (w >= 100) {
    clearInterval(iv);
    splashEl.classList.add('hidden');
    loginEl.classList.remove('hidden');
  } else { w += 4; progEl.style.width = w + '%'; }
}, 18);

/* ─── TOGGLE PASSWORD ─── */
const togglePw = document.getElementById('togglePassword');
const pwInput  = document.getElementById('password');
togglePw.addEventListener('click', () => {
  const show = pwInput.type === 'password';
  pwInput.type = show ? 'text' : 'password';
  togglePw.classList.toggle('fa-eye-slash', show);
  togglePw.classList.toggle('fa-eye', !show);
});

/* ─── LOGIN → DASHBOARD ─── */
function entrar() {
  const user   = document.getElementById('username').value.trim() || 'Professor';
  const perfil = document.getElementById('perfilSelect').value;

  loginEl.classList.add('hidden');
  const procEl  = document.getElementById('processing');
  const prog2El = document.getElementById('progress2');
  procEl.classList.remove('hidden');

  let w2 = 0;
  const iv2 = setInterval(() => {
    if (w2 >= 100) {
      clearInterval(iv2);
      procEl.classList.add('hidden');

      /* ── Prepara dashboard ── */
      const dash = document.getElementById('dashboard');
      dash.classList.remove('hidden');
      // Oculta canvas (não precisa nas páginas brancas)
      canvas.style.opacity = '0';

      setupDashboard(user, perfil);
    } else { w2 += 5; prog2El.style.width = w2 + '%'; }
  }, 18);
}

function logout() {
  document.getElementById('dashboard').classList.add('hidden');
  canvas.style.opacity = '1';
  loginEl.classList.remove('hidden');
  loginEl.classList.remove('hidden');
  // reset
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  reiniciarDados();
}

/* ─── SETUP DASHBOARD ─── */
function setupDashboard(user, perfil) {
  // Topbar
  document.getElementById('topbarName').textContent  = user;
  document.getElementById('topbarRole').textContent  = perfil.charAt(0).toUpperCase() + perfil.slice(1);
  document.getElementById('topbarAvatar').textContent = user[0].toUpperCase();

  // Data e hora
  atualizarDataHora();
  setInterval(atualizarDataHora, 1000);

  // Renderiza alunos
  renderAlunos();
  atualizarStats();
}

/* ─── DATA / HORA ─── */
function atualizarDataHora() {
  const agora = new Date();
  const optsData = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
  document.getElementById('dataHoje').textContent =
    agora.toLocaleDateString('pt-PT', optsData);

  const hh = String(agora.getHours()).padStart(2,'0');
  const mm = String(agora.getMinutes()).padStart(2,'0');
  const ss = String(agora.getSeconds()).padStart(2,'0');
  document.getElementById('horaAtual').textContent = `${hh}:${mm}`;
}

/* ─── DADOS ALUNOS (mock — substituir por fetch /api/alunos) ─── */
/* 
  INTEGRAÇÃO PHP/MySQL:
  fetch('api/alunos.php?turma=12A')
    .then(r => r.json())
    .then(data => { alunos = data; renderAlunos(); });
*/
const nomes = [
  'Ana Beatriz Ferreira','Bruno Miguel Costa','Carlos Eduardo Lima',
  'Diana Sofia Mendes','Eduardo Rui Pereira','Filipa Catarina Nunes',
  'Gonçalo André Sousa','Helena Mariana Pinto','Igor Rafael Silva',
  'Joana Inês Rodrigues','Kevin Samuel Alves','Lara Beatriz Moura',
  'Marcos Paulo Cardoso','Nádia Cristina Lopes','Osvaldo José Tavares',
  'Patrícia Andreia Faria','Quézia Luís Baptista','Renato Daniel Cruz',
  'Sandra Mário Vieira','Tomás Alexandre Gomes'
];

let alunos = nomes.map((nome, i) => ({
  id:     i + 1,
  nome:   nome,
  numero: `2025${String(i+1).padStart(3,'0')}`,
  estado: 'ausente',
  hora:   null
}));

const cores = [
  '#3B82F6','#8B5CF6','#EC4899','#14B8A6',
  '#F97316','#06B6D4','#84CC16','#F43F5E'
];

function getInitials(nome) {
  const parts = nome.split(' ');
  return (parts[0][0] + (parts[parts.length-1][0] || '')).toUpperCase();
}

function renderAlunos() {
  const list = document.getElementById('alunoList');
  list.innerHTML = alunos.map((a, idx) => `
    <div class="aluno-row ${a.flash ? 'rfid-flash':''}" id="row-${a.id}">
      <div class="aluno-avatar" style="background:${cores[idx%cores.length]}">
        ${getInitials(a.nome)}
      </div>
      <div class="aluno-info">
        <div class="aluno-nome">${a.nome}</div>
        <div class="aluno-hora">${a.hora ? '🕐 ' + a.hora : 'Nº ' + a.numero}</div>
      </div>
      <span class="badge ${a.estado}">${badgeLabel(a.estado)}</span>
      <div class="aluno-actions">
        <button class="btn-mini" title="Editar estado" onclick="openModal(${a.id})"><i class="fa fa-pen"></i></button>
      </div>
    </div>
  `).join('');
}

function badgeLabel(e) {
  return e === 'presente' ? '✔ Presente'
       : e === 'atraso'   ? '⏱ Atraso'
       : '✕ Ausente';
}

/* ─── STATS ─── */
function atualizarStats() {
  const presentes = alunos.filter(a => a.estado === 'presente').length;
  const atrasos   = alunos.filter(a => a.estado === 'atraso').length;
  const ausentes  = alunos.filter(a => a.estado === 'ausente').length;
  const total     = alunos.length;
  const taxa      = total ? Math.round(((presentes + atrasos) / total) * 100) : 0;

  animNum('statPresente', presentes);
  animNum('statAtraso',   atrasos);
  animNum('statAusente',  ausentes);
  document.getElementById('statTaxa').textContent = taxa + '%';
  document.getElementById('heroTotal').textContent = total;

  const done = presentes + atrasos;
  document.getElementById('subtitleAlunos').textContent =
    done === 0 ? 'Aguardando registo RFID…'
               : `${done} de ${total} registados`;
}

function animNum(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const step = (target - start) / 12;
  let cur = start;
  const t = setInterval(() => {
    cur += step;
    if ((step > 0 && cur >= target) || (step < 0 && cur <= target)) {
      el.textContent = target; clearInterval(t);
    } else { el.textContent = Math.round(cur); }
  }, 30);
}

function reiniciarDados() {
  alunos.forEach(a => { a.estado = 'ausente'; a.hora = null; a.flash = false; });
}

/* ─── RFID SIMUL ─── */
/*
  INTEGRAÇÃO RFID em tempo real:
  Use WebSocket ou polling:

  const ws = new WebSocket('ws://localhost/scope/rfid');
  ws.onmessage = (e) => {
    const { cartao_uid, aluno_id, hora } = JSON.parse(e.data);
    marcarPresenca(aluno_id, hora);
  };

  OU polling:
  setInterval(() => {
    fetch('api/rfid_last.php')
      .then(r => r.json())
      .then(data => {
        if (data.novo) marcarPresenca(data.aluno_id, data.hora);
      });
  }, 2000);
*/
const fila = [...alunos].sort(() => Math.random() - .5);
let filaIdx = 0;

function simularRFID() {
  if (filaIdx >= fila.length) {
    showToast('Todos os alunos já foram registados!', 'blue');
    return;
  }
  const aluno = fila[filaIdx++];
  const agora = new Date();
  const hora  = String(agora.getHours()).padStart(2,'0') + ':' + String(agora.getMinutes()).padStart(2,'0');

  // Lógica de estado: presença após 08:10 = atraso
  const atraso = agora.getHours() > 8 || (agora.getHours() === 8 && agora.getMinutes() > 10);
  marcarPresenca(aluno.id, hora, atraso ? 'atraso' : 'presente');
}

function marcarPresenca(alunoId, hora, estado = 'presente') {
  /*
    INTEGRAÇÃO: Envia ao backend:
    fetch('api/registar_presenca.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ aluno_id: alunoId, hora, estado })
    });
  */
  const a = alunos.find(x => x.id === alunoId);
  if (!a) return;
  a.estado = estado;
  a.hora   = hora;
  a.flash  = true;

  renderAlunos();
  atualizarStats();

  // Última leitura
  document.getElementById('ultimaLeitura').innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;border-radius:50%;background:${cores[alunos.indexOf(a)%cores.length]};display:flex;align-items:center;justify-content:center;font-weight:700;color:white;font-size:13px;">${getInitials(a.nome)}</div>
      <div>
        <div style="font-size:13px;font-weight:700;">${a.nome}</div>
        <div style="font-size:11px;color:var(--gray-400);">${hora} · <span style="color:${estado==='presente'?'var(--green)':'var(--yellow)'};">${badgeLabel(estado)}</span></div>
      </div>
    </div>`;

  showToast(`${a.nome.split(' ')[0]} — ${badgeLabel(estado)}`,
    estado === 'presente' ? 'green' : 'blue');

  setTimeout(() => { a.flash = false; }, 1500);
}

/* ─── BOTÕES PRINCIPAIS ─── */
function confirmarAula() {
  showToast('Aula confirmada e registada!', 'green');
  /*
    fetch('api/confirmar_aula.php', {
      method: 'POST',
      body: JSON.stringify({ turma: '12A', data: new Date().toISOString() })
    });
  */
}

function encerrarAula() {
  if (!confirm('Tens a certeza que queres encerrar a aula?')) return;
  showToast('Aula encerrada. Dados guardados.', 'blue');
}

function gerarPDF() {
  showToast('A gerar PDF… (integrar com backend PHP)', 'blue');
  /*
    window.open('api/gerar_pdf.php?turma=12A&data=' + new Date().toISOString());
  */
}

function guardarOcorrencia() {
  const txt = document.getElementById('ocorrenciaText').value.trim();
  if (!txt) { showToast('Escreve uma ocorrência primeiro.', 'red'); return; }
  showToast('Ocorrência guardada!', 'green');
  document.getElementById('ocorrenciaText').value = '';
  /*
    fetch('api/ocorrencias.php', {
      method: 'POST',
      body: JSON.stringify({ turma: '12A', texto: txt, hora: new Date().toISOString() })
    });
  */
}

/* ─── MODAL EDITAR ESTADO ─── */
let modalAlunoId = null;
let modalEstadoAtual = null;

function openModal(alunoId) {
  const a = alunos.find(x => x.id === alunoId);
  modalAlunoId = alunoId;
  modalEstadoAtual = a.estado;
  document.getElementById('modalAluno').textContent = '✏️ Editar: ' + a.nome;
  document.getElementById('ebPresente').className = 'estado-btn';
  document.getElementById('ebAtraso').className   = 'estado-btn';
  document.getElementById('ebAusente').className  = 'estado-btn';
  const map = {presente:'active-green', atraso:'active-yellow', ausente:'active-red'};
  const idMap = {presente:'ebPresente', atraso:'ebAtraso', ausente:'ebAusente'};
  document.getElementById(idMap[a.estado]).classList.add(map[a.estado]);
  document.getElementById('modalEstado').classList.add('open');
}

function setEstadoModal(estado) {
  modalEstadoAtual = estado;
  document.getElementById('ebPresente').className = 'estado-btn';
  document.getElementById('ebAtraso').className   = 'estado-btn';
  document.getElementById('ebAusente').className  = 'estado-btn';
  const map = {presente:'active-green', atraso:'active-yellow', ausente:'active-red'};
  const idMap = {presente:'ebPresente', atraso:'ebAtraso', ausente:'ebAusente'};
  document.getElementById(idMap[estado]).classList.add(map[estado]);
}

function saveModal() {
  const agora = new Date();
  const hora  = String(agora.getHours()).padStart(2,'0') + ':' + String(agora.getMinutes()).padStart(2,'0');
  const a = alunos.find(x => x.id === modalAlunoId);
  a.estado = modalEstadoAtual;
  if (!a.hora) a.hora = hora;
  renderAlunos();
  atualizarStats();
  closeModal();
  showToast(`${a.nome.split(' ')[0]} → ${badgeLabel(modalEstadoAtual)}`, 'green');
}

function closeModal() {
  document.getElementById('modalEstado').classList.remove('open');
}

document.getElementById('modalEstado').addEventListener('click', e => {
  if (e.target === document.getElementById('modalEstado')) closeModal();
});

/* ─── TOAST ─── */
let toastTimer;
function showToast(msg, color = 'green') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = `toast ${color} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
