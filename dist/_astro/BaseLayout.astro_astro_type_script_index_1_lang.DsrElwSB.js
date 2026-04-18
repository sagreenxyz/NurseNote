const n={theme:"night",currentShiftId:null,shifts:[],patients:[],notes:[],tasks:[],protocols:[{id:"proto-news2",title:"NEWS2 Scoring",category:"assessment",content:`## National Early Warning Score 2

## Parameters
- Respiration rate (breaths/min)
- Oxygen saturation (%)
- Systolic blood pressure (mmHg)
- Pulse rate (bpm)
- Level of consciousness (AVPU)
- Temperature (°C)

## Scoring
- Score 0-4: Low risk — ward-based monitoring
- Score 5-6: Medium risk — urgent review by ward doctor
- Score 7+: High risk — emergency review, consider ICU

## Steps
- Record all 6 parameters
- Add individual scores
- Escalate according to hospital protocol
- Document time, scores, and actions taken`,tags:["early warning","deterioration","vital signs"],isFavourite:!1},{id:"proto-iv-cannulation",title:"IV Cannulation",category:"procedure",content:`## IV Cannulation — Aseptic Technique

## Equipment
- Appropriate cannula gauge
- Tourniquet
- Alcohol wipe (70% IPA)
- Sterile gloves
- Transparent dressing
- Flush (10 mL 0.9% NaCl)
- Sharps bin at point of care

## Steps
- Explain procedure and gain consent
- Select vein and apply tourniquet
- Clean site with alcohol wipe — allow 30 seconds to dry
- Don sterile gloves
- Insert cannula at 15–30° angle, bevel up
- Observe flashback, advance slightly, lower angle
- Thread cannula, release tourniquet
- Remove stylet, dispose in sharps bin immediately
- Flush with 10 mL NaCl to confirm patency
- Secure with transparent dressing
- Label with date, time, gauge, and initials
- Document in patient notes`,tags:["IV","cannula","aseptic"],isFavourite:!1},{id:"proto-falls-risk",title:"Falls Risk Assessment",category:"assessment",content:`## Morse Fall Scale

## Score each item
- History of falling: No = 0, Yes = 25
- Secondary diagnosis: No = 0, Yes = 15
- Ambulatory aid: None/bed rest/nurse assist = 0, Crutches/cane/walker = 15, Furniture = 30
- IV/Heparin lock: No = 0, Yes = 20
- Gait: Normal/bed rest/wheelchair = 0, Weak = 10, Impaired = 20
- Mental status: Knows own limits = 0, Overestimates/forgets limits = 15

## Risk Levels
- 0–24: No risk
- 25–44: Low risk — implement standard fall prevention
- 45+: High risk — implement high-risk fall prevention protocol

## Interventions
- Call bell within reach
- Bed in lowest position, brakes locked
- Non-slip footwear
- Clear path to bathroom
- Frequent toileting schedule
- Yellow wristband if high risk`,tags:["falls","safety","Morse"],isFavourite:!1},{id:"proto-five-rights",title:"Medication Five Rights",category:"medication",content:`## The Five Rights of Medication Administration

## Rights
- Right Patient — Check 2 identifiers (name + DOB or ID band)
- Right Drug — Verify medication name against order
- Right Dose — Calculate and verify dose
- Right Route — Confirm route (oral, IV, IM, SubQ, topical)
- Right Time — Administer at scheduled time (within 30 min window)

## Additional Rights (extended)
- Right Documentation — Sign MAR immediately after administration
- Right Reason — Understand why the medication is prescribed
- Right Response — Monitor for therapeutic effect and adverse reactions

## Before Administration
- Check allergies
- Check expiry date
- Check appearance of medication
- Check interaction with other meds if unsure`,tags:["medication","safety","rights"],isFavourite:!0},{id:"proto-anaphylaxis",title:"Anaphylaxis Protocol",category:"emergency",content:`## Anaphylaxis Protocol

## Recognition
- Skin: urticaria, flushing, angioedema
- Respiratory: wheeze, stridor, dyspnoea
- Cardiovascular: hypotension, tachycardia, collapse
- GI: nausea, vomiting, abdominal pain

## Immediate Actions
- Call for help — activate emergency team
- Remove trigger if possible
- Position: supine with legs elevated (unless respiratory distress — then upright)
- IM Adrenaline: 0.5 mg (0.5 mL of 1:1000) into outer thigh
- High-flow oxygen 15 L/min via non-rebreathe mask
- IV access — large bore, give 500–1000 mL 0.9% NaCl bolus
- Repeat adrenaline after 5 minutes if no improvement

## Secondary Treatment
- Chlorphenamine 10 mg IV/IM
- Hydrocortisone 200 mg IV
- Nebulised salbutamol for bronchospasm

## Documentation
- Time of reaction, trigger, signs/symptoms
- Time and dose of adrenaline
- Response to treatment
- Complete incident report`,tags:["emergency","anaphylaxis","adrenaline"],isFavourite:!1},{id:"proto-sbar",title:"SBAR Handover Template",category:"documentation",content:`## SBAR Communication Tool

## S — Situation
- Who are you? Who are you calling about?
- What is the current concern or reason for contact?
- What is the patient's current status (stable/deteriorating/critical)?

## B — Background
- Admission diagnosis and date
- Relevant medical history
- Current medications
- Recent investigations / results
- Allergies

## A — Assessment
- Current vital signs
- NEWS2 score
- What do you think is happening?
- Have you reviewed recent notes and test results?

## R — Recommendation
- What do you need from the person you are calling?
- Suggested actions or treatments
- Time frame for review
- Escalation plan if no improvement`,tags:["handover","SBAR","communication"],isFavourite:!1}]},i="nursenote:state";function a(){if(typeof localStorage>"u")return n;try{const e=localStorage.getItem(i);return e?JSON.parse(e):n}catch{return n}}function o(e){localStorage.setItem(i,JSON.stringify(e))}function r(){return a()}function s(e){o(e(a()))}"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch(()=>{});const t=localStorage.getItem("nursenote:state");if(t)try{const e=JSON.parse(t);e.theme&&document.documentElement.setAttribute("data-theme",e.theme)}catch{}export{n as D,r as g,o as s,s as u};
