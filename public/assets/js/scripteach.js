const ALUNOS=[
  {id:1,ord:1,nproc:'1650',nome:'Agnalda Kunjikisse Jelembi Vapor',estado:'ausente',hora:null},
  {id:2,ord:2,nproc:'405', nome:'Alexandre Fernando Monteiro Pereira',estado:'ausente',hora:null},
  {id:3,ord:3,nproc:'2027',nome:'Domingos Caselo Kalwiji Samanjata',estado:'ausente',hora:null},
  {id:4,ord:4,nproc:'2543',nome:'Haziel Simboyala Chitau Hamuyela Tchitavila',estado:'ausente',hora:null},
  {id:5,ord:5,nproc:'260', nome:'Larissa Fato Botelho',estado:'ausente',hora:null},
  {id:6,ord:6,nproc:'774', nome:'Luís Caison Zango Caica',estado:'ausente',hora:null},
  {id:7,ord:7,nproc:'2556',nome:'Maria Da Conceição José Pena',estado:'ausente',hora:null},
];
const PMOCK=[
    {id:1,p:14,f:1,a:1,t:16},
    {id:2,p:12,f:3,a:1,t:16},
    {id:3,p:9,f:6,a:1,t:16},
    {id:4,p:15,f:0,a:1,t:16},
    {id:5,p:13,f:2,a:1,t:16},
    {id:6,p:11,f:4,a:1,t:16},
    {id:7,p:15,f:0,a:1,t:16}
];

const HMOCK=[
  {d:'03/03/2026',h:'13:00–14:30',disc:'Matemática',p:6,au:1,at:0,obs:'Limites e continuidade'},
  {d:'27/02/2026',h:'14:45–16:15',disc:'Biologia',p:5,au:1,at:1,obs:'Genética Mendeliana'},
  {d:'26/02/2026',h:'13:00–14:30',disc:'Física',p:7,au:0,at:0,obs:'Sem ocorrências'},
  {d:'25/02/2026',h:'16:30–18:00',disc:'Química',p:6,au:0,at:1,obs:'Experiência laboratorial'},
  {d:'24/02/2026',h:'13:00–13:45',disc:'Língua Inglesa',p:5,au:2,at:0,obs:'Reading comprehension'},
  {d:'23/02/2026',h:'13:45–14:30',disc:'Língua Portuguesa',p:7,au:0,at:0,obs:'Análise literária'},
];
const SMOCK=[
  {d:'03/03/2026',disc:'Matemática',t:'Cálculo diferencial e integral. Revisão de limites e exercícios práticos.'},
  {d:'27/02/2026',disc:'Biologia',t:'Estudo da hereditariedade segundo as leis de Mendel. Cruzamentos dihíbridos.'},
  {d:'26/02/2026',disc:'Física',t:'Movimento harmónico simples. Resolução de problemas aplicados.'},
];
const COR=['#3B82F6','#8B5CF6','#EC4899','#14B8A6','#F97316','#06B6D4','#84CC16'];
function ini(n){const p=n.split(' ');return(p[0][0]+(p[p.length-1]?.[0]||'')).toUpperCase()}
function lbl(e){return e==='presente'?'Presente':e==='atraso'?'Atraso':'Ausente'}
function pcc(p){return p>=85?'hi':p>=70?'me':'lo'}

