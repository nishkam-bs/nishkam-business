/* =====================================================================
   GCSE Business homework plan: weeks and what is due in each one,
   for each year group. Written questions are in hw-bank.js; the quizzes
   and calculations are in weekly/.
   Each week: a Paper 1 case study and a Paper 2 case study, each with a
   6, 9 and 12-mark question; 20 multiple-choice questions; 10 calculations.
   Deadline: Wednesday 11:59pm, UK time. No homework in KAT weeks.
   Plan item ids start with the year group and week (y11-w01-...), so the
   tracker can tell plan items from work the teacher adds by hand.
   No student data here.
   ===================================================================== */
window.EXAMS=[];
(function(){
"use strict";
/* the six written questions for a week; titles come from hw-bank.js when it is loaded, otherwise from here */
function week(grp,n,due,cases,qs){
  const g=grp.toLowerCase(),w=String(n).padStart(2,'0'),items=[];
  qs.forEach((q,k)=>{const id=`${g}-w${w}-p${q[0]}-${q[1]}`;
    items.push({id,due,kind:'question',ref:id,title:q[2],detail:cases[q[0]],marks:q[1],sort:k});});
  items.push({id:`${g}-w${w}-kq`,due,kind:'quiz',ref:`${g}-kq-${w}`,title:'Multiple-choice quiz',sort:20});
  items.push({id:`${g}-w${w}-calc`,due,kind:'quiz',ref:`${g}-calc-${w}`,title:'Calculations',sort:21});
  return items;
}
const Y11W1=week('Y11',1,'2026-12-16',{1:'Hollin Bakes Ltd',2:'Trailhead Ltd'},[
  [1,6,'Analyse two ways in which the rise in labour turnover could affect Hollin Bakes Ltd.'],
  [1,9,'Recommend whether Hollin Bakes Ltd should change to just-in-time (JIT) stock control. Give reasons for your answer.'],
  [1,12,'Marcus is considering two options to reduce labour turnover: 1. Paying each baker a monthly bonus when quality targets are met. 2. Introducing job rotation and off-the-job training. Analyse the effect of each of these two options on Hollin Bakes Ltd. Evaluate which of these two options will have the bigger impact on reducing labour turnover at Hollin Bakes Ltd.'],
  [2,6,'Analyse two ways in which the change in Trailhead Ltd’s net profit margin between 2024 and 2025 could affect the business.'],
  [2,9,'Recommend whether Trailhead Ltd should sell the Ridgeline jacket at £180 or at £120. Use the break-even output at each price to support your answer.'],
  [2,12,'Trailhead Ltd is choosing between two options to increase its sales: 1. Opening a shop in Ambleside. 2. Selling its products on a large online marketplace. Analyse the effect of each of these two options on Trailhead Ltd. Evaluate which of these two options will have the bigger impact on Trailhead Ltd’s profit.']
]);

window.SCHED_PLANS={
  /* Year 10: no weeks yet */
  Y10:{version:1,weeks:[],items:[]},
  /* Year 11. Week 1 dates are provisional: released after the mocks, due Wednesday 16 December. */
  Y11:{version:1,weeks:[{n:1,release:'2026-12-07',due:'2026-12-16',note:''}],items:Y11W1}
};
window.useGroupPlan=function(g){window.SCHED_PLAN=window.SCHED_PLANS[g]||{version:1,weeks:[],items:[]};return window.SCHED_PLAN;};
window.useGroupPlan(window.GROUP_HINT||'');
})();
