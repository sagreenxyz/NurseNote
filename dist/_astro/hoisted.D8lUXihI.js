import{g as c,u as i}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";const s=new URLSearchParams(window.location.search).get("id")??"";function d(o){return o.split(`
`).map(t=>t.startsWith("## ")?`<h3 class="text-lg font-bold mt-4 mb-1">${t.slice(3)}</h3>`:t.startsWith("- ")?`<li class="ml-4 list-disc">${t.slice(2)}</li>`:t.trim()===""?"<br>":`<p class="mb-1">${t}</p>`).join(`
`)}function n(){const t=c().protocols.find(a=>a.id===s);if(!t){document.getElementById("protocol-content").innerHTML=`
          <div class="alert alert-error">Protocol not found. <a href="/protocols" class="link">Back to protocols</a></div>
        `;return}const r={medication:"badge-info",procedure:"badge-warning",emergency:"badge-error",assessment:"badge-success",documentation:"badge-ghost"}[t.category]??"badge-ghost";document.getElementById("protocol-content").innerHTML=`
        <div class="flex items-center gap-2 mb-4">
          <a href="/protocols" class="btn btn-ghost btn-sm" aria-label="Back">&larr;</a>
          <h1 class="text-2xl font-bold flex-1">${t.title}</h1>
          <button id="fav-btn" class="btn btn-ghost btn-sm" aria-label="${t.isFavourite?"Unfavourite":"Favourite"}">${t.isFavourite?"[unfav]":"[fav]"}</button>
        </div>
        <div class="flex flex-wrap gap-1 mb-4">
          <span class="badge ${r}">${t.category}</span>
          ${t.tags.map(a=>`<span class="badge badge-ghost">${a}</span>`).join("")}
        </div>
        <div class="prose prose-sm max-w-none">
          ${d(t.content)}
        </div>
      `,document.getElementById("fav-btn").addEventListener("click",()=>{i(a=>({...a,protocols:a.protocols.map(e=>e.id===s?{...e,isFavourite:!e.isFavourite}:e)})),n()})}n();
