/* DATA */
let ALUNOS=[
  {id:1,ord:1,nproc:'1650',nome:'Agnalda Kunjikisse Jelembi Vapor',     turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4682816'},
  {id:2,ord:2,nproc:'405', nome:'Alexandre Fernando Monteiro Pereira',  turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4710756'},
  {id:3,ord:3,nproc:'2027',nome:'Domingos Caselo Kalwiji Samanjata',    turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4713470'},
  {id:4,ord:4,nproc:'2543',nome:'Haziel Simboyala Chitau Hamuyela Tchitavila',turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4732271'},
  {id:5,ord:5,nproc:'260', nome:'Larissa Fato Botelho',                 turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4737708'},
  {id:6,ord:6,nproc:'774', nome:'Luís Caison Zango Caica',              turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'4742167'},
  {id:7,ord:7,nproc:'2556',nome:'Maria Da Conceição José Pena',         turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:'5882869'},
];
const PROFS=[
  {id:1,nome:'Alberto',    disc:'Matemática'},{id:2,nome:'Euclides',   disc:'Física'},
  {id:3,nome:'Jelson',     disc:'Língua Inglesa'},{id:4,nome:'A. Chipaco',disc:'Língua Portuguesa'},
  {id:5,nome:'A. Gourgel', disc:'Biologia'},{id:6,nome:'Margarido',   disc:'Geologia'},
  {id:7,nome:'Beatriz',    disc:'Química'},{id:8,nome:'Madaleno',    disc:'Empreendedorismo'},
  {id:9,nome:'João Cassoma',disc:'Filosofia'},{id:10,nome:'L. Magalhães',disc:'Geometria Descritiva'},
  {id:11,nome:'Edgar Somak',disc:'Educação Física'},
];
let TURMAS=[{id:'T001',nome:'12ª CFB',classe:'12ª',turno:'Tarde',curso:'Ciências Físicas e Biológicas',sala:'Sala B12',alunos:7,status:'ativa',ano:'2025/2026'}];
let DISCS=[
  {id:'D001',nome:'Matemática',          prof:'Alberto',      carga:4,turma:'12ª CFB',status:'ativa'},
  {id:'D002',nome:'Física',              prof:'Euclides',     carga:3,turma:'12ª CFB',status:'ativa'},
  {id:'D003',nome:'Língua Inglesa',      prof:'Jelson',       carga:2,turma:'12ª CFB',status:'ativa'},
  {id:'D004',nome:'Língua Portuguesa',   prof:'A. Chipaco',   carga:3,turma:'12ª CFB',status:'ativa'},
  {id:'D005',nome:'Biologia',            prof:'A. Gourgel',   carga:3,turma:'12ª CFB',status:'ativa'},
  {id:'D006',nome:'Geologia',            prof:'Margarido',    carga:2,turma:'12ª CFB',status:'ativa'},
  {id:'D007',nome:'Química',             prof:'Beatriz',      carga:3,turma:'12ª CFB',status:'ativa'},
  {id:'D008',nome:'Empreendedorismo',    prof:'Madaleno',     carga:2,turma:'12ª CFB',status:'ativa'},
  {id:'D009',nome:'Filosofia',           prof:'João Cassoma', carga:2,turma:'12ª CFB',status:'ativa'},
  {id:'D010',nome:'Geom. Descritiva',    prof:'L. Magalhães', carga:2,turma:'12ª CFB',status:'ativa'},
  {id:'D011',nome:'Educação Física',     prof:'Edgar Somak',  carga:2,turma:'12ª CFB',status:'ativa'},
];
let CLASSES=[{id:'CL01',nome:'12ª Classe',curso:'CFB'},{id:'CL02',nome:'11ª Classe',curso:'CFB'},{id:'CL03',nome:'10ª Classe',curso:'CFB'}];
let CURSOS=[
  {id:'CU01',nome:'Ciências Físicas e Biológicas'},
  {id:'CU02',nome:'Ciências Económicas e Jurídicas'},
  {id:'CU03',nome:'Curso Técnico de Informática'},
  {id:'CU04',nome:'Contabilidade e Gestão'},
  {id:'CU05',nome:'Obras de Construção Civil'},
  {id:'CU06',nome:'Eletrónica'},

];
let PERIODOS=[{id:'P001',nome:'Tarde',horario:'13:00–18:00'},{id:'P002',nome:'Manhã',horario:'07:30–12:30'}];
let SALAS=[
  {id:'S001',nome:'Sala B12',cap:35,rfid:'Sim'},
  {id:'S002',nome:'Sala B10',cap:35,rfid:'Não'},
  {id:'S003',nome:'Lab. Ciências',cap:24,rfid:'Sim'},
  {id:'S004',nome:'Sala 12',cap:35,rfid:'Sim'},
  {id:'S005',nome:'Alpendre',cap:100,rfid:'Não'},
];
let LEITORES=[
  {id:'RFID-01',nome:'Laboratório de Ciências',sala:'Lab. Ciências',status:'online',ultima_uid:'D1:5E:AA:03',ultimo_aluno:'Haziel Simboyala',tempo:'há 3 min',leituras_hoje:8},
  {id:'RFID-02',nome:'Sala 12',sala:'Sala 12',status:'offline',ultima_uid:'F6:4C:EE:18',ultimo_aluno:'Luís Caison Zango',tempo:'há 2h 10m',leituras_hoje:0},
];
const RFID_HOJE={total:14,validas:13,desconhecidas:1,ultima:{aluno:'Haziel Simboyala',uid:'D1:5E:AA:03',leitor:'RFID-01 — Lab. Ciências',tempo:'há 3 min'}};
const HIST_RFID=[
  {dt:'06/03 14:32',aluno:'Haziel Simboyala',uid:'D1:5E:AA:03',leitor:'RFID-01 — Lab. Ciências',est:'valida'},
  {dt:'06/03 14:18',aluno:'Larissa Fato Botelho',uid:'E5:7F:BB:12',leitor:'RFID-01 — Lab. Ciências',est:'valida'},
  {dt:'06/03 13:52',aluno:'Agnalda Kunjikisse',uid:'A4:3F:BC:01',leitor:'RFID-01 — Lab. Ciências',est:'valida'},
  {dt:'06/03 13:45',aluno:'Alexandre Fernando',uid:'B2:1A:CC:09',leitor:'RFID-01 — Lab. Ciências',est:'valida'},
  {dt:'06/03 13:32',aluno:'Desconhecido',uid:'XX:00:00:00',leitor:'RFID-01 — Lab. Ciências',est:'desconhecida'},
];
const HORARIO=[
  {dia:1,ti:'13:00',tf:'14:30',prof:'Alberto',    disc:'Matemática',        turma:'12CFB',est:'confirmada'},
  {dia:2,ti:'13:00',tf:'14:30',prof:'Alberto',    disc:'Matemática',        turma:'12CFB',est:'confirmada'},
  {dia:3,ti:'13:00',tf:'14:30',prof:'Euclides',   disc:'Física',            turma:'12CFB',est:'confirmada'},
  {dia:4,ti:'14:45',tf:'16:15',prof:'Euclides',   disc:'Física',            turma:'12CFB',est:'confirmada'},
  {dia:4,ti:'13:00',tf:'13:45',prof:'Jelson',     disc:'Língua Inglesa',    turma:'12CFB',est:'confirmada'},
  {dia:5,ti:'16:30',tf:'18:00',prof:'Jelson',     disc:'Língua Inglesa',    turma:'12CFB',est:'confirmada'},
  {dia:4,ti:'13:45',tf:'14:30',prof:'A. Chipaco', disc:'Língua Portuguesa', turma:'12CFB',est:'confirmada'},
  {dia:5,ti:'13:00',tf:'14:30',prof:'A. Chipaco', disc:'Língua Portuguesa', turma:'12CFB',est:'confirmada'},
  {dia:1,ti:'14:45',tf:'16:15',prof:'A. Gourgel', disc:'Biologia',          turma:'12CFB',est:'confirmada'},
  {dia:2,ti:'16:30',tf:'18:00',prof:'A. Gourgel', disc:'Biologia',          turma:'12CFB',est:'confirmada'},
  {dia:2,ti:'14:45',tf:'16:15',prof:'Margarido',  disc:'Geologia',          turma:'12CFB',est:'sem_prof'},
  {dia:3,ti:'14:45',tf:'16:15',prof:'Beatriz',    disc:'Química',           turma:'12CFB',est:'confirmada'},
  {dia:1,ti:'16:30',tf:'18:00',prof:'Beatriz',    disc:'Química',           turma:'12CFB',est:'confirmada'},
  {dia:5,ti:'14:45',tf:'16:15',prof:'Madaleno',   disc:'Empreendedorismo',  turma:'12CFB',est:'confirmada'},
  {dia:4,ti:'16:30',tf:'18:00',prof:'João Cassoma',disc:'Filosofia',        turma:'12CFB',est:'confirmada'},
  {dia:3,ti:'16:30',tf:'18:00',prof:'L. Magalhães',disc:'Geom. Descritiva', turma:'12CFB',est:'confirmada'},
  {dia:5,ti:'08:00',tf:'09:30',prof:'Edgar Somak', disc:'Educação Física',  turma:'12CFB',est:'confirmada'},
];
let SUBS=[{id:1,disc:'Geologia',prof:'Beatriz',dia_txt:'Terça',h:'14:45–16:15',estado:'sem_prof',sub:null,data:'03/03/2026'}];
let USERS=[
  {id:'U001',nome:'Julisandra Jorge',  username:'jjorge',   email:'jjorge@escola.ao',    perfil:'admin',       status:'ativo', acesso:'Hoje 14:22'},
  {id:'U002',nome:'Arnásio Mavunda',   username:'amavunda', email:'amavunda@escola.ao',  perfil:'admin',       status:'ativo', acesso:'Hoje 08:02'},
  {id:'U003',nome:'Jorgina Ferreira',  username:'jferreira',email:'jferreira@escola.ao', perfil:'admin',       status:'ativo', acesso:'Hoje 09:30'},
  {id:'U004',nome:'André Chipaco',     username:'achipaco', email:'achipaco@escola.ao',  perfil:'coordenador', status:'ativo', acesso:'Hoje 13:00'},
  {id:'U005',nome:'Edgar Somak',       username:'esomak',   email:'esomak@escola.ao',    perfil:'professor',   status:'ativo', acesso:'Hoje 08:00'},
];
let ASSID=[
  {id:'AS001',aluno:'Agnalda Kunjikisse Jelembi Vapor',   turma:'12ª CFB',data:'05/03/2026',hora:'13:00',estado:'assiduo',valido:true},
  {id:'AS002',aluno:'Alexandre Fernando Monteiro Pereira',turma:'12ª CFB',data:'05/03/2026',hora:'13:18',estado:'atrasado',valido:true},
  {id:'AS003',aluno:'Domingos Caselo Kalwiji Samanjata',  turma:'12ª CFB',data:'05/03/2026',hora:'—',    estado:'falta',   valido:false},
  {id:'AS004',aluno:'Haziel Simboyala Chitau Hamuyela Tchitavila',turma:'12ª CFB',data:'05/03/2026',hora:'13:02',estado:'assiduo',valido:true},
  {id:'AS005',aluno:'Larissa Fato Botelho',               turma:'12ª CFB',data:'05/03/2026',hora:'13:05',estado:'assiduo', valido:true},
];
const LOGS=[
  {dt:'06/03 14:22',user:'Julisandra Jorge',  tipo:'login', desc:'Início de sessão — Admin',              ip:'192.168.1.5'},
  {dt:'06/03 14:00',user:'Arnásio Mavunda',   tipo:'update',desc:'Aluno atualizado: Domingos Caselo',      ip:'192.168.1.8'},
  {dt:'06/03 13:45',user:'Jorgina Ferreira',  tipo:'create',desc:'Nova ocorrência registada',              ip:'192.168.1.12'},
  {dt:'06/03 11:05',user:'Arnásio Mavunda',   tipo:'login', desc:'Início de sessão — Admin',              ip:'192.168.1.8'},
  {dt:'05/03 09:30',user:'Jorgina Ferreira',  tipo:'logout',desc:'Encerramento de sessão',                 ip:'192.168.1.12'},
  {dt:'05/03 09:00',user:'Jorgina Ferreira',  tipo:'login', desc:'Início de sessão — Admin',              ip:'192.168.1.12'},
  {dt:'05/03 08:45',user:'Julisandra Jorge',  tipo:'delete',desc:'Substituição eliminada: Geologia',       ip:'192.168.1.5'},
];
const PERMS=[
  {item:'Ver Painel Geral',         admin:true,coord:true, prof:false},
  {item:'Gestão de Turmas',         admin:true,coord:false,prof:false},
  {item:'Gestão de Alunos',         admin:true,coord:true, prof:false},
  {item:'Gestão de Disciplinas',    admin:true,coord:false,prof:false},
  {item:'Ver Horários',             admin:true,coord:true, prof:true},
  {item:'Registar Assiduidade',     admin:true,coord:true, prof:true},
  {item:'Gestão de Utilizadores',   admin:true,coord:false,prof:false},
  {item:'Configurações do Sistema', admin:true,coord:false,prof:false},
  {item:'Ver Relatórios',           admin:true,coord:true, prof:false},
  {item:'Cartões RFID',             admin:true,coord:false,prof:false},
];
const CORS=['#2563eb','#7c3aed','#0891b2','#059669','#d97706','#dc2626','#6366f1','#0d9488','#9333ea','#16a34a','#ca8a04'];
const DIAS_LABEL=['Seg','Ter','Qua','Qui','Sex','Sáb'];
const SLOTS=[
  {ti:'13:00',tf:'13:45'},{ti:'13:45',tf:'14:30'},
  {ti:'14:30',tf:'14:45',int:true},
  {ti:'14:45',tf:'15:30'},{ti:'15:30',tf:'16:15'},
  {ti:'16:15',tf:'16:30',int:true},
  {ti:'16:30',tf:'17:15'},{ti:'17:15',tf:'18:00'},
];
function ini(n){const p=n.trim().split(' ');return(p[0][0]+(p[p.length-1]?.[0]||'')).toUpperCase()}

/* CLOCK */
function tick(){
  const n=new Date();
  document.getElementById('tbDate').textContent=n.toLocaleDateString('pt-PT',{weekday:'short',day:'numeric',month:'short'});
  document.getElementById('bannerSub').textContent=n.toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).replace(/^\w/,c=>c.toUpperCase());
  document.getElementById('assidDataFil').value=n.toISOString().split('T')[0];
  document.getElementById('asData').value=n.toISOString().split('T')[0];
  document.getElementById('subData').value=n.toISOString().split('T')[0];
  document.getElementById('histRfidData').value=n.toISOString().split('T')[0];
}
tick();setInterval(tick,60000);

/* PAINEL */
function renderPainel(){
  // Leitores no painel
  document.getElementById('stLeitoresOn').textContent=LEITORES.filter(l=>l.status==='online').length;
  document.getElementById('stRFIDHoje').textContent=RFID_HOJE.total;
  const alertasN=SUBS.filter(s=>s.estado==='sem_prof').length + LEITORES.filter(l=>l.status==='offline').length;
  document.getElementById('stAlertas').textContent=alertasN;
  document.getElementById('bkpiLeitores').textContent=LEITORES.length;

  // Painel Leitores
  document.getElementById('painelLeitores').innerHTML=LEITORES.map(l=>`
    <div class="rfid-reader-card ${l.status}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:10px">
        <div>
          <div style="display:flex;align-items:center;gap:7px;margin-bottom:3px">
            <span class="reader-pulse ${l.status==='online'?'on':l.status==='warning'?'warn':'off'}"></span>
            <span style="font-size:13px;font-weight:700;color:var(--s800)">${l.nome}</span>
          </div>
          <div style="font-size:10.5px;color:var(--s400);display:flex;align-items:center;gap:5px">
            <span style="font-family:'DM Mono',monospace">${l.id}</span>
            <span>·</span>
            <span>${l.sala}</span>
          </div>
        </div>
        <span class="badge ${l.status==='online'?'g':'r'}"><span class="dot ${l.status==='online'?'g':'r'}"></span>${l.status==='online'?'Online':'Offline'}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:11px;margin-bottom:10px">
        <div style="background:var(--s50);border-radius:6px;padding:6px 8px">
          <div style="color:var(--s400);font-size:9px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Última Leitura</div>
          <div style="font-weight:600;font-family:'DM Mono',monospace;font-size:10.5px">${l.ultima_uid}</div>
          <div style="color:var(--s500);margin-top:1px">${l.ultimo_aluno}</div>
        </div>
        <div style="background:var(--s50);border-radius:6px;padding:6px 8px">
          <div style="color:var(--s400);font-size:9px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">Leituras Hoje</div>
          <div style="font-size:18px;font-weight:800;color:${l.status==='online'?'var(--g)':'var(--s400)'}">${l.leituras_hoje}</div>
          <div style="color:var(--s500);margin-top:1px">${l.tempo}</div>
        </div>
      </div>
      <div style="display:flex;gap:6px">
        ${l.status==='offline'?`<button class="btn warn sm" onclick="reconectarLeitor('${l.id}')"><i class="fa fa-rotate"></i>Reconectar</button>`:''}
        <button class="btn ghost sm" onclick="ir('rfid');setTimeout(()=>setRtab('leitores',document.getElementById('rtab-leitores')),100)"><i class="fa fa-sliders"></i>Gerir</button>
      </div>
    </div>`).join('');

  // Alertas
  const alertas=[];
  SUBS.filter(s=>s.estado==='sem_prof').forEach(s=>alertas.push({tipo:'r',ico:'circle-xmark',titulo:`${s.disc} — ${s.dia_txt} ${s.h}`,sub:`Prof. ${s.prof} ausente · ${s.data}`,acao:`<button class="btn warn xs" style="margin-top:5px" onclick="openModal('modalSub')"><i class="fa fa-arrows-rotate"></i>Definir cobertura</button>`}));
  LEITORES.filter(l=>l.status==='offline').forEach(l=>alertas.push({tipo:'r',ico:'wifi',titulo:`Leitor ${l.id} — ${l.nome}`,sub:`Offline desde ${l.tempo}`,acao:`<button class="btn warn xs" style="margin-top:5px" onclick="reconectarLeitor('${l.id}')"><i class="fa fa-rotate"></i>Reconectar</button>`}));
  alertas.push({tipo:'y',ico:'triangle-exclamation',titulo:'Domingos Caselo — 12ª CFB',sub:'5 faltas não justificadas este mês',acao:''});
  document.getElementById('alertasCount').textContent=alertas.length+' alertas';
  document.getElementById('painelAlertas').innerHTML=alertas.length
    ?alertas.map(a=>`<div class="alert ${a.tipo}"><div class="alert-ico"><i class="fa fa-${a.ico}"></i></div><div><div class="alert-title">${a.titulo}</div><div class="alert-sub">${a.sub}</div>${a.acao}</div></div>`).join('')
    :`<div style="text-align:center;padding:22px;color:var(--s400)"><i class="fa fa-circle-check" style="font-size:28px;color:var(--g);display:block;margin-bottom:8px"></i>Sem alertas ativos</div>`;

  // RFID Resumo Hoje
  document.getElementById('rfidResumo').innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">
      <div style="background:var(--gp);border-radius:var(--r10);padding:12px;text-align:center;border:1px solid var(--gl)">
        <div style="font-size:24px;font-weight:800;color:var(--g)">${RFID_HOJE.validas}</div>
        <div style="font-size:10px;color:var(--gd);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Válidas</div>
      </div>
      <div style="background:var(--rp);border-radius:var(--r10);padding:12px;text-align:center;border:1px solid var(--rl)">
        <div style="font-size:24px;font-weight:800;color:var(--r)">${RFID_HOJE.desconhecidas}</div>
        <div style="font-size:10px;color:var(--rd);font-weight:700;text-transform:uppercase;letter-spacing:.5px">Desconhecidas</div>
      </div>
    </div>
    <div style="background:var(--s50);border-radius:var(--r10);padding:10px 12px;border:1px solid var(--s200)">
      <div style="font-size:9px;font-weight:700;color:var(--s400);text-transform:uppercase;letter-spacing:.8px;margin-bottom:5px">Última Leitura</div>
      <div style="display:flex;align-items:center;gap:8px">
        <div style="width:30px;height:30px;border-radius:50%;background:var(--b);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0">HS</div>
        <div>
          <div style="font-size:12px;font-weight:600">${RFID_HOJE.ultima.aluno}</div>
          <div style="font-size:10px;color:var(--s400);font-family:'DM Mono',monospace">${RFID_HOJE.ultima.uid}</div>
          <div style="font-size:10px;color:var(--s400)">${RFID_HOJE.ultima.leitor} · <strong>${RFID_HOJE.ultima.tempo}</strong></div>
        </div>
      </div>
    </div>`;

  // Feed atividades
  document.getElementById('feedAtividades').innerHTML=LOGS.slice(0,5).map(l=>`
    <div class="feed-item">
      <div class="feed-dot" style="background:${l.tipo==='login'?'var(--g)':l.tipo==='logout'?'var(--s400)':l.tipo==='delete'?'var(--r)':'var(--b)'}"></div>
      <div><div class="feed-text"><strong>${l.user}</strong> — ${l.desc}</div><div class="feed-time">${l.dt}</div></div>
    </div>`).join('');

  // NBSubs
  const sems=SUBS.filter(s=>s.estado==='sem_prof').length;
  document.getElementById('nbSubs').textContent=sems;
  document.getElementById('stSemProfSubs').textContent=sems;
}
renderPainel();

function reconectarLeitor(id){
  showToast(`A reconectar leitor ${id}…`,'tb');
  setTimeout(()=>{
    const l=LEITORES.find(x=>x.id===id);
    if(l){l.status='online';renderPainel();renderLeitoresPage();}
    showToast(`Leitor ${id} reconectado!`,'tg');
  },2200);
}

/* TURMAS */
function renderTurmas(lista){
  document.getElementById('tblTurmasBody').innerHTML=(lista||TURMAS).map(t=>`<tr>
    <td><span class="id-chip">${t.id}</span></td>
    <td style="font-weight:700">${t.nome}</td>
    <td>${t.classe}</td>
    <td><span class="badge b">${t.turno}</span></td>
    <td style="font-size:11.5px;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${t.curso}</td>
    <td>${t.sala}</td>
    <td><span style="font-weight:700;color:var(--b)">${t.alunos}</span></td>
    <td><span class="badge ${t.status==='ativa'?'g':'s'}"><span class="dot ${t.status==='ativa'?'g':'s'}"></span>${t.status==='ativa'?'Ativa':'Inativa'}</span></td>
    <td class="ops">
      <button class="btn ghost xs" onclick="verTurma('${t.id}')"><i class="fa fa-eye"></i>Ver</button>
      <button class="btn outline-b xs" onclick="editTurma('${t.id}')"><i class="fa fa-pen"></i>Editar</button>
      <button class="btn danger xs" onclick="toggleTurmaStatus('${t.id}')"><i class="fa fa-${t.status==='ativa'?'lock':'lock-open'}"></i></button>
    </td>
  </tr>`).join('');
}
renderTurmas();
function filterTurmas(q){renderTurmas(TURMAS.filter(t=>t.nome.toLowerCase().includes(q.toLowerCase())))}
function toggleTurmaStatus(id){
  const t=TURMAS.find(x=>x.id===id);
  if(!t)return;
  const novoStatus=t.status==='ativa'?'inativa':'ativa';
  if(!confirm(`${novoStatus==='inativa'?'Desativar':'Ativar'} a turma ${t.nome}?`))return;
  t.status=novoStatus;renderTurmas();showToast(`Turma ${novoStatus==='ativa'?'ativada':'desativada'}`,'tg');
}
function editTurma(id){
  const t=TURMAS.find(x=>x.id===id);
  document.getElementById('mTurmaTitle').textContent='Editar Turma';
  document.getElementById('tNome').value=t.nome;
  document.getElementById('tSala').value=t.sala;
  document.getElementById('tAno').value=t.ano;
  openModal('modalTurma');
}
function saveTurma(){
  const nome=document.getElementById('tNome').value.trim();
  if(!nome){showToast('Nome da turma obrigatório','ty');return}
  const nt={id:'T'+String(TURMAS.length+1).padStart(3,'0'),nome,classe:document.getElementById('tClasse').value,turno:document.getElementById('tPeriodo').value,curso:document.getElementById('tCurso').value,sala:document.getElementById('tSala').value||'—',alunos:0,status:'ativa',ano:document.getElementById('tAno').value};
  TURMAS.push(nt);renderTurmas();closeModal('modalTurma');showToast('Turma criada','tg');
  // Add to horario filter
  const sel=document.getElementById('hFiltroTurma');
  const opt=document.createElement('option');opt.value=nt.id;opt.textContent=nt.nome;sel.appendChild(opt);
}
function verTurma(id){
  const t=TURMAS.find(x=>x.id===id);
  document.getElementById('vTurmaTitulo').textContent=t.nome+' — Detalhes';
  document.getElementById('vTurmaBody').innerHTML=`
    <div class="g2" style="margin-bottom:12px">
      <div><div class="sec-label">Informações Gerais</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          ${[['Nome',t.nome],['Classe',t.classe],['Curso',t.curso],['Turno',t.turno],['Sala',t.sala],['Ano Letivo',t.ano],['Status',t.status==='ativa'?'<span class="badge g">Ativa</span>':'<span class="badge s">Inativa</span>']].map(([l,v])=>`<div style="display:flex;justify-content:space-between;font-size:12px;padding:6px 0;border-bottom:1px solid var(--s100)"><span style="color:var(--s500);font-weight:600">${l}</span><span style="font-weight:600">${v}</span></div>`).join('')}
        </div>
      </div>
      <div><div class="sec-label">Alunos (${t.alunos})</div>
        <div style="display:flex;flex-direction:column;gap:5px">
          ${ALUNOS.filter(a=>a.turma==='12CFB').slice(0,5).map((a,i)=>`<div style="display:flex;align-items:center;gap:8px;font-size:12px"><div class="av" style="background:${CORS[i%CORS.length]};width:26px;height:26px;font-size:9px">${ini(a.nome)}</div>${a.nome}</div>`).join('')}
          ${ALUNOS.length>5?`<div style="font-size:11px;color:var(--s400);margin-top:4px">…e mais ${ALUNOS.length-5} alunos</div>`:''}
        </div>
      </div>
    </div>`;
  openModal('modalVerTurma');
}

/* DISCIPLINAS  */
function renderDiscs(lista){
  document.getElementById('tblDiscsBody').innerHTML=(lista||DISCS).map(d=>`<tr>
    <td><span class="id-chip">${d.id}</span></td>
    <td style="font-weight:700">${d.nome}</td>
    <td>${d.prof}</td>
    <td><span style="font-weight:700;color:var(--b)">${d.carga}h/sem</span></td>
    <td>${d.turma}</td>
    <td><span class="badge ${d.status==='ativa'?'g':'s'}">${d.status==='ativa'?'Ativa':'Inativa'}</span></td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="editDisc('${d.id}')"><i class="fa fa-pen"></i>Editar</button>
      <button class="btn danger xs" onclick="removeDisc('${d.id}')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
}
renderDiscs();
function filterDiscs(q){q=q.toLowerCase();renderDiscs(DISCS.filter(d=>d.nome.toLowerCase().includes(q)||d.prof.toLowerCase().includes(q)))}
function editDisc(id){
  const d=DISCS.find(x=>x.id===id);
  document.getElementById('mDiscTitle').textContent='Editar Disciplina';
  document.getElementById('dNome').value=d.nome;document.getElementById('dCarga').value=d.carga;
  openModal('modalDisc');
}
function removeDisc(id){if(!confirm('Remover esta disciplina?'))return;DISCS=DISCS.filter(x=>x.id!==id);renderDiscs();showToast('Disciplina removida','ty')}
function saveDisc(){
  const nome=document.getElementById('dNome').value.trim();
  if(!nome){showToast('Nome obrigatório','ty');return}
  DISCS.push({id:'D'+String(DISCS.length+1).padStart(3,'0'),nome,prof:document.getElementById('dProf').value||'—',carga:parseInt(document.getElementById('dCarga').value)||2,turma:document.getElementById('dTurma').value,status:'ativa'});
  renderDiscs();closeModal('modalDisc');showToast('Disciplina adicionada','tg');
}

/* CADASTROS  */
function renderCadastros(){
  document.getElementById('tblClassesBody').innerHTML=CLASSES.map(c=>`<tr>
    <td><span class="id-chip">${c.id}</span></td><td style="font-weight:600">${c.nome}</td><td>${c.curso}</td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="showToast('Editar classe','tb')"><i class="fa fa-pen"></i></button>
      <button class="btn danger xs" onclick="removeItem(CLASSES,'${c.id}');renderCadastros();showToast('Removido','ty')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
  document.getElementById('tblCursosBody').innerHTML=CURSOS.map(c=>`<tr>
    <td><span class="id-chip">${c.id}</span></td><td style="font-weight:600">${c.nome}</td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="showToast('Editar curso','tb')"><i class="fa fa-pen"></i></button>
      <button class="btn danger xs" onclick="removeItem(CURSOS,'${c.id}');renderCadastros();showToast('Removido','ty')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
  document.getElementById('tblPeriodosBody').innerHTML=PERIODOS.map(p=>`<tr>
    <td><span class="id-chip">${p.id}</span></td><td style="font-weight:600">${p.nome}</td><td>${p.horario}</td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="showToast('Editar turno','tb')"><i class="fa fa-pen"></i></button>
      <button class="btn danger xs" onclick="removeItem(PERIODOS,'${p.id}');renderCadastros();showToast('Removido','ty')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
  document.getElementById('tblSalasBody').innerHTML=SALAS.map(s=>`<tr>
    <td><span class="id-chip">${s.id}</span></td><td style="font-weight:600">${s.nome}</td><td>${s.cap}</td>
    <td><span class="badge ${s.rfid==='Sim'?'g':'s'}">${s.rfid}</span></td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="editSala('${s.id}')"><i class="fa fa-pen"></i></button>
      <button class="btn danger xs" onclick="removeItem(SALAS,'${s.id}');renderCadastros();showToast('Removido','ty')"><i class="fa fa-trash"></i></button>
    </td>
  </tr>`).join('');
}
renderCadastros();
function removeItem(arr,id){const i=arr.findIndex(x=>x.id===id);if(i>-1)arr.splice(i,1)}
function editSala(id){showToast('Editar sala','tb')}
function saveCadastro(tipo){closeModal('modal'+tipo.charAt(0).toUpperCase()+tipo.slice(1));renderCadastros();showToast(tipo.charAt(0).toUpperCase()+tipo.slice(1)+' adicionado(a)','tg')}

/* HORÁRIO — com filtro por turma/professor */
function buildHorario(){
  const turmaFil=document.getElementById('hFiltroTurma')?.value||'';
  const profFil=document.getElementById('hFiltroProf')?.value||'';
  const horarioFiltrado=HORARIO.filter(h=>{
    if(turmaFil&&h.turma!==turmaFil)return false;
    if(profFil&&h.prof!==profFil)return false;
    return true;
  });

  const g=document.getElementById('horarioGrid');g.innerHTML='';
  const H=(html,style)=>{const d=document.createElement('div');d.innerHTML=html;if(style)Object.assign(d.style,style);g.appendChild(d);return d};
  const hs={background:'var(--s100)',borderRadius:'6px',padding:'6px 4px',textAlign:'center',fontWeight:'700',fontSize:'10px',color:'var(--s600)'};
  H('',hs);DIAS_LABEL.forEach(d=>H(d,hs));
  SLOTS.forEach(slot=>{
    const ts={background:'var(--s50)',borderRadius:'6px',padding:'5px 3px',textAlign:'center',fontSize:'10px',color:'var(--s400)',fontWeight:'600',display:'flex',alignItems:'center',justifyContent:'center'};
    if(slot.int){
      H('<span style="font-size:8px;color:#d97706">🔔</span>',ts);
      for(let d=0;d<6;d++)H('<div style="font-size:8.5px;text-align:center;color:#d97706;font-weight:700;background:#fffbeb;border-radius:6px;padding:4px;display:flex;align-items:center;justify-content:center;height:100%">Intervalo</div>',{borderRadius:'6px',background:'transparent',minHeight:'36px',display:'flex',alignItems:'center'});
      return;
    }
    H(`<div style="line-height:1.3">${slot.ti}<br><span style="font-size:8px">${slot.tf}</span></div>`,ts);
    for(let dia=1;dia<=6;dia++){
      const aulas=horarioFiltrado.filter(h=>h.dia===dia&&h.ti===slot.ti);
      if(aulas.length){
        const cellDiv=H('',{borderRadius:'6px',padding:'3px',minHeight:'42px',display:'flex',flexDirection:'column',gap:'2px'});
        aulas.forEach(aula=>{
          const isSP=aula.est==='sem_prof';
          const d=document.createElement('div');
          d.style.cssText=`background:${isSP?'#fef2f2':'#eff6ff'};border:1.5px solid ${isSP?'rgba(220,38,38,.3)':'rgba(37,99,235,.2)'};border-radius:5px;padding:4px 5px;flex:1;cursor:pointer;transition:all .15s`;
          d.innerHTML=`<div style="font-size:9.5px;font-weight:700;color:${isSP?'#dc2626':'#1d4ed8'};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${aula.disc}</div><div style="font-size:8.5px;color:#64748b;margin-top:1px">${aula.prof}</div>${profFil||turmaFil?`<div style="font-size:8px;color:var(--s400)">${aula.turma||''}</div>`:''}`;
          d.title=`${aula.disc} · ${aula.prof} (${slot.ti}–${slot.tf})`;
          d.onmouseenter=()=>{d.style.boxShadow='0 2px 8px rgba(0,0,0,.12)';d.style.transform='translateY(-1px)'};
          d.onmouseleave=()=>{d.style.boxShadow='';d.style.transform=''};
          cellDiv.appendChild(d);
        });
      } else {
        H('',{borderRadius:'6px',background:'transparent',minHeight:'42px'});
      }
    }
  });
}

