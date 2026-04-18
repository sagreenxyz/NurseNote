import{g as m}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{f}from"./utils.CeLx1YVM.js";function u(e){const o=e.currentShiftId?e.shifts.find(t=>t.id===e.currentShiftId):e.shifts.sort((t,r)=>new Date(r.startTime).getTime()-new Date(t.startTime).getTime())[0];if(!o)return"No shift data available.";const c=e.patients.filter(t=>t.isActive).sort((t,r)=>{const d={critical:0,watch:1,routine:2};return d[t.priority]-d[r.priority]}),a=o.endTime?f(o.endTime):"Ongoing";let i=`SHIFT HANDOVER — ${o.ward} — ${f(o.startTime)} to ${a}
Nurse: ${o.nurseInitials}

PATIENTS (${c.length} active):
`;c.forEach(t=>{i+=`
${t.roomNumber} — ${t.alias} — ${t.priority.toUpperCase()}
`,t.tags.length&&(i+=`  Tags: ${t.tags.join(", ")}
`);const r=e.notes.filter(n=>n.patientId===t.id&&n.isPinned);r.length&&(i+=`  Pinned notes:
`,r.forEach(n=>{i+=`    ${n.content}
`}));const d=e.tasks.filter(n=>n.patientId===t.id&&n.status==="pending");d.length&&(i+=`  Pending tasks:
`,d.forEach(n=>{i+=`    [ ] ${n.description}${n.dueTime?` — due ${f(n.dueTime)}`:""} — ${n.type}
`}))});const s=e.tasks.filter(t=>!t.patientId&&t.status==="pending");return s.length&&(i+=`
SHIFT-LEVEL PENDING TASKS:
`,s.forEach(t=>{i+=`  [ ] ${t.description}
`})),i}function l(e=!1,o=""){const c=m(),a=o||u(c),i=document.getElementById("handoff-content");i.innerHTML=`
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-2xl font-bold">Handoff Summary</h1>
          <div class="flex gap-2">
            <button id="edit-btn" class="btn btn-ghost btn-sm">${e?"Preview":"Edit"}</button>
            <button id="copy-btn" class="btn btn-ghost btn-sm">Copy</button>
            <button id="print-btn" class="btn btn-ghost btn-sm">Print</button>
          </div>
        </div>
        ${e?`<textarea id="handoff-textarea" class="textarea textarea-bordered w-full font-mono text-sm" rows="30">${a}</textarea>`:`<div class="card bg-base-200"><div class="card-body"><pre class="text-sm whitespace-pre-wrap font-mono">${a}</pre></div></div>`}
      `,document.getElementById("edit-btn").addEventListener("click",()=>{const s=e?document.getElementById("handoff-textarea").value:a;l(!e,s)}),document.getElementById("copy-btn").addEventListener("click",async()=>{const s=e?document.getElementById("handoff-textarea")?.value??a:a;await navigator.clipboard.writeText(s);const t=document.getElementById("copy-btn");t.textContent="Copied!",setTimeout(()=>{t.textContent="Copy"},2e3)}),document.getElementById("print-btn").addEventListener("click",()=>{window.print()})}l();