function rAlunos(){
  document.getElementById('alunoList').innerHTML=ALUNOS.map((a,i)=>`
    <div class="aluno-row ${a.estado==='ausente'?'aus':''}" id="row-${a.id}">
      <div class="av" style="background:${COR[i%COR.length]}">${ini(a.nome)}</div>
      <div class="ai"><div class="an">${a.ord}. ${a.nome}</div><div class="asub">${a.hora?'<i class="fa fa-clock" style="margin-right:3px"></i>'+a.hora:'Proc. '+a.nproc}</div></div>
      <span class="badge ${a.estado}">${lbl(a.estado)}</span>
      <button class="btn-mini" onclick="openM(${a.id})"><i class="fa fa-pen"></i></button>
    </div>`).join('');
}
function rTurma(){
  const el=document.getElementById('alunosTurma');if(!el)return;
  el.innerHTML=ALUNOS.map((a,i)=>`
    <div class="aluno-row">
      <div class="av" style="background:${COR[i%COR.length]}">${ini(a.nome)}</div>
      <div class="ai"><div class="an">${a.ord}. ${a.nome}</div><div class="asub">Nº Processo: ${a.nproc}</div></div>
      <span class="badge presente" style="opacity:.6">Ativo</span>
    </div>`).join('');
}
function updStats(){
  const p=ALUNOS.filter(a=>a.estado==='presente').length,at=ALUNOS.filter(a=>a.estado==='atraso').length,tot=ALUNOS.length;
  document.getElementById('stP').textContent=p;
  document.getElementById('stAt').textContent=at;
  document.getElementById('stAu').textContent=ALUNOS.filter(a=>a.estado==='ausente').length;
  document.getElementById('stT').textContent=tot?Math.round(((p+at)/tot)*100)+'%':'0%';
  document.getElementById('subA').textContent=`${p+at} de ${tot} registados`;
}
function rPresencas(){
  document.getElementById('presBody').innerHTML=ALUNOS.map((a,i)=>{
    const pm=PMOCK.find(x=>x.id===a.id)||{p:0,f:0,a:0,t:16};
    const pct=Math.round(((pm.p+pm.a)/pm.t)*100);
    return`<tr>
      <td><span class="nchip">${a.ord}</span></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div style="width:26px;height:26px;border-radius:50%;background:${COR[i%COR.length]};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:white;flex-shrink:0">${ini(a.nome)}</div><span style="font-weight:600">${a.nome}</span></div></td>
      <td><div style="display:flex;align-items:center;gap:8px"><div class="pbar-bg"><div class="pbar-f ${pcc(pct)}" style="width:${pct}%"></div></div><span style="font-size:12px;font-weight:700;min-width:32px;text-align:right;color:${pct>=85?'var(--g)':pct>=70?'var(--y)':'var(--r)'}">${pct}%</span></div></td>
      <td style="color:var(--g);font-weight:700">${pm.p}</td>
      <td style="color:${pm.f>3?'var(--r)':'var(--s600)'};font-weight:${pm.f>3?700:400}">${pm.f}</td>
      <td style="color:${pm.a>0?'var(--y)':'var(--s400)'};font-weight:${pm.a>0?700:400}">${pm.a}</td>
      <td><span class="badge ${pct>=85?'presente':pct>=70?'atraso':'ausente'}" style="font-size:10px">${pct>=85?'Regular':pct>=70?'Em risco':'Crítico'}</span></td>
    </tr>`;}).join('');
}
function rHist(){
  document.getElementById('histBody').innerHTML=HMOCK.map(h=>`
    <tr>
      <td style="font-weight:600;white-space:nowrap">${h.d}</td>
      <td style="font-size:12px;color:var(--s600);white-space:nowrap">${h.h}</td>
      <td style="font-weight:600">${h.disc}</td>
      <td><span style="font-weight:700;color:var(--g)">${h.p}</span><span style="color:var(--s400)">/7</span></td>
      <td><span style="font-weight:700;color:${h.au>0?'var(--r)':'var(--s400)'}">${h.au}</span></td>
      <td><span style="font-weight:700;color:${h.at>0?'var(--y)':'var(--s400)'}">${h.at}</span></td>
      <td><span class="otag">${h.obs}</span></td>
    </tr>`).join('');
}
function rSumario(){
  document.getElementById('sumData').textContent=new Date().toLocaleDateString('pt-PT',{day:'numeric',month:'long'});
  const el=document.getElementById('sumHist');if(!el)return;
  el.innerHTML=SMOCK.map(s=>`<div class="sum-item"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:12px;font-weight:700;color:var(--bm)">${s.disc}</span><span style="font-size:10px;color:var(--s400)">${s.d}</span></div><p style="font-size:12px;color:var(--s600);line-height:1.5">${s.t}</p></div>`).join('');
}
function guardarSum(){const t=document.getElementById('sumText').value.trim();if(!t){toast('Escreve o sumário primeiro.','ty');return}document.getElementById('sumText').value='';document.getElementById('sumObs').value='';toast('Sumário guardado!','tg')}
function guardarOc(){const t=document.getElementById('ocText').value.trim();if(!t){toast('Escreve a ocorrência.','ty');return}document.getElementById('ocText').value='';toast('Ocorrência guardada!','tg')}