function populateHorarioFilters(){
  const profSel=document.getElementById('hFiltroProf');
  if(!profSel)return;
  const profs=[...new Set(HORARIO.map(h=>h.prof))].sort();
  profSel.innerHTML='<option value="">Todos os professores</option>'+profs.map(p=>`<option value="${p}">${p}</option>`).join('');
}

/*  ASSIDUIDADE  */
function renderAssid(){
  const eb={assiduo:'<span class="badge g"><span class="dot g"></span>Presente Assíduo</span>',atrasado:'<span class="badge y"><span class="dot y"></span>Atrasado</span>',falta:'<span class="badge r"><span class="dot r"></span>Falta</span>'};
  document.getElementById('tblAssidBody').innerHTML=ASSID.map(a=>`<tr>
    <td><span class="id-chip">${a.id}</span></td>
    <td style="font-size:12px;font-weight:600;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.aluno}</td>
    <td>${a.turma}</td><td>${a.data}</td>
    <td style="font-family:'DM Mono',monospace;font-size:11px">${a.hora}</td>
    <td>${eb[a.estado]||a.estado}</td>
    <td>${a.valido?'<span class="badge g"><i class="fa fa-check" style="font-size:8px"></i>Sim</span>':'<span class="badge y">Pendente</span>'}</td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="showToast('A editar registo…','tb')"><i class="fa fa-pen"></i></button>
      <button class="btn ${a.valido?'ghost':'success'} xs" onclick="toggleAssidValid(${ASSID.indexOf(a)})">
        <i class="fa fa-${a.valido?'rotate-left':'check'}"></i>${a.valido?'Revogar':'Validar'}
      </button>
    </td>
  </tr>`).join('');
}
renderAssid();
function toggleAssidValid(i){ASSID[i].valido=!ASSID[i].valido;renderAssid();showToast(ASSID[i].valido?'Validado':'Validação removida',ASSID[i].valido?'tg':'ty')}
function saveAssid(){
  const al=document.getElementById('asAluno').value;
  if(!al){showToast('Seleciona o aluno','ty');return}
  ASSID.unshift({id:'AS'+String(ASSID.length+1).padStart(3,'0'),aluno:al,turma:'12ª CFB',data:document.getElementById('asData').value,hora:document.getElementById('asHora').value,estado:document.getElementById('asEstado').value,valido:false});
  renderAssid();closeModal('modalAssid');showToast('Presença registada','tg');
}

