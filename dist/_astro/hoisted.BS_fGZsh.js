import{g as m,u as b}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{a as u}from"./utils.CeLx1YVM.js";function r(i=""){const d=m();let n=d.patients.filter(t=>t.isActive);if(i){const t=i.toLowerCase();n=n.filter(a=>a.roomNumber.toLowerCase().includes(t)||a.alias.toLowerCase().includes(t))}n.sort((t,a)=>{const l={critical:0,watch:1,routine:2};return l[t.priority]-l[a.priority]});const p=document.getElementById("patients-content");p.innerHTML=`
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold">Patients</h1>
          <button id="add-patient-btn" class="btn btn-primary btn-sm">+ Add Patient</button>
        </div>
        <div class="mb-4">
          <input type="text" id="search" placeholder="Search by room or name..." class="input input-bordered w-full" value="${i}" />
        </div>

        <div id="add-patient-form" class="card bg-base-200 mb-4 hidden">
          <div class="card-body">
            <h2 class="card-title">Add Patient</h2>
            <form id="patient-form" class="flex flex-col gap-3">
              <div class="form-control">
                <label class="label" for="room"><span class="label-text">Room number</span></label>
                <input type="text" id="room" class="input input-bordered" placeholder="e.g. 4B-12" required />
              </div>
              <div class="form-control">
                <label class="label" for="alias"><span class="label-text">Alias / shorthand</span></label>
                <input type="text" id="alias" class="input input-bordered" placeholder="e.g. Bed 4, Hip Fx lady" required />
              </div>
              <div class="form-control">
                <label class="label" for="priority"><span class="label-text">Priority</span></label>
                <select id="priority" class="select select-bordered">
                  <option value="routine">Routine</option>
                  <option value="watch">Watch</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label" for="tags"><span class="label-text">Tags (comma-separated)</span></label>
                <input type="text" id="tags" class="input input-bordered" placeholder="e.g. fall risk, NPO" />
              </div>
              <div class="flex gap-2">
                <button type="submit" class="btn btn-primary">Add</button>
                <button type="button" id="cancel-add-btn" class="btn btn-ghost">Cancel</button>
              </div>
            </form>
          </div>
        </div>

        <div class="grid gap-3" id="patient-list">
          ${n.length===0?`<p class="text-base-content/50 text-sm text-center py-8">No active patients${i?" matching your search":""}.</p>`:""}
          ${n.map(t=>{const a=d.tasks.filter(e=>e.patientId===t.id&&e.status==="pending"),o=d.notes.filter(e=>e.patientId===t.id).sort((e,s)=>new Date(s.timestamp).getTime()-new Date(e.timestamp).getTime())[0],c=t.priority==="critical"?"badge-error":t.priority==="watch"?"badge-warning":"badge-ghost";return`
              <a href="/patient?id=${t.id}" class="card card-compact bg-base-200 hover:bg-base-300 transition-colors">
                <div class="card-body">
                  <div class="flex items-start justify-between">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-xl font-bold">${t.roomNumber}</span>
                        <span class="badge ${c} badge-sm">${t.priority}</span>
                      </div>
                      <p class="text-base-content/70">${t.alias}</p>
                      <div class="flex flex-wrap gap-1 mt-1">
                        ${t.tags.map(e=>`<span class="badge badge-ghost badge-sm">${e}</span>`).join("")}
                      </div>
                    </div>
                    <div class="text-right text-sm text-base-content/70">
                      <p>${a.length} task${a.length!==1?"s":""}</p>
                      ${o?`<p>${u(o.timestamp)}</p>`:"<p>No notes</p>"}
                    </div>
                  </div>
                </div>
              </a>
            `}).join("")}
        </div>
      `,document.getElementById("search").addEventListener("input",t=>{r(t.target.value)}),document.getElementById("add-patient-btn").addEventListener("click",()=>{document.getElementById("add-patient-form").classList.remove("hidden")}),document.getElementById("cancel-add-btn").addEventListener("click",()=>{document.getElementById("add-patient-form").classList.add("hidden")}),document.getElementById("patient-form").addEventListener("submit",t=>{t.preventDefault();const a=document.getElementById("room").value.trim(),l=document.getElementById("alias").value.trim(),o=document.getElementById("priority").value,e=document.getElementById("tags").value.split(",").map(s=>s.trim()).filter(Boolean);b(s=>({...s,patients:[...s.patients,{id:crypto.randomUUID(),roomNumber:a,alias:l,admittedDate:new Date().toISOString(),isActive:!0,priority:o,tags:e}]})),r(i)})}r();
