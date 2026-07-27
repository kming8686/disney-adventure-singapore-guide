(()=>{
  const PAGES=[
    ['home.html','홈'],['deck-plan.html','덱 플랜'],['restaurant.html','레스토랑'],
    ['shows-v4.html','공연'],['adventure.html','액티비티'],['tips.html','탑승 팁'],['my-info.html','내 일정']
  ];
  const style=document.createElement('style');
  style.textContent=`
  .app-tools{position:fixed;right:14px;bottom:16px;z-index:999;display:flex;flex-direction:column;gap:9px}
  .app-tool-btn{width:48px;height:48px;border:0;border-radius:50%;background:#102c5b;color:#fff;font-size:20px;box-shadow:0 8px 22px rgba(16,44,91,.28);cursor:pointer}
  .app-tool-btn.install{background:#e7b83e;color:#102c5b}
  .offline-pill{position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:1000;padding:7px 12px;border-radius:999px;background:#8d2b2b;color:#fff;font-size:11px;font-weight:800;box-shadow:0 4px 14px rgba(0,0,0,.2);display:none}
  .offline-pill.show{display:block}
  .tool-modal{position:fixed;inset:0;z-index:1200;display:none;align-items:flex-end;justify-content:center;background:rgba(4,22,49,.62)}
  .tool-modal.show{display:flex}.tool-sheet{width:min(520px,100%);max-height:88vh;overflow:auto;border-radius:24px 24px 0 0;background:#f8fbff;padding:16px}
  .tool-head{display:flex;align-items:center;gap:10px}.tool-head h2{margin:0;font-size:18px;color:#102c5b}.tool-close{margin-left:auto;border:0;background:transparent;font-size:26px;color:#102c5b}
  .tool-search{width:100%;margin:14px 0 10px;padding:13px 14px;border:1px solid #bfd4e6;border-radius:14px;font-size:15px}
  .tool-tabs{display:flex;gap:7px;margin-bottom:10px}.tool-tabs button{flex:1;border:1px solid #bfd4e6;background:#fff;border-radius:999px;padding:9px;font-weight:800;color:#315675}.tool-tabs button.active{background:#102c5b;color:#fff}
  .tool-result{position:relative;margin:8px 0;padding:12px 44px 12px 13px;border:1px solid #d7e5ef;border-radius:14px;background:#fff}.tool-result b{display:block;color:#176cc2}.tool-result small{display:block;margin-top:4px;color:#6a7c90;line-height:1.45}.tool-result a{text-decoration:none;color:inherit}.fav-btn{position:absolute;right:10px;top:50%;transform:translateY(-50%);border:0;background:transparent;font-size:21px;cursor:pointer}.empty-state{padding:28px 10px;text-align:center;color:#718096;font-size:13px}
  .room-row{display:flex;gap:8px;margin-top:10px}.room-row input{flex:1;padding:11px;border:1px solid #bfd4e6;border-radius:12px}.room-row button{border:0;border-radius:12px;padding:0 14px;background:#176cc2;color:#fff;font-weight:800}
  `;
  document.head.appendChild(style);

  const pill=document.createElement('div');pill.className='offline-pill';pill.textContent='📴 오프라인 모드';document.body.appendChild(pill);
  const sync=()=>pill.classList.toggle('show',!navigator.onLine);sync();addEventListener('online',sync);addEventListener('offline',sync);

  let deferredPrompt=null;
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.style.display='block'});

  const tools=document.createElement('div');tools.className='app-tools';
  const searchBtn=document.createElement('button');searchBtn.className='app-tool-btn';searchBtn.title='검색 및 즐겨찾기';searchBtn.textContent='🔎';
  const installBtn=document.createElement('button');installBtn.className='app-tool-btn install';installBtn.title='앱 설치';installBtn.textContent='⬇️';installBtn.style.display='none';
  tools.append(searchBtn,installBtn);document.body.appendChild(tools);

  installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.style.display='none'};

  const modal=document.createElement('div');modal.className='tool-modal';modal.innerHTML=`<section class="tool-sheet"><div class="tool-head"><h2>앱 도구</h2><button class="tool-close">×</button></div><div class="room-row"><input id="roomQuick" inputmode="numeric" placeholder="객실번호"><button id="saveRoom">저장</button></div><input class="tool-search" placeholder="레스토랑·공연·액티비티 검색"><div class="tool-tabs"><button data-tab="search" class="active">전체 검색</button><button data-tab="favorites">즐겨찾기</button></div><div class="tool-results"></div></section>`;document.body.appendChild(modal);
  const results=modal.querySelector('.tool-results');const input=modal.querySelector('.tool-search');
  modal.querySelector('.tool-close').onclick=()=>modal.classList.remove('show');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};
  searchBtn.onclick=()=>{modal.classList.add('show');renderSearch(input.value)};
  modal.querySelector('#roomQuick').value=localStorage.getItem('stateroomNumber')||'';
  modal.querySelector('#saveRoom').onclick=()=>{const v=modal.querySelector('#roomQuick').value.trim();if(v){localStorage.setItem('stateroomNumber',v);location.reload()}};

  const favorites=()=>JSON.parse(localStorage.getItem('guideFavorites')||'[]');
  const saveFavorites=list=>localStorage.setItem('guideFavorites',JSON.stringify(list));
  const toggleFav=item=>{let list=favorites();const i=list.findIndex(x=>x.url===item.url&&x.title===item.title);if(i>=0)list.splice(i,1);else list.unshift(item);saveFavorites(list)};
  const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  let index=[];
  async function buildIndex(){
    if(index.length)return index;
    for(const [url,label] of PAGES){
      try{const html=await fetch(url).then(r=>r.text());const doc=new DOMParser().parseFromString(html,'text/html');
        doc.querySelectorAll('script,style,noscript').forEach(n=>n.remove());
        const title=(doc.querySelector('h1')?.textContent||doc.title||label).trim();
        const chunks=[...doc.querySelectorAll('h2,h3,summary,b,strong,.venue,.card,.dining-card,.concierge-card')].map(n=>n.textContent.replace(/\s+/g,' ').trim()).filter(t=>t.length>2);
        const unique=[...new Set(chunks)].slice(0,180);
        unique.forEach((text,i)=>index.push({title:text.length>80?text.slice(0,80)+'…':text,detail:label,url:url+(i?`#search-${i}`:'')}));
        index.push({title,detail:label,url});
      }catch(e){}
    }
    return index;
  }
  function card(item){const on=favorites().some(x=>x.url===item.url&&x.title===item.title);return `<div class="tool-result"><a href="${esc(item.url.split('#')[0])}"><b>${esc(item.title)}</b><small>${esc(item.detail||'')}</small></a><button class="fav-btn" data-item="${encodeURIComponent(JSON.stringify(item))}">${on?'⭐':'☆'}</button></div>`}
  async function renderSearch(q='') {results.innerHTML='<div class="empty-state">검색 자료를 준비하는 중…</div>';const data=await buildIndex();const term=q.trim().toLowerCase();const found=(term?data.filter(x=>(x.title+' '+x.detail).toLowerCase().includes(term)):data.filter(x=>PAGES.some(p=>p[0]===x.url))).slice(0,40);results.innerHTML=found.length?found.map(card).join(''):'<div class="empty-state">검색 결과가 없습니다.</div>';bindFav()}
  function renderFav(){const list=favorites();results.innerHTML=list.length?list.map(card).join(''):'<div class="empty-state">별표를 눌러 즐겨찾기에 저장하세요.</div>';bindFav()}
  function bindFav(){results.querySelectorAll('.fav-btn').forEach(b=>b.onclick=()=>{toggleFav(JSON.parse(decodeURIComponent(b.dataset.item)));document.querySelector('.tool-tabs .active').dataset.tab==='favorites'?renderFav():renderSearch(input.value)})}
  input.addEventListener('input',()=>renderSearch(input.value));
  modal.querySelectorAll('.tool-tabs button').forEach(b=>b.onclick=()=>{modal.querySelectorAll('.tool-tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');b.dataset.tab==='favorites'?renderFav():renderSearch(input.value)});
})();