/* ════════ SUBSTITUIÇÕES ════════ */
function renderSubs(){
  const sems=SUBS.filter(s=>s.estado==='sem_prof').length;
  document.getElementById('stSemProfSubs').textContent=sems;
  document.getElementById('nbSubs').textContent=sems;
  document.getElementById('listaSubs').innerHTML=SUBS.length?SUBS.map(s=>`
    <div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--s100)">
      <div style="width:38px;height:38px;border-radius:var(--r10);background:${s.estado==='sem_prof'?'var(--rp)':'var(--bp)'};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">
        <i class="fa fa-${s.estado==='sem_prof'?'circle-xmark':'arrows-rotate'}" style="color:${s.estado==='sem_prof'?'var(--r)':'var(--b)'}"></i>
      </div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:700">${s.disc} — ${s.dia_txt} ${s.h}</div>
        <div style="font-size:11px;color:var(--s500);margin-top:2px">Prof. titular: <strong>${s.prof}</strong> · ${s.data}</div>
        ${s.sub?`<div style="font-size:11px;color:var(--b);margin-top:2px"><i class="fa fa-arrows-rotate" style="margin-right:4px"></i>Substituto: ${s.sub}</div>`:''}
      </div>
      <span class="badge ${s.estado==='sem_prof'?'r':'b'}">${s.estado==='sem_prof'?'Sem Prof.':'Cobertura'}</span>
      <div class="ops">
        ${s.estado==='sem_prof'?`<button class="btn warn sm" onclick="openModal('modalSub')"><i class="fa fa-arrows-rotate"></i>Cobertura</button>`:''}
        <button class="btn danger sm" onclick="removeSub(${s.id})"><i class="fa fa-trash"></i></button>
      </div>
    </div>`).join('')
    :`<div style="text-align:center;padding:24px;color:var(--s400)"><i class="fa fa-circle-check" style="font-size:28px;color:var(--g);display:block;margin-bottom:8px"></i>Sem ausências pendentes</div>`;
}
renderSubs();
function removeSub(id){if(!confirm('Eliminar este registo?'))return;SUBS=SUBS.filter(x=>x.id!==id);renderSubs();renderPainel();showToast('Eliminado','ty')}
function toggleSubAcao(v){document.getElementById('subDiv').style.display=v==='substituto'?'block':'none'}
function saveSub(){
  const aula=document.getElementById('subAula').value;
  if(!aula){showToast('Seleciona a aula','ty');return}
  const acao=document.getElementById('subAcao').value;
  showToast(acao==='sem_prof'?'Marcado sem professor':acao==='substituto'?'Substituto definido':'Aula cancelada','tg');
  closeModal('modalSub');
}

