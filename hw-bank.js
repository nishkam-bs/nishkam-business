/* =====================================================================
   GCSE Business (8132) homework questions and the case studies they use.
   Written for this site. The businesses and figures are made up.
   The marking labs open a question with ?q=<id>; the weekly plan
   (exam-bank.js) lists which questions are due each week.
   Question ids: <year group>-w<week>-p<paper>-<marks>, e.g. y11-w01-p1-6.
   No student data here.
   ===================================================================== */
window.HW={cases:{

hollin:{id:'hollin',paper:1,title:'Hollin Bakes Ltd',desc:'A Sheffield bakery that supplies cafés and hotels, with rising staff turnover and quality problems.',tags:['Labour turnover','Batch production','Stock control','Motivation'],
ctx:`Hollin Bakes Ltd

Marcus Hollin started Hollin Bakes in 2016 in a small unit in Sheffield. It became a private limited company in 2019. The business makes cakes and traybakes for 140 independent cafés and two hotel chains in Yorkshire.

Hollin Bakes employs 38 people, including 24 bakers. It uses batch production: each day the bakers make a batch of one type of cake, clean the equipment, and then start the next batch. Bakers are paid £12.40 an hour.

Labour turnover
2024: 21% (8 employees left)
2025: 34% (13 employees left)

It costs Hollin Bakes about £2,100 to recruit and train each new baker. In exit interviews, 9 of the 13 employees who left in 2025 said the work was repetitive and that there was no chance to progress.

In 2025, 6% of cakes failed the end-of-day quality check and had to be thrown away. In 2024 the figure was 3%. Two cafés have complained that cakes arrived with the wrong decoration.

Hollin Bakes keeps about three weeks of flour, sugar and butter in its storeroom. The storeroom is full, and in 2025 £4,800 of butter and cream went out of date. A local supplier has offered to deliver every morning, which would allow Hollin Bakes to use just-in-time (JIT) stock control. The supplier's prices are about 8% higher than Hollin Bakes pays now.

Marcus is considering two options to reduce labour turnover:
1. Paying each baker a bonus of £60 a month when the bakery meets its quality targets. This would cost £17,280 a year.
2. Introducing job rotation, so bakers move between making, decorating and packing, and sending eight bakers on an off-the-job course at a local college, one day a fortnight for a year. The course leads to a Level 3 baking qualification and would cost £12,000 in total.`},

trailhead:{id:'trailhead',paper:2,title:'Trailhead Ltd',desc:'An online outdoor clothing brand in Kendal deciding how to price a new jacket and where to sell.',tags:['Profit margins','Pricing','Break-even','Distribution'],
ctx:`Trailhead Ltd

Asha Patel and Tom Reid started Trailhead in Kendal in 2019. It sells waterproof jackets, fleeces and walking trousers through its own website and Instagram. Its target market is walkers aged 25 to 45. It became a private limited company in 2022.

Income statement (year ending 31 December)
                         2024        2025
Revenue                  £720,000    £840,000
Cost of sales            £396,000    £462,000
Gross profit             £324,000    £378,000
Other expenses           £244,800    £294,000
Net profit               £79,200     £84,000

Trailhead is about to launch a new jacket, the Ridgeline. Each jacket costs £54 to make (variable cost). The fixed costs of the launch, including design and advertising, are £48,000.

Asha wants to sell the Ridgeline at £180. Tom thinks it should be £120. In a survey of 600 Trailhead customers, 18% said they would buy the Ridgeline at £180 and 41% said they would buy it at £120. Similar jackets from large brands sell for between £90 and £220.

Trailhead wants to increase its sales. It is choosing between two options:
1. Opening its first shop, in Ambleside in the Lake District. Rent would be £36,000 a year and staff would cost £44,000 a year. Asha expects the shop to bring in £150,000 of extra revenue a year.
2. Selling its products on a large online marketplace. The marketplace takes a fee of 15% of every sale. Tom expects this to bring in £200,000 of extra revenue a year. Customers on the marketplace can compare Trailhead's prices with many other brands.

Trailhead's gross profit margin on its products is 45%.`}

},qs:[
/* Year 11, week 1 */
{id:'y11-w01-p1-6',week:1,grp:'Y11',paper:1,marks:6,caseId:'hollin',quant:false,q:'Analyse two ways in which the rise in labour turnover could affect Hollin Bakes Ltd.'},
{id:'y11-w01-p1-9',week:1,grp:'Y11',paper:1,marks:9,caseId:'hollin',quant:false,q:'Recommend whether Hollin Bakes Ltd should change to just-in-time (JIT) stock control. Give reasons for your answer.'},
{id:'y11-w01-p1-12',week:1,grp:'Y11',paper:1,marks:12,caseId:'hollin',quant:true,q:'Marcus is considering two options to reduce labour turnover:\n1. Paying each baker a monthly bonus when quality targets are met.\n2. Introducing job rotation and off-the-job training.\nAnalyse the effect of each of these two options on Hollin Bakes Ltd.\nEvaluate which of these two options will have the bigger impact on reducing labour turnover at Hollin Bakes Ltd.'},
{id:'y11-w01-p2-6',week:1,grp:'Y11',paper:2,marks:6,caseId:'trailhead',quant:true,q:'Analyse two ways in which the change in Trailhead Ltd’s net profit margin between 2024 and 2025 could affect the business.'},
{id:'y11-w01-p2-9',week:1,grp:'Y11',paper:2,marks:9,caseId:'trailhead',quant:true,q:'Recommend whether Trailhead Ltd should sell the Ridgeline jacket at £180 or at £120. Use the break-even output at each price to support your answer.'},
{id:'y11-w01-p2-12',week:1,grp:'Y11',paper:2,marks:12,caseId:'trailhead',quant:true,q:'Trailhead Ltd is choosing between two options to increase its sales:\n1. Opening a shop in Ambleside.\n2. Selling its products on a large online marketplace.\nAnalyse the effect of each of these two options on Trailhead Ltd.\nEvaluate which of these two options will have the bigger impact on Trailhead Ltd’s profit.'}
]};
