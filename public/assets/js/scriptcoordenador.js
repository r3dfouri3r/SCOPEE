const ALUNOS=[
  {id:1,ord:1,nproc:'1650',nome:'Agnalda Kunjikisse Jelembi Vapor',p:14,f:1,a:1,t:16},
  {id:2,ord:2,nproc:'405', nome:'Alexandre Fernando Monteiro Pereira',p:12,f:3,a:1,t:16},
  {id:3,ord:3,nproc:'2027',nome:'Domingos Caselo Kalwiji Samanjata',p:9,f:6,a:1,t:16},
  {id:4,ord:4,nproc:'2543',nome:'Haziel Simboyala Chitau Hamuyela Tchitavila',p:15,f:0,a:1,t:16},
  {id:5,ord:5,nproc:'260', nome:'Larissa Fato Botelho',p:13,f:2,a:1,t:16},
  {id:6,ord:6,nproc:'774', nome:'Luís Caison Zango Caica',p:11,f:4,a:1,t:16},
  {id:7,ord:7,nproc:'2556',nome:'Maria Da Conceição José Pena',p:15,f:0,a:1,t:16},
];
const PROFS=[
  {nome:'Alberto',disc:'Matemática',cor:'#3B82F6'},
  {nome:'Euclides',disc:'Física',cor:'#8B5CF6'},
  {nome:'Jelson',disc:'Língua Inglesa',cor:'#EC4899'},
  {nome:'A. Chipaco',disc:'Língua Portuguesa',cor:'#14B8A6'},
  {nome:'A. Gourgel',disc:'Biologia',cor:'#F97316'},
  {nome:'Margarido',disc:'Geologia',cor:'#06B6D4'},
  {nome:'Beatriz',disc:'Química',cor:'#84CC16'},
  {nome:'Madaleno',disc:'Empreendedorismo',cor:'#F59E0B'},
  {nome:'João Cassoma',disc:'Filosofia',cor:'#EF4444'},
  {nome:'L. Magalhães',disc:'Geometria Descritiva',cor:'#7C3AED'},
  {nome:'Edgar Somak',disc:'Educação Física',cor:'#0EA5E9'},
];
const AULAS=[
  {h:'13:00–13:45',disc:'Língua Inglesa',prof:'Jelson',sala:'B10',est:'confirmada'},
  {h:'13:45–14:30',disc:'Língua Portuguesa',prof:'A. Chipaco',sala:'B12',est:'em_curso'},
  {h:'14:45–16:15',disc:'Geologia',prof:'Margarido',sala:'B14',est:'sem_prof'},
  {h:'16:30–18:00',disc:'Filosofia',prof:'João Cassoma',sala:'B8',est:'proxima'},
];
const DISC_TAXA=[
  {disc:'Matemática',pct:88},{disc:'Física',pct:85},{disc:'Língua Portuguesa',pct:91},
  {disc:'Língua Inglesa',pct:79},{disc:'Biologia',pct:83},{disc:'Geologia',pct:71},
  {disc:'Química',pct:86},{disc:'Empreendedorismo',pct:88},{disc:'Filosofia',pct:80},
  {disc:'Geometria Descritiva',pct:77},{disc:'Educação Física',pct:94},
];
let OCORRENCIAS=[
  {id:1,aluno:'Alexandre Fernando Monteiro Pereira',num:'2025002',tipo:'Advertência',grav:'media',data:'03/03/2026',prof:'Prof. Jelson',desc:'Comportamento inadequado',obs:'Aluno foi disruptivo durante a explicação da matéria',estado:'pendente'},
  {id:2,aluno:'Domingos Caselo Kalwiji Samanjata',num:'2025003',tipo:'Advertência',grav:'grave',data:'01/03/2026',prof:'Prof. Alberto',desc:'Falta de material repetida',obs:'3ª vez consecutiva sem material escolar',estado:'em_analise'},
  {id:3,aluno:'Luís Caison Zango Caica',num:'2025006',tipo:'Elogio',grav:'baixa',data:'27/02/2026',prof:'Prof. A. Chipaco',desc:'Excelente participação',obs:'Aluno demonstrou excelente empenho e participação',estado:'resolvida'},
  {id:4,aluno:'Larissa Fato Botelho',num:'2025005',tipo:'Advertência',grav:'media',data:'24/02/2026',prof:'Prof. Beatriz',desc:'Uso de telemóvel em aula',obs:'Aluno utilizou telemóvel durante a experiência laboratorial',estado:'resolvida'},
];
const COR=['#3B82F6','#8B5CF6','#EC4899','#14B8A6','#F97316','#06B6D4','#84CC16'];
function ini(n){const p=n.split(' ');return(p[0][0]+(p[p.length-1]?.[0]||'')).toUpperCase()}
function pcc(p){return p>=85?'hi':p>=70?'me':'lo'}

