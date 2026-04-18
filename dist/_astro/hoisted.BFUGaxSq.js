import{g as I,u}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{i as k,f as E,c as S}from"./utils.CeLx1YVM.js";let c="pending",p="all",l="all";function d(){const m=I();let s=[...m.tasks];c!=="all"&&(s=s.filter(t=>t.status===c)),p!=="all"&&(s=s.filter(t=>t.type===p)),l==="overdue"?s=s.filter(t=>k(t.dueTime)):l==="soon"?s=s.filter(t=>S(t.dueTime,60)):l==="none"&&(s=s.filter(t=>!t.dueTime));const b=s.filter(t=>!t.patientId),f=s.filter(t=>t.patientId),g=m.patients,h=g.filter(t=>f.some(e=>e.patientId===t.id)).map(t=>({patient:t,tasks:f.filter(e=>e.patientId===t.id).sort((e,a)=>!e.dueTime&&!a.dueTime?0:e.dueTime?a.dueTime?new Date(e.dueTime).getTime()-new Date(a.dueTime).getTime():-1:1)})),y=["all","pending","done","skipped"],$=["all","medication","procedure","assessment","documentation","other"],x=[{value:"all",label:"All"},{value:"overdue",label:"Overdue"},{value:"soon",label:"Due soon"},{value:"none",label:"No due time"}];function v(t){const e=t.patientId?g.find(T=>T.id===t.patientId):null,a=t.status==="pending"&&k(t.dueTime),n={medication:"badge-info",procedure:"badge-warning",assessment:"badge-success",documentation:"badge-ghost",other:"badge-ghost"}[t.type]??"badge-ghost",o=t.priority==="stat"?"badge-error":t.priority==="urgent"?"badge-warning":"badge-ghost";return`
          <div class="card card-compact bg-base-200 mb-2${a?" border border-error":""}">
            <div class="card-body p-3">
              <div class="flex items-center gap-3">
                <input type="checkbox" class="checkbox task-check" data-task-id="${t.id}" ${t.status==="done"?"checked":""} ${t.status!=="pending"?"disabled":""} aria-label="Mark task done" />
                <div class="flex-1">
                  <p class="font-medium${t.status!=="pending"?" line-through opacity-50":a?" text-error":""}">${t.description}</p>
                  ${e?`<p class="text-xs text-base-content/50">${e.roomNumber} — ${e.alias}</p>`:""}
                  <div class="flex flex-wrap gap-1 mt-1">
                    <span class="badge ${n} badge-sm">${t.type}</span>
                    <span class="badge ${o} badge-sm">${t.priority}</span>
                    ${t.dueTime?`<span class="badge badge-ghost badge-sm${a?" text-error":""}">${E(t.dueTime)}</span>`:""}
                  </div>
                </div>
                <button class="btn btn-ghost btn-xs skip-btn${t.status!=="pending"?" hidden":""}" data-task-id="${t.id}" aria-label="Skip task">Skip</button>
              </div>
            </div>
          </div>
        `}const r=document.getElementById("tasks-content");r.innerHTML=`
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold">Tasks</h1>
          <button id="add-task-btn" class="btn btn-primary btn-sm">+ Add Task</button>
        </div>

        <div id="add-task-form" class="card bg-base-200 mb-4 hidden">
          <div class="card-body">
            <h2 class="card-title">Add Shift Task</h2>
            <form id="shift-task-form" class="flex flex-col gap-2">
              <input type="text" id="task-desc" class="input input-bordered input-sm" placeholder="Task description" required />
              <div class="flex gap-2">
                <select id="task-type" class="select select-bordered select-sm flex-1">
                  <option value="medication">Medication</option>
                  <option value="procedure">Procedure</option>
                  <option value="assessment">Assessment</option>
                  <option value="documentation">Documentation</option>
                  <option value="other">Other</option>
                </select>
                <select id="task-priority" class="select select-bordered select-sm flex-1">
                  <option value="routine">Routine</option>
                  <option value="urgent">Urgent</option>
                  <option value="stat">STAT</option>
                </select>
              </div>
              <input type="datetime-local" id="task-due" class="input input-bordered input-sm" />
              <div class="flex gap-2">
                <button type="submit" class="btn btn-primary btn-sm">Add</button>
                <button type="button" id="cancel-task-btn" class="btn btn-ghost btn-sm">Cancel</button>
              </div>
            </form>
          </div>
        </div>

        <div class="filter-bar mb-4 space-y-2">
          <div class="flex gap-1 overflow-x-auto pb-1">
            ${y.map(t=>`<button class="btn btn-sm${c===t?" btn-primary":" btn-ghost"} status-filter" data-status="${t}">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join("")}
          </div>
          <div class="flex gap-1 overflow-x-auto pb-1">
            ${$.map(t=>`<button class="btn btn-sm${p===t?" btn-secondary":" btn-ghost"} type-filter" data-type="${t}">${t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join("")}
          </div>
          <div class="flex gap-1 overflow-x-auto pb-1">
            ${x.map(t=>`<button class="btn btn-sm${l===t.value?" btn-accent":" btn-ghost"} time-filter" data-time="${t.value}">${t.label}</button>`).join("")}
          </div>
        </div>

        <div>
          ${b.length>0?`
            <h2 class="text-sm font-semibold text-base-content/50 uppercase mb-2">General (Shift Tasks)</h2>
            ${b.map(v).join("")}
          `:""}
          ${h.map(({patient:t,tasks:e})=>`
            <h2 class="text-sm font-semibold text-base-content/50 uppercase mb-2 mt-4">${t.roomNumber} — ${t.alias}</h2>
            ${e.map(v).join("")}
          `).join("")}
          ${s.length===0?'<p class="text-base-content/50 text-sm text-center py-8">No tasks match the selected filters.</p>':""}
        </div>
      `,r.querySelectorAll(".status-filter").forEach(t=>{t.addEventListener("click",()=>{c=t.dataset.status,d()})}),r.querySelectorAll(".type-filter").forEach(t=>{t.addEventListener("click",()=>{p=t.dataset.type,d()})}),r.querySelectorAll(".time-filter").forEach(t=>{t.addEventListener("click",()=>{l=t.dataset.time,d()})}),document.getElementById("add-task-btn").addEventListener("click",()=>{document.getElementById("add-task-form").classList.remove("hidden")}),document.getElementById("cancel-task-btn").addEventListener("click",()=>{document.getElementById("add-task-form").classList.add("hidden")}),document.getElementById("shift-task-form").addEventListener("submit",t=>{t.preventDefault();const e=document.getElementById("task-desc").value.trim(),a=document.getElementById("task-type").value,i=document.getElementById("task-priority").value,n=document.getElementById("task-due").value;u(o=>({...o,tasks:[...o.tasks,{id:crypto.randomUUID(),patientId:null,shiftId:o.currentShiftId??"",description:e,dueTime:n?new Date(n).toISOString():null,type:a,status:"pending",priority:i,completedAt:null,notes:""}]})),d()}),document.querySelectorAll(".task-check").forEach(t=>{t.addEventListener("change",e=>{const a=e.target.dataset.taskId;u(i=>({...i,tasks:i.tasks.map(n=>n.id===a?{...n,status:"done",completedAt:new Date().toISOString()}:n)})),d()})}),document.querySelectorAll(".skip-btn").forEach(t=>{t.addEventListener("click",e=>{const a=e.currentTarget.dataset.taskId;u(i=>({...i,tasks:i.tasks.map(n=>n.id===a?{...n,status:"skipped"}:n)})),d()})})}d();
