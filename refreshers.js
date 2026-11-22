/* =====================================================================
   Refreshers: short card decks on one area each, used before set work
   and after marking. Written for AQA GCSE Business (8132). Every worked
   figure has been checked. No student data in this file. Used by
   refresher.html, weekly.html, practice.html and the home page.
   ===================================================================== */
(function(){
"use strict";
const F=s=>`<div class="rf-formula">${s}</div>`;

const DECKS={
/* ---------- calculations (8132 section 3.6) ---------- */
pct:{short:'percentage change',title:'Percentage change',mins:3,topics:['3.6.3a','3.6.4a'],match:/percentage change|% change|increase(?:d)? by what percentage|percentage (rise|fall|increase|decrease)/i,
 cards:[
  {h:'The rule',html:`${F('Percentage change = (new figure − old figure) ÷ old figure × 100')}
   <p>Always divide by the <b>old</b> figure, the one you are comparing from.</p>
   <p>If the answer is negative, it is a percentage fall.</p>`},
  {h:'Worked example',type:'steps',intro:'A café\'s sales rise from £50,000 in 2024 to £62,000 in 2025.',
   steps:['Change = £62,000 − £50,000 = £12,000','£12,000 ÷ £50,000 = 0.24','0.24 × 100 = 24%','Sales rose by 24%.']},
  {h:'Common mistakes',html:`<ul><li><b>Dividing by the new figure.</b> £12,000 ÷ £62,000 gives 19.4%, which is wrong.</li>
   <li><b>Giving the change in £ instead of %.</b> Read what the question asks for.</li>
   <li><b>Mixing up percentage points and percentages.</b> A margin going from 10% to 12% is a rise of 2 percentage points, but a 20% increase.</li></ul>`}
 ],
 check:{q:'Sales fall from 8,000 units to 6,000 units. What is the percentage change?',options:['−25%','−33.3%','−2,000%','−20%'],answer:0,
  why:'(6,000 − 8,000) ÷ 8,000 × 100 = −25%. Dividing by the new figure (6,000) gives −33.3%, which is wrong.'}},

rev:{short:'revenue, costs and profit',title:'Revenue, costs and profit',mins:4,topics:['3.6.3a'],match:/\brevenue\b|total costs?|variable costs?|fixed costs?|calculate (the )?(profit|loss)/i,
 cards:[
  {h:'The formulae',html:`${F('Revenue = selling price × quantity sold')}${F('Total variable costs = variable cost per unit × quantity')}${F('Total costs = fixed costs + total variable costs')}${F('Profit = revenue − total costs')}
   <p><b>Fixed costs</b> stay the same whatever the output, for example rent and salaries. <b>Variable costs</b> change with output, for example raw materials.</p>`},
  {h:'Worked example',type:'steps',intro:'A business sells 2,400 phone cases at £15 each. Fixed costs are £8,000. The variable cost is £4 per case.',
   steps:['Revenue = 2,400 × £15 = £36,000','Total variable costs = 2,400 × £4 = £9,600','Total costs = £8,000 + £9,600 = £17,600','Profit = £36,000 − £17,600 = £18,400']},
  {h:'Common mistakes',html:`<ul><li><b>Forgetting to multiply the variable cost by the quantity.</b> £8,000 + £4 is not total costs.</li>
   <li><b>Leaving out the fixed costs</b> when working out profit.</li>
   <li><b>Calling a negative answer a profit.</b> If total costs are higher than revenue, it is a loss.</li></ul>`}
 ],
 check:{q:'Revenue is £50,000. Fixed costs are £12,000 and total variable costs are £30,000. What is the profit?',options:['£8,000','£38,000','£20,000','£92,000'],answer:0,
  why:'Total costs = £12,000 + £30,000 = £42,000. Profit = £50,000 − £42,000 = £8,000.'}},

be:{short:'break-even',title:'Break-even and margin of safety',mins:4,topics:['3.6.3a'],match:/break[- ]even|margin of safety|contribution/i,
 cards:[
  {h:'The formulae',html:`${F('Break-even output = fixed costs ÷ (selling price per unit − variable cost per unit)')}${F('Margin of safety = actual or budgeted output − break-even output')}
   <p>At break-even, revenue equals total costs, so there is no profit and no loss.</p>
   <p>If the answer is not a whole number, round <b>up</b>. You cannot sell part of a product, and rounding down leaves a small loss.</p>`},
  {h:'Worked example',type:'steps',intro:'Fixed costs are £12,000 a month. Each item sells for £20 and has a variable cost of £8. The business sells 1,450 a month.',
   steps:['£20 − £8 = £12 per item towards the fixed costs','Break-even = £12,000 ÷ £12 = 1,000 items','Margin of safety = 1,450 − 1,000 = 450 items','Sales could fall by 450 items before the business makes a loss.']},
  {h:'Reading a break-even chart',html:`<ul><li>The <b>fixed costs</b> line is flat.</li><li>The <b>total costs</b> line starts where fixed costs start and slopes up.</li>
   <li>The <b>revenue</b> line starts at zero.</li><li>Break-even is where the revenue and total costs lines cross. To the right of it is profit; to the left is loss.</li></ul>
   <p>If the price rises, the revenue line gets steeper and the break-even point falls. If costs rise, the break-even point rises.</p>`}
 ],
 check:{q:'Fixed costs are £9,000. The price is £25 and the variable cost is £10. How many units must be sold to break even?',options:['600','360','257','900'],answer:0,
  why:'£25 − £10 = £15 per unit. £9,000 ÷ £15 = 600 units. £9,000 ÷ £25 = 360 ignores the variable cost.'}},

margins:{short:'profit margins',title:'Gross and net profit margins',mins:4,topics:['3.6.4a'],match:/profit margin|gross profit|net profit|income statement|cost of sales/i,
 cards:[
  {h:'The formulae',html:`${F('Gross profit = revenue − cost of sales')}${F('Gross profit margin = gross profit ÷ revenue × 100')}${F('Net profit = gross profit − other operating expenses and interest')}${F('Net profit margin = net profit ÷ revenue × 100')}
   <p>A margin shows how many pence of each £1 of sales is left as profit.</p>`},
  {h:'Worked example',type:'steps',intro:'Revenue is £180,000. Cost of sales is £135,000. Other expenses are £32,400.',
   steps:['Gross profit = £180,000 − £135,000 = £45,000','Gross profit margin = £45,000 ÷ £180,000 × 100 = 25%','Net profit = £45,000 − £32,400 = £12,600','Net profit margin = £12,600 ÷ £180,000 × 100 = 7%']},
  {h:'What the margins tell you',html:`<ul><li>A <b>falling gross profit margin</b> usually means the cost of making or buying the product has gone up, or prices have been cut.</li>
   <li>A falling <b>net</b> margin while the gross margin stays the same points to higher overheads, such as rent, wages or marketing.</li>
   <li>Revenue can rise while the margin falls, so profit does not always go up when sales do.</li></ul>`}
 ],
 check:{q:'Revenue is £400,000 and net profit is £36,000. What is the net profit margin?',options:['9%','11.1%','36%','0.09%'],answer:0,
  why:'£36,000 ÷ £400,000 × 100 = 9%.'}},

arr:{short:'average rate of return',title:'Average rate of return (ARR)',mins:3,topics:['3.6.4a'],match:/average rate of return|\bARR\b/i,
 cards:[
  {h:'The formula',html:`${F('Average annual profit = total profit from the investment ÷ number of years')}${F('ARR = average annual profit ÷ cost of investment × 100')}
   <p>The total profit is what the investment makes after its cost has been taken off.</p>`},
  {h:'Worked example',type:'steps',intro:'A machine costs £50,000. Over 5 years it brings in £80,000 in total.',
   steps:['Total profit = £80,000 − £50,000 = £30,000','Average annual profit = £30,000 ÷ 5 = £6,000','ARR = £6,000 ÷ £50,000 × 100 = 12%','Compare this with the interest rate on a loan or with other investments.']},
  {h:'Common mistakes',html:`<ul><li><b>Not taking off the cost of the investment</b> before working out the average.</li>
   <li><b>Forgetting to divide by the number of years.</b></li>
   <li><b>Dividing by the total returns</b> instead of the cost of the investment.</li></ul>`}
 ],
 check:{q:'An investment costs £20,000 and makes a total profit of £8,000 over 4 years. What is the ARR?',options:['10%','40%','2.5%','25%'],answer:0,
  why:'Average annual profit = £8,000 ÷ 4 = £2,000. ARR = £2,000 ÷ £20,000 × 100 = 10%.'}},

cash:{short:'cash flow',title:'Cash flow forecasts',mins:3,topics:['3.6.2a'],match:/cash[- ]flow|closing balance|opening balance|net cash/i,
 cards:[
  {h:'The rules',html:`${F('Net cash flow = cash inflows − cash outflows')}${F('Closing balance = opening balance + net cash flow')}
   <p>This month's closing balance is next month's opening balance.</p>
   <p>A negative figure is often shown in brackets: (£3,200) means −£3,200.</p>`},
  {h:'Worked example',type:'steps',intro:'Opening balance £4,500. Cash inflows £18,000. Cash outflows £21,200.',
   steps:['Net cash flow = £18,000 − £21,200 = −£3,200','Closing balance = £4,500 + (−£3,200) = £1,300','The business still has cash, but less than it started with.']},
  {h:'Cash is not profit',html:`<p>A profitable business can still run out of cash, for example if customers pay late or it buys a lot of stock at once.</p>
   <p>Ways to improve cash flow include an overdraft, asking customers to pay sooner, getting longer to pay suppliers, and holding less stock.</p>`}
 ],
 check:{q:'Opening balance is −£2,000. Net cash flow is £5,500. What is the closing balance?',options:['£3,500','£7,500','−£7,500','−£3,500'],answer:0,
  why:'Closing balance = −£2,000 + £5,500 = £3,500.'}},

interest:{short:'interest on loans',title:'Interest on loans',mins:2,topics:['3.6.3a','3.6.1a'],match:/interest (on|paid)|repays?|total repayment/i,
 cards:[
  {h:'The formula',html:`${F('Interest (%) = (total repayment − borrowed amount) ÷ borrowed amount × 100')}
   <p>The interest is the extra paid back on top of the amount borrowed.</p>`},
  {h:'Worked example',type:'steps',intro:'A business borrows £20,000 and repays £23,000 in total.',
   steps:['Interest = £23,000 − £20,000 = £3,000','£3,000 ÷ £20,000 × 100 = 15%']}
 ],
 check:{q:'A business borrows £8,000 and repays £8,600 in total. What is the interest as a percentage?',options:['7.5%','7%','107.5%','0.75%'],answer:0,
  why:'(£8,600 − £8,000) ÷ £8,000 × 100 = 7.5%.'}},

/* ---------- knowledge ---------- */
ownership:{short:'business ownership',title:'Business ownership',mins:3,kind:'know',topics:['3.1.2a'],match:/sole trader|partnership|private limited|public limited|\bLtd\b|\bplc\b|limited liability/i,
 cards:[
  {h:'The main types',html:`<ul><li><b>Sole trader</b>: one owner, unlimited liability, keeps all the profit.</li>
   <li><b>Partnership</b>: two or more owners share decisions, profits and debts. Usually unlimited liability.</li>
   <li><b>Private limited company (Ltd)</b>: owned by shareholders, often family and friends. Shares cannot be sold to the public. Limited liability.</li>
   <li><b>Public limited company (plc)</b>: shares can be sold to the public on the stock exchange. Limited liability. Can raise large amounts but risks losing control.</li></ul>`},
  {h:'Limited and unlimited liability',html:`<p><b>Unlimited liability</b>: the owner is personally responsible for all the business\'s debts, so they could lose their house or savings.</p>
   <p><b>Limited liability</b>: owners can only lose the money they have invested in the business.</p>`}
 ],
 check:{q:'Which type of business can sell shares to the general public?',options:['Public limited company','Private limited company','Partnership','Sole trader'],answer:0,
  why:'Only a plc can offer its shares to the public on the stock exchange.'}},

production:{short:'production and stock',title:'Production methods and stock control',mins:3,kind:'know',topics:['3.3.1a','3.3.2a'],match:/job production|batch production|flow production|just[- ]in[- ]time|\bJIT\b|just in case|stock control|buffer stock/i,
 cards:[
  {h:'Production methods',html:`<ul><li><b>Job</b>: one-off products made to the customer\'s order. High quality and unique, but slow and expensive per unit.</li>
   <li><b>Batch</b>: a set number of one product, then the machines switch to another. More choice, but time is lost changing over.</li>
   <li><b>Flow</b>: continuous production of identical products, often automated. Low cost per unit, but expensive to set up and little variety.</li></ul>`},
  {h:'Just in time and just in case',html:`<p><b>Just in time (JIT)</b>: stock arrives only when it is needed. Less money tied up and less storage space or waste, but production stops if a delivery is late. Needs reliable suppliers.</p>
   <p><b>Just in case (JIC)</b>: keeping buffer stock. Can meet sudden demand and can buy in bulk, but storage costs more and stock can go out of date.</p>`}
 ],
 check:{q:'Which is a drawback of just-in-time stock control?',options:['Production can stop if a supplier delivers late','More money is tied up in stock','Storage costs are higher','Stock is more likely to go out of date'],answer:0,
  why:'With JIT there is no buffer stock, so a late delivery can stop production. The other three are drawbacks of holding more stock.'}},

people:{short:'motivation and structure',title:'Motivation, training and structure',mins:3,kind:'know',topics:['3.4.1a','3.4.3a','3.4.4a'],match:/motivat|labour turnover|staff turnover|bonus|commission|job rotation|job enrichment|span of control|delegat|training|induction/i,
 cards:[
  {h:'Motivating employees',html:`<p><b>Financial methods</b>: pay, bonus, commission, profit sharing, fringe benefits such as a staff discount.</p>
   <p><b>Non-financial methods</b>: praise, job rotation (moving between tasks), job enrichment (more responsibility), autonomy, flexible working, training and promotion.</p>
   <p>Motivated staff are more productive and less likely to leave, so <b>labour turnover</b> falls and recruitment costs fall.</p>`},
  {h:'Training and structure',html:`<ul><li><b>On-the-job training</b>: at work, learning from colleagues. Cheaper, but can pass on bad habits.</li>
   <li><b>Off-the-job training</b>: at a college or training centre. Can lead to qualifications, but staff are away from work.</li>
   <li><b>Span of control</b>: the number of people a manager is directly responsible for. A flat structure has wide spans and fewer layers.</li></ul>`}
 ],
 check:{q:'Which of these is a non-financial method of motivation?',options:['Job rotation','Commission','Profit sharing','A bonus'],answer:0,
  why:'Job rotation changes the work people do. The other three are all forms of payment.'}},

marketing:{short:'pricing and the product life cycle',title:'Pricing and the product life cycle',mins:3,kind:'know',topics:['3.5.4a','3.5.4b'],match:/skimming|penetration|competitive pricing|cost[- ]plus|life cycle|extension strateg|boston matrix/i,
 cards:[
  {h:'Pricing methods',html:`<ul><li><b>Price skimming</b>: a high price at launch for a new or unique product, lowered later.</li>
   <li><b>Penetration pricing</b>: a low price at launch to win customers and market share, raised later.</li>
   <li><b>Competitive pricing</b>: similar to rivals.</li><li><b>Cost-plus</b>: a percentage added to the cost of making the product.</li><li><b>Promotional pricing</b>: a short-term reduction.</li></ul>`},
  {h:'The product life cycle',html:`<p>Stages: development, introduction, growth, maturity, decline.</p>
   <p><b>Extension strategies</b> try to stop sales falling in maturity: new features, new packaging, new markets, new uses, or a price cut.</p>`}
 ],
 check:{q:'A games company launches a new console at a high price, then lowers it a year later. Which pricing method is this?',options:['Price skimming','Penetration pricing','Cost-plus pricing','Promotional pricing'],answer:0,
  why:'Starting high for a new product and lowering the price later is price skimming.'}},

finance:{short:'sources of finance',title:'Sources of finance',mins:3,kind:'know',topics:['3.6.1a'],match:/source of finance|sources of finance|overdraft|crowdfunding|retained profit|share capital|trade credit/i,
 cards:[
  {h:'Short-term sources',html:`<ul><li><b>Overdraft</b>: the bank lets the account go below zero up to a limit. Flexible, but interest is high.</li>
   <li><b>Trade credit</b>: buy now and pay the supplier later, often 30 to 60 days.</li></ul>`},
  {h:'Long-term sources',html:`<ul><li><b>Owner\'s capital</b> and <b>retained profit</b>: no interest to pay, but may not be enough.</li>
   <li><b>Loan</b>: repaid with interest over a fixed period.</li><li><b>Share capital</b>: selling shares. No repayment, but owners give up some control and pay dividends.</li>
   <li><b>Crowdfunding</b>: many people each invest a small amount online. Can raise awareness, but the idea is public and the target may not be reached.</li></ul>`}
 ],
 check:{q:'Which source of finance does not have to be repaid and does not involve giving up any ownership?',options:['Retained profit','Bank loan','Share capital','Overdraft'],answer:0,
  why:'Retained profit is the business\'s own money. Loans and overdrafts are repaid, and selling shares gives away part of the ownership.'}}

};

/* small scatter picture; y is measured from the top, so a smaller y is higher up */
function sc(pts,label){
  return `<figure class="rf-sc"><svg viewBox="0 0 100 100" role="img" aria-label="${label} correlation"><line x1="6" y1="94" x2="96" y2="94"/><line x1="6" y1="94" x2="6" y2="4"/>${pts.map(([x,y])=>`<circle cx="${x+6}" cy="${y}" r="3"/>`).join('')}</svg><figcaption>${label}</figcaption></figure>`;
}

/* which decks a piece of text is about */
function find(text){const t=String(text||'');return Object.keys(DECKS).filter(k=>DECKS[k].match.test(t));}
function names(ids){const n=ids.map(k=>DECKS[k].short);return n.length>1?n.slice(0,-1).join(', ')+' and '+n[n.length-1]:n[0]||'';}
function link(ids,back){return 'refresher.html?d='+ids.join(',')+(back?'&back='+encodeURIComponent(back):'');}

function css(){
if(!document.getElementById('rf-style')){const st=document.createElement('style');st.id='rf-style';st.textContent=`.rf-ov{position:fixed;inset:0;z-index:9998;background:rgba(10,15,25,.55);display:flex;align-items:center;justify-content:center;padding:16px}
.rf-modal{background:#fff;color:#1a1a1a;max-width:520px;width:100%;max-height:88vh;overflow:auto;border-radius:14px;padding:24px 26px;font:15px/1.55 "IBM Plex Sans",system-ui,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.3)}
.rf-modal h2{font:400 1.5rem "DM Serif Display",Georgia,serif;margin:0 0 10px;color:#0E2A47}.rf-modal p{margin:0 0 12px}
.rf-modal .rf-l{display:block;text-decoration:none;border:1px solid #E5DFD2;border-radius:10px;padding:10px 14px;margin-bottom:8px;color:inherit}
.rf-modal .rf-l b{display:block}.rf-modal .rf-l span{font-size:.85rem;color:#6B6B6B}
.rf-modal .rf-l:hover{border-color:#0E2A47}
.rf-modal .rf-b{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
.rf-modal .rf-b a,.rf-modal .rf-b button{padding:10px 18px;border-radius:9px;font:600 15px "IBM Plex Sans",system-ui,sans-serif;cursor:pointer;text-decoration:none}
.rf-modal .rf-all{background:#0E2A47;color:#fff;border:0}.rf-modal .rf-no{background:transparent;color:inherit;border:1px solid #E5DFD2}
@media (prefers-color-scheme:dark){.rf-modal{background:#172133;color:#e9ecf2}.rf-modal h2{color:#cfe0f5}.rf-modal .rf-l,.rf-modal .rf-no{border-color:rgba(255,255,255,.15)}.rf-modal .rf-l span{color:#9aa4b6}.rf-modal .rf-all{background:#cfe0f5;color:#0e1420}}`;document.head.appendChild(st);}
}

/* pop-up offering refreshers. o = {heading, text, decks:[ids], back, no:'button text', onNo, onAny} */
function ask(o){
  const ids=(o.decks||[]).filter(k=>DECKS[k]).slice(0,4);if(!ids.length)return false;
  css();
  const ov=document.createElement('div');ov.className='rf-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  ov.innerHTML=`<div class="rf-modal"><h2>${e(o.heading||'Do you need a refresher?')}</h2><p>${e(o.text||'')}</p>
    ${ids.map(k=>`<a class="rf-l" href="${e(link([k],o.back))}"><b>${e(DECKS[k].title)}</b><span>About ${DECKS[k].mins} minutes: the rule, a worked example, where you went wrong, and a quick check</span></a>`).join('')}
    <div class="rf-b">${ids.length>1?`<a class="rf-all" href="${e(link(ids,o.back))}">Do all ${ids.length}</a>`:''}<button type="button" class="rf-no">${e(o.no||'No thanks')}</button></div></div>`;
  document.body.appendChild(ov);
  ov.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(o.onAny)o.onAny();}));
  ov.querySelector('.rf-no').onclick=()=>{if(o.onAny)o.onAny();ov.remove();if(o.onNo)o.onNo();};
  try{ov.querySelector('.rf-no').focus({preventScroll:true});}catch(x){}
  return true;
}

const DEFAULT=['pct','rev','be'];   /* used only when the work and the student's gaps match no refresher */
/* ---------- compulsory refresher before set work ----------
   Work a teacher sets (and the weekly question sets) stays locked until the
   student has done a refresher on the top three areas it covers. Which areas:
   ones the questions are about, the student's own weak areas first; if the
   questions match nothing, the student's weak areas; if there are none, the
   course's core calculations. Done refreshers are saved to the student's
   account (key "rfgate") so they follow them between devices. */
const GKEY='rfgate';
const Acc=()=>window.Acct;
function gateDone(id){
  if(!id)return true;
  try{const A=Acc(),m=(A&&A.get&&A.get(GKEY))||{};if(m[id])return true;}catch(e){}
  try{return !!localStorage.getItem('rfgate:'+id);}catch(e){return false;}
}
function markDone(id,ids){
  if(!id)return;
  try{localStorage.setItem('rfgate:'+id,'1');}catch(e){}
  try{const A=Acc();if(A&&A.set&&A.get){const m=Object.assign({},A.get(GKEY)||{});m[id]={t:new Date().toISOString(),d:ids||[]};
    const ks=Object.keys(m).sort((a,b)=>String(m[a].t).localeCompare(String(m[b].t)));while(ks.length>200)delete m[ks.shift()];A.set(GKEY,m);}}catch(e){}
}
try{const A=Acc();if(A&&A.merge)A.merge(GKEY,(a,b)=>Object.assign({},b||{},a||{}));}catch(e){}

function pick(items,gapText){
  const n={};
  (items||[]).forEach(it=>{
    const q=typeof it==='string'?it:[it&&it.q,it&&it.label,it&&it.case].filter(Boolean).join(' ');
    find(q).forEach(k=>{n[k]=(n[k]||0)+1;});
    const tp=it&&it.topic;if(tp)Object.keys(DECKS).forEach(k=>{if((DECKS[k].topics||[]).includes(tp))n[k]=(n[k]||0)+.5;});
  });
  const weak=find(gapText||'');
  let ids=Object.keys(n).sort((a,b)=>(weak.includes(b)?1:0)-(weak.includes(a)?1:0)||n[b]-n[a]);
  if(!ids.length)ids=weak.slice();
  if(!ids.length)ids=DEFAULT.filter(k=>DECKS[k]);
  return ids.slice(0,3);
}

/* o = {id, items, gapText, back, onLeave}. Returns {done:true} if the refresher for this
   work is done; otherwise shows the pop-up and returns {done:false, ids, href, text}. */
function gate(o){
  if(gateDone(o.id))return {done:true};
  const ids=pick(o.items,o.gapText);
  if(!ids.length)return {done:true};
  const href=link(ids,o.back)+'&gate='+encodeURIComponent(o.id);
  const list=ids.map(k=>DECKS[k].title),mins=ids.reduce((s,k)=>s+(DECKS[k].mins||3),0);
  const text=`Your refresher topics are: ${list.length>1?list.slice(0,-1).join(', ')+' and '+list[list.length-1]:list[0]}.`;
  css();
  const e=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const old=document.querySelector('.rf-ov');if(old)old.remove();
  const ov=document.createElement('div');ov.className='rf-ov';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');
  ov.innerHTML=`<div class="rf-modal"><h2>Refresher first</h2><p>Before you start this work, you need to do a short refresher. It takes about ${mins} minutes. When you finish, you come straight back to the questions.</p>
    <p><b>${e(text)}</b></p>
    ${ids.map(k=>`<div class="rf-l"><b>${e(DECKS[k].title)}</b><span>About ${DECKS[k].mins} minutes</span></div>`).join('')}
    <div class="rf-b"><a class="rf-all" href="${e(href)}">Start the refresher</a>${o.onLeave?'<button type="button" class="rf-no">Go back</button>':''}</div></div>`;
  document.body.appendChild(ov);
  const no=ov.querySelector('.rf-no');if(no)no.onclick=()=>{ov.remove();o.onLeave();};
  try{ov.querySelector('.rf-all').focus({preventScroll:true});}catch(x){}
  return {done:false,ids,href,text};
}

window.REFRESH={DECKS,find,link,ask,names,gate,gateDone,markDone,pick};
})();
