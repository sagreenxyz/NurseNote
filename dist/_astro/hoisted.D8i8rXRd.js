import{g as h,u as $}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{i as m,c as x,b as f,f as b,a as y}from"./utils.CeLx1YVM.js";function w(){const s=h(),n=s.currentShiftId?s.shifts.find(t=>t.id===s.currentShiftId)??null:null,r=s.patients.filter(t=>t.isActive).sort((t,e)=>{const a={critical:0,watch:1,routine:2};return a[t.priority]-a[e.priority]}),o=s.tasks.filter(t=>t.status==="pending"),d=o.filter(t=>m(t.dueTime)).slice(0,5),c=o.filter(t=>x(t.dueTime,60)&&!m(t.dueTime)).slice(0,3),g=document.getElementById("dashboard-content");g.innerHTML=`
        <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
        
        ${n?`
          <div class="card bg-primary text-primary-content mb-4">
            <div class="card-body">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="card-title">Active Shift</h2>
                  <p>Ward: ${n.ward} &bull; ${n.nurseInitials}</p>
                  <p class="text-sm opacity-80" id="elapsed-time">Elapsed: ${f(n.startTime)}</p>
                </div>
                <button id="end-shift-btn" class="btn btn-error btn-sm">End Shift</button>
              </div>
            </div>
          </div>
        `:`
          <div class="card bg-base-200 mb-4">
            <div class="card-body text-center">
              <h2 class="card-title justify-center">No Active Shift</h2>
              <p class="text-base-content/70">Start a shift to begin tracking patients and tasks.</p>
              <div class="card-actions justify-center">
                <a href="/shift" class="btn btn-primary">Start Shift</a>
              </div>
            </div>
          </div>
        `}

        ${d.length>0?`
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-error mb-2">&#9888; Overdue Tasks (${d.length})</h2>
            ${d.map(t=>{const e=t.patientId?s.patients.find(a=>a.id===t.patientId):null;return`<div class="alert alert-error mb-2 cursor-pointer" onclick="window.location.href='/tasks'">
                <span><strong>${t.description}</strong>${e?` — ${e.roomNumber}`:""} — due ${t.dueTime?b(t.dueTime):"ASAP"}</span>
              </div>`}).join("")}
          </div>
        `:""}

        ${c.length>0?`
          <div class="mb-4">
            <h2 class="text-lg font-semibold text-warning mb-2">&#8987; Due Soon</h2>
            ${c.map(t=>{const e=t.patientId?s.patients.find(a=>a.id===t.patientId):null;return`<div class="alert alert-warning mb-2 cursor-pointer" onclick="window.location.href='/tasks'">
                <span><strong>${t.description}</strong>${e?` — ${e.roomNumber}`:""} — due ${t.dueTime?b(t.dueTime):"ASAP"}</span>
              </div>`}).join("")}
          </div>
        `:""}

        <div>
          <div class="flex items-center justify-between mb-2">
            <h2 class="text-lg font-semibold">Patients (${r.length})</h2>
            <a href="/patients" class="link text-sm">View all</a>
          </div>
          ${r.length===0?'<p class="text-base-content/50 text-sm">No active patients. <a href="/patients" class="link">Add patients</a>.</p>':""}
          <div class="grid gap-3">
            ${r.map(t=>{const e=s.tasks.filter(i=>i.patientId===t.id&&i.status==="pending"),p=s.notes.filter(i=>i.patientId===t.id).sort((i,v)=>new Date(v.timestamp).getTime()-new Date(i.timestamp).getTime())[0],u=t.priority==="critical"?"badge-error":t.priority==="watch"?"badge-warning":"badge-ghost";return`
                <a href="/patient?id=${t.id}" class="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer">
                  <div class="card-body p-4">
                    <div class="flex items-start justify-between">
                      <div>
                        <div class="flex items-center gap-2">
                          <span class="text-lg font-bold">${t.roomNumber}</span>
                          <span class="badge ${u} badge-sm">${t.priority}</span>
                        </div>
                        <p class="text-sm text-base-content/70">${t.alias}</p>
                        <div class="flex flex-wrap gap-1 mt-1">
                          ${t.tags.map(i=>`<span class="badge badge-ghost badge-sm">${i}</span>`).join("")}
                        </div>
                      </div>
                      <div class="text-right text-sm">
                        <p>${e.length} pending task${e.length!==1?"s":""}</p>
                        ${p?`<p class="text-base-content/50">${y(p.timestamp)}</p>`:""}
                      </div>
                    </div>
                  </div>
                </a>
              `}).join("")}
          </div>
        </div>
      `;const l=document.getElementById("end-shift-btn");l&&l.addEventListener("click",()=>{confirm("End the current shift?")&&($(t=>({...t,currentShiftId:null,shifts:t.shifts.map(e=>e.id===t.currentShiftId?{...e,endTime:new Date().toISOString()}:e),patients:t.patients.map(e=>({...e,isActive:!1}))})),window.location.href="/handoff")}),n&&setInterval(()=>{const t=document.getElementById("elapsed-time");t&&(t.textContent=`Elapsed: ${f(n.startTime)}`)},6e4)}w();
