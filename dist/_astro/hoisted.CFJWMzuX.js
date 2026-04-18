import{g as d,u as c,s as l,D as m}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";function o(){const r=d(),b=document.getElementById("settings-content");b.innerHTML=`
        <h1 class="text-2xl font-bold mb-6">Settings</h1>
        <div class="card bg-base-200 mb-4"><div class="card-body">
          <h2 class="card-title">Theme</h2>
          <div class="flex items-center gap-3">
            <span>Dark (Night)</span>
            <input type="checkbox" id="theme-toggle" class="toggle toggle-primary" ${r.theme==="winter"?"checked":""} aria-label="Toggle theme" />
            <span>Light (Winter)</span>
          </div>
        </div></div>
        <div class="card bg-base-200 mb-4"><div class="card-body">
          <h2 class="card-title">Export Data</h2>
          <p class="text-base-content/70 text-sm">Download all your data as a JSON backup file.</p>
          <div class="card-actions"><button id="export-btn" class="btn btn-primary btn-sm">Download backup (JSON)</button></div>
        </div></div>
        <div class="card bg-base-200 mb-4"><div class="card-body">
          <h2 class="card-title">Import Data</h2>
          <p class="text-base-content/70 text-sm">Import a JSON backup file to restore your data.</p>
          <div class="card-actions"><label class="btn btn-secondary btn-sm cursor-pointer">Import JSON<input type="file" id="import-file" accept=".json" class="hidden" /></label></div>
        </div></div>
        <div class="card bg-base-200 mb-4"><div class="card-body">
          <h2 class="card-title">Clear Old Shifts</h2>
          <p class="text-base-content/70 text-sm">Delete shifts (and their notes/tasks) older than 30 days.</p>
          <div class="card-actions"><button id="clear-old-btn" class="btn btn-warning btn-sm">Delete shifts older than 30 days</button></div>
        </div></div>
        <div class="card bg-base-200 mb-4 border border-error"><div class="card-body">
          <h2 class="card-title text-error">Danger Zone</h2>
          <p class="text-base-content/70 text-sm">Permanently delete all NurseNote data. This cannot be undone.</p>
          <div class="card-actions"><button id="wipe-btn" class="btn btn-error btn-sm">Wipe all data</button></div>
        </div></div>
      `,document.getElementById("theme-toggle").addEventListener("change",n=>{const e=n.target.checked?"winter":"night";c(a=>({...a,theme:e})),document.documentElement.setAttribute("data-theme",e)}),document.getElementById("export-btn").addEventListener("click",()=>{const n=d(),e=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),a=URL.createObjectURL(e),s=document.createElement("a");s.href=a,s.download=`nursenote-backup-${new Date().toISOString().slice(0,10)}.json`,s.click(),URL.revokeObjectURL(a)}),document.getElementById("import-file").addEventListener("change",n=>{const e=n.target.files?.[0];if(!e)return;const a=new FileReader;a.onload=s=>{try{const t=JSON.parse(s.target.result);if(!t.theme||!Array.isArray(t.shifts)){alert("Invalid backup file format.");return}confirm("Replace all data with this backup?")&&(l(t),window.location.reload())}catch{alert("Failed to parse JSON file.")}},a.readAsText(e)}),document.getElementById("clear-old-btn").addEventListener("click",()=>{const n=d(),e=new Date;e.setDate(e.getDate()-30);const a=n.shifts.filter(t=>t.endTime&&new Date(t.endTime)<e),s=new Set(a.map(t=>t.id));if(a.length===0){alert("No shifts older than 30 days found.");return}confirm(`Delete ${a.length} old shift(s) and their associated notes and tasks?`)&&(c(t=>({...t,shifts:t.shifts.filter(i=>!s.has(i.id)),notes:t.notes.filter(i=>!s.has(i.shiftId)),tasks:t.tasks.filter(i=>!s.has(i.shiftId))})),alert("Old shifts deleted successfully."),o())}),document.getElementById("wipe-btn").addEventListener("click",()=>{confirm("This will permanently delete ALL NurseNote data. Are you sure?")&&prompt('Type "DELETE" to confirm:')==="DELETE"&&(l({...m}),window.location.reload())})}o();