function registar(id,hora,est){
  const a=ALUNOS.find(x=>x.id===id);if(!a)return;
  a.estado=est;a.hora=hora;rAlunos();updStats();
  const row=document.getElementById('row-'+id);
  if(row){row.classList.add('rfid-flash');setTimeout(()=>row.classList.remove('rfid-flash'),1400)}
  const lst=document.getElementById('rfidList');
  document.getElementById('rfidEmpty')?.remove();
  const idx=ALUNOS.indexOf(a);
  const d=document.createElement('div');d.className='rfid-ev nova';
  d.innerHTML=`<div class="rfid-ev-av" style="background:${COR[idx%COR.length]}">${ini(a.nome)}</div><div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${a.nome}</div><div style="font-size:10px;color:var(--s400)"><i class="fa fa-clock" style="margin-right:3px"></i>${hora}</div></div><span class="badge ${est}" style="font-size:10px">${lbl(est)}</span>`;
  lst.insertBefore(d,lst.firstChild);
  setTimeout(()=>d.classList.remove('nova'),3000);
  if(lst.querySelectorAll('.rfid-ev').length>5)lst.lastChild.remove();
  toast(a.nome.split(' ')[0]+' — '+lbl(est),est==='presente'?'tg':'ty');
}

let mId=null,mEst=null;
function openM(id){const a=ALUNOS.find(x=>x.id===id);mId=id;mEst=a.estado;document.getElementById('modalNome').textContent='✏️ '+a.nome;updEB(a.estado);document.getElementById('modalEst').classList.add('open')}
function selE(e){mEst=e;updEB(e)}
function updEB(e){const m={presente:'sg',atraso:'sy',ausente:'sr'};['presente','atraso','ausente'].forEach(x=>{document.getElementById('eb-'+x).className='eb'+(x===e?' '+m[x]:'')})}
function saveM(){const n=new Date(),h=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');const a=ALUNOS.find(x=>x.id===mId);a.estado=mEst;if(!a.hora&&mEst!=='ausente')a.hora=h;if(mEst==='ausente')a.hora=null;rAlunos();updStats();closeM();toast(a.nome.split(' ')[0]+' → '+lbl(mEst),'tg')}
function closeM(){document.getElementById('modalEst').classList.remove('open')}
document.getElementById('modalEst').addEventListener('click',e=>{if(e.target.id==='modalEst')closeM()});

const TITLES={aula:'Aula Atual',presencas:'Lista de Presenças',historico:'Histórico de Presenças',alunos:'Alunos da Turma',sumario:'Sumário',ocorrencias:'Ocorrências'};
function ir(v){
  document.querySelectorAll('.view').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  document.getElementById('nav-'+v).classList.add('active');
  document.getElementById('tbTitle').textContent=TITLES[v]||v;
  if(window.innerWidth<=768)toggleSb(false);
}
let sbO=false;
function toggleSb(f){const sb=document.getElementById('sidebar'),o=document.getElementById('ov');if(f===false||sbO){sb.classList.remove('open');o.style.display='none';sbO=false}else{sb.classList.add('open');o.style.display='block';sbO=true}}
function setF(btn){document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active')}
setInterval(()=>{const n=new Date();document.getElementById('hora').textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');document.getElementById('tbDate').textContent=n.toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'})},1000);
let tT;function toast(msg,c='tg'){const t=document.getElementById('toast');t.textContent=msg;t.className=`toast ${c} show`;clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),3000)}
rAlunos();updStats();rPresencas();rHist();rTurma();rSumario();
const n=new Date();document.getElementById('hora').textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');document.getElementById('tbDate').textContent=n.toLocaleDateString('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'});