export const contact = {
  praxis: "INNNatur",
  name: "Andy Böhme",
  rollen: "Sportphysiotherapeut · Heilpraktiker",
  strasse: "Münchener Straße 84c",
  ort: "84453 Mühldorf a. Inn",
  telefon: "+49 8631 990140 0",
  telefonHref: "tel:+4986319901400",
  mobil: "+49 1520 2060449",
  mobilHref: "tel:+4915202060449",
  email: "andy.boehme@ftz-muehldorf.eu",
  emailHref: "mailto:andy.boehme@ftz-muehldorf.eu",
  web: "www.ftz-muehldorf.eu",
  webHref: "https://www.ftz-muehldorf.eu",
};

export const oeffnungszeiten = [
  { tag: "Montag bis Freitag", zeit: "Nach Vereinbarung" },
  { tag: "Abendtermine", zeit: "Für Berufstätige planbar" },
  { tag: "Wochenende", zeit: "Auf Anfrage" },
];

// Standort der Praxis INNNatur, Münchener Straße 84c, Mühldorf am Inn (Näherung)
export const geo = { lat: 48.2418, lng: 12.538 };

export const heroLeistungen = [
  {
    titel: "Applied Kinesiology & Diagnostik",
    claim: "Ihr Körper zeigt selbst, wo das Problem liegt",
  },
  {
    titel: "Manuelle Therapie & Wirbelsäule",
    claim: "McKenzie, Syriax, Dornmethode und myofasziale Arbeit",
  },
  {
    titel: "Sportphysiotherapie nach DOSB",
    claim: "Training, Muskelaufbau und Wettkampfbetreuung",
  },
  {
    titel: "Heilpraktik & Ernährungsberatung",
    claim: "Stoffwechsel und Ernährung als Teil der Therapie",
  },
];

