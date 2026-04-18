import{g as v,u as f}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";let i="",r="all",b;function n(){let e=[...v().protocols];if(r!=="all"&&(e=e.filter(t=>t.category===r)),i){const t=i.toLowerCase();e=e.filter(a=>a.title.toLowerCase().includes(t)||a.content.toLowerCase().includes(t)||a.tags.some(s=>s.toLowerCase().includes(t)))}const d=e.filter(t=>t.isFavourite),m=e.filter(t=>!t.isFavourite),p=["all","medication","procedure","emergency","assessment","documentation"];function u(t){const s={medication:"badge-info",procedure:"badge-warning",emergency:"badge-error",assessment:"badge-success",documentation:"badge-ghost"}[t.category]??"badge-ghost";return`
          <div class="card card-compact bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body p-4">
              <div class="flex items-start justify-between">
                <a href="/protocol?id=${t.id}" class="flex-1">
                  <h3 class="font-semibold">${t.title}</h3>
                  <div class="flex flex-wrap gap-1 mt-1">
                    <span class="badge ${s} badge-sm">${t.category}</span>
                    ${t.tags.map(o=>`<span class="badge badge-ghost badge-sm">${o}</span>`).join("")}
                  </div>
                </a>
                <button class="btn btn-ghost btn-sm fav-btn" data-proto-id="${t.id}" aria-label="${t.isFavourite?"Unfavourite":"Favourite"}">
                  ${t.isFavourite?"[unfav]":"[fav]"}
                </button>
              </div>
            </div>
          </div>
        `}const l=document.getElementById("protocols-content");l.innerHTML=`
        <h1 class="text-2xl font-bold mb-4">Protocols</h1>
        <div class="mb-4">
          <input type="text" id="search" placeholder="Search protocols..." class="input input-bordered w-full" value="${i}" />
        </div>
        <div class="flex gap-1 overflow-x-auto pb-2 mb-4">
          ${p.map(t=>`<button class="btn btn-sm${r===t?" btn-primary":" btn-ghost"} cat-filter" data-cat="${t}">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join("")}
        </div>
        ${d.length>0?`
          <h2 class="text-sm font-semibold text-base-content/50 uppercase mb-2">Favourites</h2>
          <div class="grid gap-2 mb-4">${d.map(u).join("")}</div>
        `:""}
        <div class="grid gap-2">
          ${m.map(u).join("")}
          ${e.length===0?'<p class="text-base-content/50 text-sm text-center py-8">No protocols found.</p>':""}
        </div>
      `;const g=document.getElementById("search");g.addEventListener("input",()=>{clearTimeout(b),b=setTimeout(()=>{i=g.value,n()},200)}),l.querySelectorAll(".cat-filter").forEach(t=>{t.addEventListener("click",()=>{r=t.dataset.cat,n()})}),l.querySelectorAll(".fav-btn").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const s=t.dataset.protoId;f(o=>({...o,protocols:o.protocols.map(c=>c.id===s?{...c,isFavourite:!c.isFavourite}:c)})),n()})})}n();
