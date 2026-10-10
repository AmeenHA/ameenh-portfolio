(function () {
  var T = function (s) { return '<span class="todo">TODO: ' + s + '</span>'; };
  var TB = function (todo, body) { return '<div class="todo-block"><span class="todo">TODO: ' + todo + '</span>' + (body ? '<p>' + body + '</p>' : '') + '</div>'; };
  var VIS = function (s) { return '<div class="visual-ph" role="note">TODO (visual): ' + s + '</div>'; };
  var ARR = '<span class="arr" data-icon="arrow-right" data-size="16"></span>';
  var steps = function (list) {
    return '<div class="steps">' + list.map(function (s, i) {
      return '<div class="ah-step"><span class="ah-step__num">' + String(i + 1).padStart(2, '0') + '</span><p class="ah-step__title">' + s[0] + '</p><p class="ah-step__sub">' + s[1] + '</p></div>';
    }).join('') + '</div>';
  };

  var WORK = [
    {
      id: 'bobabud', tile: 'violet', co: 'BobaBud', role: 'Marketing & Operations Lead', dates: 'Nov 2024–Present', title: 'BobaBud Case Study',
      head: 'Took a boba tea machine from idea to beta, with zero marketing budget',
      line: 'Built marketing, revenue ops and compliance from scratch at a pre-launch hardware startup.',
      big: ['23%', 'waitlist conversion'],
      metrics: [['23%', 'waitlist conversion (up from 16%)'], ['11%', 'beta close rate']],
      tools: ['Framer', 'MailerLite', 'Apollo', 'Google Analytics'],
      results: [
        { v: '23%', l: 'waitlist conversion (up from 16%)' },
        { v: '11%', l: 'beta close rate' },
        { v: '17', l: 'A/B tests' },
        { v: '3,200+', l: 'website visitors' }
      ],
      problem: '<p>BobaBud is a fully automated bubble tea machine, one of the first in Canada. When I joined, it was a working prototype with no customers, no pricing and no regulatory sign-off. The founding engineer built the machine; I built everything needed to sell it.</p>',
      did: [
        { h: 'Built an outbound funnel with no budget', html:
          '<p>BobaBud is B2B, and I was the only marketer. I built an outbound funnel in four stages:</p>' +
          '<div class="funnel" aria-label="Funnel stages"><span class="step">Email</span>' + ARR + '<span class="step">Booked call or waitlist</span>' + ARR + '<span class="step">Product showcase</span>' + ARR + '<span class="step">Close</span></div>' +
          '<p>I ran 17 A/B tests on emails and landing pages in the first two stages and automated the follow-ups. Waitlist conversion rose from 16% to 23%, a 44% lift.</p>' },
        { h: 'Designed the revenue model', html:
          '<p>Before we could close anyone, we had to answer three questions: how do we share revenue, who services the machine, and what does a drink cost us?</p>' +
          '<ul><li><strong>Revenue model:</strong> an 80/20 revenue share with location partners (80% to BobaBud).</li>' +
          '<li><strong>Servicing:</strong> we restock and maintain machines ourselves at first, then outsource once demand is predictable.</li>' +
          '<li><strong>Pricing:</strong> I collected quotes from 12 boba suppliers and priced drinks for at least a 70% gross margin.</li></ul>' },
        { h: 'Cleared compliance', html:
          '<p>I researched federal, provincial and municipal rules for electrical safety, food safety (including HACCP) and payment data security, then turned them into requirements the engineering team built into the machine.</p>' }
      ],
      learned: '<p class="learned">' + "Building every function at once taught me how pricing, compliance and messaging constrain each other. The 70% margin target decided which locations we could pitch, and that decided which emails I tested." + '</p>',
      allTools: ['Framer', 'Figma', 'MailerLite', 'Apollo', 'Google Analytics', 'MS Clarity']
    },
    {
      id: 'turbotax', tile: 'sky', co: 'Intuit', role: 'Lifecycle Marketing Co-op', dates: 'May–Aug 2023', title: 'TurboTax Case Study', nextName: 'TurboTax',
      head: 'Boosted TurboTax filings 12% with a 9-segment win-back journey',
      line: 'Redesigned the email and in-app journey that brings lapsed filers back, with Gen Z as the priority.',
      big: ['+12%', 'TurboTax filings'],
      metrics: [['+12%', 'filings'], ['+18%', 'CTR'], ['87%', 'Gen Z retention']],
      tools: ['Twilio Segment', 'Figma', 'Adobe Workfront', 'Miro'],
      results: [
        { v: '+12%', l: 'filings' },
        { v: '+18%', l: 'click-through rate' },
        { v: '87%', l: 'Gen Z retention (highest of any segment)' },
        { v: '81%', l: 'average retention of filers from the previous year' }
      ],
      problem: '<p>TurboTax leads Canadian tax software, but its core users skew millennial and older. Newer tools like Wealthsimple Tax were winning younger filers, and the existing win-back emails were the same for everyone.</p>',
      did: [
        { h: 'Split the base into 9 segments', html:
          '<p>Using Twilio Segment, I grouped lapsed and returning filers by age, time since last login, location and product tier (DIY, Assist, Full Service). Each segment changed what a message said and how it said it: imagery, tone, call to action and notification title.</p>' },
        { h: 'Mapped a 13-touchpoint journey across email and in-app', html:
          '<p>I mapped the full path from "tax season is open" to "return filed" and beyond, including branches for people who stall or abandon halfway. Each touchpoint carried about 3 personalized elements, so a filer saw up to 39 details tailored to their segment.</p>' +
          VIS('journey map. Make it readable at full width or split it into stages.') },
        { h: 'Coordinated 2 agencies and 3 internal teams', html:
          '<p>I owned the journey design and project-managed every hand-off between Superside, our brand, UI and data teams, and Publicis. Personalizing each touchpoint this finely meant a lot of branching logic, so each team needed the previous one\'s work locked in first. We drafted 52 variations (4 per touchpoint), picked 1 winner each, and shipped all 13 on time.</p>' }
      ],
      learned: '<p class="learned">' + "Personalization paid off most for the group we were most worried about. Gen Z had the highest retention of any segment at 87%, which suggests newer filers respond to being spoken to directly, not just reminded." + '</p>',
      allTools: ['Twilio Segment', 'LucidChart', 'Figma', 'Adobe Workfront', 'Miro']
    },
    {
      id: 'hellofresh', tile: 'moss', co: 'HelloFresh', role: 'Growth Marketing Specialist Co-op', dates: 'Sep 2022–Apr 2023', title: 'HelloFresh Case Study',
      head: 'Lifted direct mail conversion 39% across 15M+ pieces of mail',
      line: "Ran HelloFresh Canada's largest conversion channel on my own after my manager left, testing every month.",
      big: ['+39%', 'direct mail conversion'],
      metrics: [['0.18% → 0.25%', 'conversion'], ['34k+', 'conversions'], ['97%', 'forecast accuracy']],
      tools: ['SQL', 'Tableau', 'Apps Script', 'Google Analytics'],
      results: [
        { v: '0.18% → 0.25%', l: 'conversion rate' },
        { v: '34k+', l: 'conversions' },
        { v: '40+', l: 'A/B tests' },
        { v: '97%', l: 'forecast accuracy, 7 days after launch' }
      ],
      problem: "<p>HelloFresh boomed during lockdown. Afterwards, conversion rates were falling and competitors were moving in. Direct mail was the company's biggest conversion channel in Canada, and two months into my contract my manager left. I ran the channel on my own from then on.</p>",
      did: [
        { h: 'Built a monthly test-and-learn cycle', html:
          '<p>I set up a Plan-Do-Check-Act loop:</p>' +
          steps([['Plan', 'Decide tests, volumes, regions and goals.'], ['Do', 'Ship creative to printers, set up landing pages and tracking, filter target postal codes.'], ['Check', 'Build dashboards and report on each hypothesis.'], ['Act', "Feed the winners into next month's tests."]]) },
        { h: 'Ran 40+ A/B tests across creative, audience and offer', html:
          '<p>A few examples:</p><ul><li>$130 off vs. 7 free meals</li><li>Regular discount vs. free tote bag</li><li>11 free meals over 5 boxes vs. over 6 boxes</li><li>Postcard codes vs. scratch-off voucher codes</li><li>Simple code (DEC2022) vs. random code (3XV 8B5)</li><li>Sustainability messaging in BC vs. Ontario</li></ul>' },
        { h: 'Targeted the right postal codes', html:
          "<p>I ranked all 68 Environics customer segments by conversion rate and lifetime value, then mapped a segment to each of Canada Post's 800k postal codes. That let us stop mailing segments that didn't pay back.</p>" },
        { h: 'Forecast results in a week', html:
          '<p>Using 3 years of conversion data, I built a model that predicted 30-, 60- and 90-day conversions with 97% accuracy just 7 days after a campaign launched.</p>' },
        { h: 'Found where discount customers dropped off', html:
          '<p>I used SQL to pinpoint after how many boxes customers cancelled. Those findings shaped new discount structures to test.</p>' },
        { h: 'Automated the busywork', html:
          '<p>Apps Script and SQL workflows refreshed dashboards, pulled data and updated landing pages, saving the team 20+ hours.</p>' }
      ],
      learned: '<p class="learned">' + "A 7-day forecast changed how fast we could act. Instead of waiting 90 days to judge a campaign, we could shift next month's volume based on the first week." + '</p>',
      allTools: ['SQL', 'Tableau', 'Apps Script', 'Google Analytics', 'Contentful', 'Asana']
    },
    {
      id: 'ricoh', tile: 'rose', co: 'Ricoh', role: 'Product Marketing Specialist Co-op', dates: 'May–Aug 2022', title: 'Ricoh Case Study',
      head: 'Doubled inbound lead qualification with persona-built sales content',
      line: 'Built 29 sales enablement and product marketing assets across all three stages of the inbound flywheel.',
      big: ['11%', 'qualified, up from 5%'],
      metrics: [['5% → 11%', 'qualification rate'], ['+21%', 'lead capture'], ['1-in-20 → 1-in-5', 'client testimonials']],
      tools: ['PowerPoint', 'Publisher', 'Wrike'],
      results: [
        { v: '5% → 11%', l: 'qualification rate' },
        { v: '+21%', l: 'inbound lead capture' },
        { v: '1-in-20 → 1-in-5', l: 'clients willing to give a testimonial, referral or case study' },
        { v: '29', l: 'assets shipped' }
      ],
      problem: '<p>Ricoh sells a huge range of products, but had little sales content to explain them. Marketing made collateral only when a prospect asked for it, so responses were slow, deals stalled and customers had little help after onboarding.</p>',
      did: [
        { h: 'Mapped content to each stage of the inbound flywheel', html:
          steps([['Attract', 'Blogs, product brochures, case studies'], ['Engage', 'Competitor analyses, battle cards, product sheets, product decks, persona cards'], ['Delight', 'Use-case guides, onboarding manuals']]) },
        { h: 'Tailored it by persona and industry', html:
          "<p>I worked with product managers and product marketers across 5 portfolios (cybersecurity, office hardware, IT and cloud, and more) to tailor each piece to the buyer's industry and pain points. Every piece went through 3 rounds of approval. I also taught myself enough design to produce them.</p>" +
          '<p><strong>Shipped:</strong> 5 product decks · 3 competitive analyses · 5 use-case guides · 4 onboarding manuals · and more (29 in total)</p>' }
      ],
      learned: '<p class="learned">Qualification more than doubled once prospects had clear, specific product information. Leads weren\'t the bottleneck; understanding was. Content has to show exactly how a product solves the buyer\'s problem, not just claim it "improves productivity."</p>',
      allTools: ['PowerPoint', 'Publisher', 'Wrike', 'MS Teams']
    },
    {
      id: 'explorerhop', tile: 'lilac', co: 'ExplorerHop', role: 'Go-to-Market Strategist Co-op', dates: 'Sep 2021–Apr 2022', title: 'ExplorerHop Case Study',
      head: 'Hit 103% of enrollment target using email alone',
      line: 'Replaced one-size-fits-all newsletters with segmented, persona-based campaigns for 18 education programs.',
      big: ['103%', 'of enrollment target'],
      metrics: [['103%', 'of enrollment target'], ['+23%', 'conversions'], ['4', 'private schools closed']],
      tools: ['HubSpot', 'Canva', 'Excel'],
      results: [
        { v: '103%', l: 'of enrollment target' },
        { v: '+23%', l: 'conversions' },
        { v: '4', l: 'private schools closed' },
        { v: '32', l: 'A/B tests' }
      ],
      problem: '<p>ExplorerHop licenses financial literacy and skills programs to Canadian schools, with some programs sold directly to families. Its catalog was growing, but marketing was one generic newsletter to past customers and one generic cold email to scraped school contacts. The budget was close to zero, so email was my only channel.</p>',
      did: [
        { h: 'Won back past customers with their own purchase history', html:
          '<p>I segmented 3 years of purchase data by behavior, then recommended programs that complemented what each school had already bought, at the right grade level (Levels 1–3 for elementary, 4–6 for high school).</p>' },
        { h: 'Matched new prospects to the right program', html:
          '<p>I built personas so each school contact got the relevant program. For example, economics and accounting department heads got financial literacy. 18 programs across 3 product lines, each with its own targeting.</p>' },
        { h: 'Tested every part of the email', html:
          '<p>Subject lines, body copy, calls to action and send times. Then I built decks and brochures for each program so sales had what they needed for demos.</p>' }
      ],
      learned: '<p class="learned">' + "With no budget, the best asset we had was data we already owned. Three years of purchase history did more for conversions than any new channel could have." + '</p>',
      allTools: ['HubSpot', 'Canva', 'Excel', 'Calendly']
    },
    {
      id: 'rippel', tile: 'aqua', co: 'Rippel', role: 'Marketing Research Specialist Co-op', dates: 'May–Aug 2021', title: 'Rippel Case Study',
      head: 'Validated a civic tech app with 61 interviews, then built a 4,000-person waitlist',
      line: 'Interviewed MPs, advocates and citizens to sharpen positioning, then turned those relationships into launch momentum.',
      big: ['4,000+', 'waitlist signups'],
      metrics: [['61', 'interviews'], ['6', 'MP endorsements'], ['4,000+', 'waitlist signups']],
      tools: ['Excel', 'PowerPoint', 'Brevo', 'Canva'],
      results: [
        { v: '61', l: 'validation interviews' },
        { v: '6', l: 'MP endorsements' },
        { v: '5', l: 'campus ambassador programs' },
        { v: '4,000+', l: 'waitlist signups' }
      ],
      problem: '<p>Rippel was a pre-launch app meant to connect Canadians directly with their elected representatives, without the noise of general social media. The team was the founder, one developer and me. My job: check that the product solved real problems before launch, then build launch momentum.</p>',
      did: [
        { h: 'Defined who to talk to', html:
          '<p>Two groups:</p><ul><li><strong>Lawmakers:</strong> MPs, MLAs/MPPs, councillors</li><li><strong>Citizens and civic actors:</strong> student trustees, researchers, advocates, social entrepreneurs, donors</li></ul>' },
        { h: 'Ran 61 validation interviews', html:
          '<p class="sublabel">From lawmakers</p><ul><li>They want fewer barriers between citizens and representatives.</li><li>They want higher voter turnout.</li><li>Some worried the app would create expectations of a reply to every message, which wouldn\'t scale.</li></ul>' +
          '<p class="sublabel">From citizens</p><ul><li>2 in 5 actively look for political information, but find TV, news apps and web searches too slow.</li><li>38% don\'t vote, mostly because they feel uninformed or think their vote won\'t matter.</li><li>Voter turnout has fallen from 80% to 60%.</li><li>Raising an issue today (protests, calls, emails, social posts) feels slow and gets lost in the noise.</li></ul>' },
        { h: 'Turned interviews into launch momentum', html:
          '<p>I reused the relationships from the interviews to drive traffic to one waitlist:</p><ul><li><strong>Endorsements:</strong> 6 MPs publicly endorsed the app, and their referrals led to more.</li><li><strong>Beta partners:</strong> 8 local organizations committed to joining early.</li><li><strong>Campus ambassadors:</strong> student reps at 5 universities.</li></ul>' }
      ],
      learned: '<p class="learned">' + "Interviews surfaced a risk no internal brainstorm would have. Lawmakers worried the app would set expectations of a reply to every message, which threatened the product's core promise." + '</p>',
      allTools: ['Excel', 'PowerPoint', 'Brevo', 'Canva']
    },
    {
      id: 'gofleet', tile: 'mint', co: 'GoFleet', role: 'Demand Generation Specialist Co-op', dates: 'Sep–Dec 2020', title: 'GoFleet Case Study',
      head: 'Nearly tripled lead qualification by slowing the sales cycle down',
      line: 'Rebuilt a cold-call-only process into a 5-stage nurture funnel for B2B fleet telematics.',
      big: ['2.9x', 'lead qualification'],
      metrics: [['0.8% → 2.3%', 'qualified (2.9x)'], ['$50k', 'pipeline'], ['16', 'prospects at quote stage']],
      tools: ['ZoomInfo', 'Zoho CRM', 'Zoho Campaigns'],
      results: [
        { v: '0.8% → 2.3%', l: 'of leads qualified to quote stage (2.9x)' },
        { v: '$50k', l: 'sales pipeline' },
        { v: '16', l: 'prospects at quote stage' },
        { v: '24', l: 'A/B tests' }
      ],
      problem: '<p>GoFleet sells GPS tracking and telematics to companies with vehicle fleets. Sales relied only on cold calls and tried to close in about 4 weeks. For a product that is expensive to switch to, that rushed buyers before they were convinced.</p>',
      did: [
        { h: 'Extended the funnel from 3 stages to 5', html:
          '<p>I replaced the cold call with a LinkedIn lead-gen offer and a warm email or call to learn each prospect\'s pains, then tailored the demo to them. That added two stages and lengthened the sales cycle to 7 weeks. For each stage I built the supporting material: pain-discovery questionnaires, messaging by industry (trucking, courier, food and beverage), buyer personas (fleet, procurement and asset managers), battle cards and product sheets.</p>' },
        { h: 'Tested messaging, audience and timing', html:
          '<p>I ran 24 A/B tests, each changing one variable: which pain point or feature to lead with, which persona or industry to target, and what time and day to reach out. The results gave us a ranked list of pain points for each persona and industry.</p>' }
      ],
      learned: '<p class="learned">A longer sales cycle sounds like a step backwards, but for a high-switching-cost product it nearly tripled qualification. Buyers needed time to get comfortable, not more pressure.</p>',
      allTools: ['ZoomInfo', 'Zoho CRM', 'Zoho Campaigns', 'Excel']
    }
  ];

  var PROJECTS = [
    {
      id: 'family-app', tint: 'lilac-tint', name: 'Family Ecosystem App', tag: 'UI Design', tags: ['UI Design', 'Concept'], title: 'Family Ecosystem App',
      oneLiner: "One calm app for a family's screen time, locations, tasks and calendar",
      head: 'A family operating system for time, location, tasks and calendars',
      line: 'A mobile concept that brings parental controls, shared routines and everyday coordination into one calm interface.',
      art: 'phone',
      sections: [
        { h: 'Why I designed it', html: '<p>' + "Families juggle a screen-time app, a location app, a chore chart and a shared calendar, and none of them talk to each other. I wanted to see what one calm app could look like if it brought all four together, with controls parents trust and a version kids don't resent opening." + '</p>' },
        { h: 'Two user flows', html: '<p>Parents and kids get separate flows. Parents have admin controls; kids see the same features with less control.</p>' + VIS('user flow diagram') },
        { h: 'Main features', html: '<ul><li><strong>Screen time:</strong> app limits, category breakdowns and usage trends per child.</li><li><strong>Location:</strong> where family members are, without heavy surveillance.</li><li><strong>Tasks:</strong> routines as shared agreements, with status and a visible sense of completion.</li><li><strong>Calendar:</strong> everyone\'s commitments on one daily schedule.</li></ul>' },
        { h: 'Competitive research', html: '<p>I compared 7 apps on rating, downloads, pricing and features, and weighed what insight parents want against the privacy and autonomy kids want.</p>' +
          '<div class="table-wrap"><table><thead><tr><th>App</th><th>Rating</th><th>Downloads</th><th>Pricing</th><th>Key features</th></tr></thead><tbody>' +
          [['KahfGuard', '4.9', '1M+', '$48/yr (1 device) · $120/yr (unlimited)', 'App/screen control'],
           ['Qustodio', '3.4', '5M+', '$86/yr (Basic) · $160/yr (Complete)', 'App/screen control, location, call/SMS monitoring'],
           ['FamilyWall', '4.7', '5M+', 'Free tier · $50/yr Premium', 'Calendar, meal planner, budget, location, lists, storage'],
           ['Cozi', '4.6', '5M+', 'Free tier · $50/yr Premium', 'Calendar, lists, recipes'],
           ['Kids360', '4.4', '10M+', '$35–70/yr (feature-based)', 'App/screen control, internet safety, location, tasks, alerts'],
           ['Kidsee', '4.5', '100k+', '$30/yr', 'Location, app/screen/web control'],
           ['Nori', '4.6', '100k+', 'Free tier · $60/yr Plus', 'Calendar, tasks, lists, recipes']].map(function (r) {
            return '<tr><td><strong>' + r[0] + '</strong></td><td class="num">' + r[1] + '</td><td class="num">' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td></tr>';
          }).join('') + '</tbody></table></div>' },
        { h: 'What I learned', html: '<p class="learned">' + "The hardest design problem was trust, not features. Every screen had to balance what parents want to see against the privacy kids want, especially location." + '</p>' },
      ],
      allTools: ['Figma', 'Google Stitch', 'Claude Design']
    },
    {
      id: 'habit-app', tint: 'moss-tint', name: 'Habit Building App', tag: 'UI Design', tags: ['UI Design', 'Concept'], title: 'Habit Building App',
      oneLiner: 'A habit tracker built around 1-tap logging and better stats',
      head: 'A habit tracker built around 1-tap logging and better stats',
      line: 'I designed this for myself. No app I tried offered the detail or the charts I wanted.',
      art: 'dots',
      sections: [
        { h: 'Design principles', html: '<ul><li><strong>Log in 1–2 taps.</strong> Marking a habit done takes 2 taps from the home screen, or 1 from the widget. </li>' +
          '<li><strong>Toggles, not menus.</strong> Switching tabs, views, habits and timeframes uses toggles, so there are no dropdowns to dig through.</li>' +
          '<li><strong>Stats you can read at a glance.</strong> Dot grids, bar and line charts, and calendar heat maps show progress in detail without overwhelming.</li></ul>' },
        { h: 'Main features', html: '<ul><li><strong>Habits:</strong> switch between daily, weekly and monthly views.</li><li><strong>Stats:</strong> every habit\'s history in one place, broken down by habit and timeframe.</li></ul>' },
        { h: "What I'd do next", html: '<p>' + "Test the widget flow with 5 people to see whether one-tap logging holds up outside my own habits, then add optional reminders." + '</p>' }
      ],
      allTools: ['Figma', 'Google Stitch']
    },
    {
      id: 'kalima-clash', tint: 'clay-tint', name: 'Kalima Clash', tag: 'Branding & Packaging', tags: ['Branding & Packaging'], title: 'Kalima Clash',
      oneLiner: 'A Taboo-style word game for Arabic-speaking audiences',
      head: 'Kalima Clash: a Taboo-style word game for Arabic-speaking audiences',
      line: 'I created the brand identity and packaging for a card game, from first concepts to a print-ready box.',
      art: 'box',
      sections: [
        { h: 'What I did', html: '<ul><li><strong>Branding:</strong> a brand identity and design guide rooted in traditional Arabic design.</li><li><strong>Graphic design:</strong> packaging built from that design system.</li><li><strong>Packaging:</strong> converted the designs into 3D dielines to the print manufacturer\'s specs.</li></ul>' },
        { h: 'How the design evolved', html: steps([['Round 1', 'Explored several directions, from sleek and modern to young and playful.'], ['Round 2', 'Narrowed to a sleek, minimal look with traditional touches, like Arabic geometric patterns.'], ['Final', "Rendered the 3D packaging to the manufacturer's dimensions and sent it to production."]]) },

      ],
      allTools: ['Figma', 'Claude Design']
    }
  ];

  var ART = {
    phone: '<svg viewBox="0 0 320 200" aria-hidden="true"><rect x="110" y="8" width="100" height="184" rx="16" style="fill:var(--surface)"/><rect x="122" y="26" width="48" height="8" rx="4" style="fill:var(--control)"/><rect x="122" y="44" width="76" height="40" rx="8" style="fill:var(--lilac)"/><rect x="122" y="92" width="36" height="36" rx="8" style="fill:var(--sun)"/><rect x="162" y="92" width="36" height="36" rx="8" style="fill:var(--moss)"/><rect x="122" y="136" width="76" height="12" rx="6" style="fill:var(--control)"/><rect x="122" y="154" width="56" height="12" rx="6" style="fill:var(--control)"/></svg>',
    dots: (function () { var s = '<svg viewBox="0 0 320 200" aria-hidden="true"><rect x="40" y="20" width="240" height="160" rx="14" style="fill:var(--surface)"/>'; var on = [1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0]; for (var r = 0; r < 4; r++) for (var c = 0; c < 7; c++) { var v = on[r * 7 + c]; s += '<circle cx="' + (76 + c * 28) + '" cy="' + (58 + r * 28) + '" r="9" style="fill:' + (v ? 'var(--moss)' : 'var(--control)') + '"/>'; } return s + '</svg>'; })(),
    box: '<svg viewBox="0 0 320 200" aria-hidden="true"><path d="M160 30 250 66 160 102 70 66z" style="fill:var(--sun)"/><path d="M70 66 160 102 160 178 70 142z" style="fill:var(--clay)"/><path d="M250 66 160 102 160 178 250 142z" style="fill:var(--surface)"/><path d="M160 54 196 66 160 80 124 66z" style="fill:var(--sun-tint)"/></svg>'
  };

  var esc = function (s) { return s; };
  var ICONS = /*TOOL_ICONS_JSON*/{};
  var TOOL_MAP = { 'Framer': 'framer', 'Figma': 'figma', 'Google Analytics': 'googleanalytics', 'Twilio Segment': 'twilio', 'Adobe Workfront': 'adobe', 'Miro': 'miro', 'LucidChart': 'lucid', 'Tableau': 'tableau', 'Apps Script': 'googleappsscript', 'Contentful': 'contentful', 'Asana': 'asana', 'Canva': 'canva', 'Calendly': 'calendly', 'Zoho CRM': 'zoho', 'Zoho Campaigns': 'zoho', 'Claude Design': 'claude', 'Google Stitch': 'google', 'HubSpot': 'hubspot' };
  var MONO = { 'MailerLite': 'ML', 'Apollo': 'Ap', 'MS Clarity': 'Cl', 'PowerPoint': 'P', 'Publisher': 'Pb', 'Wrike': 'W', 'MS Teams': 'T', 'Excel': 'X', 'Omnisend': 'O', 'ZoomInfo': 'Zi' };
  var LOGOS = /*LOGOS_JSON*/{};
  var BRAND = /*BRAND_JSON*/{};
/*VIZ_JS*/
  var IMG = { 'MailerLite': ['mailerlite', 1], 'Apollo': ['apollo', 1], 'ZoomInfo': ['zoominfo', 1], 'PowerPoint': ['powerpoint', 0], 'Excel': ['excel', 0], 'Wrike': ['wrike', 1], 'Publisher': ['publisher', 0], 'Brevo': ['brevo', 1], 'MS Teams': ['teams', 0], 'MS Clarity': ['clarity', 0] };
  var toolMark = function (name) {
    var k = TOOL_MAP[name], ic = k && ICONS[k];
    if (ic) return '<span class="tl tl--' + k + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ic.p + '" fill="#' + (k === 'mailchimp' ? '241C15' : ic.h) + '"/></svg></span>';
    var img = IMG[name];
    if (img) return '<span class="tl tl--img' + (img[1] ? ' tl--bleed' : '') + '"><img src="' + LOGOS[img[0]] + '" alt=""></span>';
    if (name === 'SQL') return '<span class="tl"><svg viewBox="0 0 24 24" fill="none" stroke="#336791" stroke-width="2" stroke-linecap="round" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v13c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-13M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/></svg></span>';
    return '<span class="tl tl--mono" aria-hidden="true">' + (MONO[name] || name.slice(0, 2)) + '</span>';
  };
  var tags = function (list) { return '<div class="ah-tags">' + list.map(function (t) { return t.indexOf('class="todo"') > -1 ? t : '<span class="ah-tag ah-tag--tool">' + toolMark(t) + t + '</span>'; }).join('') + '</div>'; };

  var SVG = function (p) { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>'; };
  var MOON = '<span class="ic-moon">' + SVG('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>') + '</span>';
  var SUN = '<span class="ic-sun">' + SVG('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>') + '</span>';
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function isDark() {
    var t = document.documentElement.getAttribute('data-theme');
    return t ? t === 'dark' : !!(mq && mq.matches);
  }
  function syncToggles() {
    var d = isDark();
    document.querySelectorAll('.theme-toggle').forEach(function (b) {
      b.setAttribute('aria-pressed', String(d));
      b.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode');
      b.title = d ? 'Light mode' : 'Dark mode';
    });
  }
  try { var saved = localStorage.getItem('ah-theme'); if (saved === 'dark' || saved === 'light') document.documentElement.setAttribute('data-theme', saved); } catch (e) {}
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.theme-toggle');
    if (!b) return;
    var next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('ah-theme', next); } catch (err) {}
    syncToggles();
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', syncToggles);

  var header = function (current) {
    var nav = [['home', 'Home'], ['work', 'Work'], ['projects', 'Projects'], ['contact', 'Contact']];
    return '<header class="ah-header">' +
      '<div class="ah-header__clock" data-clock="America/Toronto"><span>Eastern Time</span></div>' +
      '<nav class="ah-nav" aria-label="Main">' + nav.map(function (n) { return '<a href="#' + n[0] + '"' + (n[0] === current ? ' aria-current="page"' : '') + '>' + n[1] + '</a>'; }).join('') + '</nav>' +
      '<div class="ah-header__social"><a class="ah-icon-btn ah-icon-btn--raised" href="https://www.linkedin.com/in/ameenha/" target="_blank" rel="noopener" aria-label="LinkedIn"><span class="ah-mono">in</span></a>' +
      '<a class="ah-icon-btn ah-icon-btn--raised" href="#contact" aria-label="Email"><span data-icon="mail"></span></a>' +
      '<button class="ah-icon-btn ah-icon-btn--raised theme-toggle" type="button" aria-label="' + (isDark() ? 'Switch to light mode' : 'Switch to dark mode') + '" aria-pressed="' + isDark() + '">' + MOON + SUN + '</button></div>' +
      '</header>';
  };

  function workCard(w) {
    return '<a class="work" href="#' + w.id + '" aria-label="' + w.co + ' case study: ' + w.head + '">' +
      '<div class="work__tile tile-' + w.tile + '"><div><div class="work__co">' + w.co + '</div><div class="work__dates">' + w.dates + '</div></div>' +
      '<div class="work__big">' + w.big[0] + '<small>' + w.big[1] + '</small></div></div>' +
      '<div class="work__body"><p class="work__role">' + w.role + '</p>' +
      '<h3 class="work__head">' + w.head + '</h3><p class="work__line">' + w.line + '</p>' +
      '<ul class="work__metrics">' + w.metrics.map(function (m) { return '<li><b>' + m[0] + '</b> ' + m[1] + '</li>'; }).join('') + '</ul>' +
      tags(w.tools) + '</div>' +
      '<span class="ah-icon-btn" data-icon="arrow-right" aria-hidden="true"></span></a>';
  }
  function projCard(p) {
    return '<a class="ah-project" href="#' + p.id + '" aria-label="' + p.name + ' project">' +
      '<div class="ah-project__media ah-fill-' + p.tint + '" role="img" aria-label="Illustration for ' + p.name + '">' + ART[p.art] + '</div>' +
      '<div class="ah-project__body"><p class="ah-project__eyebrow">' + p.tag + '</p>' +
      '<div class="ah-project__head"><span class="ah-project__title">' + p.name + '</span></div>' +
      '<p class="ah-project__desc">' + p.oneLiner + '</p>' +
      '<div class="ah-project__foot"><span></span><span class="ah-icon-btn" data-icon="arrow-up-right" aria-hidden="true"></span></div></div></a>';
  }

  // Add a certification: { name, issuer, logo: an ISSUERS key, status: 'complete' | 'progress' }
  var ISSUERS = { hubspot: { name: 'HubSpot Academy', icon: 'hubspot' } };
  var CERTS = [
    { name: 'Inbound Marketing', issuer: 'hubspot', status: 'complete' },
    { name: 'Inbound', issuer: 'hubspot', status: 'complete' },
    { name: 'Digital Marketing', issuer: 'hubspot', status: 'complete' },
    { name: 'Inbound Optimization', issuer: 'hubspot', status: 'progress' }
  ];
  function certTile(c) {
    var is = ISSUERS[c.issuer], ic = ICONS[is.icon];
    var logo = ic ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + ic.p + '" fill="#' + ic.h + '"/></svg>' : '<span class="ah-mono">' + is.name.slice(0, 2) + '</span>';
    var done = c.status === 'complete';
    return '<div class="cert"><span class="cert__logo">' + logo + '</span>' +
      '<div class="cert__text"><p class="cert__name">' + c.name + '</p><p class="cert__issuer">' + is.name + '</p></div>' +
      '<span class="cert__status cert__status--' + (done ? 'done' : 'progress') + '">' + (done ? 'Complete' : 'In progress') + '</span></div>';
  }

  function home() {
    return '<section class="ah-panel ah-panel--frame" id="home">' + header('home') +
      '<div class="ah-card ah-profile">' +
        '<span class="ah-status ah-profile__status">Open to new roles</span>' +
        '<div class="ah-profile__id"><div class="ah-avatar"><img src="' + BRAND.photo + '" alt="Ameen smiling and holding a pink retro phone to his ear"></div>' +
          '<div><p class="ah-profile__name">Hi, I\'m Ameen</p></div></div>' +
        '<h1 class="ah-profile__statement">Growth marketer. I find the segment, test the message and fix the funnel.</h1>' +
        '<p class="ah-profile__intro">I\'ve run lifecycle campaigns at TurboTax and direct mail at HelloFresh, and built marketing from zero at a hardware startup.</p>' +
        '<div class="ah-profile__actions"><a class="ah-btn ah-btn--primary" href="https://www.linkedin.com/in/ameenha/" target="_blank" rel="noopener">Connect on LinkedIn <span data-icon="arrow-up-right"></span></a>' +
        '<a class="ah-btn ah-btn--secondary" href="#contact"><span data-icon="mail"></span>Email me</a></div>' +
      '</div></section>' +
      '<div class="stats" aria-label="Highlights">' +
        '<div class="ah-stat"><div class="ah-stat__label"><span>Roles since 2020</span></div><div class="ah-stat__value">7</div></div>' +
        '<div class="ah-stat ah-stat--sun"><div class="ah-stat__label"><span>A/B tests run</span></div><div class="ah-stat__value">100+</div></div>' +
        '<div class="ah-stat"><div class="ah-stat__label"><span>Conversions driven at HelloFresh alone</span></div><div class="ah-stat__value">34k+</div></div>' +
      '</div>' +
      '<section class="ah-card" aria-label="Companies I\'ve worked with" style="padding:0"><div class="logos">' +
        ['BobaBud', 'Intuit', 'HelloFresh', 'Ricoh', 'ExplorerHop', 'Rippel', 'GoFleet'].map(function (n) { return '<img class="logo logo--' + n.toLowerCase() + '" src="' + BRAND[n] + '" alt="' + n + '">'; }).join('') +
      '</div></section>' +
      '<section class="ah-panel" id="work" aria-labelledby="work-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="work-h">Work</h2></div>' +
        '<div class="work-list">' + WORK.map(workCard).join('') + '</div></section>' +
      '<section class="ah-panel" id="projects" aria-labelledby="proj-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="proj-h">Projects & side quests</h2></div>' +
        '<div class="proj-grid">' + PROJECTS.map(projCard).join('') + '</div></section>' +
      '<section class="ah-panel" aria-labelledby="cert-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="cert-h">Certifications</h2></div>' +
        '<div class="certs">' + CERTS.map(certTile).join('') + '</div></section>';
  }

  function resultTile(r, i) {
    var long = r.v.length > 6;
    return '<div class="ah-stat ah-stat--stack' + (i === 0 ? ' ah-stat--sun' : '') + '"><div class="ah-stat__value' + (long ? ' sm' : '') + '">' + r.v + '</div>' +
      '<div class="ah-stat__label">' + r.l + (r.todo ? '<br>' + T(r.todo) : '') + '</div></div>';
  }

  function nextCard(href, eyebrow, name, sub) {
    return '<a class="ah-link-card ah-link-card--row next" href="#' + href + '"><span class="ah-chip-icon" data-icon="arrow-right"></span>' +
      '<span class="ah-link-card__text"><span class="ah-link-card__sub">' + eyebrow + '</span><span class="ah-link-card__title">' + name + '</span>' +
      (sub ? '<span class="ah-link-card__sub">' + sub + '</span>' : '') + '</span>' +
      '<span class="ah-icon-btn ah-link-card__action" data-icon="chevron-right" aria-hidden="true"></span></a>';
  }

  function caseStudy(w) {
    var i = WORK.indexOf(w), n = WORK[(i + 1) % WORK.length];
    var nextName = n.id === 'turbotax' ? 'TurboTax' : n.co;
    return '<section class="ah-panel ah-panel--frame">' + header('work') +
      '<div class="ah-card cs-hero">' +
        '<a class="ah-btn ah-btn--ghost ah-btn--sm back" href="#work"><span data-icon="arrow-right" style="transform:rotate(180deg)"></span>All work</a>' +
        '<p class="ah-mono cs-label">' + w.co + ' · ' + w.role + ' · ' + w.dates + '</p>' +
        '<h1 class="cs-title">' + w.head + '</h1>' +
      '</div></section>' +
      '<div class="results" aria-label="Results">' + w.results.map(resultTile).join('') + '</div>' +
      '<section class="ah-panel" aria-labelledby="p-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="p-h">The problem</h2></div><div class="ah-card prose">' + w.problem + '</div></section>' +
      '<section class="ah-panel" aria-labelledby="d-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="d-h">What I did</h2></div>' +
        w.did.map(function (d) { return '<div class="ah-card section-card prose"><h3>' + d.h + '</h3>' + d.html + '</div>'; }).join('') + '</section>' +
      '<section class="ah-panel" aria-labelledby="l-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="l-h">What I learned</h2></div><div class="ah-card prose">' + w.learned + '</div></section>' +
      '<section class="ah-panel" aria-labelledby="t-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="t-h">Tools</h2></div>' + tags(w.allTools) +
        nextCard(n.id, i === WORK.length - 1 ? 'Back to the first case study' : 'Next case study', nextName, n.head) + '</section>';
  }

  function project(p) {
    var i = PROJECTS.indexOf(p), n = PROJECTS[(i + 1) % PROJECTS.length];
    return '<section class="ah-panel ah-panel--frame">' + header('projects') +
      '<div class="ah-card cs-hero">' +
        '<a class="ah-btn ah-btn--ghost ah-btn--sm back" href="#projects"><span data-icon="arrow-right" style="transform:rotate(180deg)"></span>All projects</a>' +
        '<p class="ah-mono cs-label">' + p.tags.join(' · ') + '</p>' +
        '<h1 class="cs-title">' + p.head + '</h1><p class="cs-line">' + p.line + '</p>' +
        '<div class="ah-project__media ah-fill-' + p.tint + '" role="img" aria-label="Illustration for ' + p.name + '">' + ART[p.art] + '</div>' +
      '</div></section>' +
      p.sections.map(function (s, k) { return '<section class="ah-panel" aria-labelledby="s' + k + '"><div class="ah-panel__head"><h2 class="ah-panel__title" id="s' + k + '">' + s.h + '</h2></div><div class="ah-card prose">' + s.html + '</div></section>'; }).join('') +
      '<section class="ah-panel" aria-labelledby="t-h"><div class="ah-panel__head"><h2 class="ah-panel__title" id="t-h">Tools</h2></div>' + tags(p.allTools) +
        nextCard(n.id, 'Next project', n.name, n.oneLiner) + '</section>';
  }

  var view = document.getElementById('view');
  var HOME_SECTIONS = { home: 1, work: 1, projects: 1 };
  var current = null;

  function setDock(key) {
    document.querySelectorAll('.ah-dock__item').forEach(function (a) {
      if (a.getAttribute('data-nav') === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }
  function render(page) {
    if (current === page) return false;
    current = page;
    var w = WORK.filter(function (x) { return x.id === page; })[0];
    var p = PROJECTS.filter(function (x) { return x.id === page; })[0];
    if (w) { view.innerHTML = caseStudy(w); document.title = w.title + ' – Ameen H.'; setDock('work'); }
    else if (p) { view.innerHTML = project(p); document.title = p.title + ' – Ameen H.'; setDock('projects'); }
    else { current = 'home'; view.innerHTML = home(); document.title = 'Ameen H. – Growth Marketer'; setDock('home'); }
    view.style.animation = 'none'; void view.offsetWidth; view.style.animation = '';
    Ameen.hydrate(view);
    if (window.__hbInit) window.__hbInit(view);
    return true;
  }
  function route() {
    var h = (location.hash || '#home').slice(1);
    if (h === 'contact') { if (!current) render('home'); return; }
    if (HOME_SECTIONS[h]) {
      var changed = render('home');
      var el = document.getElementById(h);
      if (h === 'home') window.scrollTo({ top: 0, behavior: changed ? 'auto' : 'smooth' });
      else if (el) el.scrollIntoView({ behavior: changed ? 'auto' : 'smooth', block: 'start' });
    } else {
      render(h); window.scrollTo(0, 0);
    }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href="#contact"]');
    if (!a) return;
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  window.addEventListener('hashchange', route);
  window.addEventListener('scroll', function () {
    if (current !== 'home') return;
    var key = 'home', y = window.innerHeight * 0.35;
    ['work', 'projects', 'contact'].forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < y) key = id; });
    setDock(key);
  }, { passive: true });

  document.getElementById('copy-email').addEventListener('click', function () {
    var addr = document.getElementById('email').textContent, done = document.getElementById('copied');
    var show = function (msg) { done.textContent = msg; done.hidden = false; setTimeout(function () { done.hidden = true; }, 2000); };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents(document.getElementById('email')); var s = getSelection(); s.removeAllRanges(); s.addRange(r); show('Selected, press Ctrl+C'); };
    try { navigator.clipboard.writeText(addr).then(function () { show('Copied'); }, fallback); } catch (err) { fallback(); }
  });

  Ameen.hydrate(document.getElementById('contact'));
  Ameen.hydrate(document.querySelector('.dock-wrap'));
  route();
})();
