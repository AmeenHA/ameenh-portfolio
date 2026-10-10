  /* ---------- Visual helpers ---------- */
  var fig = function (title, inner, note) {
    return '<figure class="viz"><figcaption class="viz__title">' + title + '</figcaption>' + inner + (note ? '<p class="viz__note">' + note + '</p>' : '') + '</figure>';
  };
  // rows: [label, value, display, highlight?]
  var bars = function (rows, max, color) {
    return '<div class="bars">' + rows.map(function (r) {
      var w = Math.max(2, Math.round(r[1] / max * 1000) / 10);
      return '<div class="bars__row"><span class="bars__label">' + r[0] + '</span><span class="bars__track"><span class="bars__fill' + (r[3] ? '' : ' bars__fill--base') + '" style="width:' + w + '%' + (r[3] ? ';background:var(--' + color + ')' : '') + '"></span></span><span class="bars__val">' + r[2] + '</span></div>';
    }).join('') + '</div>';
  };
  // segs: [label, value, color, sub]
  var stack = function (segs, total) {
    return '<div class="stack" role="img" aria-label="' + segs.map(function (s) { return s[0] + ' ' + s[1]; }).join(', ') + '">' +
      segs.map(function (s) { return '<span class="stack__seg stack__seg--' + s[2] + '" style="flex:' + s[1] + ';background:var(--' + (s[2] === 'neutral' ? 'line' : s[2]) + ')"><b>' + (s[3] || s[1]) + '</b></span>'; }).join('') + '</div>' +
      '<div class="stack__legend">' + segs.map(function (s) { return '<span><i style="background:var(--' + (s[2] === 'neutral' ? 'line' : s[2]) + ')"></i>' + s[0] + '</span>'; }).join('') + '</div>';
  };
  var DOWN = '<span class="flow__arrow" data-icon="arrow-right" data-size="16" aria-hidden="true"></span>';
  var dots = function (filled, total, color, label) {
    var s = '';
    for (var i = 0; i < total; i++) s += '<i class="' + (i < filled ? 'on' : '') + '"' + (i < filled ? ' style="background:var(--' + color + ')"' : '') + '></i>';
    return '<div class="dots-row"><span class="dots-row__label">' + label + '</span><span class="dots" role="img" aria-label="' + label + '">' + s + '</span></div>';
  };

  var V = {};
  var shot = function (src, alt, cap, cls) { return '<figure class="shot' + (cls ? ' ' + cls : '') + '"><img src="' + src + '" alt="' + alt + '" loading="lazy"><figcaption>' + cap + '</figcaption></figure>'; };


  /* BobaBud */
  V.bobaFunnel = fig('Waitlist conversion after 17 A/B tests',
    bars([['Before', 16, '16%'], ['After', 23, '23%', 1]], 25, 'violet'), 'A 44% relative lift from testing emails and landing pages in the first two funnel stages.');
  V.bobaMoney = fig('Where each drink\'s revenue goes',
    stack([['BobaBud', 80, 'violet', '80%'], ['Location partner', 20, 'sun-tint', '20%']]) +
    '<div class="viz__gap"></div>' +
    stack([['Gross margin target', 70, 'moss', '70%+'], ['Ingredients and cup', 30, 'neutral', '≤30%']]),
    'Drink prices were set from 12 supplier quotes so the cost of each drink stays at or under 30% of its price.');
  V.bobaCompliance = fig('From regulations to machine requirements',
    '<div class="layers">' +
      '<div class="layers__col"><span class="layers__head">3 levels of government</span><span class="chip">Federal</span><span class="chip">Provincial</span><span class="chip">Municipal</span></div>' +
      '<span class="layers__x" aria-hidden="true">×</span>' +
      '<div class="layers__col"><span class="layers__head">3 areas of regulation</span><span class="chip">Electrical safety</span><span class="chip">Food safety (HACCP)</span><span class="chip">Payment data security</span></div>' +
      DOWN +
      '<div class="layers__out tile-violet">Requirements the engineering team built into the machine</div>' +
    '</div>');
  V.bobaMedia = VIS('a photo of the BobaBud machine, plus your best-performing A/B test email or landing page.');

  /* Intuit */
  V.segMap = fig('How lapsed and returning filers were split into 9 segments',
    '<div class="segmap">' +
      [['Age', [['Gen Z (priority)', 'Casual tone, mobile-first imagery and short push titles'], ['Millennial', 'Messages tied to life changes like a move or a new job'], ['Older', 'Clear step-by-step copy and familiar product cues']]],
       ['Time since last login', [['Recent', 'Reminder that last year\'s info carries over, with a CTA to pick up where they left off'], ['Lapsed', 'Email CTA to download the app and file from their phone']]],
       ['Location', [['Province', 'Province-specific credits, examples and deadlines']]],
       ['Product tier', [['DIY', 'CTA to start filing on their own'], ['Assist', 'CTA to book help from an expert'], ['Full Service', 'CTA to hand their return to an expert']]]].map(function (c) {
        return '<div class="segmap__col"><span class="layers__head">' + c[0] + '</span>' + c[1].map(function (v) { return '<div class="segv"><span class="chip">' + v[0] + '</span><small>' + v[1] + '</small></div>'; }).join('') + '</div>';
      }).join('') +
      '</div>' + '<div class="segmap__out">' + DOWN + '<span class="layers__out tile-sky">9 segments, each with its own imagery, tone, call to action and notification title</span></div>');


  /* Intuit journey map */
  var jc = function (n, ch, title, trig) {
    return '<div class="jm__card"><div class="jm__top"><span class="jm__n">' + n + '</span><span class="jm__ch jm__ch--' + ch + '">' + (ch === 'email' ? 'Email' : 'Push') + '</span></div><b>' + title + '</b><small><em>Trigger:</em> ' + trig + '</small></div>';
  };
  var jstage = function (num, name, body) { return '<div class="jm__stage"><div class="jm__head"><span class="jm__num">' + num + '</span><b>' + name + '</b></div><div class="jm__body">' + body + '</div></div>'; };
  var jdec = function (q, yesLbl, yes, noLbl, no) {
    return '<div class="jm__dec"><span class="jm__q">' + q + '</span><div class="jm__paths"><div class="jm__path"><span class="jm__lbl jm__lbl--yes">' + yesLbl + '</span>' + yes + '</div><div class="jm__path jm__path--branch"><span class="jm__lbl jm__lbl--no">' + noLbl + '</span>' + no + '</div></div></div>';
  };
  V.journey = fig('The 13-touchpoint win-back journey',
    '<div class="jm__legend"><span class="jm__ch jm__ch--email">Email</span><span class="jm__ch jm__ch--push">Push</span><span class="jm__key"><i></i>Branch for filers who stall or abandon</span></div>' +
    '<div class="jm">' +
      jstage('01', 'Tax season opens', '<div class="jm__row">' + jc(1, 'email', 'Tax season is open', 'Filing season opens, sent to every segment') + jc(2, 'push', 'Your return is ready to start', '3 days later, app installed, return not started') + '</div>') +
      jstage('02', 'Getting started', '<div class="jm__row">' + jc(3, 'email', 'Last year\'s info carried over', 'First login of the season') + jc(4, 'push', 'Add your T4 slips', 'Return started, no slips added after 2 days') + '</div>') +
      jstage('03', 'In progress', jdec('Active in the last 7 days?',
        'Yes', jc(5, 'push', 'You\'re halfway there', 'Return reaches 50% complete'),
        'No · stalled', jc(6, 'email', 'Need a hand?', '7 days with no activity. CTA matches tier: keep going, book help or hand it off') + jc(7, 'push', 'Your refund estimate is waiting', '14 days with no activity') +
          '<div class="jm__sub"><span class="jm__q">Still inactive after 21 days?</span><span class="jm__lbl jm__lbl--no">Yes · abandoned</span>' + jc(8, 'email', 'Let an expert finish it for you', '21 days with no activity') + '<span class="jm__back">Any filer who resumes rejoins the main path</span></div>')) +
      jstage('04', 'Deadline approaching', '<p class="jm__note">Everyone who hasn\'t filed yet, on either path</p><div class="jm__row">' + jc(9, 'email', 'File by April 30', '2 weeks before the deadline, not filed') + jc(10, 'push', 'Last call: 2 days left', '2 days before the deadline, not filed') + '</div>') +
      jstage('05', 'Return filed', '<div class="jm__row">' + jc(11, 'email', 'Your return is filed', 'Return submitted') + jc(12, 'push', 'Your refund is on its way', 'Refund status updates') + '</div>') +
      jstage('06', 'After filing', '<div class="jm__row">' + jc(13, 'email', 'See you next year', '30 days after filing. Lapsed app users get a CTA to download the app') + '</div>') +
    '</div>');


  /* Intuit team coordination */
  var tm = function (n, name, kind, role, extra) {
    return '<li class="tm__step"><span class="tm__n">' + n + '</span><div class="tm__card tm__card--' + (kind === 'Agency' ? 'ag' : 'in') + '"><div class="tm__top"><b>' + name + '</b><span class="tm__kind">' + kind + '</span></div><p>' + role + '</p>' + (extra || '') + '</div></li>';
  };
  V.teams = fig('How the journey moved through 2 agencies and 3 internal teams',
    '<div class="tm">' +
      '<div class="tm__me"><span class="tm__av">AH</span><div><b>Me: journey owner</b><span>Designed the journey, briefed every team and managed each hand-off</span></div></div>' +
      '<ol class="tm__list">' +
        tm(1, 'Superside', 'Agency', 'Designed the creative: email templates and push notifications') +
        tm(2, 'Brand team', 'Internal team', 'Checked every asset against the newly updated brand') +
        tm(3, 'UI team', 'Internal team', 'Checked the creative met mobile and web guidelines') +
        tm(4, 'Data team', 'Internal team', 'Secured the user data points that powered personalization',
          '<div class="tm__data">' + [['Age', 'Gen Z gets its own messaging'], ['Last login', '2+ years ago gets an app-download CTA'], ['Province', 'Local tax-rules blog'], ['Where they abandoned', 'A nudge to resume from that exact step']].map(function (d) { return '<div><b>' + d[0] + '</b><span>' + d[1] + '</span></div>'; }).join('') + '</div>') +
        tm(5, 'Publicis', 'Agency', 'Built and launched the campaigns, with all the branching logic that granular personalization needed',
          '<div class="tm__tools"><span>Braze</span><span>Movable Ink</span></div>') +
      '</ol>' +
    '</div>');

  /* HelloFresh */
  V.hfTarget = fig('Choosing which postal codes to mail',
    '<div class="narrow">' +
      [['68', 'Environics customer segments'], ['Ranked', 'by conversion rate and lifetime value'], ['800k', 'Canada Post postal codes, each matched to a segment'], ['Mailed', 'only the segments that paid back']].map(function (s, i) {
        return '<div class="narrow__step" style="width:' + (100 - i * 14) + '%"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>';
      }).join('') + '</div>');
  V.hfForecast = fig('Forecasting a campaign from its first week',
    '<div class="fc" role="img" aria-label="Launch on day 0, forecast on day 7, predicting day 30, 60 and 90 conversions with 97% accuracy">' +
      '<div class="fc__track"><span class="fc__known" style="width:' + (7 / 90 * 100) + '%"></span></div>' +
      [[0, 'Launch', 'Day 0', ''], [7, 'Forecast', 'Day 7', 'hi'], [30, 'Predicted', 'Day 30', ''], [60, 'Predicted', 'Day 60', ''], [90, 'Predicted', 'Day 90', 'end']].map(function (m) {
        return '<span class="fc__mark fc__mark--' + (m[3] || 'n') + (m[0] === 0 ? ' fc__mark--start' : '') + '" style="left:' + (m[0] / 90 * 100) + '%"><i></i><b>' + m[2] + '</b><small>' + m[1] + '</small></span>';
      }).join('') +
    '</div>', 'Built on 3 years of conversion data. The day 7 forecast predicted 30-, 60- and 90-day conversions with 97% accuracy.');
  V.hfAB = fig('A few of the 40+ tests, with the winner of each',
    '<div class="ab">' + [['$130 off', '7 free meals', 'Offer', 1], ['Regular discount', 'Free tote bag', 'Offer', 1], ['11 free meals over 5 boxes', '11 free meals over 6 boxes', 'Offer', 1], ['Postcard codes', 'Scratch-off voucher codes', 'Creative', 1], ['Simple code (DEC2022)', 'Random code (3XV 8B5)', 'Creative', 1], ['Sustainability message in BC', 'Sustainability message in Ontario', 'Audience', 0]].map(function (t) {
      var side = function (i, l, txt) { var win = t[3] === i; return '<span class="' + (win ? 'ab__win' : 'ab__lose') + '"><em>' + l + '</em>' + txt + (win ? '<strong class="ab__badge">Winner</strong>' : '') + '</span>'; };
      return '<div class="ab__card"><span class="ab__kind">' + t[2] + '</span><div class="ab__pair">' + side(0, 'A', t[0]) + side(1, 'B', t[1]) + '</div></div>';
    }).join('') + '</div>');
  V.hfMedia = VIS('photos of real HelloFresh mailers or postcards (the strongest visual you could add to this page).');
  V.hfDrop = (function () {
    var series = function (name, a, color, cliffs) {
      var cells = '';
      for (var i = 0; i < 6; i++) {
        var val = a[i];
        cells += val === undefined ? '<span class="dr__col dr__col--empty"></span>' :
          '<span class="dr__col"><b>' + val + '%</b><span class="dr__bar" style="height:' + (val / 60 * 100) + '%;background:var(--' + color + ')"></span></span>';
        if (i < 5) {
          var d = a[i + 1] !== undefined ? a[i] - a[i + 1] : null, cliff = cliffs.indexOf(i) > -1;
          cells += '<span class="dr__gap">' + (d !== null ? '<span class="dr__drop' + (cliff ? ' dr__drop--cliff' : '') + '">−' + d + '</span>' : '') + '</span>';
        }
      }
      return '<div class="dr__series"><span class="dr__name">' + name + '</span><div class="dr__row">' + cells + '</div></div>';
    };
    var axis = '<div class="dr__series dr__series--axis"><span class="dr__name"></span><div class="dr__row">' + [1, 2, 3, 4, 5, 6].map(function (n, i) { return '<span class="dr__col dr__x">Box ' + n + '</span>' + (i < 5 ? '<span class="dr__gap"></span>' : ''); }).join('') + '</div></div>';
    return fig('Discount per box, and where customers cancelled',
      '<div class="dr" role="img" aria-label="Control discounts by box: 60, 50, 44, 30, 15 percent, with cuts of 14 and 15 points after boxes 3 and 4 where most customers cancelled. Variant: 55, 45, 35, 25, 20, 15 percent over 6 boxes.">' +
        series('Control', [60, 50, 44, 30, 15], 'ink-faint', [2, 3]) + series('Variant', [55, 45, 35, 25, 20, 15], 'moss', []) + axis +
      '</div>' +
      '<div class="dd__legend"><span><i class="dr__key"></i>Drop in discount, in points</span><span><i class="dr__key dr__key--cliff"></i>Steep cuts where most customers cancelled</span></div>',
      'In the control, the discount fell 14 points after box 3 and 15 points after box 4, and those steep cuts were where most customers dropped off. The variant spread the discount over 6 boxes in smaller steps of 5 to 10 points.');
  })();


  /* HelloFresh automation pipelines */
  var pstep = function (s) { return '<div class="pp__step' + (s[1] ? ' pp__step--auto' : '') + '"><b>' + s[0] + '</b>' + (s[1] ? '<span class="pp__tag">' + s[1] + '</span>' : '<span class="pp__tag pp__tag--me">Built by me</span>') + '</div>'; };
  var ARR = '<span class="pp__arr" data-icon="arrow-right" data-size="16" aria-hidden="true"></span>';
  var lane = function (name, sub, steps) { return '<div class="pp__lane"><div class="pp__name"><b>' + name + '</b><small>' + sub + '</small></div><div class="pp__steps">' + steps.map(pstep).join(ARR) + '</div></div>'; };
  V.hfPipes = fig('Two automated reporting pipelines',
    '<div class="pp">' +
      lane('Conversion data', 'From the data warehouse', [['Write SQL script', 'Runs daily'], ['Run script against the data warehouse', 'Automated'], ['Copy results into the Excel sheet', 'Automated']]) +
      lane('Pre-conversion data', 'From Google Analytics 4', [['Create UTM tags', ''], ['Write Apps Script', ''], ['Pull data through the GA4 API', 'Automated'], ['Autofill the Excel sheet', 'Automated']]) +
      '<div class="pp__join"><span class="pp__arr pp__arr--down" data-icon="arrow-right" data-size="16" aria-hidden="true"></span><div class="layers__out tile-moss">Dashboard visuals update from both sheets</div></div>' +
    '</div>' +
    '<div class="dd__legend"><span><i class="pp__key"></i>Built by me</span><span><i class="pp__key pp__key--auto"></i>Runs automatically</span></div>');

  /* Ricoh */
  var arc = function (cx, cy, r, a0, a1) {
    var p = function (a) { var t = (a - 90) * Math.PI / 180; return [(cx + r * Math.cos(t)).toFixed(1), (cy + r * Math.sin(t)).toFixed(1)]; };
    var s = p(a0), e = p(a1);
    return 'M' + s[0] + ' ' + s[1] + ' A' + r + ' ' + r + ' 0 0 1 ' + e[0] + ' ' + e[1];
  };
  V.flywheel = fig('Content mapped to the inbound flywheel',
    '<div class="fly">' +
      '<svg viewBox="0 0 220 220" class="fly__svg" role="img" aria-label="Flywheel: Attract, then Engage, then Delight, looping back to Attract">' +
        [['sky', 4, 116], ['rose', 124, 236], ['moss', 244, 356]].map(function (a) { return '<path d="' + arc(110, 110, 82, a[1], a[2]) + '" fill="none" stroke-width="34" style="stroke:var(--' + a[0] + ')"/>'; }).join('') +
        [['Attract', 60], ['Engage', 180], ['Delight', 300]].map(function (l) { var t = (l[1] - 90) * Math.PI / 180; var x = (110 + 82 * Math.cos(t)).toFixed(1), y = (110 + 82 * Math.sin(t)).toFixed(1), rot = l[1] > 90 && l[1] < 270 ? l[1] - 180 : l[1]; return '<text x="' + x + '" y="' + y + '" dy="4" text-anchor="middle" transform="rotate(' + (rot > 180 ? rot - 360 : rot) + ' ' + x + ' ' + y + ')" class="fly__lbl">' + l[0] + '</text>'; }).join('') +
        '<text x="110" y="106" text-anchor="middle" class="fly__mid">29 assets</text><text x="110" y="124" text-anchor="middle" class="fly__sub">3 stages</text>' +
      '</svg>' +
      '<div class="fly__list">' + [['sky', 'Attract', 'Blogs, product brochures, case studies'], ['rose', 'Engage', 'Competitor analyses, battle cards, product sheets, product decks, persona cards'], ['moss', 'Delight', 'Use-case guides, onboarding manuals']].map(function (s) {
        return '<div class="fly__item"><i style="background:var(--' + s[0] + ')"></i><div><b>' + s[1] + '</b><span>' + s[2] + '</span></div></div>';
      }).join('') + '</div>' +
    '</div>');
  V.ricohAssets = fig('The 29 assets I shipped',
    stack([['Product decks', 5, 'sky', '5'], ['Use-case guides', 5, 'moss', '5'], ['Onboarding manuals', 4, 'violet', '4'], ['Competitive analyses', 3, 'rose', '3'], ['Other assets', 12, 'neutral', '12']]));
  V.ricohDots = fig('Clients willing to give a testimonial, referral or case study',
    dots(1, 20, 'ink-faint', 'Before: 1 in 20') + dots(4, 20, 'rose', 'After: 1 in 5') +
    '<div class="viz__gap"></div>' + bars([['Before', 5, '5%'], ['After', 11, '11%', 1]], 12, 'rose'), 'Bottom: inbound lead qualification rate.');
  V.ricohMedia = VIS('thumbnails of a battle card or product sheet you made (blur them if they\'re confidential).');


  /* Ricoh content pipeline */
  var CP_ICON = {
    brief: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
    shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    redo: '<path d="M20 11a8 8 0 0 0-14-4L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14 4l2-2"/><path d="M20 20v-5h-5"/>',
    grid: '<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    send: '<path d="M21 3 10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>'
  };
  var cpIcon = function (k) { return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + CP_ICON[k] + '</svg>'; };
  // [n, kind, icon, title, desc, role, arrow, col, row]
  var CPS = [
    [1, 'prod', 'brief', 'Briefing and outline', 'Define scope, goals and key messages', 'Product marketer', 'r', 1, 1],
    [2, 'prod', 'pen', 'Drafting and copywriting', 'Write first-pass copy and structure', 'Product marketer', 'r', 2, 1],
    [3, 'gate', 'shield', 'PMM approval', 'Messaging and positioning sign-off', 'Product marketing mgr', 'd', 3, 1],
    [4, 'fix', 'redo', 'Revise and implement fixes', 'Apply PMM feedback', 'Product marketer', 'l', 3, 2],
    [5, 'gate', 'shield', 'PM approval', 'Technical accuracy sign-off', 'Product manager', 'l', 2, 2],
    [6, 'fix', 'redo', 'Revise and implement fixes', 'Apply PM feedback', 'Product marketer', 'd', 1, 2],
    [7, 'prod', 'grid', 'High-fidelity design', 'Lay out to the Ricoh brand system', 'Product marketer', 'r', 1, 3],
    [8, 'gate', 'shield', 'PMM approval', 'Final design and content sign-off', 'Product marketing mgr', 'r', 2, 3],
    [9, 'pub', 'send', 'Publish', 'Ship to channel and go live', 'Product marketer', '', 3, 3]
  ];
  V.ricohPipe = fig('The 9-step pipeline every asset went through (I was the product marketer)',
    '<div class="cp__legend"><span><i class="cp__k cp__k--prod"></i>Production</span><span><i class="cp__k cp__k--gate"></i>Approval gate</span><span><i class="cp__k cp__k--fix"></i>Revise and fix</span><span><i class="cp__k cp__k--pub"></i>Publish</span></div>' +
    '<ol class="cp2">' + CPS.map(function (c) {
      return '<li class="cp2__card cp2__card--' + c[1] + (c[6] ? ' cp2__card--to-' + c[6] : '') + '" style="grid-column:' + c[7] + ';grid-row:' + c[8] + '">' +
        '<div class="cp2__top"><span class="cp2__icon">' + cpIcon(c[2]) + '</span><span class="cp2__n">' + String(c[0]).padStart(2, '0') + '</span></div>' +
        '<b>' + c[3] + '</b><span class="cp2__desc">' + c[4] + '</span><span class="cp2__role"><span data-icon="user" data-size="12"></span>' + c[5] + '</span></li>';
    }).join('') + '</ol>');
  var ricoh = WORK.filter(function (w) { return w.id === 'ricoh'; })[0];
  ricoh.did.push({ h: 'Ran the content pipeline end to end', html:
    '<p>Before, collateral was made one-off whenever a prospect asked for it. I turned that into one repeatable pipeline that all 29 assets followed, from the first brief to the day each piece went live.</p>' +
    '<p>I owned every production step: the brief and outline, the copy, the revisions and the final layout in Ricoh\'s brand system. Each asset then passed three approval gates. The product marketing manager signed off on messaging, the product manager checked technical accuracy, and the PMM gave final sign-off on the finished design. I turned the feedback from each gate into fixes before it moved on, then published it.</p>' + V.ricohPipe });

  /* ExplorerHop */
  V.ehMeter = fig('Enrollment against target',
    '<div class="meter" role="img" aria-label="103% of enrollment target"><span class="meter__fill" style="width:' + (103 / 110 * 100) + '%"></span><span class="meter__goal" style="left:' + (100 / 110 * 100) + '%"><b>Target</b></span></div>' +
    '<div class="meter__scale"><span>0%</span><span class="meter__val">103%</span></div>', 'Reached with email as the only channel and close to zero budget.');
  V.ehMatch = fig('Sending each school the right program',
    '<div class="match">' +
      '<div class="match__lane"><span class="layers__head">Past customers</span><span class="chip">3 years of purchase history</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<span class="chip">Programs that complement what they bought</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<span class="chip">At the right grade level: Levels 1–3 elementary, 4–6 high school</span></div>' +
      '<div class="match__lane"><span class="layers__head">New prospects</span><span class="chip">Persona by role</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<span class="chip">e.g. economics and accounting heads</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<span class="chip">Financial literacy program</span></div>' +
    '</div><div class="layers__out tile-lilac" style="margin-top:12px">18 programs across 3 product lines, each with its own targeting</div>');
  V.ehMedia = VIS('one or two of the segmented emails you sent.');


  /* ExplorerHop: what was tested */
  var num = function (n) { return '<span class="em__n">' + n + '</span>'; };
  V.ehTests = fig('32 A/B tests across five parts of the email',
    '<div class="em">' +
      '<div class="em__mock" aria-hidden="true">' +
        '<div class="em__meta">' + num(1) + '<span class="em__k">To</span><span class="em__seg">Past customers</span></div>' +
        '<div class="em__meta">' + num(2) + '<span class="em__k">Sent</span><span class="em__time"><span data-icon="clock" data-size="14"></span>Tue · 9:00 AM</span></div>' +
        '<div class="em__subject">' + num(3) + '<span class="em__bar em__bar--dark" style="width:72%"></span></div>' +
        '<div class="em__body">' + num(4) + '<div class="em__lines"><span class="em__bar" style="width:100%"></span><span class="em__bar" style="width:92%"></span><span class="em__bar" style="width:96%"></span><span class="em__bar" style="width:60%"></span></div></div>' +
        '<div class="em__cta">' + num(5) + '<span class="em__btn"></span></div>' +
      '</div>' +
      '<ol class="em__list">' +
        [['Segment', 'Past customers or new prospects, by persona and grade level'], ['Send time', 'Day of the week and time of day'], ['Subject line', 'What gets a busy school contact to open'], ['Body copy', 'How each program is explained to that reader'], ['Call to action', 'What the reader is asked to do next']].map(function (t, i) {
          return '<li>' + num(i + 1) + '<div><b>' + t[0] + '</b><span>' + t[1] + '</span></div></li>';
        }).join('') +
      '</ol>' +
    '</div>', 'The mock-up is a wireframe; the segment and send time shown are examples.');

  /* Rippel */
  V.rippelFlow = fig('How 61 interviews turned into a 4,000-person waitlist',
    '<div class="conv">' +
      '<div class="conv__top chip">61 validation interviews</div>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') +
      '<div class="conv__mid">' + [['6', 'MPs publicly endorsed the app'], ['8', 'local organizations joined as beta partners'], ['5', 'universities with campus ambassadors']].map(function (s) { return '<div class="conv__box"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('') + '</div>' +
      DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<div class="layers__out tile-aqua conv__out"><b>4,000+</b> waitlist signups</div>' +
    '</div>');
  V.rippelSplit = (function () {
    var people = function (on, total, color) { var s = ''; for (var i = 0; i < total; i++) s += '<span class="rs__p' + (i < on ? ' on' : '') + '"' + (i < on ? ' style="color:var(--' + color + ')"' : '') + '><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="4" fill="currentColor"/><path d="M4 22a8 8 0 0 1 16 0z" fill="currentColor"/></svg></span>'; return '<div class="rs__people">' + s + '</div>'; };
    var pct = function (v, color) { return '<div class="rs__track"><span style="width:' + v + '%;background:var(--' + color + ')"></span></div>'; };
    return fig('What the interviews showed',
      '<div class="rs">' +
        '<div class="rs__col"><span class="layers__head">From citizens</span>' +
          '<div class="rs__tile"><b class="rs__big">2 in 5</b>' + people(2, 5, 'aqua') + '<span>actively look for political information, but find TV, news apps and web searches too slow</span></div>' +
          '<div class="rs__tile"><b class="rs__big">38%</b>' + pct(38, 'aqua') + '<span>don\'t vote, mostly because they feel uninformed or think their vote won\'t matter</span></div>' +
          '<div class="rs__tile"><b class="rs__big">80% &rarr; 60%</b>' +
            '<div class="rs__turn"><span class="rs__tbar" style="height:80%"><i>80%</i></span><span class="rs__tbar rs__tbar--now" style="height:60%"><i>60%</i></span></div>' +
            '<span>voter turnout has fallen</span></div>' +
          '<div class="rs__tile rs__tile--q"><span>Raising an issue today, through protests, calls, emails or social posts, feels slow and gets lost in the noise</span></div>' +
        '</div>' +
        '<div class="rs__col"><span class="layers__head">From lawmakers</span>' +
          '<div class="rs__theme"><span class="rs__ic rs__ic--yes">&#10003;</span><span>Want fewer barriers between citizens and representatives</span></div>' +
          '<div class="rs__theme"><span class="rs__ic rs__ic--yes">&#10003;</span><span>Want higher voter turnout</span></div>' +
          '<div class="rs__theme rs__theme--risk"><span class="rs__ic rs__ic--risk">!</span><span>Worried the app would create expectations of a reply to every message, which wouldn\'t scale</span></div>' +
        '</div>' +
      '</div>');
  })();
  V.rippelMedia = VIS('screenshots of the Rippel app or waitlist page.');

  /* GoFleet */
  var stage = function (l, wk, cls) { return '<span class="tlx__stage ' + (cls || '') + '" style="flex:' + wk + '">' + l + '</span>'; };
  V.gfTimeline = fig('The sales cycle, before and after',
    '<div class="tlx">' +
      '<div class="tlx__row"><span class="tlx__label">Before<small>3 stages · ~4 weeks</small></span><span class="tlx__track" style="width:' + (4 / 7 * 100) + '%">' + stage('Stage 1', 1.3) + stage('Stage 2', 1.3) + stage('Stage 3', 1.4) + '</span></div>' +
      '<div class="tlx__row"><span class="tlx__label">After<small>5 stages · 7 weeks</small></span><span class="tlx__track" style="width:100%">' + stage('Stage 1', 1.3) + stage('Discovery', 1.4, 'tlx__stage--new') + stage('Nurture', 1.6, 'tlx__stage--new') + stage('Stage 2', 1.3) + stage('Stage 3', 1.4) + '</span></div>' +
    '</div>' +
    '<p class="viz__todo">' + T('send the names of the 3 original stages and confirm where Discovery and Nurture sat in the order.') + '</p>');
  V.gfBars = fig('Leads qualified to quote stage',
    bars([['Before', 0.8, '0.8%'], ['After', 2.3, '2.3%', 1]], 2.5, 'mint'), 'Nearly 3x more leads reached a quote once buyers had time to get comfortable.');
  V.gfTable = VIS('the ranked list of pain points for each persona or industry, if you still have it. It would make a strong table.');


  /* GoFleet funnels */
  var fun = function (kind, tag, title, big, sub, meta, steps) {
    return '<div class="gf gf--' + kind + '"><div class="gf__head"><div><span class="gf__tag">' + tag + '</span><b class="gf__title">' + title + '</b></div><div class="gf__num"><b>' + big + '</b><span>' + sub + '</span></div></div>' +
      '<span class="gf__meta">' + meta + '</span>' +
      '<ol class="gf__steps">' + steps.map(function (s, i) { var inset = i * (kind === 'after' ? 5 : 8); return '<li style="margin-inline:' + inset + '%"><span class="gf__n">' + (i + 1) + '</span><div><b>' + s[0] + '</b><small>' + s[1] + '</small></div></li>'; }).join('') + '</ol></div>';
  };
  V.gfFunnels = fig('The sales cycle, before and after',
    '<div class="gfs">' +
      fun('before', 'Before', 'Cold-call funnel', '0.8%', 'of leads qualified to quote', '4-week cycle · 3 stages', [['Cold call and book demo', 'Outbound dialing from a cold list'], ['Sales demo', 'Generic, one-size-fits-all pitch'], ['Quotes and closing', 'Price-led, little leverage']]) +
      fun('after', 'After', 'Qualified pipeline', '2.3%', 'of leads qualified to quote · 2.9x', '7-week cycle · 5 stages', [['LinkedIn lead-gen form', 'Case study or ebook offer'], ['Warm email or call', 'Learn pains and qualify the fit'], ['Tailored product demo', 'Built on buyer personas, battle cards, product sheets and competitive analyses'], ['Quotes and negotiations', 'Value-led, on solid footing'], ['Closing and onboarding', 'Use-case guide drives adoption']]) +
    '</div>');


  /* GoFleet personas */
  var PERS = [
    ['Trucking · Logistics · Courier', 'MR', 'Marcus Reyes', 'Fleet Manager', 'mint', ['Fuel cost and idle time erode margins', 'HOS / ELD compliance violation risk', 'Poor visibility into ETAs and drivers'], ['Cut fuel and maintenance spend', 'Keep CSA scores compliant', 'Raise on-time delivery rate'], ['Route optimization', 'ELD / HOS logging', 'Driver scorecards']],
    ['Construction · Mining', 'DW', 'Dana Whitfield', 'Asset Manager', 'moss', ['Equipment theft and off-hours misuse', 'Underused assets across job sites', 'Surprise breakdowns stall projects'], ['Maximize utilization and ROI per asset', 'Prevent theft and after-hours use', 'Shift to predictive maintenance'], ['Geofence theft alerts', 'Engine-hour tracking', 'Usage-based PM']],
    ['Waste · Public utilities', 'PN', 'Priya Nandakumar', 'Operations Director', 'aqua', ['Missed stops drive service complaints', 'High fuel burn on inefficient routes', 'Proof-of-service disputes'], ['Verify every stop and service event', 'Optimize collection routes', 'Improve safety on dense routes'], ['Service verification', 'Dashcam proof', 'Live dispatch']],
    ['Healthcare · Med transport', 'EC', 'Eli Carter', 'Fleet Coordinator', 'sky', ['Delayed or missed patient pickups', 'Cold-chain and sensitive cargo risk', 'Driver safety and liability exposure'], ['Reliable, on-time patient transport', 'Maintain temp and chain-of-custody', 'Reduce accidents and liability'], ['Live ETA dispatch', 'Temp sensors', 'Safety scoring']],
    ['Insurance', 'SA', 'Sofia Alvarez', 'Risk and Underwriting Mgr', 'sun', ['Thin data to price fleet risk', 'Claims from preventable incidents', 'Fraudulent and disputed claims'], ['Price premiums on real driving data', 'Lower loss ratios and claim frequency', 'Speed up and verify claims'], ['Behavior telematics', 'Crash detection', 'Dashcam evidence']]
  ];
  V.gfPersonas = fig('The 5 buyer personas behind the messaging',
    '<span class="per__hint">Scroll sideways to see all five</span><div class="per" tabindex="0" aria-label="Buyer personas">' + PERS.map(function (p) {
      var list = function (a) { return '<ul>' + a.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>'; };
      return '<div class="per__card" style="--pc:var(--' + p[4] + ')">' +
        '<span class="per__ind">' + p[0] + '</span>' +
        '<div class="per__who"><span class="per__av">' + p[1] + '</span><div><b>' + p[2] + '</b><small>' + p[3] + '</small></div></div>' +
        '<span class="per__h">Pain points</span>' + list(p[5]) +
        '<span class="per__h">Objectives</span>' + list(p[6]) +
        '<div class="per__feat"><span class="per__h">GoFleet features</span><div class="per__chips">' + p[7].map(function (f) { return '<span>' + f + '</span>'; }).join('') + '</div></div>' +
      '</div>';
    }).join('') + '</div>', 'Each test varied one thing: which pain point or feature to lead with, which persona or industry to target, or when to reach out.');

  /* Family app */
  var FEAT = ['Screen time', 'Location', 'Tasks', 'Calendar'];
  var COMP = [['KahfGuard', [1, 0, 0, 0]], ['Qustodio', [1, 1, 0, 0]], ['FamilyWall', [0, 1, 0, 1]], ['Cozi', [0, 0, 0, 1]], ['Kids360', [1, 1, 1, 0]], ['Kidsee', [1, 1, 0, 0]], ['Nori', [0, 0, 1, 1]], ['My concept', [1, 1, 1, 1], 1]];
  V.famGrid = fig('Which apps cover the four core features',
    '<div class="table-wrap"><table class="mx"><thead><tr><th>App</th>' + FEAT.map(function (f) { return '<th>' + f + '</th>'; }).join('') + '</tr></thead><tbody>' +
      COMP.map(function (r) { return '<tr' + (r[2] ? ' class="mx__me"' : '') + '><td>' + r[0] + '</td>' + r[1].map(function (v) { return '<td class="mx__c">' + (v ? '<span class="mx__yes" aria-label="Yes">✓</span>' : '<span class="mx__no" aria-label="No">–</span>') + '</td>'; }).join('') + '</tr>'; }).join('') +
    '</tbody></table></div>', 'Read from the Key features column above. Lists and recipes aren\'t counted as tasks.');
  var flowLane = function (who, tile, items) {
    return '<div class="ufl__lane"><span class="ufl__who ' + tile + '">' + who + '</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') + '<span class="chip">Home</span>' + DOWN.replace('flow__arrow', 'flow__arrow flow__arrow--down') +
      '<div class="ufl__grid">' + items.map(function (i) { return '<div class="ufl__card"><b>' + i[0] + '</b><span>' + i[1] + '</span></div>'; }).join('') + '</div></div>';
  };
  V.famFlow = fig('Two user flows, same features',
    '<div class="ufl">' +
      flowLane('Parent', 'tile-lilac', [['Screen time', 'Set app limits, see trends per child'], ['Location', 'See where family members are'], ['Tasks', 'Create routines, check status'], ['Calendar', 'Manage everyone\'s schedule']]) +
      flowLane('Kid', 'tile-sun', [['Screen time', 'See own usage and limits'], ['Location', 'Share own location'], ['Tasks', 'Complete routines'], ['Calendar', 'See the family schedule']]) +
    '</div>');
  V.famMedia = VIS('3–4 key screens from Figma (e.g. parent home, screen time, tasks, calendar).');

  /* Habit app */
  V.habitDemo = fig('Try it: tap a dot to log a day',
    '<div class="hb" data-hb>' +
      '<div class="hb__bar"><div class="hb__seg" role="group" aria-label="Habit">' + ['Read', 'Workout', 'Water'].map(function (h, i) { return '<button type="button" data-hb-habit="' + i + '" aria-pressed="' + (i === 0) + '">' + h + '</button>'; }).join('') + '</div>' +
      '<div class="hb__seg" role="group" aria-label="Timeframe">' + [['Week', 7], ['Month', 28], ['Quarter', 84]].map(function (t, i) { return '<button type="button" data-hb-range="' + t[1] + '" aria-pressed="' + (i === 1) + '">' + t[0] + '</button>'; }).join('') + '</div></div>' +
      '<div class="hb__grid" data-hb-grid></div>' +
      '<div class="hb__stats"><span><b data-hb-done>0</b> days done</span><span><b data-hb-rate>0%</b> completion</span><span><b data-hb-streak>0</b> day current streak</span></div>' +
    '</div>', 'Sample data. Toggles switch habit and timeframe without a menu, and one tap logs a day, the same rules as the app.');
  V.habitMedia = VIS('screens from Figma: home, widget and stats.');

  /* Kalima Clash */
  var kcRound = function (title, key, alts) {
    return '<div class="kc__round"><span class="viz__title">' + title + '</span><div class="kc__grid">' + alts.map(function (a, i) {
      return '<img src="' + BRAND[key + i] + '" alt="' + title + ' concept: ' + a + '" loading="lazy">';
    }).join('') + '</div></div>';
  };
  V.kcGallery = '<div class="kc">' +
    kcRound('Round 1: concept directions', 'kc1_', ['Bold geometric box in blue, green, orange and gold', 'White tin with a pastel and gold geometric pattern', 'Bright green box with yellow type and sample word cards', 'Dark plum box with a star pattern and a mosque stamp', 'Navy box with a gold and maroon geometric medallion', 'Navy box with a subtle star pattern and gold type']) +
    kcRound('Round 2: sleek and minimal, with geometric patterns', 'kc2_', ['Navy box with a faint star pattern and gold KLASH', 'Plum box with a geometric pattern, a mosque stamp and coral KLASH', 'Blue box with a star pattern, serif type and a gold geometric medallion']) +
    '<div class="kc__round"><span class="viz__title">Final: the production design</span><div class="kc__final">' +
      ['Two finished cards held in hand, Taqwa and Ramadan, each with five forbidden words', 'Final box front: navy with a gold geometric medallion and a gold base band', 'Box and two cards laid flat from above', 'Box back with how-to-play steps and game stats', 'A full deck of cards stacked'].map(function (a, i) {
        return '<img' + (i === 0 ? ' class="kc__hero"' : '') + ' src="' + BRAND['kcf_' + i] + '" alt="Final design: ' + a + '" loading="lazy">';
      }).join('') + '</div></div>' +
    '<div class="kc__round"><span class="viz__title">Final: print dieline</span><div class="kc__die"><img src="' + BRAND.kcDie + '" alt="Flat print dieline of the box showing the front, back with how-to-play, two spines, the lid and the gold base panels" loading="lazy"></div></div>' +
    '</div>';

  /* Attach visuals to sections */
  var addTo = function (list, id, heading, html, replaceFn) {
    var item = list.filter(function (x) { return x.id === id; })[0];
    var arr = item.did || item.sections;
    var sec = arr.filter(function (s) { return s.h === heading; })[0];
    if (!sec) throw new Error('No section ' + id + ' / ' + heading);
    sec.html = replaceFn ? replaceFn(sec.html) : sec.html + html;
  };
  addTo(WORK, 'bobabud', 'Built an outbound funnel with no budget', V.bobaFunnel);
  addTo(WORK, 'bobabud', 'Designed the revenue model', V.bobaMoney);
  addTo(WORK, 'bobabud', 'Cleared compliance', V.bobaCompliance);
  WORK.filter(function (w) { return w.id === 'bobabud'; })[0].problem += shot(BRAND.bobaMachine, 'The BobaBud machine: a white kiosk with a touchscreen menu and a pickup window holding a finished bubble tea', 'The BobaBud machine.', 'shot--machine');
  addTo(WORK, 'bobabud', 'Built an outbound funnel with no budget', shot(BRAND.bobaLanding, 'BobaBud landing page with the headline No lines. Zero baristas. Fresh boba in 60 seconds, a Partner with us button and the machine below', 'The BobaBud landing page.'));
  addTo(WORK, 'turbotax', 'Split the base into 9 segments', V.segMap);
  addTo(WORK, 'turbotax', 'Coordinated 2 agencies and 3 internal teams', '', function (h) { return h.replace('</p>', '</p>' + V.teams); });
  addTo(WORK, 'turbotax', 'Mapped a 13-touchpoint journey across email and in-app', '', function (h) { return h.replace(/<div class="visual-ph"[^>]*>TODO \(visual\): journey map[^<]*<\/div>/, V.journey); });
  addTo(WORK, 'hellofresh', 'Ran 40+ A/B tests across creative, audience and offer', '', function (h) { return h.replace(/<p>A few examples:<\/p><ul>[\s\S]*?<\/ul>/, '') + V.hfAB + shot(BRAND.hfMailer, 'Two HelloFresh Canada voucher cards offering up to 10 free meals plus free shipping and free sides for life, each with a random code and a hellofresh.ca/MAIL link', 'HelloFresh Canada voucher cards using random codes, the winning format from the code test.', 'shot--narrow'); });
  addTo(WORK, 'hellofresh', 'Targeted the right postal codes', V.hfTarget);
  addTo(WORK, 'hellofresh', 'Forecast results in a week', V.hfForecast);
  addTo(WORK, 'hellofresh', 'Found where discount customers dropped off', V.hfDrop);
  addTo(WORK, 'hellofresh', 'Automated the busywork', V.hfPipes);
  addTo(WORK, 'ricoh', 'Mapped content to each stage of the inbound flywheel', '', function () { return V.flywheel; });
  addTo(WORK, 'ricoh', 'Tailored it by persona and industry', V.ricohAssets + V.ricohDots);
  addTo(WORK, 'explorerhop', 'Won back past customers with their own purchase history', V.ehMeter);
  addTo(WORK, 'explorerhop', 'Matched new prospects to the right program', V.ehMatch);
  addTo(WORK, 'explorerhop', 'Tested every part of the email', V.ehTests);
  addTo(WORK, 'rippel', 'Ran 61 validation interviews', '', function () { return V.rippelSplit; });
  addTo(WORK, 'rippel', 'Turned interviews into launch momentum', V.rippelFlow);
  WORK.filter(function (w) { return w.id === 'rippel'; })[0].problem += shot(BRAND.rippelApp, 'The Rippel app home screen on a phone, showing trending politicians, a Log a petition button and a post from a citizen', 'The Rippel app home screen.', 'shot--phone');
  addTo(WORK, 'gofleet', 'Extended the funnel from 3 stages to 5', V.gfFunnels);
  addTo(WORK, 'gofleet', 'Tested messaging, audience and timing', V.gfPersonas);
  addTo(PROJECTS, 'family-app', 'Two user flows', '', function (h) { return h.replace(/<div class="visual-ph"[^>]*>TODO \(visual\): user flow diagram<\/div>/, '') + V.famFlow; });
  V.famScreens = '<div class="screens">' + [['famPhone', 'Screen time', 'Phone Use screen showing 2h 16m of screen time against a 3 hour limit, split by app, with an hourly usage chart'], ['famLoc', 'Location', 'Location screen showing a child on a map with their current address, battery level and recent places'], ['famTasks', 'Tasks', 'Tasks screen showing 2 of 4 tasks done today, with to-do, late and done states'], ['famCal', 'Calendar', 'Calendar day view with swimming, a Quran session and a family dinner']].map(function (s) {
    return '<figure class="screens__item"><img src="' + BRAND[s[0]] + '" alt="' + s[2] + '" loading="lazy"><figcaption>' + s[1] + '</figcaption></figure>';
  }).join('') + '</div>';
  addTo(PROJECTS, 'family-app', 'Main features', V.famScreens);
  addTo(PROJECTS, 'family-app', 'Competitive research', '', function (h) { return h + V.famGrid; });
  addTo(PROJECTS, 'habit-app', 'Design principles', V.habitDemo);
  V.habScreens = '<div class="screens screens--flat">' + [['habToday', 'Today', 'Today view with a habit completion bar at 5 of 10 and habits listed between the day\'s prayer times'], ['habWeek', 'Week', 'Week view with a row of check boxes per habit for Monday to Sunday'], ['habMonth', 'Month', 'Month view with each habit as a calendar of dots, completed days filled in'], ['habStats', 'Stats', 'Analytics screen with a 56% task completion rate and a daily bar chart for the last 7 days']].map(function (s) {
    return '<figure class="screens__item"><img src="' + BRAND[s[0]] + '" alt="' + s[2] + '" loading="lazy"><figcaption>' + s[1] + '</figcaption></figure>';
  }).join('') + '</div>';
  addTo(PROJECTS, 'habit-app', 'Main features', V.habScreens);
  addTo(PROJECTS, 'kalima-clash', 'How the design evolved', V.kcGallery);

  /* Habit demo behaviour */
  var HB = { habit: 0, range: 28, data: [] };
  (function seed() {
    var rates = [0.72, 0.55, 0.85];
    for (var h = 0; h < 3; h++) { var a = [], x = 7 + h * 13; for (var d = 0; d < 84; d++) { x = (x * 9301 + 49297) % 233280; a.push(x / 233280 < rates[h] ? 1 : 0); } HB.data.push(a); }
  })();
  function hbRender(root) {
    var a = HB.data[HB.habit].slice(84 - HB.range), done = a.reduce(function (s, v) { return s + v; }, 0), streak = 0;
    for (var i = a.length - 1; i >= 0 && a[i]; i--) streak++;
    var grid = root.querySelector('[data-hb-grid]');
    grid.className = 'hb__grid hb__grid--' + HB.range;
    grid.innerHTML = a.map(function (v, i) { return '<button type="button" class="hb__dot' + (v ? ' on' : '') + '" data-hb-i="' + (84 - HB.range + i) + '" aria-pressed="' + !!v + '" aria-label="Day ' + (i + 1) + (v ? ', done' : ', not done') + '"></button>'; }).join('');
    root.querySelector('[data-hb-done]').textContent = done;
    root.querySelector('[data-hb-rate]').textContent = Math.round(done / a.length * 100) + '%';
    root.querySelector('[data-hb-streak]').textContent = streak;
    root.querySelectorAll('[data-hb-habit]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-hb-habit') === HB.habit)); });
    root.querySelectorAll('[data-hb-range]').forEach(function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-hb-range') === HB.range)); });
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest && e.target.closest('[data-hb-habit],[data-hb-range],[data-hb-i]');
    if (!t) return;
    var root = t.closest('[data-hb]');
    if (t.hasAttribute('data-hb-habit')) HB.habit = +t.getAttribute('data-hb-habit');
    else if (t.hasAttribute('data-hb-range')) HB.range = +t.getAttribute('data-hb-range');
    else { var i = +t.getAttribute('data-hb-i'); HB.data[HB.habit][i] = HB.data[HB.habit][i] ? 0 : 1; }
    hbRender(root);
  });
  window.__hbInit = function (scope) { var r = scope.querySelector('[data-hb]'); if (r) hbRender(r); };
