import{g as T,u as l}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{a as B,i as E,f as $}from"./utils.CeLx1YVM.js";const o=new URLSearchParams(window.location.search).get("id")??"";function d(c=0){const m=T(),s=m.patients.find(e=>e.id===o);if(!s){document.getElementById("patient-detail-content").innerHTML=`
          <div class="alert alert-error">Patient not found. <a href="/patients" class="link">Back to patients</a></div>
        `;return}const u=m.notes.filter(e=>e.patientId===o).sort((e,t)=>e.isPinned&&!t.isPinned?-1:!e.isPinned&&t.isPinned?1:new Date(t.timestamp).getTime()-new Date(e.timestamp).getTime()),g=m.tasks.filter(e=>e.patientId===o),f=g.filter(e=>e.status==="pending").sort((e,t)=>!e.dueTime&&!t.dueTime?0:e.dueTime?t.dueTime?new Date(e.dueTime).getTime()-new Date(t.dueTime).getTime():-1:1),v=g.filter(e=>e.status!=="pending"),I=s.priority==="critical"?"badge-error":s.priority==="watch"?"badge-warning":"badge-ghost",w=[`<div class="flex flex-col gap-3">
          <div class="card bg-base-200">
            <div class="card-body p-4">
              <h3 class="font-semibold mb-2">Add Note</h3>
              <form id="note-form" class="flex flex-col gap-2">
                <select id="note-type" class="select select-bordered select-sm">
                  <option value="clinical">Clinical</option>
                  <option value="handoff">Handoff</option>
                  <option value="general">General</option>
                </select>
                <textarea id="note-content" class="textarea textarea-bordered" rows="3" placeholder="Note (max 2000 chars)" maxlength="2000"></textarea>
                <button type="submit" class="btn btn-primary btn-sm">Save Note</button>
              </form>
            </div>
          </div>
          ${u.length===0?'<p class="text-base-content/50 text-sm text-center py-4">No notes yet.</p>':""}
          ${u.map(e=>`
              <div class="card bg-base-200">
                <div class="card-body p-4">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="badge ${e.type==="clinical"?"badge-info":e.type==="handoff"?"badge-warning":"badge-ghost"} badge-sm">${e.type}</span>
                        <span class="text-xs text-base-content/50">${B(e.timestamp)}</span>
                        ${e.isPinned?'<span class="text-warning text-xs">Pinned</span>':""}
                      </div>
                      <p class="text-sm whitespace-pre-wrap">${e.content}</p>
                    </div>
                    <button class="btn btn-ghost btn-xs pin-btn" data-note-id="${e.id}" aria-label="${e.isPinned?"Unpin":"Pin"} note">
                      ${e.isPinned?"[unpin]":"[pin]"}
                    </button>
                  </div>
                </div>
              </div>
            `).join("")}
        </div>`,`<div class="flex flex-col gap-3">
          <div class="card bg-base-200">
            <div class="card-body p-4">
              <h3 class="font-semibold mb-2">Add Task</h3>
              <form id="task-form" class="flex flex-col gap-2">
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
                <button type="submit" class="btn btn-primary btn-sm">Add Task</button>
              </form>
            </div>
          </div>
          ${f.length===0?'<p class="text-base-content/50 text-sm text-center py-4">No pending tasks.</p>':""}
          ${f.map(e=>{const t=E(e.dueTime),a={medication:"badge-info",procedure:"badge-warning",assessment:"badge-success",documentation:"badge-ghost",other:"badge-ghost"}[e.type]??"badge-ghost",n=e.priority==="stat"?"badge-error":e.priority==="urgent"?"badge-warning":"badge-ghost";return`
              <div class="card bg-base-200${t?" border border-error":""}">
                <div class="card-body p-3">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="checkbox task-done-check" data-task-id="${e.id}" aria-label="Mark task done" />
                    <div class="flex-1">
                      <p class="font-medium${t?" text-error":""}">${e.description}</p>
                      <div class="flex flex-wrap gap-1 mt-1">
                        <span class="badge ${a} badge-sm">${e.type}</span>
                        <span class="badge ${n} badge-sm">${e.priority}</span>
                        ${e.dueTime?`<span class="badge badge-ghost badge-sm${t?" text-error":""}">${$(e.dueTime)}</span>`:""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `}).join("")}
          ${v.length>0?`
            <div class="divider">Completed</div>
            ${v.map(e=>`
              <div class="card bg-base-200 opacity-50">
                <div class="card-body p-3">
                  <div class="flex items-center gap-3">
                    <input type="checkbox" class="checkbox" checked disabled aria-label="Task done" />
                    <div>
                      <p class="line-through text-sm">${e.description}</p>
                      ${e.completedAt?`<p class="text-xs text-base-content/50">Done at ${$(e.completedAt)}</p>`:""}
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          `:""}
        </div>`,`<div class="card bg-base-200">
          <div class="card-body">
            <form id="info-form" class="flex flex-col gap-3">
              <div class="form-control">
                <label class="label" for="info-room"><span class="label-text">Room</span></label>
                <input type="text" id="info-room" class="input input-bordered" value="${s.roomNumber}" />
              </div>
              <div class="form-control">
                <label class="label" for="info-alias"><span class="label-text">Alias</span></label>
                <input type="text" id="info-alias" class="input input-bordered" value="${s.alias}" />
              </div>
              <div class="form-control">
                <label class="label" for="info-priority"><span class="label-text">Priority</span></label>
                <select id="info-priority" class="select select-bordered">
                  <option value="routine"${s.priority==="routine"?" selected":""}>Routine</option>
                  <option value="watch"${s.priority==="watch"?" selected":""}>Watch</option>
                  <option value="critical"${s.priority==="critical"?" selected":""}>Critical</option>
                </select>
              </div>
              <div class="form-control">
                <label class="label" for="info-tags"><span class="label-text">Tags (comma-separated)</span></label>
                <input type="text" id="info-tags" class="input input-bordered" value="${s.tags.join(", ")}" />
              </div>
              <div class="form-control">
                <label class="label"><span class="label-text">Admitted</span></label>
                <p class="text-base-content/70">${new Date(s.admittedDate).toLocaleDateString()}</p>
              </div>
              <button type="submit" class="btn btn-primary">Save</button>
            </form>
          </div>
        </div>`],y=document.getElementById("patient-detail-content");y.innerHTML=`
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <a href="/patients" class="btn btn-ghost btn-sm" aria-label="Back">&larr;</a>
            <span class="text-xl font-bold">${s.roomNumber}</span>
            <span class="badge ${I}">${s.priority}</span>
          </div>
          <button id="discharge-btn" class="btn btn-ghost btn-sm text-error">Discharge</button>
        </div>
        <p class="text-base-content/70 mb-4">${s.alias}</p>
        <div class="flex flex-wrap gap-1 mb-4">
          ${s.tags.map(e=>`<span class="badge badge-ghost badge-sm">${e}</span>`).join("")}
        </div>

        <div role="tablist" class="tabs tabs-bordered mb-4">
          <button role="tab" class="tab${c===0?" tab-active":""}" data-tab="0">Notes</button>
          <button role="tab" class="tab${c===1?" tab-active":""}" data-tab="1">Tasks</button>
          <button role="tab" class="tab${c===2?" tab-active":""}" data-tab="2">Info</button>
        </div>
        <div id="tab-content">${w[c]}</div>
      `,y.querySelectorAll('[role="tab"]').forEach(e=>{e.addEventListener("click",()=>d(Number(e.dataset.tab)))}),document.getElementById("discharge-btn").addEventListener("click",()=>{confirm("Discharge this patient? They will be removed from active patients.")&&(l(e=>({...e,patients:e.patients.map(t=>t.id===o?{...t,isActive:!1}:t)})),window.location.href="/patients")});const x=document.getElementById("note-form");x&&x.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("note-type").value,i=document.getElementById("note-content").value.trim();i&&(l(a=>({...a,notes:[...a.notes,{id:crypto.randomUUID(),patientId:o,shiftId:a.currentShiftId??"",content:i,timestamp:new Date().toISOString(),type:t,isPinned:!1}]})),d(0))});const h=document.getElementById("task-form");h&&h.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("task-desc").value.trim(),i=document.getElementById("task-type").value,a=document.getElementById("task-priority").value,n=document.getElementById("task-due").value;t&&(l(r=>({...r,tasks:[...r.tasks,{id:crypto.randomUUID(),patientId:o,shiftId:r.currentShiftId??"",description:t,dueTime:n?new Date(n).toISOString():null,type:i,status:"pending",priority:a,completedAt:null,notes:""}]})),d(1))}),document.querySelectorAll(".task-done-check").forEach(e=>{e.addEventListener("change",t=>{const i=t.target.dataset.taskId;l(a=>({...a,tasks:a.tasks.map(n=>n.id===i?{...n,status:"done",completedAt:new Date().toISOString()}:n)})),d(1)})}),document.querySelectorAll(".pin-btn").forEach(e=>{e.addEventListener("click",t=>{const i=t.currentTarget.dataset.noteId;l(a=>({...a,notes:a.notes.map(n=>n.id===i?{...n,isPinned:!n.isPinned}:n)})),d(0)})});const k=document.getElementById("info-form");k&&k.addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("info-room").value.trim(),i=document.getElementById("info-alias").value.trim(),a=document.getElementById("info-priority").value,r=document.getElementById("info-tags").value.split(",").map(p=>p.trim()).filter(Boolean);l(p=>({...p,patients:p.patients.map(b=>b.id===o?{...b,roomNumber:t,alias:i,priority:a,tags:r}:b)})),d(2)})}d();