/* ALUNOS  */
function renderAlunos(lista){
  document.getElementById('tblAlunosBody').innerHTML=(lista||ALUNOS).map((a,i)=>`<tr>
    <td><span class="id-chip">${a.nproc}</span></td>
    <td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="background:${CORS[i%CORS.length]};width:26px;height:26px;font-size:9px">${ini(a.nome)}</div><span style="font-weight:600;font-size:12px;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block">${a.nome}</span></div></td>
    <td>${a.turma}</td>
    <td style="font-size:11.5px">${a.curso}</td>
    <td>${a.classe}ª</td>
    <td><span style="font-family:'DM Mono',monospace;font-size:10.5px;background:var(--s100);padding:2px 6px;border-radius:5px;color:var(--s600)">${a.rfid||'—'}</span></td>
    <td><span class="badge ${a.status==='ativo'?'g':'s'}"><span class="dot ${a.status==='ativo'?'g':'s'}"></span>${a.status==='ativo'?'Ativo':'Inativo'}</span></td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="editAluno(${a.id})"><i class="fa fa-pen"></i></button>
      <button class="btn warn xs" onclick="showToast('Transferência registada','ty')"><i class="fa fa-arrows-rotate"></i></button>
      <button class="btn danger xs" onclick="toggleAlunoStatus(${a.id})"><i class="fa fa-${a.status==='ativo'?'ban':'check'}"></i></button>
    </td>
  </tr>`).join('');
  const ops=ALUNOS.map(a=>`<option value="${a.nome}">${a.nome}</option>`).join('');
  document.getElementById('cAluno').innerHTML='<option value="">Selecionar aluno…</option>'+ops;
  document.getElementById('asAluno').innerHTML=ops;
}
renderAlunos();
function filterAlunos(q){q=q.toLowerCase();renderAlunos(ALUNOS.filter(a=>a.nome.toLowerCase().includes(q)||a.nproc.includes(q)))}
function editAluno(id){
  const a=ALUNOS.find(x=>x.id===id);
  document.getElementById('mAlunoTitle').textContent='Editar Aluno';
  document.getElementById('aOrd').value=a.ord;document.getElementById('aProc').value=a.nproc;
  document.getElementById('aNome').value=a.nome;document.getElementById('aRfid').value=a.rfid||'';
  openModal('modalAluno');
}
function toggleAlunoStatus(id){
  const a=ALUNOS.find(x=>x.id===id);
  if(!a||!confirm(`${a.status==='ativo'?'Desativar':'Ativar'} aluno ${a.nome.split(' ')[0]}?`))return;
  a.status=a.status==='ativo'?'inativo':'ativo';renderAlunos();showToast('Estado atualizado','tg');
}
function saveAluno(){
  const nome=document.getElementById('aNome').value.trim();
  if(!nome){showToast('Nome obrigatório','ty');return}
  const novo={id:ALUNOS.length+1,ord:parseInt(document.getElementById('aOrd').value)||ALUNOS.length+1,nproc:document.getElementById('aProc').value||'—',nome,turma:'12CFB',classe:'12ª',curso:'CFB',status:'ativo',rfid:document.getElementById('aRfid').value||''};
  ALUNOS.push(novo);renderAlunos();closeModal('modalAluno');showToast('Aluno guardado','tg');
}

