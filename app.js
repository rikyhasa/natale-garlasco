(function () {
  "use strict";
  var C = window.CONFIG, E = C.EVENTO, TX = C.TESTI, Codec = window.CodecBabbo;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var ridotto = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var LS = "natale-garlasco-2026-v3";

  /* ---------- stato salvato sul telefono ---------- */
  var S = { nome: null, ok: false, vieni: null, rally: null, nota: "", visto: false };
  try { var raw = JSON.parse(localStorage.getItem(LS) || "null"); if (raw) for (var k in S) if (k in raw) S[k] = raw[k]; } catch (e) {}
  function salva() { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} }
  function ospite() { return S.nome ? C.GUESTS.filter(function (g) { return g.n === S.nome; })[0] : null; }
  if (S.nome && !ospite()) { S.nome = null; S.ok = false; }
  var isRally = function () { var g = ospite(); return !!(g && g.rally); };

  /* ---------- testi ---------- */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function vars() {
    return { nome: esc(S.nome || ""), tetto: E.tetto, quota: E.quota, padrone: E.padrone, km: E.rallyKm, ve: String(C.ALTEZZA_ESAGERATA).replace(".", ","),
             cenaOra: E.cenaOra, rallyOra: E.rallyOra, metodo: esc(C.PAGAMENTO.metodo || "") };
  }
  function fmt(s) { var v = vars(); return String(s).replace(/\{(\w+)\}/g, function (m, k) { return k in v ? v[k] : m; }); }
  function tx(path) { var o = TX; path.split(".").forEach(function (p) { o = o == null ? o : o[p]; }); return o; }
  function testi() {
    $$("[data-t]").forEach(function (el) { var t = tx(el.getAttribute("data-t")); if (typeof t === "string") el.innerHTML = fmt(t); });
    $$("[data-ph]").forEach(function (el) { el.placeholder = tx(el.getAttribute("data-ph")); });
    $("#piede").textContent = TX.piede;
    $("#sTit").innerHTML = fmt(TX.sicuro.titolo);
  }
  function testoPiano(path) { return fmt(tx(path)).replace(/<[^>]+>/g, ""); }

  /* ---------- coriandoli (leggeri, durano 2 secondi) ---------- */
  var cv = $("#cfx"), cx = cv.getContext("2d"), parti = [], cRaf = 0;
  function coriandoli(x, y, n) {
    if (ridotto) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var col = ["#A22B3C", "#E2A93B", "#1E5A43", "#F6ECD8", "#C5DDDF"];
    for (var i = 0; i < (n || 70); i++) {
      var a = Math.random() * Math.PI * 2, v = 5 + Math.random() * 9;
      parti.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6, r: Math.random() * 6, vr: (Math.random() - .5) * .4, w: 5 + Math.random() * 6, h: 3 + Math.random() * 4, c: col[i % col.length], vita: 80 + Math.random() * 40 });
    }
    if (!cRaf) cRaf = requestAnimationFrame(passo);
  }
  function passo() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    parti = parti.filter(function (p) { return p.vita-- > 0 && p.y < innerHeight + 20; });
    parti.forEach(function (p) {
      p.vy += .32; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.globalAlpha = Math.min(1, p.vita / 30); cx.fillStyle = p.c; cx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); cx.restore();
    });
    cRaf = parti.length ? requestAnimationFrame(passo) : 0;
    if (!parti.length) cx.clearRect(0, 0, innerWidth, innerHeight);
  }
  function vibra(ms) { try { if (!ridotto && navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

  /* ---------- neve ---------- */
  (function () {
    var box = $("#neve"); if (ridotto) return;
    for (var i = 0; i < 16; i++) {
      var f = document.createElement("span"), s = 3 + Math.random() * 5;
      f.className = "fiocco"; f.style.cssText = "left:" + (Math.random() * 100) + "%;width:" + s + "px;height:" + s + "px;animation-duration:" + (9 + Math.random() * 12) + "s;animation-delay:-" + (Math.random() * 18) + "s;--dx:" + ((Math.random() - .5) * 90) + "px";
      box.appendChild(f);
    }
  })();

  /* ---------- pagine ---------- */
  var PAGINE = ["chi", "sicuro", "invito", "risposta", "babbo", "quota"];
  function vai(p) { if (location.hash === "#/" + p) mostra(p); else location.hash = "#/" + p; }
  function permessa(p) {
    if (p === "chi") return true;
    if (!S.nome) return "chi";
    if (p === "sicuro") return S.ok ? "invito" : true;
    if (!S.ok) return "sicuro";
    if ((p === "babbo" || p === "quota") && S.vieni !== true) return "risposta";
    return true;
  }
  function mostra(p) {
    if (PAGINE.indexOf(p) < 0) p = S.ok ? "invito" : (S.nome ? "sicuro" : "chi");
    var ok = permessa(p); if (ok !== true) { vai(ok); return; }
    $$(".pg").forEach(function (el) { el.classList.toggle("on", el.getAttribute("data-pg") === p); });
    document.body.classList.toggle("neve-on", p !== "invito");
    window.scrollTo(0, 0);
    if (p === "sicuro") preparaSicuro();
    if (p === "invito") preparaInvito();
    if (p === "risposta") preparaRisposta();
    if (p === "babbo") preparaBabbo();
    if (p === "quota") preparaQuota();
  }
  window.addEventListener("hashchange", function () { mostra(location.hash.replace(/^#\//, "")); });

  /* ---------- 1 · tu chi sei ---------- */
  var nomiBox = $("#nomi");
  C.GUESTS.slice().sort(function (a, b) { return a.n.localeCompare(b.n, "it"); }).forEach(function (g) {
    var b = document.createElement("button"); b.type = "button"; b.className = "chip"; b.textContent = g.n;
    b.addEventListener("click", function () {
      $("#ritorno").hidden = true;
      if (S.nome !== g.n) { S.nome = g.n; S.ok = false; S.vieni = null; S.rally = null; S.nota = ""; S.visto = false; }
      salva(); testi(); vai("sicuro");
    });
    nomiBox.appendChild(b);
  });
  $("#fuoriLista").addEventListener("click", function () { $("#fuoriRisp").hidden = false; this.hidden = true; });

  /* ---------- 2 · sicuro sicuro (il Sì scappa) ---------- */
  var si = $("#si"), no = $("#no"), slot = $("#slotSi"), presa = $("#presa"), fughe = 0, ultimaFuga = 0, accettato = false;
  function preparaSicuro() {
    if (S.ok) { vai("invito"); return; }
    fughe = 0; accettato = false; si.classList.remove("fugge"); si.style.cssText = ""; slot.style.cssText = ""; presa.textContent = "";
    $("#sicuroBox").hidden = false; $("#rivela").hidden = true; testi();
  }
  function scappa() {
    ultimaFuga = Date.now();
    var r = si.getBoundingClientRect(), rn = no.getBoundingClientRect(), vw = innerWidth, vh = innerHeight;
    if (!si.classList.contains("fugge")) {
      slot.style.width = r.width + "px"; slot.style.height = r.height + "px";
      si.style.width = r.width + "px"; si.style.left = r.left + "px"; si.style.top = r.top + "px";
      si.classList.add("fugge"); void si.offsetWidth;
    }
    var x, y, ok = false, tent = 0;
    while (!ok && tent++ < 40) {
      x = 14 + Math.random() * Math.max(1, vw - r.width - 28); y = 90 + Math.random() * Math.max(1, vh - r.height - 120);
      var lontano = Math.hypot(x - r.left, y - r.top) > Math.min(150, vw * .4);
      var libero = x + r.width < rn.left - 12 || x > rn.right + 12 || y + r.height < rn.top - 12 || y > rn.bottom + 12;
      ok = lontano && libero;
    }
    si.style.left = x + "px"; si.style.top = y + "px"; si.style.transform = "rotate(" + ((Math.random() - .5) * 16).toFixed(1) + "deg)";
    presa.textContent = TX.sicuro.fughe[Math.min(fughe, TX.sicuro.fughe.length - 1)];
    fughe++; vibra(15);
  }
  document.addEventListener("pointermove", function (e) {
    if (!$("#p-sicuro").classList.contains("on") || accettato || e.pointerType !== "mouse" || fughe >= C.FUGHE_MAX || Date.now() - ultimaFuga < 450) return;
    var r = si.getBoundingClientRect();
    if (e.clientX > r.left - 55 && e.clientX < r.right + 55 && e.clientY > r.top - 45 && e.clientY < r.bottom + 45) scappa();
  });
  si.addEventListener("click", function () {
    if (accettato) return;
    if (fughe < C.FUGHE_MAX) { scappa(); return; }
    accettato = true; presa.textContent = TX.sicuro.preso; si.style.transform = "rotate(0)"; S.ok = true; salva(); vibra(30);
    var r = si.getBoundingClientRect(); coriandoli(r.left + r.width / 2, r.top, 40);
    setTimeout(rivela, 900);
  });
  no.addEventListener("click", function () {
    var vecchio = S.nome; S.nome = null; S.ok = false; salva();
    var rit = $("#ritorno"); rit.hidden = false; rit.textContent = TX.chi.ritorno.replace("{nome}", vecchio);
    $("#fuoriRisp").hidden = true; $("#fuoriLista").hidden = false; vai("chi");
  });
  function rivela() {
    $("#sicuroBox").hidden = true; var r = $("#rivela"); r.hidden = false;
    $("#rvH").textContent = E.titolo; $("#rvD").textContent = E.data;
    var t = $("#rvTit"), b = $("#apri"); t.classList.remove("timbra"); b.classList.remove("si");
    window.scrollTo(0, 0);
    setTimeout(function () { t.classList.add("timbra"); vibra(40); coriandoli(innerWidth / 2, innerHeight * .45, 90); }, ridotto ? 0 : 1300);
    setTimeout(function () { b.classList.add("si"); }, ridotto ? 0 : 2100);
  }
  $("#apri").addEventListener("click", function () { vai("invito"); });

  /* ---------- 3 · l'invito ---------- */
  var mappa = null, mappaCarica = false, stopSel = 0;
  function preparaInvito() {
    testi();
    var g = ospite(); $("#whoName").textContent = S.nome;
    $("#tier").textContent = isRally() ? TX.invito.etRally : TX.invito.etCena;
    $("#heroT").textContent = E.titolo; $("#heroD").textContent = E.data;
    $("#lede").textContent = isRally() ? TX.invito.ledeRally : TX.invito.ledeCena;
    var f = [["fattiDove", "fattiDoveVal"], ["fattiCena", "fattiCenaVal"]];
    if (isRally()) f.push(["fattiRally", "fattiRallyVal"]);
    f.push(["fattiSiamo", null], ["fattiQuota", "fattiQuotaVal"]);
    $("#fatti").innerHTML = f.map(function (p) {
      var v = p[1] ? fmt(TX.invito[p[1]]) : esc(E.siamo);
      return '<div class="fatto"><dt>' + TX.invito[p[0]] + "</dt><dd>" + v + "</dd></div>";
    }).join("");
    $("#rally").hidden = !isRally();
    $("#rallyIntro").innerHTML = fmt(TX.invito.rallyIntro);
    $("#cenaIntro").innerHTML = fmt(TX.invito.cenaIntro);
    $("#scaletta").innerHTML = TX.invito.scaletta.map(function (r) {
      return '<li><span class="h">' + esc(r.h) + '</span><span><span class="t">' + esc(r.t) + '</span><span class="d">' + esc(r.d) + "</span></span></li>";
    }).join("");
    $("#gmaps").href = C.LINK_MAPS;
    $("#esagero").textContent = testoPiano("invito.mappaEsagero");
    if (isRally()) { costruisciLista(); preparaMappa(); }
  }
  $("#nonSei").addEventListener("click", function () { S.nome = null; S.ok = false; S.vieni = null; S.rally = null; S.nota = ""; S.visto = false; salva(); vai("chi"); });
  $("#vaiRisposta").addEventListener("click", function () { vai("risposta"); });

  function costruisciLista() {
    var ol = $("#lista"); ol.innerHTML = "";
    C.STOPS.forEach(function (s, i) {
      var li = document.createElement("li"), b = document.createElement("button"); b.type = "button";
      b.innerHTML = '<span class="n">' + (i + 1) + '</span><span class="h">' + esc(s.h) + '</span><span><span class="nm">' + esc(s.n) + '</span><span class="ds">' + esc(s.tipo || "") + "</span></span>";
      b.addEventListener("click", function () { scegliTappa(i, true); });
      li.appendChild(b); ol.appendChild(li);
    });
    mostraDettaglio(stopSel);
  }
  function mostraDettaglio(i) {
    stopSel = i; var s = C.STOPS[i];
    $$("#lista li").forEach(function (li, n) { li.classList.toggle("sel", n === i); });
    var h = '<div class="t"><h3>' + esc(s.n) + '</h3><span class="h">' + esc(s.h) + "</span>" + (s.tipo ? '<span class="tipo">' + esc(s.tipo) + "</span>" : "") + "</div><p>" + esc(s.d) + "</p>";
    if (s.vista && C.VARZI_FOTO) h += '<img src="' + esc(C.VARZI_FOTO) + '" alt="Varzi" loading="lazy">';
    if (s.vista && mappa && mappa.webgl) h += '<button type="button" class="btn picc oro" id="bVista">' + TX.invito.mappaVista + "</button>";
    $("#dett").innerHTML = h;
    var bv = $("#bVista"); if (bv) bv.addEventListener("click", function () { mappa.vista(i); $("#mScena").scrollIntoView({ block: "center", behavior: ridotto ? "auto" : "smooth" }); });
  }
  function scegliTappa(i, scorri) {
    mostraDettaglio(i);
    if (mappa) mappa.vai(i);
    if (scorri) $("#mappaBox").scrollIntoView({ block: "start", behavior: ridotto ? "auto" : "smooth" });
  }
  function caricaScript(src, cb, err) { var s = document.createElement("script"); s.src = src; s.onload = cb; s.onerror = err || function () {}; document.head.appendChild(s); }
  function preparaMappa() {
    if (mappaCarica) return; mappaCarica = true;
    var box = $("#mappaBox");
    function parti() {
      caricaScript("terreno.js?v=3", function () {
        caricaScript("assets/mappa.js?v=3", function () {
          var gl = $("#bGuida"), mu = $("#bMuovi");
          gl.textContent = TX.invito.mappaGuida; mu.textContent = TX.invito.mappaMuovi; mu.setAttribute("aria-pressed", "false");
          mappa = MappaNatale.init({
            terreno: window.TERRENO, stops: C.STOPS, caldo: [C.STRADE_BELLE[0] - 1, C.STRADE_BELLE[1] - 1],
            ve: C.ALTEZZA_ESAGERATA, durata: C.DURATA_GUIDA_SEC, reduced: ridotto,
            canvasBox: $("#mScena"), pinsEl: $("#pins"), profiloCanvas: $("#profilo"),
            onSel: function (i) { mostraDettaglio(i); },
            onClock: function (t) { $("#orologio").textContent = t; },
            onMode: function (on) { mu.textContent = on ? TX.invito.mappaFatto : TX.invito.mappaMuovi; mu.setAttribute("aria-pressed", on ? "true" : "false"); if (on) $("#mHint").classList.add("via"); },
            onGuida: function (on) { gl.textContent = on ? TX.invito.mappaFerma : TX.invito.mappaGuida; if (on) $("#mHint").classList.add("via"); },
            onFallback: function () { $("#mScena").classList.add("senza3d"); $("#noGl").hidden = false; $("#mHint").hidden = true; $("#mBar").hidden = true; $(".mappa-top").hidden = true; }
          });
          gl.onclick = function () { mappa.guida(); if (mappa.webgl) $("#mappaBox").scrollIntoView({ block: "start", behavior: ridotto ? "auto" : "smooth" }); };
          mu.onclick = function () { mappa.muovi(mu.getAttribute("aria-pressed") !== "true"); };
          $("#bAlto").onclick = function () { mappa.dallAlto(); };
          mostraDettaglio(stopSel);
        }, fallbackMappa);
      }, fallbackMappa);
    }
    function fallbackMappa() { mappaCarica = false; $("#noGl").hidden = false; $("#mScena").classList.add("senza3d"); }
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { io.disconnect(); parti(); } }, { rootMargin: "500px" });
      io.observe(box);
    } else parti();
  }

  /* ---------- 4 · vieni o no ---------- */
  var vSi = $("#vSi"), vNo = $("#vNo"), rSi = $("#rSi"), rNo = $("#rNo"), notaEl = $("#nota");
  function press(el, on) { el.setAttribute("aria-pressed", on ? "true" : "false"); }
  function messaggio() {
    var L = [], R = TX.risposta;
    if (S.vieni === false) L.push(fmt(R.msgNo));
    else if (isRally()) L.push(fmt(S.rally === true ? R.msgSi : S.rally === false ? R.msgSiSoloCena : R.msgSiRallyDopo));
    else L.push(fmt(R.msgSiCena));
    if (S.nota.trim()) L.push(R.msgNotaPre + S.nota.trim());
    return L.join("\n").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
  }
  function preparaRisposta() { testi(); notaEl.value = S.nota || ""; aggiornaRisposta(); }
  function aggiornaRisposta() {
    press(vSi, S.vieni === true); press(vNo, S.vieni === false); press(rSi, S.rally === true); press(rNo, S.rally === false);
    $("#rallyQ").hidden = !(S.vieni === true && isRally());
    $("#notaFld").hidden = S.vieni === null; $("#invio").hidden = S.vieni === null;
    $("#peccato").hidden = S.vieni !== false;
    var pronto = S.vieni === true && (!isRally() || S.rally !== null);
    $("#vaiBabbo").hidden = !pronto;
    if (S.vieni !== null) $("#anteprima").textContent = messaggio();
    var wa = $("#wa"); if (C.TEL && C.TEL.indexOf("_") !== 0) { wa.hidden = false; wa.href = "https://wa.me/" + C.TEL + "?text=" + encodeURIComponent(messaggio()); $("#copia").classList.remove("verde"); }
    salva();
  }
  vSi.addEventListener("click", function () { S.vieni = true; aggiornaRisposta(); });
  vNo.addEventListener("click", function () { S.vieni = false; S.rally = null; aggiornaRisposta(); });
  rSi.addEventListener("click", function () { S.rally = true; aggiornaRisposta(); });
  rNo.addEventListener("click", function () { S.rally = false; aggiornaRisposta(); });
  notaEl.addEventListener("input", function () { S.nota = this.value; aggiornaRisposta(); });
  $("#copia").addEventListener("click", function () {
    var t = messaggio(), ok = function () { $("#toast").textContent = TX.risposta.msgCopiato; };
    var man = function () { var r = document.createRange(); r.selectNodeContents($("#anteprima")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); $("#toast").textContent = TX.risposta.msgManuale; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(ok, man); else man();
  });
  $("#vaiBabbo").addEventListener("click", function () { vai("babbo"); });

  /* ---------- 5 · babbo natale segreto (la ruota) ---------- */
  function norm(s) { return Codec.norm(s); }
  function esiste(n) { return C.GUESTS.filter(function (g) { return norm(g.n) === norm(n); })[0]; }
  function mioBersaglio() {
    var Sx = window.SORTEGGIO; if (!Sx || !S.nome) return null;
    var rit = (C.RITIRATI || []).map(norm), da = S.nome, t = null, giri = 0;
    do {
      t = Codec.decifra(Sx.s, da, Sx.m[Codec.chiave(Sx.s, da)] || "");
      if (!t || !esiste(t)) return null;
      da = t; giri++;
    } while (rit.indexOf(norm(t)) >= 0 && giri < 40 && norm(t) !== norm(S.nome));
    return esiste(t).n;
  }
  var ruota = $("#ruota"), ptr = $("#ptr"), gradi = 0, giraInCorso = false, voci = [];
  function costruisciRuota() {
    var rit = (C.RITIRATI || []).map(norm);
    voci = C.GUESTS.filter(function (g) { return g.n !== S.nome && rit.indexOf(norm(g.n)) < 0; }).map(function (g) { return g.n; });
    var n = voci.length, seg = 360 / n, cxy = 160, r = 152, pal = [["#A22B3C", "#fff"], ["#1E5A43", "#fff"], ["#E2A93B", "#1D2A23"], ["#F6ECD8", "#1D2A23"]];
    function pt(a, rr) { var t = a * Math.PI / 180; return [(cxy + rr * Math.sin(t)).toFixed(2), (cxy - rr * Math.cos(t)).toFixed(2)]; }
    var h = '<g id="rg">';
    voci.forEach(function (nome, i) {
      var a0 = i * seg, a1 = (i + 1) * seg, p0 = pt(a0, r), p1 = pt(a1, r), c = pal[i % 4], mid = (a0 + a1) / 2;
      h += '<path d="M160 160L' + p0[0] + " " + p0[1] + "A" + r + " " + r + " 0 0 1 " + p1[0] + " " + p1[1] + 'Z" fill="' + c[0] + '" stroke="#1D2A23" stroke-width="2"/>';
      var lab = nome.length > 12 ? nome.slice(0, 11) + "…" : nome;
      h += '<text transform="rotate(' + (mid - 90).toFixed(2) + ' 160 160)" x="' + (160 + r - 12) + '" y="160" dy=".34em" text-anchor="end" fill="' + c[1] + '" font-family="Karla,sans-serif" font-weight="800" font-size="' + (n > 16 ? 12.5 : 14.5) + '">' + esc(lab) + "</text>";
    });
    h += '</g><circle cx="160" cy="160" r="152" fill="none" stroke="#1D2A23" stroke-width="4"/><circle cx="160" cy="160" r="26" fill="#F6ECD8" stroke="#1D2A23" stroke-width="3"/><text x="160" y="160" dy=".36em" text-anchor="middle" font-family="Fraunces,serif" font-weight="900" font-size="22" fill="#A22B3C">19</text>';
    ruota.innerHTML = h;
    ruota._seg = seg;
  }
  function ruotaA(g) { gradi = g; var el = ruota.querySelector("#rg"); if (el) el.setAttribute("transform", "rotate(" + g.toFixed(2) + " 160 160)"); }
  function settoreSotto(g) { var a = ((-g % 360) + 360) % 360; return Math.floor(a / ruota._seg); }
  var flick = 0;
  function gira(bersaglio, fine, veloce) {
    var i = voci.indexOf(bersaglio); if (i < 0) { fine && fine(); return; }
    var seg = ruota._seg, jit = (Math.random() - .5) * seg * .6, tgt = -((i + .5) * seg + jit);
    var base = (((tgt - gradi) % 360) + 360) % 360, fin = gradi + 360 * (veloce ? 1 : 5) + base, ini = gradi, dur = veloce ? 1 : 5600;
    if (ridotto) { ruotaA(fin); fine && fine(); return; }
    var t0 = performance.now(), ultimo = settoreSotto(ini);
    giraInCorso = true;
    (function f(now) {
      var t = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - t, 4);
      ruotaA(ini + (fin - ini) * e);
      var s = settoreSotto(gradi); if (s !== ultimo) { ultimo = s; flick = 1; if (t < .93) vibra(7); }
      flick *= .86; ptr.style.transform = "rotate(" + (-flick * 22).toFixed(1) + "deg)";
      if (t < 1) requestAnimationFrame(f); else { giraInCorso = false; ptr.style.transform = ""; fine && fine(); }
    })(t0);
  }
  function mostraRisultato(nome, festa) {
    $("#bersaglio").textContent = nome; $("#risultato").hidden = false; $("#chiusuraBabbo").hidden = false; $("#vaiQuota").hidden = false;
    $("#estrai").hidden = true; S.visto = true; salva();
    if (festa) { var r = $("#risultato").getBoundingClientRect(); coriandoli(innerWidth / 2, Math.max(120, r.top), 90); vibra([30, 40, 60]); }
  }
  function preparaBabbo() {
    testi();
    $("#regole").innerHTML = TX.babbo.regole.map(function (r) { return "<li><span>" + fmt(r) + "</span></li>"; }).join("");
    costruisciRuota(); ruotaA(0);
    var b = mioBersaglio(), btn = $("#estrai");
    $("#risultato").hidden = true; $("#chiusuraBabbo").hidden = true; $("#vaiQuota").hidden = true; btn.hidden = false; btn.disabled = false; btn.textContent = TX.babbo.estrai;
    if (!b) { btn.hidden = true; $("#risultato").hidden = false; $("#bersaglio").textContent = "Qualcosa non quadra: scrivi a Riccardo."; return; }
    if (S.visto) { gira(b, function () { mostraRisultato(b, false); }, true); }
    btn.onclick = function () {
      if (giraInCorso) return; btn.disabled = true; btn.textContent = TX.babbo.giro;
      gira(b, function () { btn.disabled = false; mostraRisultato(b, true); });
    };
    $("#rigira").onclick = function () {
      if (giraInCorso) return; $("#risultato").hidden = true; $("#chiusuraBabbo").hidden = true;
      gira(b, function () { mostraRisultato(b, true); });
    };
  }
  $("#vaiQuota").addEventListener("click", function () { vai("quota"); });

  /* ---------- 6 · la quota ---------- */
  function preparaQuota() {
    testi();
    var u = C.PAGAMENTO.url, p = $("#paga");
    if (u) { p.hidden = false; p.href = u; p.innerHTML = fmt(TX.quota.paga); $("#pagaDopo").hidden = true; }
    else { p.hidden = true; $("#pagaDopo").hidden = false; }
    coriandoli(innerWidth / 2, innerHeight * .8, 40);
  }
  $("#riapri").addEventListener("click", function () { vai("invito"); });

  /* ---------- avvio ---------- */
  testi();
  mostra(location.hash.replace(/^#\//, "") || (S.ok ? "invito" : (S.nome ? "sicuro" : "chi")));
})();