export const leistungsGruppen = [
  {
    id: "diagnostik",
    nummer: "01",
    titel: "Ganzheitliche Diagnostik",
    claim: "Verstehen, was der Körper wirklich braucht",
    intro:
      "Beschwerden entstehen selten dort, wo sie spürbar werden. Am Anfang jeder Behandlung steht deshalb ein genaues Bild davon, wie Haltung, Bewegung und Belastung bei Ihnen zusammenspielen.",
    bild: "/images/cu-arm.png",
    bildAlt: "Sanfter Muskelfunktionstest am Arm einer Patientin",
    leistungen: [
      {
        name: "Applied Kinesiology nach ICAK-D",
        text: "Über präzise Muskeltests gibt Ihr Körper Auskunft darüber, wo Blockaden und versteckte Belastungen liegen. Ich arbeite dabei nach den zertifizierten Standards des International College of Applied Kinesiology.",
      },
      {
        name: "Ganzheitliche Befundung",
        text: "Schmerz ist oft nur das letzte Glied einer längeren Kette. Die Befundung betrachtet Beschwerden im Zusammenhang mit Ihrem Alltag, Ihrer Haltung und Ihrer Geschichte.",
      },
      {
        name: "Fußreflexzonentherapie",
        text: "Die Fußsohle spiegelt den gesamten Organismus. Gezielte Grifftechniken an den Reflexzonen wirken auf Organe, Muskulatur und das vegetative Nervensystem.",
      },
      {
        name: "Dornmethode",
        text: "Mit sanftem Druck und Ihrer aktiven Mitbewegung werden Wirbel und Gelenke behutsam in ihre natürliche Position begleitet. Eine feine Methode mit oft spürbar schneller Wirkung.",
      },
    ],
  },
  {
    id: "behandlung",
    nummer: "02",
    titel: "Manuelle Behandlung",
    claim: "Erfahrene Hände für Gelenke, Muskeln und Faszien",
    intro:
      "Im Zentrum der Praxis steht die Arbeit mit den Händen. Bewährte Therapiekonzepte greifen hier ineinander und werden auf Ihre Situation abgestimmt statt nach Schema behandelt.",
    bild: "/images/cu-ruecken-lower.png",
    bildAlt: "Hände eines Therapeuten bei der manuellen Behandlung des Rückens",
    leistungen: [
      {
        name: "Manuelle Therapie",
        text: "Gezielte Mobilisation von Gelenken und Wirbelsäule löst Bewegungseinschränkungen und gibt dem Körper verlorene Spielräume zurück.",
      },
      {
        name: "Spinale Therapie nach McKenzie",
        text: "Ein weltweit etabliertes Konzept bei Rücken- und Nackenbeschwerden. Sie lernen Bewegungen kennen, mit denen Sie Ihre Wirbelsäule auch zu Hause selbst entlasten können.",
      },
      {
        name: "Orthopädische Medizin nach Cyriax",
        text: "Systematische Untersuchung und Behandlung von Sehnen, Bändern und Gelenkkapseln. Besonders wertvoll, wenn die Ursache von Schmerzen bisher unklar geblieben ist.",
      },
      {
        name: "PNF Therapie",
        text: "Propriozeptive Neuromuskuläre Fazilitation nutzt definierte Bewegungsmuster, um das Zusammenspiel von Nerven und Muskeln neu zu bahnen. Bewegungen werden dadurch kräftiger und besser koordiniert.",
      },
      {
        name: "Myofasziale Integration",
        text: "Verklebte Faszien halten Spannungen oft über Jahre im Körper. Tiefe, langsame Techniken lösen diese Strukturen und verändern das Körpergefühl nachhaltig.",
      },
    ],
  },
  {
    id: "training",
    nummer: "03",
    titel: "Training & Leistung",
    claim: "Vom Aufbautraining bis zur Wettkampfbetreuung",
    intro:
      "Als Physiotherapeut habe ich Weltmeisterinnen und Olympiasieger betreut. Von genau diesem Wissen profitieren in meiner Praxis ambitionierte Sportler ebenso wie Menschen, die nach einer Verletzung wieder belastbar werden wollen.",
    bild: "/images/cu-band.png",
    bildAlt: "Geführtes Training mit dem Widerstandsband auf der Therapiebank",
    leistungen: [
      {
        name: "Sportphysiotherapie nach DOSB-Standard",
        text: "Betreuung auf dem Niveau des deutschen Spitzensports. Von der Wettkampfvorbereitung über die Regeneration bis zur Rückkehr nach Verletzungen.",
      },
      {
        name: "Medizinische Trainingstherapie & KG am Gerät",
        text: "Strukturiertes Training an Geräten baut Kraft, Ausdauer und Stabilität wieder auf. Jeder Plan folgt Ihrem Befund und wächst mit Ihren Fortschritten.",
      },
      {
        name: "Gezielter Muskelaufbau",
        text: "Eine starke Muskulatur schützt Gelenke und Wirbelsäule im Alltag wie im Sport. Hier trainieren Sie mit klarem Plan und therapeutischem Blick auf saubere Ausführung.",
      },
    ],
  },
  {
    id: "stoffwechsel",
    nummer: "04",
    titel: "Stoffwechsel & Ernährung",
    claim: "Regeneration beginnt im Inneren",
    intro:
      "Wie gut Gewebe heilt und wie viel Energie Ihnen zur Verfügung steht, entscheidet sich zu einem großen Teil im Stoffwechsel. Deshalb endet die Behandlung in der Praxis INNNatur bewusst weder an der Haut noch an der Muskulatur.",
    bild: "/images/praxis-2.webp",
    bildAlt: "Heller Behandlungsraum der Praxis INNNatur mit grüner Therapieliege",
    leistungen: [
      {
        name: "Stoffwechselanregung",
        text: "Gezielte Impulse bringen Kreislauf, Lymphfluss und Zellstoffwechsel in Schwung. Das unterstützt die Heilung und steigert das allgemeine Wohlbefinden.",
      },
      {
        name: "Ernährungsberatung",
        text: "Als Heilpraktiker betrachte ich auch Ihre Ernährung als Teil der Therapie. Sie erhalten alltagstaugliche Empfehlungen, die zu Ihrem Leben und Ihren Zielen passen.",
      },
    ],
  },
];