/* RFID — cartões + leitores + histórico */
function renderRFID(){
  document.getElementById('tblRFIDBody').innerHTML=ALUNOS.map((a,i)=>`<tr>
    <td><span class="id-chip">${a.nproc}</span></td>
    <td><div style="display:flex;align-items:center;gap:7px"><div class="av" style="background:${CORS[i%CORS.length]};width:26px;height:26px;font-size:9px">${ini(a.nome)}</div><span style="font-size:12px;font-weight:600">${a.nome}</span></div></td>
    <td><span style="font-family:'DM Mono',monospace;font-size:11px;background:var(--s50);border:1px solid var(--s200);padding:2px 8px;border-radius:5px">${a.rfid||'—'}</span></td>
    <td>${a.turma}</td>
    <td><span class="badge ${a.rfid?'g':'s'}"><span class="dot ${a.rfid?'g':'s'}"></span>${a.rfid?'Ativo':'Sem cartão'}</span></td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="openModal('modalCartao')"><i class="fa fa-arrows-rotate"></i>${a.rfid?'Substituir':'Associar'}</button>
      ${a.rfid?`<button class="btn danger xs" onclick="desativarCartao(${a.id})"><i class="fa fa-ban"></i>Desativar</button>`:''}
    </td>
  </tr>`).join('');
}
renderRFID();

