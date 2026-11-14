/* =====================================================================
   NATALE A GARLASCO — QUI SI CAMBIA TUTTO
   Questo è l'unico file che devi toccare per nomi, cifre, link e frasi.
   Dentro i testi puoi usare:  {nome}  {tetto}  {quota}  e il tag <em>…</em>.
   ===================================================================== */
window.CONFIG = {

  /* ---------- DATI DELL'EVENTO ---------- */
  EVENTO: {
    titolo: "Natale a Garlasco",
    data: "sabato 19 dicembre 2026",
    luogo: "Garlasco (PV)",
    padrone: "Ludo",
    cenaOra: "20:00",
    rallyOra: "08:30",
    rallyKm: "circa 215 km",        /* calcolato sul percorso vero: 213 km da Assago a Garlasco */
    rallyLuogo: "casello di Assago",
    quota: 50,                       /* € a testa, cibo e bere */
    tetto: 25,                       /* € massimi per il regalo del Babbo Natale segreto */
    siamo: "una ventina"
  },

  /* ---------- WHATSAPP E PAGAMENTO ---------- */
  TEL: "393926369994",               /* numero con prefisso, senza + e senza spazi */
  PAGAMENTO: {
    metodo: "PayPal",                /* testo sul bottone */
    url: ""                          /* es: https://paypal.me/tuonome/50   (vuoto = "ti mando il link io") */
  },

  /* ---------- INVITATI ----------
     rally:true  = giornata intera (rally + cena)
     rally:false = solo cena
     I "+1" sono segnaposto: quando sai i nomi veri, sostituiscili (es. "Gialle +1" -> "Marta").
     Se cambi un nome va rifatto il sorteggio (lo faccio io). */
  GUESTS: [
    { n: "Riccardo", rally: true },
    { n: "Ludo", rally: true },
    { n: "Tony", rally: true },
    { n: "Nic", rally: false },
    { n: "Franco", rally: true },
    { n: "Laura", rally: true },
    { n: "Benni", rally: true },
    { n: "Guglie", rally: false },
    { n: "Tamara", rally: false },
    { n: "Defe", rally: true },
    { n: "Matilde", rally: true },
    { n: "Lello", rally: true },
    { n: "Gialle", rally: true },
    { n: "Gialle +1", rally: true },
    { n: "Andre", rally: true },
    { n: "Andre +1", rally: true },
    { n: "Tommy", rally: true },
    { n: "Tommy +1", rally: true },
    { n: "Bruno", rally: false },
    { n: "Bruno +1", rally: false }
  ],

  /* Coppie che NON devono pescarsi (usato solo quando si rifà il sorteggio) */
  COPPIE_VIETATE: [
    ["Defe", "Matilde"],
    ["Gialle", "Gialle +1"],
    ["Andre", "Andre +1"],
    ["Tommy", "Tommy +1"],
    ["Bruno", "Bruno +1"],
    ["Riccardo", "Laura"],
    ["Guglie", "Tamara"],
    ["Franco", "Benni"]
  ],

  /* Se qualcuno rinuncia al Babbo Natale segreto, scrivi qui il suo nome:
     chi doveva fare il regalo a lui lo farà a chi lui avrebbe dovuto fare il regalo. */
  RITIRATI: [],

  /* ---------- COMPORTAMENTO ---------- */
  FUGHE_MAX: 2,                      /* quante volte il "Sì" scappa prima di farsi prendere */
  ALTEZZA_ESAGERATA: 2.6,            /* quanto sono gonfiati i dislivelli sulla mappa 3D */
  DURATA_GUIDA_SEC: 40,              /* quanto dura il giro della macchinina sulla mappa */
  LINK_MAPS: "https://www.google.com/maps/dir/45.397,9.149/45.0160,9.1286/44.9060,9.1005/44.9212,9.1839/44.9311,9.1935/44.8580,9.3720/44.8020,9.3300/44.8234,9.1979/45.1953,8.9251/",

  /* ---------- LE TAPPE DEL RALLY ----------
     lon/lat servono alla mappa. "strade belle" = dalla tappa 2 alla 8 (numeri umani). */
  STRADE_BELLE: [2, 8],
  STOPS: [
    { h: "08:30", n: "Casello di Assago",    lon: 9.149,  lat: 45.397, tipo: "Partenza",
      d: "Ritrovo al casello di Assago: tutti passate da lì per scendere, quindi è il punto più comodo. Caffè al volo e si parte. Chi arriva dopo le 8:45 insegue, e se lo ricorda tutto il giorno." },
    { h: "09:45", n: "Casteggio",            lon: 9.1286, lat: 45.0160, tipo: "Fine pianura",
      d: "Qui finisce la pianura e iniziano le cose belle. Fin qui è solo trasferimento: si va in autostrada come persone civili." },
    { h: "10:30", n: "Rocca Susella",        lon: 9.1005, lat: 44.9060, tipo: "Prima salita",
      d: "La prima salita vera: tornanti stretti tra i vigneti, con il castello che compare e sparisce. Stomaco avvisato." },
    { h: "11:15", n: "Fortunago",            lon: 9.1839, lat: 44.9212, tipo: "Caffè e foto",
      d: "Borgo di pietra in cima al cucuzzolo, tra i più belli d'Italia. Sosta caffè e foto alle macchine (alle macchine, non a voi)." },
    { h: "11:40", n: "Borgoratto Mormorolo", lon: 9.1935, lat: 44.9311, tipo: "Crinale",
      d: "Strada di crinale: campi da una parte, valle dall'altra e quasi nessuno davanti. Qui il rally diventa un po' rally." },
    { h: "12:15", n: "Romagnese",            lon: 9.3720, lat: 44.8580, tipo: "Val Tidone",
      d: "Si entra in Val Tidone e si attacca il Penice dal lato stretto e tortuoso, nel bosco. Asfalto meno regolare: se è bagnato, prudenza." },
    { h: "12:45", n: "Passo del Penice",     lon: 9.3300, lat: 44.8020, tipo: "1.149 m",
      d: "1.149 metri, il punto più alto della giornata. Si scende dall'altro versante, così non rifacciamo la stessa strada (siamo ambiziosi, non scemi)." },
    { h: "13:15", n: "Varzi",                lon: 9.1979, lat: 44.8234, tipo: "Pranzo", vista: true,
      d: "Pranzo, un'ora e mezza abbondante. Varzi è famosa per il salame, e per ottimi motivi. La trattoria è ancora da prenotare: se avete richieste, parlate ora." },
    { h: "15:50", n: "Garlasco",             lon: 8.9251, lat: 45.1953, tipo: "Arrivo",
      d: "Arrivo da {padrone}, con la luce (il sole tramonta alle 16:38). Chi vuole resta qui per la giornata e si mette a cucinare con noi. Chi preferisce torna a casa, si fa una doccia e ritorna per la cena." }
  ],

  /* foto della vista di Varzi (facoltativa): metti il file in /assets e scrivi il percorso, es. "assets/varzi.jpg" */
  VARZI_FOTO: "",

  /* ---------- TUTTE LE FRASI ---------- */
  TESTI: {
    chi: {
      sopra: "Alt.",
      titolo: "Tu chi sei?",
      sotto: "Ci conosciamo? Questo invito è personale e non lo mostro a chiunque.",
      scegli: "Tocca il tuo nome:",
      fuoriLista: "Non sono in lista",
      fuoriListaRisposta: "E allora cosa ci fai qui? Scrivi a Riccardo: o c'è stato un errore, o sei entrato di soppiatto.",
      ritorno: "Allora non sei {nome}. Riprova, e stavolta dimmi la verità."
    },
    sicuro: {
      titolo: "{nome}… sicuro sicuro che sei tu?",
      sotto: "Guarda che poi se è uno scherzo mi arrabbio.",
      si: "Sì, sono io",
      no: "No",
      fughe: [
        "Eh no, troppo in fretta. Sicuro sicuro?",
        "Sul serio? Guarda che ti tengo d'occhio."
      ],
      preso: "Dai, scherzavo. Prendimi pure.",
      dopo: "Dai, va bene. Allora sei invitato a…",
      apri: "Vediamo il programma"
    },
    invito: {
      per: "Invito per",
      nonSei: "non sei tu?",
      etRally: "Giornata intera · rally + cena",
      etCena: "Serata · solo cena",
      ledeRally: "Si parte all'alba con le macchine e si finisce a tavola. Sì, hai letto bene: all'alba. Ti sveglieremo con affetto.",
      ledeCena: "Per te niente sveglia: arrivi alle 20, fresco come una rosa, e trovi gli altri già provati dal rally.",
      fattiDove: "Dove", fattiCena: "Cena", fattiRally: "Rally", fattiSiamo: "Siamo",
      fattiDoveVal: "Garlasco (PV), da {padrone}",
      fattiCenaVal: "dalle {cenaOra}",
      fattiRallyVal: "ritrovo {rallyOra}, casello di Assago",
      rallyEt: "la mattina",
      rallyTitolo: "Il rally",
      rallyIntro: "Si parte dal casello di Assago, che tanto ci passate tutti per scendere, e si va giù nell'Oltrepò Pavese: vigneti, borghi sul cucuzzolo, tornanti e il Passo del Penice a 1.149 metri. {km} di strada, pranzo a Varzi e arrivo a Garlasco prima del buio. Non è una gara. È una gara, ma finta.",
      rallyFineTit: "E a fine rally?",
      rallyFine: "Si finisce a Garlasco da {padrone}. Chi vuole <b>resta per la giornata</b> e si mette a cucinare con noi. Chi preferisce <b>torna a casa</b>, si fa una doccia e ritorna per la cena alle {cenaOra}. Va bene tutto, basta dirlo qui sotto.",
      mappaMuovi: "Muovi la mappa",
      mappaFatto: "Fatto, fammi scorrere",
      mappaGuida: "Guida",
      mappaFerma: "Ferma",
      mappaAlto: "Dall'alto",
      mappaVista: "La vista da Varzi",
      mappaEsagero: "Dislivelli ×{ve}: nella realtà sono un po' meno cattivi.",
      mappaHint: "Tocca un numero per volare lì. Muovi la mappa per girarla.",
      profilo: "Profilo altimetrico: tocca e trascina per scorrere la giornata.",
      noGl: "Il telefono non vuole saperne del 3D. Ti lascio il profilo e l'elenco delle tappe, che dicono le stesse cose.",
      tappeTitolo: "Le tappe",
      maps: "Aprilo in Google Maps",
      regole: "Si va in colonna ma senza fare i fenomeni: chi resta indietro ritrova tutti alla tappa dopo. A dicembre il Penice può avere neve, e se il fondo è bagnato cambiamo versante di salita.",
      cenaEt: "la sera",
      cenaTitolo: "La cena",
      cenaIntro: "Dalle {cenaOra} a casa di {padrone}: cucina enorme, più forni che persone ragionevoli. Cuciniamo noi, voi mangiate e fate i complimenti. Il menu lo stiamo chiudendo: un primo della tradizione, risotto <em>oppure</em> polenta con spezzatino o salsiccia, più piatti natalizi. I dolci arrivano a turno.",
      scaletta: [
        { h: "20:00", t: "Si arriva", d: "Bollicine e qualcosa da sgranocchiare mentre finisce di cuocere." },
        { h: "21:00", t: "A tavola", d: "Primo caldo, secondo, contorni. Nessuno si alza finché non lo dice il cuoco." },
        { h: "23:00", t: "Dolci e Babbo Natale segreto", d: "Il momento per cui vale la pena restare svegli." },
        { h: "dopo",  t: "Si vedrà", d: "Carte, musica. Chi vuole dormire lì lo dica prima (c'è lo spazio per scriverlo qui sotto)." }
      ],
      avanti: "Va bene, e quindi?"
    },
    risposta: {
      titolo: "E quindi, con tutto 'sto po' po' di programma, vieni o <em>NO</em>?",
      si: "Ci sono",
      no: "Non ce la faccio",
      rallyQ: "E al rally della mattina? Anche all'alba?",
      rallySi: "Anche al rally",
      rallyNo: "Solo alla cena",
      notaTit: "Altro da dire",
      notaHint: "Resto a cucinare dopo il rally, arrivo tardi, dormo lì, non mangio questa cosa…",
      notaPh: "Facoltativo",
      msgTit: "Il tuo messaggio per Riccardo",
      msgWa: "Mandalo su WhatsApp",
      msgCopia: "Copia il messaggio",
      msgCopiato: "Copiato. Ora incollalo nella chat con Riccardo.",
      msgManuale: "Selezionato: copialo a mano (il browser non me l'ha lasciato fare).",
      msgNota: "Il messaggio non parte da solo: premi il bottone e confermi tu su WhatsApp.",
      msgSi: "{nome}: ci sono! Rally + cena.",
      msgSiSoloCena: "{nome}: ci sono alla cena, il rally lo salto.",
      msgSiRallyDopo: "{nome}: ci sono alla cena. Sul rally ti dico.",
      msgSiCena: "{nome}: ci sono alla cena.",
      msgNo: "{nome}: purtroppo il 19 non ci sono.",
      msgNotaPre: "Nota: ",
      peccato: "Ci mancherai. Lo dico per educazione, ma anche un po' sul serio. Se cambi idea, torna qui.",
      avanti: "Avanti: il Babbo Natale segreto"
    },
    babbo: {
      introSu: "Dato che vieni, ti tocca il…",
      introVai: "Vediamo chi ti tocca",
      titolo: "Babbo Natale segreto",
      testo: "Dai, visto che ci vogliamo tutti bene, sarebbe maleducazione arrivare a Natale a mani vuote. Quindi: ognuno fa un regalo a una persona sola, e quella persona la decide la ruota.",
      tetto: "Tetto di spesa: <b>{tetto} €</b>. Oltre non si va. Sotto si può, anzi: <em>imagination is the limit</em>.",
      regole: [
        "Premi il bottone e la ruota ti dice a chi lo devi fare.",
        "Il nome è un segreto. Neanche sotto tortura. Neanche a {padrone}.",
        "Il pacco lo porti incartato, senza nome sopra. I regali si aprono dopo i dolci."
      ],
      estrai: "Estrai",
      giro: "La ruota gira…",
      risultato: "Devi fare un regalo a",
      sotto: "Shh. Segreto. Il biglietto è già in tasca, non c'è bisogno di farlo vedere in giro.",
      rigira: "Rigira la ruota (tanto esce lo stesso)",
      chiusura: "E mi raccomando: se non porti il regalo, paghi da bere a tutti. Ti conviene organizzarti prima.",
      avanti: "Ultima cosa"
    },
    quota: {
      titolo: "Senti, tutto molto bello, ma…",
      testo: "Darti da mangiare e da bere costa. Io non sono una cooperativa: me li dai questi <b>{quota} €</b> per pagarmi le cose?",
      paga: "Paga {quota} € con {metodo}",
      inArrivo: "Il link per pagare te lo mando io su WhatsApp",
      oppure: "Oppure dammeli a mano il 19, ma non fare il furbo.",
      fine: "Fatto. Ci vediamo il 19 a Garlasco.",
      riapri: "Torna all'invito"
    },
    piede: "Garlasco, 19 dicembre 2026 · ci vediamo lì"
  }
};