function rResumo(){
  document.getElementById('resumoBody').innerHTML=ALUNOS.map((a,i)=>{
    const pct=Math.round(((a.p+a.a)/a.t)*100);
    const cls=pct>=85?'g':pct>=70?'y':'r';
    return`<tr>
      <td><span class="nchip">${a.ord}</span></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:26px;height:26px;border-radius:50%;background:${COR[i%COR.length]};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0">${ini(a.nome)}</div><span style="font-weight:600">${a.nome}</span></div></td>
      <td style="color:var(--g);font-weight:700">${a.p}</td>
      <td style="color:${a.f>3?'var(--r)':'var(--s600)'};font-weight:${a.f>3?700:400}">${a.f}</td>
      <td style="color:${a.a>0?'var(--y)':'var(--s400)'};font-weight:${a.a>0?700:400}">${a.a}</td>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="pbar-bg"><div class="pbar-f ${pcc(pct)}" style="width:${pct}%"></div></div><span style="font-size:12px;font-weight:700;min-width:34px;color:${pct>=85?'var(--g)':pct>=70?'var(--y)':'var(--r)'}">${pct}%</span></div></td>
      <td><span class="badge ${cls}">${pct>=85?'Regular':pct>=70?'Em risco':'Crítico'}</span></td>
    </tr>`;}).join('');
}
function rTurmaDet(){
  document.getElementById('turmaDetBody').innerHTML=ALUNOS.map((a,i)=>{
    const pct=Math.round(((a.p+a.a)/a.t)*100);const cls=pct>=85?'g':pct>=70?'y':'r';
    return`<tr>
      <td><span class="nchip">${a.ord}</span></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:26px;height:26px;border-radius:50%;background:${COR[i%COR.length]};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0">${ini(a.nome)}</div><span style="font-weight:600">${a.nome}</span></div></td>
      <td style="font-size:11px;color:var(--s400)">${a.nproc}</td>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="pbar-bg"><div class="pbar-f ${pcc(pct)}" style="width:${pct}%"></div></div><span style="font-size:12px;font-weight:700;min-width:34px;color:${pct>=85?'var(--g)':pct>=70?'var(--y)':'var(--r)'}">${pct}%</span></div></td>
      <td style="color:${a.f>3?'var(--r)':'var(--s600)'};font-weight:${a.f>3?700:400}">${a.f}</td>
      <td style="color:${a.a>0?'var(--y)':'var(--s400)'};font-weight:${a.a>0?700:400}">${a.a}</td>
      <td><span class="badge ${cls}">${pct>=85?'Regular':pct>=70?'Em risco':'Crítico'}</span></td>
      <td><button class="btn sec" style="font-size:11px;padding:4px 10px" onclick="toast('Ver detalhe de '+' ${a.nome.split(' ')[0]}','tb')"><i class="fa fa-eye"></i>Ver</button></td>
    </tr>`;}).join('');
}
function rRelatorio(){
  document.getElementById('relBody').innerHTML=ALUNOS.map((a,i)=>{
    const pct=Math.round(((a.p+a.a)/a.t)*100);const cls=pct>=85?'g':pct>=70?'y':'r';
    return`<tr>
      <td><span class="nchip">${a.ord}</span></td>
      <td style="font-weight:600">${a.nome}</td>
      <td style="color:var(--g);font-weight:700">${a.p}</td>
      <td style="color:${a.a>0?'var(--y)':'var(--s400)'};font-weight:${a.a>0?700:400}">${a.a}</td>
      <td style="color:${a.f>3?'var(--r)':'var(--s600)'};font-weight:${a.f>3?700:400}">${a.f}</td>
      <td><span style="font-weight:700;color:${pct>=85?'var(--g)':pct>=70?'var(--y)':'var(--r)'}">${pct}%</span></td>
      <td><span class="badge ${cls}">${pct>=85?'Regular':pct>=70?'Em risco':'Crítico'}</span></td>
    </tr>`;}).join('');
}
function rDiscTaxa(){
  document.getElementById('discTaxa').innerHTML=DISC_TAXA.map(d=>{
    const cls=d.pct>=85?'hi':d.pct>=70?'me':'lo';
    return`<div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--s100)">
      <div style="font-size:12px;font-weight:600;min-width:160px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.disc}</div>
      <div class="pbar-bg" style="flex:1"><div class="pbar-f ${cls}" style="width:${d.pct}%"></div></div>
      <span style="font-size:12px;font-weight:700;min-width:36px;text-align:right;color:${d.pct>=85?'var(--g)':d.pct>=70?'var(--y)':'var(--r)'}">${d.pct}%</span>
    </div>`;}).join('');
}
function rAulas(){
  document.getElementById('aulasBody').innerHTML=AULAS.map(a=>`
    <tr>
      <td style="font-weight:600;white-space:nowrap">${a.h}</td>
      <td style="font-weight:600">${a.disc}</td>
      <td>${a.prof}</td>
      <td style="font-size:12px">Sala ${a.sala}</td>
      <td>${a.est==='em_curso'?'<span class="badge g"><i class="fa fa-circle" style="font-size:7px"></i>Em Curso</span>':a.est==='sem_prof'?'<span class="badge r"><i class="fa fa-circle-xmark" style="font-size:9px"></i>Sem Prof.</span>':a.est==='confirmada'?'<span class="badge b"><i class="fa fa-circle-check" style="font-size:9px"></i>Confirmada</span>':'<span class="badge" style="background:var(--s100);color:var(--s400)"><i class="fa fa-clock" style="font-size:9px"></i>Próxima</span>'}</td>
    </tr>`).join('');
  document.getElementById('aulasHojeData').textContent=new Date().toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long'});
}
function rBarChart(){
  const meses=['Jan','Fev','Mar','Abr','Mai','Jun'];
  const dados=[
    {p:62,au:10,at:4},{p:58,au:12,at:6},{p:68,au:8,at:5},
    {p:70,au:6,at:3},{p:65,au:9,at:4},{p:72,au:5,at:2}
  ];
  const max=Math.max(...dados.map(d=>d.p));
  document.getElementById('barChart').innerHTML=dados.map((d,i)=>`
    <div class="bar-group">
      <div class="bars">
        <div class="bar" style="height:${(d.p/max)*100}px;background:var(--g)" title="Presenças: ${d.p}"></div>
        <div class="bar" style="height:${(d.au/max)*100}px;background:var(--r)" title="Ausências: ${d.au}"></div>
        <div class="bar" style="height:${(d.at/max)*100}px;background:var(--y)" title="Atrasos: ${d.at}"></div>
      </div>
      <div class="bar-lbl">${meses[i]}</div>
    </div>`).join('');
}
function rOcorrencias(filtro='todos'){
  const lista=filtro==='todos'?OCORRENCIAS:OCORRENCIAS.filter(o=>o.estado===filtro);
  const gravLbl={baixa:'Baixa',media:'Média',grave:'Grave'};
  const gravCls={baixa:'g',media:'y',grave:'r'};
  const estLbl={pendente:'Pendente',em_analise:'Em Análise',resolvida:'Resolvida'};
  const estCls={pendente:'y',em_analise:'b',resolvida:'g'};
  document.getElementById('ocList').innerHTML=lista.length?lista.map(o=>`
    <div class="oc-card" id="oc-${o.id}">
      <div class="oc-head">
        <div>
          <div class="oc-aluno"><i class="fa fa-user" style="color:var(--bm);margin-right:6px;font-size:11px"></i>${o.aluno} <span style="font-size:11px;color:var(--s400);font-weight:400">· Nº ${o.num}</span></div>
          <div class="oc-data"><i class="fa fa-calendar" style="margin-right:4px"></i>${o.tipo} · ${o.data} · ${o.prof}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
          <span class="badge ${gravCls[o.grav]}" style="font-size:10px">${gravLbl[o.grav]}</span>
          <span class="badge ${estCls[o.estado]}" style="font-size:10px">${estLbl[o.estado]}</span>
        </div>
      </div>
      <div class="oc-desc">${o.desc}</div>
      <div class="oc-motivo">${o.obs}</div>
      <div class="oc-ft">
        ${o.estado!=='resolvida'?`<button class="btn g-btn" onclick="resolverOc(${o.id})" style="font-size:11px;padding:5px 10px"><i class="fa fa-check"></i>Marcar Resolvida</button>`:''}
        <button class="btn sec" style="font-size:11px;padding:5px 10px" onclick="toast('Editar ocorrência…','tb')"><i class="fa fa-pen"></i>Editar</button>
        <button class="btn r-btn" style="font-size:11px;padding:5px 10px" onclick="eliminarOc(${o.id})"><i class="fa fa-trash"></i>Eliminar</button>
      </div>
    </div>`).join(''):'<div style="text-align:center;padding:32px;color:var(--s400)"><i class="fa fa-folder-open" style="font-size:32px;display:block;margin-bottom:8px;color:var(--s200)"></i>Sem ocorrências neste filtro</div>';
}
function resolverOc(id){OCORRENCIAS=OCORRENCIAS.map(o=>o.id===id?{...o,estado:'resolvida'}:o);rOcorrencias();toast('Ocorrência marcada como resolvida!','tg')}
function eliminarOc(id){if(!confirm('Eliminar esta ocorrência?'))return;OCORRENCIAS=OCORRENCIAS.filter(o=>o.id!==id);rOcorrencias();toast('Ocorrência eliminada.','ty')}
function setOcF(btn,f){document.querySelectorAll('#view-ocorrencias .filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');rOcorrencias(f)}
function filterOc(q){q=q.toLowerCase();const filtrado=OCORRENCIAS.filter(o=>o.aluno.toLowerCase().includes(q)||o.desc.toLowerCase().includes(q)||o.num.includes(q));document.getElementById('ocList').innerHTML=filtrado.length?filtrado.map(o=>`<div class="oc-card"><div class="an">${o.aluno}</div><div class="asub">${o.desc} · ${o.data}</div></div>`).join(''):'<div style="text-align:center;padding:24px;color:var(--s400)">Sem resultados</div>'}
function rProfs(){
  document.getElementById('profList').innerHTML=PROFS.map(p=>`
    <div class="prof-row">
      <div class="av" style="background:${p.cor};width:32px;height:32px">${ini(p.nome)}</div>
      <div class="ai"><div class="an">${p.nome}</div><div class="asub">${p.disc}</div></div>
      <span class="badge g">Ativo</span>
    </div>`).join('');
}
function setF(btn){document.querySelectorAll('#view-relatorios .filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}
const TITLES={visao:'Visão Geral',turma:'Ver Turma',relatorios:'Relatórios e Estatísticas',aulas:'Aulas de Hoje',ocorrencias:'Ocorrências',professores:'Professores'};
function ir(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(x=>x.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  document.getElementById('nav-'+v).classList.add('active');
  document.getElementById('tbTitle').textContent=TITLES[v]||v;
}
let tT;function toast(msg,c='tg'){const t=document.getElementById('toast');t.textContent=msg;t.className=`toast ${c} show`;clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),3000)}
// INIT
const n=new Date();
document.getElementById('tbDate').textContent=n.toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
document.getElementById('bannerData').textContent=n.toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
rResumo();rTurmaDet();rRelatorio();rDiscTaxa();rAulas();rBarChart();rOcorrencias();rProfs();