function renderLeitoresPage(){
  const grid=document.getElementById('leitoresGrid');
  if(!grid)return;
  grid.innerHTML=LEITORES.map(l=>`
    <div class="rfid-reader-card ${l.status}" style="height:fit-content">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:8px">
          <div style="width:40px;height:40px;border-radius:var(--r10);background:${l.status==='online'?'var(--gp)':'var(--rp)'};display:flex;align-items:center;justify-content:center;font-size:18px;color:${l.status==='online'?'var(--g)':'var(--r)'}"><i class="fa fa-tower-broadcast"></i></div>
          <div>
            <div style="font-size:13px;font-weight:700">${l.nome}</div>
            <div style="font-size:10px;color:var(--s400);font-family:'DM Mono',monospace">${l.id}</div>
          </div>
        </div>
        <span class="badge ${l.status==='online'?'g':'r'}"><span class="reader-pulse ${l.status==='online'?'on':'off'}" style="margin-right:3px"></span>${l.status==='online'?'Online':'Offline'}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px">
        ${[['Sala',l.sala],['Leituras Hoje',l.leituras_hoje],['Último Aluno',l.ultimo_aluno],['Último acesso',l.tempo]].map(([k,v])=>`
          <div style="background:var(--s50);border-radius:6px;padding:7px 9px">
            <div style="font-size:9px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${k}</div>
            <div style="font-size:12px;font-weight:600;color:var(--s700)">${v}</div>
          </div>`).join('')}
      </div>
      <div style="font-size:9px;color:var(--s400);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Último UID lido</div>
      <div style="font-family:'DM Mono',monospace;font-size:12px;background:var(--s100);padding:5px 9px;border-radius:6px;margin-bottom:10px;color:var(--s700)">${l.ultima_uid}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${l.status==='offline'?`<button class="btn warn sm" onclick="reconectarLeitor('${l.id}')"><i class="fa fa-rotate"></i>Reconectar</button>`:'<button class="btn ghost sm" onclick="showToast(\'Leitor OK\',\'tg\')"><i class="fa fa-circle-check"></i>Diagnóstico</button>'}
        <button class="btn danger sm" onclick="showToast('Leitor removido','ty')"><i class="fa fa-trash"></i>Remover</button>
      </div>
    </div>`).join('');
}

