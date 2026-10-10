/* @ds-bundle: {"format":4,"namespace":"Ameen","components":[]} */
/* Ameen Portfolio — icon set and two small helpers. No framework required. */
(function () {
  var P = {"arrow-up-right": "<path d=\"M7 17 17 7\"/><path d=\"M7 7h10v10\"/>", "arrow-right": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>", "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>", "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>", "book": "<path d=\"M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z\"/><path d=\"M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z\"/>", "box": "<path d=\"M21 8 12 3 3 8v8l9 5 9-5z\"/><path d=\"m3 8 9 5 9-5\"/><path d=\"M12 13v8\"/>", "calendar": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2.5\"/><path d=\"M16 2v4M8 2v4M3 10h18\"/>", "calendar-plus": "<path d=\"M21 13V6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v13A2.5 2.5 0 0 0 5.5 22H12\"/><path d=\"M16 2v4M8 2v4M3 10h18M19 16v6M16 19h6\"/>", "home": "<path d=\"M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z\"/>", "grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1.5\"/>", "user": "<circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0\"/>", "briefcase": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2.5\"/><path d=\"M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/><path d=\"M2 13h20\"/>", "layers": "<path d=\"m12 2 10 5-10 5L2 7z\"/><path d=\"m2 17 10 5 10-5\"/><path d=\"m2 12 10 5 10-5\"/>", "mail": "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2.5\"/><path d=\"m22 7-10 6L2 7\"/>", "check": "<path d=\"M20 6 9 17l-5-5\"/>", "map-pin": "<path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>", "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/><path d=\"M12 15V3\"/>", "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2.5\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/>", "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><path d=\"M14 2v6h6M16 13H8M16 17H8M10 9H8\"/>", "play": "<path d=\"M7 4.5v15l12.5-7.5z\"/>", "clock": "<circle cx=\"12\" cy=\"12\" r=\"9.5\"/><path d=\"M12 7v5l3 2\"/>", "sparkle": "<path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18\"/>"};
  function icon(name, size) {
    var p = P[name]; if (!p) return "";
    var s = size || 20;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
  }
  function hydrate(root) {
    root = root || document;
    var els = root.querySelectorAll("[data-icon]");
    for (var i = 0; i < els.length; i++) { els[i].innerHTML = icon(els[i].getAttribute("data-icon"), +els[i].getAttribute("data-size") || 0); }
    var clocks = root.querySelectorAll("[data-clock]");
    for (var j = 0; j < clocks.length; j++) startClock(clocks[j]);
  }
  function startClock(el) {
    var tz = el.getAttribute("data-clock") || "America/Toronto";
    var f = new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true, timeZone: tz });
    var t = document.createTextNode("");
    el.insertBefore(t, el.firstChild);
    var tick = function () { t.nodeValue = f.format(new Date()); };
    tick(); setInterval(tick, 1000);
  }
  window.Ameen = { icons: Object.keys(P), icon: icon, hydrate: hydrate };
})();
