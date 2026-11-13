/* Codifica leggera delle coppie del Babbo Natale segreto.
   Non è crittografia: serve solo a non rendere i nomi leggibili a occhio nel sorgente. */
(function (g) {
  function norm(s) { return String(s).trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function fnv(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function mulberry(a) { return function () { a = (a + 0x6D2B79F5) | 0; var t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function chiave(salt, dator) { return fnv(salt + "|" + norm(dator)).toString(36); }
  function flusso(salt, dator, n) { var r = mulberry(fnv(salt + "#" + norm(dator))), o = []; for (var i = 0; i < n; i++) o.push(Math.floor(r() * 256)); return o; }
  function utf8(s) { return unescape(encodeURIComponent(s)); }
  function deutf8(s) { return decodeURIComponent(escape(s)); }
  function b64(s) { return typeof btoa === "function" ? btoa(s) : Buffer.from(s, "binary").toString("base64"); }
  function unb64(s) { return typeof atob === "function" ? atob(s) : Buffer.from(s, "base64").toString("binary"); }
  function cifra(salt, dator, ricevente) {
    var b = utf8(ricevente), k = flusso(salt, dator, b.length), o = "";
    for (var i = 0; i < b.length; i++) o += String.fromCharCode(b.charCodeAt(i) ^ k[i]);
    return b64(o);
  }
  function decifra(salt, dator, testo) {
    try {
      var b = unb64(testo), k = flusso(salt, dator, b.length), o = "";
      for (var i = 0; i < b.length; i++) o += String.fromCharCode(b.charCodeAt(i) ^ k[i]);
      return deutf8(o);
    } catch (e) { return null; }
  }
  g.CodecBabbo = { norm: norm, chiave: chiave, cifra: cifra, decifra: decifra };
})(typeof window !== "undefined" ? window : globalThis);