function renderHistRfid(){
  document.getElementById('tblHistRfidBody').innerHTML=HIST_RFID.map(h=>`<tr>
    <td style="font-family:'DM Mono',monospace;font-size:10.5px;color:var(--s500)">${h.dt}</td>
    <td style="font-weight:600">${h.aluno}</td>
    <td style="font-family:'DM Mono',monospace;font-size:11px;background:var(--s50);padding:2px 6px;border-radius:4px">${h.uid}</td>
    <td style="font-size:11px">${h.leitor}</td>
    <td><span class="badge ${h.est==='valida'?'g':'r'}">${h.est==='valida'?'Válida':'Desconhecida'}</span></td>
  </tr>`).join('');
}
renderHistRfid();

function desativarCartao(id){
  if(!confirm('Desativar o cartão deste aluno?'))return;
  const a=ALUNOS.find(x=>x.id===id);if(a){a.rfid='';}
  renderRFID();renderAlunos();showToast('Cartão desativado','ty');
}
function saveCartao(){
  const al=document.getElementById('cAluno').value;
  const uid=document.getElementById('cUID').value.trim();
  if(!al){showToast('Seleciona o aluno','ty');return}
  if(!uid&&document.getElementById('cAcao').value!=='desativar'){showToast('Introduz o UID','ty');return}
  const a=ALUNOS.find(x=>x.nome===al);
  if(a){a.rfid=document.getElementById('cAcao').value==='desativar'?'':uid}
  renderRFID();renderAlunos();closeModal('modalCartao');showToast('Cartão atualizado','tg');
}
function saveLeitor(){
  const nome=document.getElementById('lNome').value.trim();
  if(!nome){showToast('Nome obrigatório','ty');return}
  LEITORES.push({id:document.getElementById('lId').value||'RFID-0'+LEITORES.length,nome,sala:document.getElementById('lSala').value,status:'offline',ultima_uid:'—',ultimo_aluno:'—',tempo:'—',leituras_hoje:0});
  renderLeitoresPage();renderPainel();closeModal('modalLeitor');showToast('Leitor adicionado','tg');
}

