import{g as b,u as o}from"./BaseLayout.astro_astro_type_script_index_1_lang.DsrElwSB.js";import{f as u,b as c}from"./utils.CeLx1YVM.js";function v(){const i=b(),s=i.currentShiftId?i.shifts.find(t=>t.id===i.currentShiftId)??null:null,n=document.getElementById("shift-content");if(s)n.innerHTML=`
          <h1 class="text-2xl font-bold mb-4">Active Shift</h1>
          <div class="card bg-base-200 mb-4">
            <div class="card-body">
              <div class="grid grid-cols-2 gap-4">
                <div><p class="text-sm text-base-content/70">Ward</p><p class="font-semibold text-lg">${s.ward}</p></div>
                <div><p class="text-sm text-base-content/70">Initials</p><p class="font-semibold text-lg">${s.nurseInitials}</p></div>
                <div><p class="text-sm text-base-content/70">Started</p><p class="font-semibold">${u(s.startTime)}</p></div>
                <div><p class="text-sm text-base-content/70">Elapsed</p><p class="font-semibold" id="elapsed">${c(s.startTime)}</p></div>
              </div>
              <div class="card-actions justify-end mt-4">
                <button id="end-shift-btn" class="btn btn-error">End Shift</button>
              </div>
            </div>
          </div>
        `,setInterval(()=>{const t=document.getElementById("elapsed");t&&(t.textContent=c(s.startTime))},6e4),document.getElementById("end-shift-btn").addEventListener("click",()=>{confirm("End the current shift? Patients will be marked inactive.")&&(o(t=>({...t,currentShiftId:null,shifts:t.shifts.map(e=>e.id===t.currentShiftId?{...e,endTime:new Date().toISOString()}:e),patients:t.patients.map(e=>({...e,isActive:!1}))})),window.location.href="/handoff")});else{n.innerHTML=`
          <h1 class="text-2xl font-bold mb-4">Start Shift</h1>
          <div class="card bg-base-200">
            <div class="card-body">
              <form id="shift-form" class="flex flex-col gap-4">
                <div class="form-control">
                  <label class="label" for="ward"><span class="label-text">Ward</span></label>
                  <input type="text" id="ward" name="ward" class="input input-bordered" placeholder="e.g. 4B" required />
                </div>
                <div class="form-control">
                  <label class="label" for="initials"><span class="label-text">Your initials</span></label>
                  <input type="text" id="initials" name="initials" class="input input-bordered" placeholder="e.g. JD" maxlength="4" required />
                </div>
                <div class="form-control">
                  <label class="label" for="start-time"><span class="label-text">Shift start time</span></label>
                  <input type="datetime-local" id="start-time" name="startTime" class="input input-bordered" />
                </div>
                <button type="submit" class="btn btn-primary">Start Shift</button>
              </form>
            </div>
          </div>
        `;const t=document.getElementById("start-time"),e=new Date;e.setSeconds(0,0),t.value=e.toISOString().slice(0,16),document.getElementById("shift-form").addEventListener("submit",l=>{l.preventDefault();const a=l.target,m=a.elements.namedItem("ward").value.trim(),f=a.elements.namedItem("initials").value.trim().toUpperCase(),p=a.elements.namedItem("startTime").value||new Date().toISOString(),d=crypto.randomUUID();o(r=>({...r,currentShiftId:d,shifts:[...r.shifts,{id:d,ward:m,nurseInitials:f,startTime:new Date(p).toISOString(),endTime:null}]})),window.location.href="/"})}}v();