export const featuredLeistungen = [
  {
    name: "Manuelle Therapie",
    text: "Gezielte Handgriffe lösen Blockaden und geben Gelenken ihre natürliche Beweglichkeit zurück.",
    bild: "/images/cu-ruecken-lower.png",
    bildAlt: "Manuelle Therapie am Rücken",
    href: "/leistungen#behandlung",
  },
  {
    name: "Sportphysiotherapie",
    text: "Betreuung nach DOSB-Standard, erprobt bei Weltmeisterschaften und Olympischen Spielen.",
    bild: "/images/cu-band.png",
    bildAlt: "Training mit Widerstandsband",
    href: "/leistungen#training",
  },
  {
    name: "Applied Kinesiology",
    text: "Muskeltests nach ICAK-D zeigen, wo der Körper aus dem Gleichgewicht geraten ist.",
    bild: "/images/cu-arm.png",
    bildAlt: "Muskelfunktionstest",
    href: "/leistungen#diagnostik",
  },
  {
    name: "Heilpraktik & Ernährung",
    text: "Ganzheitliche Begleitung, die Stoffwechsel und Ernährung in die Therapie einbezieht.",
    bild: "/images/praxis-1.webp",
    bildAlt: "Behandlungsraum der Praxis",
    href: "/leistungen#stoffwechsel",
  },
];

export const alleLeistungenNamen = leistungsGruppen.flatMap((g) =>
  g.leistungen.map((l) => l.name)
);

export const steckbrief = [
  { label: "Jahrgang", wert: "1970, geboren in Salzwedel" },
  { label: "Beruf", wert: "Physiotherapeut und Heilpraktiker" },
  { label: "Spezialgebiet", wert: "Sportphysiotherapie nach DOSB-Standard" },
  { label: "Sportliche Heimat", wert: "Skeleton, Ski und Radsport" },
  { label: "Ausgleich", wert: "Bewegung in der Natur und gute Bücher" },
];

export const werdegang = [
  {
    zeit: "1976 bis 1988",
    titel: "Aufgewachsen im Leistungssport",
    text: "Schulzeit am Trainingszentrum und Sportgymnasium Oberhof mit Schwerpunkt Skilanglauf, anschließend Abitur in Schleusingen.",
  },
  {
    zeit: "1992 bis 1995",
    titel: "Ausbildung zum Physiotherapeuten",
    text: "Fachschulstudium parallel zur beginnenden Karriere als Skeletonfahrer.",
  },
  {
    zeit: "1992 bis 2002",
    titel: "Skeleton auf Weltniveau",
    text: "Aktiver Skeletonfahrer, ab 1994 in der deutschen Nationalmannschaft. Weltmeister, zweifacher Weltcup-Gesamtsieger und Deutscher Meister.",
  },
  {
    zeit: "1995 bis 2000",
    titel: "Erste Praxisjahre",
    text: "Physiotherapeut in der Dr. Lauterbach Klinik Bad Liebenstein mit Schwerpunkt Rehabilitation.",
  },
  {
    zeit: "2000 bis 2010",
    titel: "Sportfördergruppe Oberhof",
    text: "Nach dem verletzungsbedingten Karriereende Wechsel auf die Betreuerseite. Ab 2003 Physiotherapeut der Sportfördergruppe mit Verantwortung für Spitzensportler.",
  },
  {
    zeit: "2006 bis 2014",
    titel: "Biathlon Nationalmannschaft",
    text: "Physiotherapeut der deutschen Biathlon Damen. Begleitung zu Weltmeisterschaften sowie zu den Olympischen Spielen 2010 in Vancouver und 2014 in Sotschi.",
  },
  {
    zeit: "Seit 2014",
    titel: "Mühldorf am Inn",
    text: "Physiotherapeut im FTZ Mühldorf und Aufbau der eigenen Praxis INNNatur. 2015 folgte der Abschluss als Heilpraktiker.",
  },
];

export const skeletonErfolge = [
  { wert: "Weltmeister", detail: "Igls 2000" },
  { wert: "2× Weltcup", detail: "Gesamtsieger 1999 und 2000" },
  { wert: "Vize-Weltmeister", detail: "Altenberg 1999" },
  { wert: "Deutscher Meister", detail: "Saison 1997/98" },
];

export const stats = [
  { zahl: 30, suffix: "+", label: "Jahre Erfahrung in Sport und Therapie" },
  { zahl: 14, suffix: "", label: "Behandlungsmethoden unter einem Dach" },
  { zahl: 2, suffix: "", label: "Olympische Spiele als Physiotherapeut" },
  { zahl: 1, suffix: "", label: "Weltmeistertitel im Skeleton" },
];