let curRtab='cartoes';
function setRtab(tab,btn){
  document.querySelectorAll('[id^="rtab-"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  ['cartoes','leitores','historico'].forEach(t=>document.getElementById('rt-'+t).style.display=t===tab?'block':'none');
  curRtab=tab;
  if(tab==='leitores')renderLeitoresPage();
  if(tab==='historico')renderHistRfid();
}

/* UTILIZADORES */
function renderUsers(){
  const pc={admin:'<span class="badge p">Admin</span>',coordenador:'<span class="badge b">Coordenador</span>',professor:'<span class="badge g">Professor</span>'};
  document.getElementById('tblUsersBody').innerHTML=USERS.map((u,i)=>`<tr>
    <td><span class="id-chip">${u.id}</span></td>
    <td><div style="display:flex;align-items:center;gap:8px"><div class="av" style="background:${CORS[i%CORS.length]};width:26px;height:26px;font-size:9px">${ini(u.nome)}</div><div><div style="font-weight:600;font-size:12px">${u.nome}</div><div style="font-size:10px;color:var(--s400)">${u.username}</div></div></div></td>
    <td>${pc[u.perfil]||u.perfil}</td>
    <td style="font-size:11px;color:var(--s500)">${u.acesso}</td>
    <td><span class="badge ${u.status==='ativo'?'g':'s'}"><span class="dot ${u.status==='ativo'?'g':'s'}"></span>${u.status==='ativo'?'Ativo':'Inativo'}</span></td>
    <td class="ops">
      <button class="btn outline-b xs" onclick="showToast('Editar utilizador','tb')"><i class="fa fa-pen"></i>Editar</button>
      <button class="btn ${u.status==='ativo'?'danger':'success'} xs" onclick="toggleUser('${u.id}')">
        <i class="fa fa-${u.status==='ativo'?'ban':'check'}"></i>${u.status==='ativo'?'Desativar':'Ativar'}
      </button>
    </td>
  </tr>`).join('');
}
renderUsers();
function toggleUser(id){const u=USERS.find(x=>x.id===id);if(u){u.status=u.status==='ativo'?'inativo':'ativo';renderUsers();showToast('Estado alterado','tg')}}
function saveUser(){
  const nome=document.getElementById('uNome').value.trim();
  if(!nome){showToast('Nome obrigatório','ty');return}
  USERS.push({id:'U'+String(USERS.length+1).padStart(3,'0'),nome,username:document.getElementById('uUsername').value||nome.split(' ')[0].toLowerCase(),email:document.getElementById('uEmail').value,perfil:document.getElementById('uPerfil').value,status:'ativo',acesso:'—'});
  renderUsers();closeModal('modalUser');showToast('Utilizador criado','tg');
}

function renderPerms(){
  document.getElementById('permMatrix').innerHTML=PERMS.map(p=>`
    <div class="perm-row">
      <div style="font-size:12px;font-weight:500">${p.item}</div>
      <div style="text-align:center"><input type="checkbox" class="perm-check" ${p.admin?'checked':''} onchange="showToast('Permissão atualizada','tg')"></div>
      <div style="text-align:center"><input type="checkbox" class="perm-check" ${p.coord?'checked':''} onchange="showToast('Permissão atualizada','tg')"></div>
      <div style="text-align:center"><input type="checkbox" class="perm-check" ${p.prof?'checked':''} onchange="showToast('Permissão atualizada','tg')"></div>
    </div>`).join('');
}
renderPerms();

function renderLogs(){
  document.getElementById('tblLogsBody').innerHTML=LOGS.map(l=>`<tr>
    <td style="font-family:'DM Mono',monospace;font-size:10.5px;color:var(--s500);white-space:nowrap">${l.dt}</td>
    <td style="font-weight:600;font-size:12px">${l.user}</td>
    <td><span class="log-type ${l.tipo}">${l.tipo}</span></td>
    <td style="font-size:12px;color:var(--s600)">${l.desc}</td>
    <td style="font-family:'DM Mono',monospace;font-size:10px;color:var(--s400)">${l.ip}</td>
  </tr>`).join('');
}
renderLogs();

let curUtab='contas';
function setUtab(tab,btn){
  document.querySelectorAll('[id^="utab-"]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  ['contas','perms','logs'].forEach(t=>document.getElementById('ut-'+t).style.display=t===tab?'block':'none');
  curUtab=tab;
}

/* SELECTS */
function populateSelects(){
  const ps=document.getElementById('dProf');
  ps.innerHTML='<option value="">Selecionar…</option>'+PROFS.map(p=>`<option value="${p.nome}">${p.nome}</option>`).join('');
  const hs=document.getElementById('haDisc');
  if(hs)hs.innerHTML=DISCS.map(d=>`<option value="${d.nome}">${d.nome}</option>`).join('');
}
populateSelects();

/*  NAVIGATION  */
const TITULOS={painel:'Visão Geral',turmas:'Gestão de Turmas',disciplinas:'Disciplinas',cadastro:'Cadastro',horarios:'Horários',assiduidade:'Assiduidade',substituicoes:'Ausências e Cobertura',alunos:'Gestão de Alunos',rfid:'Cartões e Leitores RFID',utilizadores:'Gestão de Utilizadores',configuracoes:'Configurações'};
function ir(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(x=>x.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  document.getElementById('nav-'+v).classList.add('active');
  document.getElementById('tbTitle').textContent=TITULOS[v]||v;
  if(v==='horarios'){populateHorarioFilters();setTimeout(buildHorario,80);}
  closeSb();
}
function openSb(){document.getElementById('sidebar').classList.add('open');document.getElementById('sbOv').classList.add('open')}
function closeSb(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sbOv').classList.remove('open')}

/* MODALS */
function openModal(id,mode,ref){
  if(mode==='novo'){
    if(id==='modalAluno'){document.getElementById('mAlunoTitle').textContent='Novo Aluno';['aOrd','aProc','aNome','aRfid'].forEach(f=>document.getElementById(f).value='')}
    if(id==='modalTurma'){document.getElementById('mTurmaTitle').textContent='Nova Turma';['tNome','tSala'].forEach(f=>document.getElementById(f).value='')}
    if(id==='modalDisc'){document.getElementById('mDiscTitle').textContent='Nova Disciplina';['dNome','dCarga'].forEach(f=>document.getElementById(f).value='')}
    if(id==='modalUser'){document.getElementById('mUserTitle').textContent='Novo Utilizador';['uNome','uUsername','uEmail','uPass'].forEach(f=>document.getElementById(f).value='')}
  }
  document.getElementById(id).classList.add('open');
}
function closeModal(id){document.getElementById(id).classList.remove('open')}
document.querySelectorAll('.overlay').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));

/* HELPERS */
function setFPill(btn,val){
  const parent=btn.parentElement;
  parent.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function saveAula(){
  const disc=document.getElementById('haDisc')?.value;
  const dia=document.getElementById('haDia')?.value;
  const ini=document.getElementById('haInicio')?.value;
  const fim=document.getElementById('haFim')?.value;
  if(!disc||!ini||!fim){showToast('Preenche todos os campos','ty');return}
  const p=DISCS.find(d=>d.nome===disc);
  HORARIO.push({dia:parseInt(dia),ti:ini,tf:fim,prof:p?p.prof:'—',disc,turma:document.getElementById('haTurma')?.value||'12CFB',est:'confirmada'});
  closeModal('modalAula');setTimeout(()=>{populateHorarioFilters();buildHorario();},100);showToast('Aula adicionada ao horário','tg');
}
function confirmReset(){if(confirm('⚠️ Confirmar reset dos dados do dia?\nEsta ação não pode ser desfeita.'))showToast('Reset do dia executado','tr')}
function sair(){if(confirm('Terminar sessão?'))window.location.href='scope-login.html'}

let toastT;
function showToast(msg,cls='tg'){
  const t=document.getElementById('toast');
  t.innerHTML=`<i class="fa fa-${cls==='tg'?'check-circle':cls==='ty'?'exclamation-circle':cls==='tr'?'times-circle':'info-circle'}"></i>${msg}`;
  t.className=`toast ${cls} show`;clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),3200);
}

// Init
setTimeout(()=>{populateHorarioFilters();buildHorario();},200);
