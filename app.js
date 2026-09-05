// Pilates Studio v20.0 - Reconstruido con nombres y descripciones corregidos
// Toda la funcionalidad original restaurada
(function(){
  'use strict';
  try {

    var NI = ['Inicial','Basico','Intermedio','Avanzado','Experto'];
    var FA = ['Preparación','Activación','Desarrollo','Centro','Integración','Funcional','Cierre'];
    var PO = ['Suelo','Lateral','Sentado','Cuadrupedia','Arrodillado','Suelo-Pie','Pie'];
    var ZONAS = ['Pies','Piernas','Cadera','Core','Espalda','Hombros'];
    var DU = [20,30,40,45,50,60,75,90];

    var ICON = {
      groups:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      students:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
      exercises:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
      calendar:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      edit:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
      trash:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
      plus:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
      minus:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
      check:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
      bolt:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
      arrowRight:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
      arrowLeft:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
      clock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      swap:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>'
    };

    // ============================
    // EJERCICIOS - 205 ejercicios con nombres originales y descripciones paso a paso
    // ============================
        var EJ = [
      {id:'E001',n:'Explorando Centro Energía',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca arriba, piernas extendidas, brazos a los lados. Sienta la espalda plana contra el colchoneta. Lleve el ombligo hacia la columna y active el transverso abdominal.'},
      {id:'E002',n:'Ombligo a Columna',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca atrás. Visualice un cordón que une el ombligo con la columna. Tire del ombligo hacia la columna tensando el abdomen. Respire naturalmente.'},
      {id:'E003',n:'Columna a Colchoneta',f:'Espalda',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:4,eq:'Mat',de:'Acostado boca arriba, piernas extendidas, pies juntos. Apriete la espalda contra la colchoneta como si quisiera aplastar una mano bajo la zona lumbar.'},
      {id:'E004',n:'Mentón al Pecho',f:'Espalda',nmin:0,nmax:2,fa:0,p:0,i:2,d:3,z:5,eq:'Mat',de:'Acostado boca arriba. Lleve la cabeza hacia adelante estirando el cuello. Presione la nuca contra la colchoneta y lleve el mentón a la garganta.'},
      {id:'E005',n:'Activar Glúteos',f:'Cadera',nmin:0,nmax:2,fa:0,p:0,i:3,d:4,z:2,eq:'Mat',de:'Acostado boca arriba. Empuje el vientre hacia dentro y apriete los glúteos como si sostuviera una moneda entre ellos.'},
      {id:'E006',n:'5-10-15',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:3,d:5,z:3,eq:'Mat',de:'Acostado boca arriba, piernas flexionadas, pies apoyados. Flexione una rodilla al pecho y extiéndala al techo. Rote la pierna desde la cadera. Aguante 5 tiempos, baje a la pantorrilla (5 tiempos), luego al tobillo (5 tiempos). Repita con la otra pierna.'},
      {id:'E007',n:'Rodar Hacia Abajo',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:3,d:5,z:3,eq:'Mat',de:'Sentado, piernas flexionadas juntas, pies apoyados. Ruede la espalda hacia abajo vértebra a vértebra sin desplomarse. Vuelva a subir articulando cada vértebra.'},
      {id:'E008',n:'Elevarse Caderas',f:'Cadera',nmin:0,nmax:2,fa:0,p:0,i:3,d:5,z:2,eq:'Mat',de:'Acostado boca arriba. Eleve las caderas apretando los glúteos. Mantenga la posición y baje controladamente.'},
      {id:'E009',n:'Elevar Una Rodilla',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:3,d:5,z:3,eq:'Mat',de:'Acostado boca arriba. Flexione una rodilla hacia el pecho. Mantenga y alterne con la otra pierna.'},
      {id:'E010',n:'Subir Bajar Hombros',f:'Hombros',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:5,eq:'Mat',de:'Sentado, espalda erguida. Eleve los hombros hacia las orejas y déjelos caer suavemente. Repita.'},
      {id:'E011',n:'Círculos Hombros',f:'Hombros',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:5,eq:'Mat',de:'Sentado. Haga círculos con los hombros hacia atrás y luego hacia adelante. Mantenga la espalda erguida.'},
      {id:'E012',n:'Semicírculo',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca arriba. Haga un semicírculo con el tronco llevando un hombro hacia la cadera contraria y volviendo al centro.'},
      {id:'E013',n:'Mirar Ombligo',f:'Core',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca arriba. Lleve la mirada hacia el ombligo flexionando el tronco suavemente.'},
      {id:'E014',n:'Oreja al Hombro',f:'Espalda',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:5,eq:'Mat',de:'Acostado boca arriba. Lleve la oreja hacia el hombro manteniéndolo relajado. Alterne lados.'},
      {id:'E015',n:'Sentarse',f:'Core',nmin:0,nmax:2,fa:0,p:2,i:3,d:5,z:3,eq:'Mat',de:'Acostado boca arriba. Siéntese llevando el mentón al pecho y articulando la columna. Vuelva a acostarse controladamente.'},
      {id:'E016',n:'2x4 Frente Pared',f:'Core',nmin:0,nmax:2,fa:0,p:2,i:3,d:5,z:3,eq:'Mat',de:'De pie, espalda contra la pared. Apriete la espalda contra la pared y eleve los brazos a los lados hasta la altura de los hombros.'},
      {id:'E017',n:'Ankle Circles',f:'Piernas',nmin:0,nmax:3,fa:0,p:0,i:2,d:4,z:0,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Haga círculos con los tobillos en ambas direcciones. Mantenga las piernas estables.'},
      {id:'E018',n:'Arm Circles',f:'Hombros',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:5,eq:'Mat',de:'De pie o sentado. Haga círculos con los brazos extendidos a los lados. Mueva desde los hombros.'},
      {id:'E019',n:'Full Body Stretch',f:'General',nmin:0,nmax:2,fa:0,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca arriba, brazos y piernas extendidos. Estire todo el cuerpo desde las puntas de los dedos de las manos hasta los pies.'},
      {id:'E020',n:'Círculos Brazos Cierre',f:'Hombros',nmin:0,nmax:2,fa:0,p:0,i:2,d:3,z:5,eq:'Mat',de:'De pie. Haga círculos con los brazos hacia adelante y luego hacia atrás.'},
      {id:'E021',n:'Pelvic Curl',f:'Cadera',nmin:0,nmax:2,fa:1,p:0,i:3,d:5,z:2,eq:'Mat',de:'Acostado boca arriba, piernas flexionadas. Eleve las caderas articulando la columna vértebra a vértebra. Baje controladamente.'},
      {id:'E022',n:'Toe Taps',f:'Piernas',nmin:0,nmax:2,fa:1,p:0,i:3,d:4,z:0,eq:'Mat',de:'Acostado boca arriba, piernas elevadas a 90°. Baje un pie a tocar el suelo y vuelva a subir. Alterne piernas.'},
      {id:'E023',n:'Chest Lift',f:'Core',nmin:0,nmax:2,fa:1,p:0,i:4,d:5,z:3,eq:'Mat',de:'Acostado boca arriba, piernas flexionadas. Eleve el pecho llevando el mentón al pecho. Vuelva a bajar controladamente.'},
      {id:'E024',n:'Single Leg Circles',f:'Cadera',nmin:0,nmax:3,fa:1,p:0,i:3,d:5,z:2,eq:'Mat',de:'Acostado boca atrás, una pierna elevada. Haga círculos con la pierna en ambas direcciones. Alterne piernas.'},
      {id:'E025',n:'Knee Stirs',f:'Cadera',nmin:0,nmax:2,fa:1,p:0,i:3,d:4,z:2,eq:'Mat',de:'Acostado boca arriba, piernas flexionadas. Haga círculos con las rodillas juntas hacia un lado y luego hacia el otro.'},
      {id:'E026',n:'Leg Circles',f:'Cadera',nmin:1,nmax:3,fa:1,p:0,i:4,d:5,z:2,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Haga círculos amplios con las piernas juntas en ambas direcciones.'},
      {id:'E027',n:'The Hundred',f:'Core',nmin:0,nmax:3,fa:1,p:0,i:5,d:5,z:3,eq:'Mat',de:'Acostado boca arriba, piernas a 90°. Bombee los brazos a los costados mientras inhala (5 tiempos) y exhala (5 tiempos). Repita hasta 100.'},
      {id:'E028',n:'Roll Up',f:'Core',nmin:0,nmax:3,fa:1,p:0,i:5,d:5,z:3,eq:'Mat',de:'Acostado boca arriba. Siéntese articulando la columna vértebra a vértebra. Vuelva a acostarse rodando.'},
      {id:'E029',n:'Rolling Like a Ball',f:'Core',nmin:0,nmax:2,fa:1,p:0,i:3,d:5,z:3,eq:'Mat',de:'Acostado boca arriba, rodillas al pecho. Rodee las piernas con las manos. Ruede hacia atrás y adelante masajeando la columna.'},
      {id:'E030',n:'Foot Work V1',f:'Piernas',nmin:0,nmax:3,fa:1,p:0,i:4,d:6,z:1,eq:'Reformer',de:'En decúbito dorsal sobre el reformer, pies en la barra. Extienda las piernas y vuelva a la posición inicial controladamente.'},
      {id:'E031',n:'Foot Work V2',f:'Piernas',nmin:0,nmax:3,fa:1,p:0,i:4,d:6,z:1,eq:'Reformer',de:'En decúbito dorsal sobre el reformer, un pie en la barra. Extienda una pierna manteniene la otra flexionada. Alterne.'},
      {id:'E032',n:'Side Kick V1',f:'Cadera',nmin:0,nmax:3,fa:1,p:1,i:5,d:6,z:2,eq:'Reformer',de:'En decúbito lateral sobre el reformer. Eleve la pierna superior hacia el techo. Baje controladamente.'},
      {id:'E033',n:'Side Kick V2',f:'Cadera',nmin:0,nmax:3,fa:1,p:1,i:5,d:6,z:2,eq:'Mat',de:'En decúbito lateral. Eleve ambas piernas juntas. Baje controladamente manteniendo la alineación.'},
      {id:'E034',n:'Side Kick V3',f:'Cadera',nmin:0,nmax:3,fa:1,p:1,i:5,d:6,z:2,eq:'Mat',de:'En decúbito lateral, pierna superior extendida. Eleve la pierna en extensión completa. Baje suavemente.'},
      {id:'E035',n:'Abdominales Reformer',f:'Core',nmin:1,nmax:3,fa:1,p:0,i:6,d:8,z:3,eq:'Reformer',de:'En decúbito dorsal sobre el reformer con resortes. Flexione el tronco llevando el mentón al pecho. Vuelva a la posición inicial.'},
      {id:'E036',n:'Piernas Reformer',f:'Piernas',nmin:1,nmax:3,fa:1,p:0,i:5,d:7,z:1,eq:'Reformer',de:'En decúbito dorsal sobre el reformer con resortes en los pies. Flexione y extienda las piernas contra la resistencia.'},
      {id:'E037',n:'Flexiones Antebrazo',f:'Hombros',nmin:1,nmax:3,fa:1,p:3,i:5,d:6,z:3,eq:'Mat',de:'En cuadrupedia o de rodillas. Flexione los codos y baje el pecho hacia el suelo. Empuje hacia arriba.'},
      {id:'E038',n:'Single Leg Stretch',f:'Core',nmin:1,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Mat',de:'Acostado boca arriba. Flexione una rodilla al pecho y extienda la otra pierna. Alterne piernas.'},
      {id:'E039',n:'Double Leg Stretch',f:'Core',nmin:1,nmax:4,fa:2,p:0,i:6,d:7,z:1,eq:'Mat',de:'Acostado boca arriba. Flexione ambas rodillas al pecho y extienda las piernas. Alterne.'},
      {id:'E040',n:'Swan',f:'Espalda',nmin:1,nmax:4,fa:2,p:0,i:6,d:7,z:4,eq:'Mat',de:'En prono. Eleve el pecho y las piernas apoyando las manos en la espalda. Mantenga y baje.'},
      {id:'E041',n:'Side Kick Mat',f:'Cadera',nmin:1,nmax:3,fa:2,p:1,i:5,d:6,z:2,eq:'Mat',de:'En decúbito lateral. Patada lateral con la pierna superior: adelante y atrás. Alterne piernas.'},
      {id:'E042',n:'Shoulder Bridge',f:'Cadera',nmin:1,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Mat',de:'Acostado boca arriba. Eleve las caderas formando un puente. Baje vértebra a vértebra.'},
      {id:'E043',n:'Spine Twist',f:'Columna',nmin:0,nmax:3,fa:2,p:2,i:4,d:5,z:4,eq:'Mat',de:'Sentado, piernas extendidas. Gire el tronco hacia un lado y luego hacia el otro. Mantenga las caderas fijas.'},
      {id:'E044',n:'Rollover',f:'Core',nmin:2,nmax:4,fa:2,p:0,i:7,d:8,z:3,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Ruede hacia atrás pasando las piernas por encima de la cabeza. Vuelva.'},
      {id:'E045',n:'Corkscrew',f:'Columna',nmin:3,nmax:4,fa:2,p:0,i:8,d:9,z:3,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Haga círculos con las piernas en rotación completa.'},
      {id:'E046',n:'Entrecruzado',f:'Core',nmin:2,nmax:3,fa:2,p:0,i:6,d:7,z:3,eq:'Mat',de:'Acostado boca atrás. Gire el tronco llevando el codo a la rodilla contraria. Alterne lados.'},
      {id:'E047',n:'Sacacorchos',f:'Core',nmin:2,nmax:3,fa:2,p:0,i:6,d:7,z:3,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Gire las piernas en círculos como un sacacorchos.'},
      {id:'E048',n:'Sierra',f:'Core',nmin:2,nmax:3,fa:2,p:2,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas extendidas y abiertas. Gire el tronco y "sierre" con la mano hacia el pie. Alterne.'},
      {id:'E049',n:'Patada Una Pierna',f:'Piernas',nmin:2,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Mat',de:'En prono. Patada hacia atrás con una pierna flexionada. Alterne piernas.'},
      {id:'E050',n:'Patada Dos Piernas',f:'Espalda',nmin:2,nmax:3,fa:2,p:0,i:6,d:7,z:1,eq:'Mat',de:'En prono. Patada con ambas piernas flexionadas simultáneamente.'},
      {id:'E051',n:'Delante/Detrás',f:'Cadera',nmin:2,nmax:3,fa:2,p:1,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Patada adelante y atrás con la pierna superior.'},
      {id:'E052',n:'Arriba/Abajo',f:'Cadera',nmin:2,nmax:3,fa:2,p:1,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Patada arriba y abajo con la pierna superior.'},
      {id:'E053',n:'La Foca',f:'Core',nmin:2,nmax:3,fa:2,p:0,i:4,d:6,z:4,eq:'Mat',de:'Acostado boca atrás. Ruede hacia atrás con las piernas abiertas. Vuelva a la posición.'},
      {id:'E054',n:'Bromista I',f:'Core',nmin:2,nmax:3,fa:2,p:0,i:6,d:8,z:3,eq:'Mat',de:'Acostado boca atrás. Rueda hacia atrás formando una V con las piernas.'},
      {id:'E055',n:'Boxeo',f:'Hombros',nmin:2,nmax:3,fa:2,p:2,i:6,d:7,z:3,eq:'Mat',de:'Sentado, espalda erguida. Boxeo con los brazos alternando golpes al frente.'},
      {id:'E056',n:'Laterales',f:'Columna',nmin:2,nmax:3,fa:2,p:2,i:5,d:6,z:3,eq:'Mat',de:'Sentado, pesas en las manos. Laterales elevando los brazos a los lados.'},
      {id:'E057',n:'Murciélago',f:'Espalda',nmin:2,nmax:3,fa:2,p:2,i:5,d:6,z:3,eq:'Mat',de:'Sentado, pesas en las manos. Espalda: abra los codos hacia atrás apretando los omóplatos.'},
      {id:'E058',n:'Cremallera',f:'Espalda',nmin:2,nmax:3,fa:2,p:2,i:5,d:6,z:3,eq:'Mat',de:'Sentado, pesas en las manos. Cremallera: lleve las manos desde los hombros hacia el techo.'},
      {id:'E059',n:'Afeitado',f:'Espalda',nmin:2,nmax:3,fa:2,p:2,i:5,d:6,z:3,eq:'Mat',de:'Sentado, pesas en las manos. Afeitado: lleve la mano desde la rodilla hacia el tobillo.'},
      {id:'E060',n:'Círculos Brazos',f:'Hombros',nmin:0,nmax:3,fa:2,p:2,i:3,d:5,z:5,eq:'Mat',de:'De pie, pesas en las manos. Círculos con los brazos extendidos.'},
      {id:'E061',n:'Cat-Cow',f:'Columna',nmin:0,nmax:2,fa:2,p:3,i:2,d:4,z:4,eq:'Mat',de:'En cuadrupedia. Alterne flexión y extensión de la columna (arco y gato).'},
      {id:'E062',n:'Child Pose',f:'Columna',nmin:0,nmax:2,fa:2,p:4,i:2,d:4,z:4,eq:'Mat',de:'Sentado sobre los talones. Inclínese hacia atrás estirando los cuádriceps y el tronco.'},
      {id:'E063',n:'Teaser',f:'Core',nmin:3,nmax:4,fa:3,p:5,i:8,d:10,z:3,eq:'Mat',de:'Acostado boca atrás, piernas elevadas a 90°. Eleve el tronco a posición de V. Mantenga y baje.'},
      {id:'E064',n:'Leg Pull Front',f:'Core',nmin:2,nmax:4,fa:3,p:3,i:6,d:7,z:5,eq:'Mat',de:'En cuadrupedia. Eleve una pierna hacia atrás manteniendo la alineación. Alterne.'},
      {id:'E065',n:'Kneeling Side Kick',f:'Equilibrio',nmin:2,nmax:4,fa:3,p:4,i:7,d:8,z:2,eq:'Mat',de:'De rodillas. Patada lateral con una pierna. Alterne.'},
      {id:'E066',n:'Neck Pull',f:'Core',nmin:2,nmax:4,fa:3,p:4,i:7,d:8,z:4,eq:'Mat',de:'Acostado boca atrás. Ruede hacia atrás y adelante masajeando la columna.'},
      {id:'E067',n:'Bicycle',f:'Core',nmin:2,nmax:3,fa:3,p:3,i:6,d:7,z:2,eq:'Mat',de:'En prono, manos en la espalda. Pedaleo: alterne patadas de las piernas como una bicicleta invertida.'},
      {id:'E068',n:'Scissors',f:'Core',nmin:1,nmax:3,fa:3,p:3,i:5,d:6,z:2,eq:'Mat',de:'Acostado boca arriba, piernas extendidas. Tijera: abra y cierre las piernas alternando cuál queda arriba.'},
      {id:'E069',n:'Puente Reformer',f:'Cadera',nmin:1,nmax:3,fa:3,p:4,i:5,d:7,z:2,eq:'Reformer',de:'Acostado boca atrás sobre el reformer con resortes. Eleve las caderas y ruede la columna sobre los resortes.'},
      {id:'E070',n:'Shoulder Stand',f:'Core',nmin:3,nmax:4,fa:4,p:0,i:8,d:8,z:5,eq:'Mat',de:'Acostado boca atrás, piernas elevadas. Invertida: lleve las piernas hacia el techo y eleve las caderas.'},
      {id:'E071',n:'Boomerang',f:'Core',nmin:3,nmax:4,fa:4,p:0,i:8,d:10,z:3,eq:'Mat',de:'Acostado boca atrás. Transición fluida desde invertida a posición de V y vuelta.'},
      {id:'E072',n:'Seal',f:'Core',nmin:1,nmax:3,fa:4,p:0,i:5,d:6,z:4,eq:'Mat',de:'Acostado boca atrás. Ruede con las piernas abiertas aplaudiendo los pies en el aire.'},
      {id:'E073',n:'Elevación Piernas Atrás',f:'Core',nmin:3,nmax:4,fa:4,p:0,i:8,d:9,z:5,eq:'Mat',de:'En prono. Eleve las piernas hacia atrás arqueando el tronco. Mantenga y baje.'},
      {id:'E074',n:'Buceo Cisne',f:'Columna',nmin:3,nmax:4,fa:4,p:0,i:7,d:8,z:4,eq:'Mat',de:'En prono. Eleve el pecho y las arqueando el cuerpo como un cisne buceando.'},
      {id:'E075',n:'Navaja Suiza',f:'Core',nmin:3,nmax:4,fa:4,p:0,i:9,d:9,z:3,eq:'Mat',de:'Acostado boca atrás. Invertida vertical: lleve las piernas hacia el techo y eleve el tronco a vertical.'},
      {id:'E076',n:'Torsión Columna',f:'Columna',nmin:3,nmax:4,fa:4,p:4,i:6,d:7,z:4,eq:'Mat',de:'Sentado. Gire el tronco hacia un lado y hacia el otro. Mantenga las caderas fijas.'},
      {id:'E077',n:'Tijeras',f:'Core',nmin:3,nmax:4,fa:4,p:0,i:7,d:8,z:3,eq:'Mat',de:'Acostado boca atrás. Tijeras invertida: abra y cierre las piernas en posición vertical.'},
      {id:'E078',n:'Puente Hombros',f:'Cadera',nmin:3,nmax:4,fa:4,p:0,i:7,d:8,z:5,eq:'Mat',de:'En prono. Puente sobre los hombros: eleve el cuerpo apoyado en hombros y pies.'},
      {id:'E079',n:'Elevación Piernas',f:'Piernas',nmin:3,nmax:4,fa:4,p:5,i:6,d:7,z:1,eq:'Mat',de:'En decúbito lateral. Eleve la pierna superior lateralmente. Baje controladamente.'},
      {id:'E080',n:'Batir Piernas',f:'Piernas',nmin:3,nmax:4,fa:4,p:5,i:6,d:7,z:1,eq:'Mat',de:'En decúbito lateral. Batir pierna: mueva la pierna superior hacia adelante y atrás.'},
      {id:'E081',n:'Círculos Muslos',f:'Cadera',nmin:3,nmax:4,fa:4,p:4,i:6,d:7,z:3,eq:'Mat',de:'En decúbito lateral. Círculos con los muslos de la pierna superior.'},
      {id:'E082',n:'Patata Caliente',f:'Cadera',nmin:3,nmax:4,fa:4,p:4,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Patata caliente: golpecitos rápidos con la pierna superior.'},
      {id:'E083',n:'Tijeras Grandes',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:7,d:8,z:3,eq:'Mat',de:'Acostado boca atrás. Tijeras grandes: abra las piernas en V y ciérrelas.'},
      {id:'E084',n:'Grand Rond',f:'Cadera',nmin:3,nmax:4,fa:4,p:4,i:6,d:7,z:3,eq:'Mat',de:'En decúbito lateral. Grandes círculos con la pierna superior (grand rond de jambe).'},
      {id:'E085',n:'Bromista II',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:8,d:10,z:3,eq:'Mat',de:'Acostado boca atrás. Bromista II: ruede hacia atrás formando V avanzada.'},
      {id:'E086',n:'Bromista III',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:8,d:10,z:3,eq:'Mat',de:'Acostado boca atrás. Bromista III: variación avanzada del rodamiento.'},
      {id:'E087',n:'Bumerán',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:8,d:10,z:3,eq:'Mat',de:'Acostado boca atrás. Bumerán: transición de invertida a V.'},
      {id:'E088',n:'Círculos Caderas',f:'Cadera',nmin:3,nmax:4,fa:4,p:3,i:6,d:7,z:2,eq:'Mat',de:'En prono. Círculos con las caderas manteniene el pecho elevado.'},
      {id:'E089',n:'Nadar',f:'Espalda',nmin:3,nmax:4,fa:4,p:3,i:6,d:7,z:4,eq:'Mat',de:'En prono. Nado: eleve brazos y piernas opuestos alternando.'},
      {id:'E090',n:'Tirar Pierna Abajo',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:6,d:7,z:5,eq:'Mat',de:'De pie, agarre de straps. Tire de la pierna hacia abajo extendida.'},
      {id:'E091',n:'Tirar Pierna Arriba',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:6,d:7,z:5,eq:'Mat',de:'De pie, agarre de straps. Tire de la pierna hacia arriba extendida.'},
      {id:'E092',n:'Patadas Arrodillado',f:'Equilibrio',nmin:2,nmax:4,fa:4,p:4,i:6,d:7,z:2,eq:'Mat',de:'De rodillas. Patada lateral con una pierna. Alterne.'},
      {id:'E093',n:'Sirena',f:'Columna',nmin:3,nmax:4,fa:4,p:4,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas abiertas. Flexión lateral del tronco hacia un lado. Alterne.'},
      {id:'E094',n:'Flexiones Cuadrupedia',f:'Hombros',nmin:3,nmax:4,fa:4,p:3,i:8,d:8,z:5,eq:'Mat',de:'En cuadrupedia. Flexiones: baje el pecho al suelo y empuje hacia arriba.'},
      {id:'E095',n:'Jackknife',f:'Inversion',nmin:3,nmax:4,fa:4,p:5,i:8,d:9,z:5,eq:'Mat',de:'Acostado boca atrás. Invertida llevando las piernas hacia el techo y luego a vertical.'},
      {id:'E096',n:'Hip Twist',f:'Cadera',nmin:3,nmax:4,fa:4,p:3,i:7,d:8,z:2,eq:'Mat',de:'En cuadrupedia. Rotación de cadera: círculo con la pierna flexionada.'},
      {id:'E097',n:'Leg Pull Back',f:'Core',nmin:2,nmax:3,fa:4,p:3,i:6,d:7,z:5,eq:'Mat',de:'En cuadrupedia. Eleve una pierna hacia atrás. Alterne.'},
      {id:'E098',n:'Leg Pull Side',f:'Equilibrio',nmin:2,nmax:3,fa:4,p:1,i:6,d:7,z:3,eq:'Mat',de:'En decúbito lateral. Eleve la pierna lateralmente. Alterne.'},
      {id:'E099',n:'Shoulder Stand Split',f:'Core',nmin:3,nmax:4,fa:4,p:5,i:9,d:9,z:5,eq:'Mat',de:'Invertida con apertura de piernas en tijera vertical.'},
      {id:'E100',n:'Crab',f:'Core',nmin:3,nmax:4,fa:4,p:4,i:8,d:9,z:3,eq:'Mat',de:'Acostado boca atrás. Ruede con las rodillas hacia el pecho y vuelva.'},
      {id:'E101',n:'Rocking',f:'Espalda',nmin:3,nmax:4,fa:4,p:4,i:7,d:8,z:4,eq:'Mat',de:'En prono. Balanceo arqueando el cuerpo como un arco.'},
      {id:'E102',n:'Control Balance',f:'Equilibrio',nmin:3,nmax:4,fa:5,p:6,i:9,d:10,z:1,eq:'Mat',de:'De pie sobre una pierna. Equilibrio manteniendo la alineación. Alterne.'},
      {id:'E103',n:'Standing Balance',f:'Equilibrio',nmin:1,nmax:3,fa:5,p:6,i:5,d:6,z:1,eq:'Mat',de:'De pie sobre una pierna con apoyo. Equilibrio manteniene la postura.'},
      {id:'E104',n:'Standing Arms',f:'Hombros',nmin:1,nmax:3,fa:5,p:6,i:4,d:5,z:5,eq:'Mat',de:'De pie. Eleve los brazos al frente y a los lados manteniene el equilibrio.'},
      {id:'E105',n:'Standing Roll Down',f:'Columna',nmin:0,nmax:3,fa:5,p:6,i:3,d:5,z:4,eq:'Mat',de:'De pie. Descenso vertebral: baje la cabeza vértebra a vértebra hasta flexionarse.'},
      {id:'E106',n:'Flexiones Antebrazo Tabla',f:'Hombros',nmin:3,nmax:4,fa:5,p:6,i:7,d:8,z:5,eq:'Mat',de:'De pie. Flexiones de brazos en posición de tabla.'},
      {id:'E107',n:'Expansión Pecho',f:'Espalda',nmin:3,nmax:4,fa:5,p:6,i:7,d:8,z:5,eq:'Mat',de:'De pie, espalda recta. Expansión del pecho: abra los brazos hacia atrás.'},
      {id:'E108',n:'Círculos Brazos Func',f:'Hombros',nmin:3,nmax:4,fa:5,p:6,i:6,d:7,z:5,eq:'Mat',de:'De pie. Círculos con los brazos extendidos.'},
      {id:'E109',n:'Estocadas',f:'Piernas',nmin:3,nmax:4,fa:5,p:6,i:7,d:8,z:1,eq:'Mat',de:'De pie. Estocadas: dé un paso atrás y flexione la rodilla. Alterne.'},
      {id:'E110',n:'Pull Straps',f:'Espalda',nmin:2,nmax:4,fa:5,p:6,i:6,d:7,z:4,eq:'Mat',de:'De pie, agarre de straps. Tire de los straps hacia atrás con los brazos.'},
      {id:'E111',n:'Arm Circles Reformer',f:'Hombros',nmin:2,nmax:4,fa:5,p:6,i:5,d:6,z:5,eq:'Reformer',de:'De pie sobre el reformer. Círculos con los brazos usando la resistencia de los resortes.'},
      {id:'E112',n:'Spine Stretch Forward',f:'Columna',nmin:0,nmax:2,fa:6,p:2,i:4,d:6,z:4,eq:'Mat',de:'Sentado. Estiramiento de columna: flexione el tronco hacia adelante con las piernas extendidas.'},
      {id:'E113',n:'Mermaid',f:'Columna',nmin:0,nmax:2,fa:6,p:2,i:3,d:5,z:2,eq:'Mat',de:'Sentado. Estiramiento lateral del tronco.'},
      {id:'E114',n:'Kneeling Stretch',f:'Columna',nmin:0,nmax:2,fa:6,p:4,i:3,d:5,z:4,eq:'Mat',de:'De rodillas. Inclínese hacia atrás estirando los cuádriceps.'},
      {id:'E115',n:'Full Body Stretch Fin',f:'General',nmin:0,nmax:2,fa:6,p:0,i:2,d:4,z:3,eq:'Mat',de:'Acostado boca arriba. Estiramiento final completo del cuerpo.'},
      {id:'E116',n:'Saw',f:'Columna',nmin:2,nmax:3,fa:6,p:2,i:5,d:6,z:4,eq:'Mat',de:'Sentado, piernas abiertas. Gire el tronco y "sierre" con la mano hacia el pie.'},
      {id:'REF001',n:'Foot Work V1',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer, pies en la barra. Extienda una pierna manteniendo la otra flexionada. Alterne.'},
      {id:'REF002',n:'Foot Work V2',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer, un pie en la barra. Extienda la pierna de la barra.'},
      {id:'REF003',n:'Foot Work V3',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Extienda ambas piernas simultáneamente.'},
      {id:'REF004',n:'Foot Work V4',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Extienda una pierna a 45° manteniendo la otra flexionada.'},
      {id:'REF005',n:'Foot Work V5',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Extienda ambas piernas, una por encima de la barra.'},
      {id:'REF006',n:'Foot Work V6',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Extienda ambas piernas, una por debajo de la barra.'},
      {id:'REF007',n:'Foot Work V7',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer, una pierna flexionada en la barra. Extienda la otra pierna.'},
      {id:'REF008',n:'Foot Work V8',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Extienda ambas piernas con flexión dorsal de tobillos.'},
      {id:'REF009',n:'Foot Work V9',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer, pies en la barra. Flexión plantar de tobillos.'},
      {id:'REF010',n:'Foot Work V10',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Invierta la posición de las piernas.'},
      {id:'REF011',n:'Empujes Lateral V1',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer, pie en la barra. Empuje extendiendo la pierna.'},
      {id:'REF012',n:'Empujes Lateral V2',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer. Empuje con ambas piernas extendidas.'},
      {id:'REF013',n:'Empujes Lateral V3',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer. Empuje con ambas piernas, una por debajo de la barra.'},
      {id:'REF014',n:'Empujes Lateral V4',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer. Empuje con pierna en rotación externa.'},
      {id:'REF015',n:'Empujes Lateral V5',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer, brazo extendido. Empuje con ambas piernas.'},
      {id:'REF016',n:'Empujes Lateral V6',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'De lado sobre el reformer. Empuje manteniendo una pierna flexionada.'},
      {id:'REF017',n:'Puente V1',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Eleve las caderas formando un puente.'},
      {id:'REF018',n:'Puente V2',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Puente con una pierna extendida.'},
      {id:'REF019',n:'Puente V3',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Puente alternando piernas.'},
      {id:'REF020',n:'Puente V4',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Puente con ambas piernas extendidas.'},
      {id:'REF021',n:'Puente V5',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:1,eq:'Reformer',de:'Acostado boca arriba sobre el reformer. Puente rodando sobre los resortes.'},
      {id:'AUT001',n:'El Ombligo hacia la Columna',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, espalda relajada. Lleve el vientre hacia dentro. Visualice un cordón que une el ombligo con la columna. Tire del ombligo hacia la columna.'},
      {id:'AUT002',n:'La Columna hacia la Colchoneta',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, piernas extendidas. Apriete la espalda contra la colchoneta como si quisiera aplastar una mano bajo la zona lumbar.'},
      {id:'AUT003',n:'Estirando la Nuca/Mentón al Pecho',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba. Lleve la cabeza hacia adelante estirando el cuello. Presione la nuca contra la colchoneta.'},
      {id:'AUT004',n:'Activar/Recoger/Apretar los Glúteos',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie, acostado o sentado. Empuje el vientre hacia dentro y apriete los glúteos como si sostuviera una moneda.'},
      {id:'AUT005',n:'5-10-15',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, piernas flexionadas. Flexione una rodilla al pecho y extiéndala al techo. Aguante 5 tiempos, baje a la pantorrilla, luego al tobillo.'},
      {id:'AUT006',n:'Rodar Hacia Abajo',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas flexionadas juntas. Ruede la espalda hacia abajo vértebra a vértebra sin desplomarse.'},
      {id:'AUT007',n:'Elevarse por Encima de las Caderas',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado en una silla. Presione el suelo con los pies y apriete los glúteos. Elévase por encima de las caderas.'},
      {id:'AUT008',n:'Elevar una Rodilla',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Desde la posición anterior. Levante un pie y lleve la rodilla al techo. Alterne piernas.'},
      {id:'AUT009',n:'Subir y Bajar los Hombros',f:'Hombros',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, espalda erguida. Eleve los hombros hacia las orejas y déjelos caer suavemente.'},
      {id:'AUT010',n:'Círculos con los Hombros',f:'Hombros',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Haga círculos con los hombros hacia atrás y luego hacia adelante.'},
      {id:'AUT011',n:'De Lado a Lado',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Gire la cabeza hacia un lado mirando por encima del hombro. Alterne.'},
      {id:'AUT012',n:'Mirar hacia el Ombligo',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba. Eleve la cabeza hacia el ombligo flexionando el tronco.'},
      {id:'AUT013',n:'Llevar la Oreja hacia el Hombro',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba. Lleve la oreja hacia el hombro. Alterne lados.'},
      {id:'AUT014',n:'Semicírculo',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Incline la cabeza y dibuje un semicirculo desde el centro hacia el hombro.'},
      {id:'AUT015',n:'Mirar al Ombligo',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Continúe en la misma posición. Eleve la cabeza hacia el ombligo.'},
      {id:'AUT016',n:'Oreja al Hombro',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Continúe en la misma posición. Lleve la oreja hacia el hombro.'},
      {id:'AUT017',n:'Full Body Stretch',f:'General',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, brazos y piernas extendidos. Estire todo el cuerpo desde las puntas de los dedos hasta los pies.'},
      {id:'AUT018',n:'Círculos Brazos Cierre',f:'Hombros',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie. Haga círculos con los brazos hacia adelante y luego hacia atrás.'},
      {id:'AUT019',n:'Los Cien',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, piernas a 90°. Bombee los brazos a los costados. Inhale 5 tiempos, exhale 5 tiempos.'},
      {id:'AUT020',n:'Rodar Hacia Delante',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas flexionadas. Ruede hacia adelante articulando la columna.'},
      {id:'AUT021',n:'Círculos con una Pierna',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, una pierna elevada. Haga círculos en ambas direcciones.'},
      {id:'AUT022',n:'Rodar Como una Pelota',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, rodillas al pecho. Rodee las piernas con las manos y ruede.'},
      {id:'AUT023',n:'Estiramiento de una Pierna',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba. Flexione una rodilla al pecho y extienda la otra pierna.'},
      {id:'AUT024',n:'Estiramiento de Dos Piernas',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba. Flexione ambas rodillas al pecho y extienda las piernas.'},
      {id:'AUT025',n:'Estiramiento de la Columna Hacia Delante',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas extendidas y abiertas. Flexione el tronco hacia adelante.'},
      {id:'AUT026',n:'Balancín con las Piernas Separadas',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas flexionadas. Inclínese hacia atrás en equilibrio y ruede.'},
      {id:'AUT027',n:'Estiramiento de las Dos Piernas Estiradas',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, manos detrás de la nuca. Baje las piernas manteniendo la espalda plana.'},
      {id:'AUT028',n:'Entrecruzado',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, manos detrás de la nuca. Gire el tronco llevando el codo a la rodilla contraria.'},
      {id:'AUT029',n:'Sacacorchos',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca arriba, piernas elevadas. Haga círculos con las piernas como un sacacorchos.'},
      {id:'AUT030',n:'Sierra',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas abiertas. Gire el tronco y "sierre" con la mano hacia el pie.'},
      {id:'AUT031',n:'Círculos con la Nuca',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono, manos bajo los hombros. Eleve el pecho y haga círculos con la cabeza.'},
      {id:'AUT032',n:'Patada con una Pierna',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono, manos bajo los hombros. Dé patadas hacia atrás con una pierna flexionada.'},
      {id:'AUT033',n:'Patada con Dos Piernas',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Dé patadas con ambas piernas flexionadas simultáneamente.'},
      {id:'AUT034',n:'Delante/Detrás',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Patada adelante y atrás con la pierna superior.'},
      {id:'AUT035',n:'Arriba/Abajo',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Patada arriba y abajo con la pierna superior.'},
      {id:'AUT036',n:'Pequeños Círculos',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Haga círculos pequeños con la pierna superior.'},
      {id:'AUT037',n:'La Foca',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Ruede hacia atrás con las piernas abiertas.'},
      {id:'AUT038',n:'Bromista I',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Ruede hacia atrás formando una V con las piernas.'},
      {id:'AUT039',n:'El Teaser',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás, piernas elevadas. Eleve el tronco a posición de V.'},
      {id:'AUT040',n:'Elevación de las Piernas Hacia Atrás',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Eleve las piernas hacia atrás arqueando el tronco.'},
      {id:'AUT041',n:'Buceo de Cisne',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Eleve el pecho y las piernas arqueando el cuerpo como un cisne.'},
      {id:'AUT042',n:'Navaja Suiza',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Invertida vertical: lleve las piernas al techo y eleve el tronco.'},
      {id:'AUT043',n:'Torsión de la Columna',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Gire el tronco hacia un lado y hacia el otro.'},
      {id:'AUT044',n:'Tijeras',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Abra y cierre las piernas alternando cuál queda arriba.'},
      {id:'AUT045',n:'Puente sobre los Hombros',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Eleve el cuerpo apoyado en hombros y pies.'},
      {id:'AUT046',n:'Elevación de Piernas',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Eleve la pierna superior lateralmente.'},
      {id:'AUT047',n:'Batir las Piernas',f:'Piernas',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Mueva la pierna superior hacia adelante y atrás.'},
      {id:'AUT048',n:'Círculos Muslos',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Haga círculos con los muslos de la pierna superior.'},
      {id:'AUT049',n:'Patata Caliente',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Dé golpecitos rápidos con la pierna superior.'},
      {id:'AUT050',n:'Tijeras Grandes',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Abra las piernas en V y ciérrelas.'},
      {id:'AUT051',n:'Grand Rond de Jambe',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En decúbito lateral. Haga grandes círculos con la pierna superior.'},
      {id:'AUT052',n:'El Bromista II',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Ruede hacia atrás formando V avanzada.'},
      {id:'AUT053',n:'El Bromista III',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Variación avanzada del rodamiento.'},
      {id:'AUT054',n:'Bumerán',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Acostado boca atrás. Transición de invertida a V.'},
      {id:'AUT055',n:'Círculos Caderas',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Haga círculos con las caderas manteniendo el pecho elevado.'},
      {id:'AUT056',n:'Nadar',f:'Espalda',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En prono. Eleve brazos y piernas opuestos alternando.'},
      {id:'AUT057',n:'Tirar de la Pierna Hacia Abajo',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie, agarre de straps. Tire de la pierna hacia abajo extendida.'},
      {id:'AUT058',n:'Tirar de la Pierna Hacia Arriba',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie, agarre de straps. Tire de la pierna hacia arriba extendida.'},
      {id:'AUT059',n:'Patadas Laterales Arrodillado',f:'Equilibrio',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De rodillas. Patada lateral con una pierna. Alterne.'},
      {id:'AUT060',n:'Sirena',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas abiertas. Flexión lateral del tronco hacia un lado.'},
      {id:'AUT061',n:'Flexiones',f:'Hombros',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'En cuadrupedia. Baje el pecho al suelo y empuje hacia arriba.'},
      {id:'AUT062',n:'Círculos con los Brazos',f:'Hombros',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie. Haga círculos con los brazos extendidos.'},
      {id:'AUT063',n:'Rodar Hacia Abajo',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie. Baje la cabeza vértebra a vértebra hasta flexionarse.'},
      {id:'AUT064',n:'Sentarse',f:'Cadera',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De pie. Siéntese articulando la columna vértebra a vértebra.'},
      {id:'AUT065',n:'Spine Stretch Forward',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Flexione el tronco hacia adelante con las piernas extendidas.'},
      {id:'AUT066',n:'Mermaid',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado. Estiramiento lateral del tronco.'},
      {id:'AUT067',n:'Kneeling Stretch',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'De rodillas. Inclínese hacia atrás estirando los cuádriceps.'},
      {id:'AUT068',n:'Saw',f:'Columna',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,eq:'Mat',de:'Sentado, piernas abiertas. Gire el tronco y "sierre" con la mano hacia el pie.'},
    ];

    var AL = {
      ALU01:{id:'ALU01',no:'María García',ni:1,re:[],ad:'Sin adaptaciones.'},
      ALU02:{id:'ALU02',no:'Laura Martínez',ni:1,re:['Progresiones lentas'],ad:'Progresiones lentas.'},
      ALU03:{id:'ALU03',no:'Carmen Rodriguez',ni:0,re:['NO inversiones'],ad:'Evitar inversión.'},
      ALU04:{id:'ALU04',no:'Ana López',ni:3,re:[],ad:'Sin adaptaciones.'},
      ALU05:{id:'ALU05',no:'Elena Sanchez',ni:2,re:['Reducir rango equilibrio'],ad:'Reducir rango.'},
      ALU06:{id:'ALU06',no:'Isabel Torres',ni:3,re:[],ad:'Sin adaptaciones.'},
      ALU07:{id:'ALU07',no:'Patricia Gomez',ni:3,re:[],ad:'Sin adaptaciones.'}
    };

    var GR = {
      GRP01:{id:'GRP01',no:'Matutino A',ni:[1],al:['ALU01','ALU02','ALU03']},
      GRP02:{id:'GRP02',no:'Avanzado B',ni:[3],al:['ALU04','ALU05','ALU06','ALU07']}
    };

    function loadSES(){
      try{
        var d=localStorage.getItem('pilates_ses_v3');
        if(!d)return[];
        var data=JSON.parse(d);
        return data.filter(function(s){
          return s && s.id && s.fecha && s.fases && Object.keys(s.fases).length>0;
        });
      }catch(e){return[];}
    }
    function saveSES(){
      try{localStorage.setItem('pilates_ses_v3',JSON.stringify(SES));}catch(e){}
    }
    var SES = loadSES();

    var sa = {}, gaid = null, dsel = 50, mcal = new Date(), dsel2 = null, editMode = false;

    // ============================================================
    // ALGORITMO DE COREGRAFÍA
    // ============================================================
    
    var FASE_REGLAS = {
      0:{pos:[0,2],zona:[0,1,2,3,4,5],fam:['Core','Espalda','Hombros','Cadera','Piernas','General'],desc:'Preparación'},
      1:{pos:[0,2,3],zona:[0,1,2,3],fam:['Cadera','Piernas','Core','Hombros'],desc:'Activación'},
      2:{pos:[2,3,4],zona:[1,2,3,4],fam:['Core','Espalda','Columna','Cadera','Hombros','Piernas'],desc:'Desarrollo'},
      3:{pos:[3,4],zona:[2,3,4,5],fam:['Core','Equilibrio','Cadera','Espalda','Columna'],desc:'Centro'},
      4:{pos:[3,4,6],zona:[3,4,5],fam:['Core','Cadera','Piernas','Equilibrio','Hombros','Espalda','Inversion','Columna'],desc:'Integración'},
      5:{pos:[4,6],zona:[1,3,4,5],fam:['Equilibrio','Hombros','Piernas','Espalda','Columna'],desc:'Funcional'},
      6:{pos:[0,2,3,4],zona:[2,3,4,5],fam:['Columna','General','Cadera'],desc:'Cierre'}
    };

    var FASE_IDEAL_POS = [0, 2, 3, 4, 6, 6, 2];
    var FASE_IDEAL_ZON = [2, 2, 3, 3, 4, 4, 3];
    var FASE_IDEAL_FAM = ['Core','Cadera','Espalda','Core','Core','Hombros','Columna'];

    var FAM_ORDER = ['Core','Espalda','Cadera','Piernas','Hombros','Columna','General','Equilibrio','Inversion'];

    function fN(niveles,fase){
      var result = [];
      var reglas = FASE_REGLAS[fase] || FASE_REGLAS[2];
      for(var i=0;i<EJ.length;i++){
        var e = EJ[i];
        if(e.fa !== fase) continue;
        var nivelOk = false;
        for(var j=0;j<niveles.length;j++){
          if(e.nmin <= niveles[j] && e.nmax >= niveles[j]){
            nivelOk = true; break;
          }
        }
        if(!nivelOk) continue;
        if(reglas.pos.indexOf(e.p) < 0) continue;
        if(reglas.zona.indexOf(e.z) < 0) continue;
        if(reglas.fam.indexOf(e.f) < 0) continue;
        if(sa.ins && sa.ins.length > 0){
          var intensidadOk = false;
          for(var k=0;k<sa.ins.length;k++){
            var rango = sa.ins[k];
            var minI = (rango-1)*2+1;
            var maxI = rango*2;
            if(e.i >= minI && e.i <= maxI){
              intensidadOk = true; break;
            }
          }
          if(!intensidadOk) continue;
        }
        if(sa.eqs && sa.eqs.length > 0){
          if(sa.eqs.indexOf(e.eq) < 0) continue;
        }
        result.push(e);
      }
      return result;
    }

    function compat(prev, next){
      var s = 0;
      if(next.z > prev.z) s += 5;
      else if(next.z === prev.z) s += 3;
      else if(next.z === prev.z-1) s += 1;
      if(next.p > prev.p) s += 4;
      else if(next.p === prev.p) s += 2;
      if(next.f !== prev.f) s += 2;
      if(next.i >= prev.i-1 && next.i <= prev.i+2) s += 1;
      return s;
    }

    function proxIdeal(e, fase){
      var posIdeal = FASE_IDEAL_POS[fase];
      var zonaIdeal = FASE_IDEAL_ZON[fase];
      var famIdeal = FASE_IDEAL_FAM[fase];
      var distPos = Math.abs(e.p - posIdeal);
      var distZona = Math.abs(e.z - zonaIdeal);
      var distFam = Math.abs(FAM_ORDER.indexOf(e.f) - FAM_ORDER.indexOf(famIdeal));
      return distPos + distZona + distFam;
    }

    function calc(gid, target){
      var g = GR[gid];
      if(!g) return null;
      
      var sesiones = {};
      var dt = 0, usadas = [], ultimo = null;
      
      for(var f=0;f<7;f++){
        var ej = fN(g.ni || [], f);
        if(!ej.length) continue;
        
        var opciones = [];
        for(var c=0;c<ej.length;c++){
          var ya = false;
          for(var u=0;u<usadas.length;u++){if(usadas[u]===ej[c].id){ya=true;break;}}
          if(!ya) opciones.push(ej[c]);
        }
        if(!opciones.length) continue;
        
        if(ultimo){
          opciones.sort(function(a,b){
            var ca = compat(ultimo,a);
            var cb = compat(ultimo,b);
            if(cb !== ca) return cb - ca;
            return proxIdeal(a,f) - proxIdeal(b,f);
          });
        } else {
          opciones.sort(function(a,b){return proxIdeal(a,f) - proxIdeal(b,f);});
        }
        
        var e = opciones[0];
        sesiones[f] = [e];
        usadas.push(e.id);
        dt += e.d;
        ultimo = e;
      }
      
      if(dt < target){
        var fasesExtra = [2,3,4,1,5,0,6];
        for(var fi=0;fi<fasesExtra.length;fi++){
          if(dt >= target) break;
          var f2 = fasesExtra[fi];
          var ej2 = fN(g.ni || [], f2);
          
          for(var c2=0;c2<ej2.length;c2++){
            if(dt >= target) break;
            var ya2 = false;
            for(var u2=0;u2<usadas.length;u2++){if(usadas[u2]===ej2[c2].id){ya2=true;break;}}
            if(ya2) continue;
            if(ultimo && compat(ultimo, ej2[c2]) >= 6){
              if(dt + ej2[c2].d <= target + 5){
                if(!sesiones[f2]) sesiones[f2] = [];
                sesiones[f2].push(ej2[c2]);
                usadas.push(ej2[c2].id);
                dt += ej2[c2].d;
                ultimo = ej2[c2];
              }
            }
          }
        }
      }
      
      return {fases:sesiones,dt:dt,ids:usadas};
    }

    // ============================================================
    // RENDERIZADO
    // ============================================================
    function renderInicio(){
      var ng=Object.keys(GR).length,na=Object.keys(AL).length,ne=EJ.length;
      var h='<div class="header"><h1>Pilates Studio</h1></div><div class="content">';
      h+='<div class="welcome-card"><h2>Hola, Profe!</h2><p class="tagline">Cada clase es una oportunidad de transformar cuerpos y mentes.</p><p class="quote">"Un buen físico es el primer requisito para la felicidad." — J.H. Pilates</p><div class="stats-row"><div class="stat-item"><span class="stat-value">'+ng+'</span><span class="stat-label">Grupos</span></div><div class="stat-item"><span class="stat-value">'+na+'</span><span class="stat-label">Alumnas</span></div><div class="stat-item"><span class="stat-value">'+ne+'</span><span class="stat-label">Ejercicios</span></div></div></div>';
      h+='<div class="section-title">Acceso Rápido</div>';
      h+='<div class="menu-grid"><div class="menu-card" onclick="window.app.verGrupos()"><div class="icon">'+ICON.groups+'</div><div class="label">Grupos</div></div>';
      h+='<div class="menu-card" onclick="window.app.verAlumnas()"><div class="icon">'+ICON.students+'</div><div class="label">Alumnas</div></div>';
      h+='<div class="menu-card" onclick="window.app.verEjercicios()"><div class="icon">'+ICON.exercises+'</div><div class="label">Ejercicios</div></div>';
      h+='<div class="menu-card" onclick="window.app.verHistorial()"><div class="icon">'+ICON.calendar+'</div><div class="label">Calendario</div></div></div>';
      h+='<button class="btn btn-primary" onclick="window.app.nuevaSesionRapida()">'+ICON.bolt+' Crear Nueva Sesión</button></div>';
      h+='<div class="section-title">Datos</div>';
      h+='<div class="menu-grid" style="grid-template-columns:repeat(3,1fr)">';
      h+='<div class="menu-card" style="padding:12px" onclick="window.app.exportarCSV()"><div class="menu-icon" style="font-size:1.2rem">📊</div><div class="menu-label" style="font-size:0.75rem">Exportar Excel</div></div>';
      h+='<div class="menu-card" style="padding:12px" onclick="window.app.compartirWhatsApp()"><div class="menu-icon" style="font-size:1.2rem">💬</div><div class="menu-label" style="font-size:0.75rem">Enviar WhatsApp</div></div>';
      h+='<div class="menu-card" style="padding:12px" onclick="window.app.limpiarDatos()"><div class="menu-icon" style="font-size:1.2rem">🗑️</div><div class="menu-label" style="font-size:0.75rem">Limpiar</div></div>';
      h+='</div></div>';
      document.getElementById('app').innerHTML=h;
    }

    function verGrupos(){
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Grupos</h1></div><div class="content">';
      h+='<button class="btn btn-primary" onclick="window.app.formGrupo()" style="margin-bottom:16px">'+ICON.plus+' Nuevo Grupo</button>';
      var ids=Object.keys(GR);
      for(var i=0;i<ids.length;i++){
        var g=GR[ids[i]];
        h+='<div class="card"><div class="card-body"><div class="card-icon">'+ICON.groups+'</div><div class="card-info"><div class="card-title">'+g.no+'</div><div class="card-subtitle">'+g.al.length+' alumnas</div></div><div class="card-actions"><button onclick="event.stopPropagation();window.app.formGrupo(\''+g.id+'\')">'+ICON.edit+' Editar</button><button class="danger" onclick="event.stopPropagation();window.app.eliminarGrupo(\''+g.id+'\')">'+ICON.trash+' Borrar</button></div></div></div>';
      }
      h+='</div>';document.getElementById('app').innerHTML=h;
    }

    function eliminarGrupo(id){if(!confirm('¿Eliminar?'))return;delete GR[id];toast('Eliminado');verGrupos();}

    function formGrupo(id){
      var g=id?GR[id]:{id:'',no:'',ni:[1],al:[]};
      var ie=!!id;
      var h='<div class="header"><span class="back" onclick="window.app.verGrupos()">'+ICON.arrowLeft+'</span><h1>'+(ie?'Editar':'Nuevo')+'</h1></div><div class="content">';
      h+='<div class="form-group"><label>Nombre</label><input class="form-input" id="gNo" value="'+g.no+'"></div>';
      h+='<div class="form-group"><label>Niveles</label><div class="checkbox-grid">';
      for(var n=0;n<NI.length;n++){var f=false;for(var j=0;j<g.ni.length;j++){if(g.ni[j]===n){f=true;break;}}h+='<label><input type="checkbox" class="gNi" value="'+n+'" '+(f?'checked':'')+'> '+NI[n]+'</label>';}
      h+='</div></div>';
      h+='<div class="form-group"><label>Alumnas</label><div style="display:flex;flex-direction:column;gap:6px">';
      var alIds=Object.keys(AL);
      for(var a=0;a<alIds.length;a++){var al=AL[alIds[a]];var chk=g.al.indexOf(al.id)>=0?'checked':'';h+='<label style="display:flex;align-items:center;gap:8px;padding:10px;background:var(--cream);border-radius:var(--radius-full)"><input type="checkbox" class="gAl" value="'+al.id+'" '+chk+'><span style="flex:1">'+al.no+'</span><span class="chip chip-lilac" style="font-size:9px">'+NI[al.ni]+'</span></label>';}
      h+='</div></div>';
      h+='<button class="btn btn-primary" onclick="window.app.guardarGrupo(\''+(id||'')+'\')">Guardar</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function guardarGrupo(id){
      var no=document.getElementById('gNo').value.trim();if(!no)return toast('Nombre?',true);
      var ni=[];var cn=document.querySelectorAll('.gNi:checked');for(var i=0;i<cn.length;i++){ni.push(parseInt(cn[i].value));}
      var al=[];var ca=document.querySelectorAll('.gAl:checked');for(var j=0;j<ca.length;j++){al.push(ca[j].value);}
      var nid=id||'GRP'+Date.now();GR[nid]={id:nid,no:no,ni:ni,al:al};
      toast('Guardado');setTimeout(function(){verGrupos();},600);
    }

    function verGrupo(gid){
      var g=GR[gid];if(!g)return verGrupos();
      var h='<div class="header"><span class="back" onclick="window.app.verGrupos()">'+ICON.arrowLeft+'</span><h1>'+g.no+'</h1></div><div class="content">';
      h+='<div class="info-card"><h3>'+g.no+'</h3><p>'+g.al.length+' alumnas inscritas</p></div>';
      h+='<button class="btn btn-primary" onclick="window.app.agregarAlumnaGrupo(\''+gid+'\')">'+ICON.plus+' Agregar</button>';
      h+='<button class="btn btn-ghost" onclick="window.app.quitarAlumnaGrupo(\''+gid+'\')">'+ICON.minus+' Quitar</button>';
      h+='<button class="btn btn-outline" onclick="window.app.verAlumnasGrupo(\''+gid+'\')">'+ICON.groups+' Ver</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function agregarAlumnaGrupo(gid){
      var g=GR[gid];if(!g)return;
      var disp=[];var alIds=Object.keys(AL);
      for(var i=0;i<alIds.length;i++){if(g.al.indexOf(AL[alIds[i]].id)<0)disp.push(AL[alIds[i]]);}
      if(!disp.length){toast('Todas están',true);return;}
      var h='<div class="header"><span class="back" onclick="window.app.verGrupo(\''+gid+'\')">'+ICON.arrowLeft+'</span><h1>Agregar</h1></div><div class="content">';
      for(var d=0;d<disp.length;d++){h+='<div class="card" onclick="window.app.confirmarAgregarAlumna(\''+gid+'\',\''+disp[d].id+'\')"><div class="card-body"><div class="card-icon">'+ICON.students+'</div><div class="card-info"><div class="card-title">'+disp[d].no+'</div><div class="card-subtitle">Nivel: '+NI[disp[d].ni]+'</div></div></div></div>';}
      document.getElementById('app').innerHTML=h+'</div>';
    }

    function confirmarAgregarAlumna(gid,aid){var g=GR[gid],a=AL[aid];if(!g||!a)return;g.al.push(aid);toast('Agregada');setTimeout(function(){verGrupo(gid);},500);}

    function quitarAlumnaGrupo(gid){
      var g=GR[gid];if(!g)return;
      if(!g.al.length){toast('Vacío',true);return;}
      var h='<div class="header"><span class="back" onclick="window.app.verGrupo(\''+gid+'\')">'+ICON.arrowLeft+'</span><h1>Quitar</h1></div><div class="content">';
      for(var i=0;i<g.al.length;i++){var a=AL[g.al[i]];if(!a)continue;h+='<div class="card" onclick="window.app.confirmarQuitarAlumna(\''+gid+'\',\''+a.id+'\')"><div class="card-body"><div class="card-icon">'+ICON.students+'</div><div class="card-info"><div class="card-title">'+a.no+'</div></div></div></div>';}
      document.getElementById('app').innerHTML=h+'</div>';
    }

    function confirmarQuitarAlumna(gid,aid){var g=GR[gid],a=AL[aid];if(!g||!a)return;g.al=g.al.filter(function(id){return id!==aid;});toast('Quitada');setTimeout(function(){verGrupo(gid);},500);}

    function verAlumnasGrupo(gid){
      var g=GR[gid];
      var h='<div class="header"><span class="back" onclick="window.app.verGrupo(\''+gid+'\')">'+ICON.arrowLeft+'</span><h1>'+g.no+'</h1></div><div class="content">';
      for(var i=0;i<g.al.length;i++){var a=AL[g.al[i]];if(!a)continue;
      h+='<div class="card"><div class="card-body"><div class="card-icon">'+ICON.students+'</div><div class="card-info"><div class="card-title">'+a.no+'</div><div class="card-subtitle">'+NI[a.ni]+(a.re.length?' | '+a.re[0]:'')+'</div></div></div></div>';}
      document.getElementById('app').innerHTML=h+'</div>';
    }

    function verAlumnas(){
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Alumnas</h1></div><div class="content">';
      h+='<button class="btn btn-primary" onclick="window.app.formAlumna()" style="margin-bottom:16px">'+ICON.plus+' Nueva</button>';
      var alIds=Object.keys(AL);
      for(var i=0;i<alIds.length;i++){var a=AL[alIds[i]];
      h+='<div class="card"><div class="card-body"><div class="card-icon">'+ICON.students+'</div><div class="card-info"><div class="card-title">'+a.no+'</div><div class="card-subtitle">'+NI[a.ni]+(a.re.length?' | '+a.re[0]:'')+'</div></div><div class="card-actions"><button onclick="event.stopPropagation();window.app.formAlumna(\''+a.id+'\')">'+ICON.edit+' Editar</button><button class="danger" onclick="event.stopPropagation();window.app.eliminarAlumna(\''+a.id+'\')">'+ICON.trash+' Borrar</button></div></div></div>';}
      document.getElementById('app').innerHTML=h+'</div>';
    }

    function eliminarAlumna(id){if(!confirm('¿Eliminar?'))return;delete AL[id];toast('Eliminada');verAlumnas();}

    function formAlumna(id){
      var a=id?AL[id]:{id:'',no:'',ni:1,re:[],ad:''};
      var ie=!!id;
      var h='<div class="header"><span class="back" onclick="window.app.verAlumnas()">'+ICON.arrowLeft+'</span><h1>'+(ie?'Editar':'Nueva')+'</h1></div><div class="content">';
      h+='<div class="form-group"><label>Nombre</label><input class="form-input" id="aNo" value="'+a.no+'"></div>';
      h+='<div class="form-group"><label>Nivel</label><select class="select-input" id="aNi">';
      for(var n=0;n<NI.length;n++){h+='<option value="'+n+'"'+(n===a.ni?' selected':'')+'>'+NI[n]+'</option>';}
      h+='</select></div><div class="form-group"><label>Restricciones</label><input class="form-input" id="aRe" value="'+a.re.join(', ')+'"></div>';
      h+='<button class="btn btn-primary" onclick="window.app.guardarAlumna(\''+(id||'')+'\')">Guardar</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function guardarAlumna(id){
      var no=document.getElementById('aNo').value.trim();if(!no)return toast('Nombre?',true);
      var ni=parseInt(document.getElementById('aNi').value);
      var re=document.getElementById('aRe').value.split(',').map(function(s){return s.trim()}).filter(function(s){return s});
      var nid=id||'ALU'+Date.now();AL[nid]={id:nid,no:no,ni:ni,re:re,ad:'-'};
      toast('Guardada');setTimeout(function(){verAlumnas();},500);
    }

    function verAlumna(aid){
      var a=AL[aid];if(!a)return;
      var h='<div class="header"><span class="back" onclick="window.app.verAlumnas()">'+ICON.arrowLeft+'</span><h1>'+a.no+'</h1></div><div class="content">';
      h+='<div class="info-card"><h3>'+a.no+'</h3><p>Nivel: '+NI[a.ni]+'</p><p>Restricciones: '+(a.re.length?a.re.join(', '):'Ninguna')+'</p></div>';
      h+='<button class="btn btn-outline" onclick="window.app.formAlumna(\''+a.id+'\')">'+ICON.edit+' Editar</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function verEjercicios(){
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Ejercicios ('+EJ.length+')</h1></div><div class="content">';
      h+='<button class="btn btn-primary" onclick="window.app.formEjercicio()" style="margin-bottom:16px">'+ICON.plus+' Nuevo Ejercicio</button>';
      for(var i=0;i<EJ.length;i++){var e=EJ[i];
      h+='<div class="ejercicio-item"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+NI[e.nmin]+'-'+NI[e.nmax]+'</span><span class="chip chip-mauve">'+FA[e.fa]+'</span></div><div class="card-actions" style="margin-top:8px"><button onclick="window.app.formEjercicio(\''+e.id+'\')">'+ICON.edit+' Editar</button><button class="danger" onclick="window.app.eliminarEjercicio(\''+e.id+'\')">'+ICON.trash+' Borrar</button></div></div>';}
      document.getElementById('app').innerHTML=h+'</div>';
    }

    function formEjercicio(id){
      var e=null;
      if(id){
        for(var i=0;i<EJ.length;i++){if(EJ[i].id===id){e=EJ[i];break;}}
      }
      if(!e){e={id:'',n:'',f:'Core',nmin:0,nmax:3,fa:2,p:0,i:5,d:6,z:3,de:''};}
      var ie=!!id;
      var h='<div class="header"><span class="back" onclick="window.app.verEjercicios()">'+ICON.arrowLeft+'</span><h1>'+(ie?'Editar':'Nuevo')+' Ejercicio</h1></div><div class="content">';
      h+='<div class="form-group"><label>Nombre</label><input class="form-input" id="eN" value="'+e.n+'"></div>';
      h+='<div class="form-group"><label>Familia Muscular</label><select class="select-input" id="eF">';
      var fms=['Core','Espalda','Cadera','Piernas','Hombros','General'];
      for(var fi=0;fi<fms.length;fi++){h+='<option value="'+fms[fi]+'"'+(fms[fi]===e.f?' selected':'')+'>'+fms[fi]+'</option>';}
      h+='</select></div>';
      h+='<div style="display:flex;gap:10px"><div class="form-group" style="flex:1"><label>Nivel Mín</label><select class="select-input" id="eNmin">';
      for(var n=0;n<NI.length;n++){h+='<option value="'+n+'"'+(n===e.nmin?' selected':'')+'>'+NI[n]+'</option>';}
      h+='</select></div><div class="form-group" style="flex:1"><label>Nivel Máx</label><select class="select-input" id="eNmax">';
      for(var n2=0;n2<NI.length;n2++){h+='<option value="'+n2+'"'+(n2===e.nmax?' selected':'')+'>'+NI[n2]+'</option>';}
      h+='</select></div></div>';
      h+='<div style="display:flex;gap:10px"><div class="form-group" style="flex:1"><label>Fase</label><select class="select-input" id="eFa">';
      for(var f2=0;f2<FA.length;f2++){h+='<option value="'+f2+'"'+(f2===e.fa?' selected':'')+'>'+FA[f2]+'</option>';}
      h+='</select></div><div class="form-group" style="flex:1"><label>Posición</label><select class="select-input" id="eP">';
      for(var p=0;p<PO.length;p++){h+='<option value="'+p+'"'+(p===e.p?' selected':'')+'>'+PO[p]+'</option>';}
      h+='</select></div></div>';
      h+='<div class="form-group"><label>Zona Corporal</label><select class="select-input" id="eZ">';
      for(var z=0;z<ZONAS.length;z++){h+='<option value="'+z+'"'+(z===e.z?' selected':'')+'>'+ZONAS[z]+'</option>';}
      h+='</select></div>';
      h+='<div class="form-group"><label>Duración (min)</label><input class="form-input" id="eD" type="number" value="'+e.d+'" min="1" max="30"></div>';
      h+='<div class="form-group"><label>Descripción</label><textarea class="form-textarea" id="eDe">'+e.de+'</textarea></div>';
      h+='<button class="btn btn-primary" onclick="window.app.guardarEjercicio(\''+(id||'')+'\')">Guardar</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function guardarEjercicio(id){
      var n=document.getElementById('eN').value.trim();if(!n)return toast('Nombre requerido',true);
      if(id){
        for(var i=0;i<EJ.length;i++){
          if(EJ[i].id===id){
            EJ[i].n=n;
            EJ[i].f=document.getElementById('eF').value;
            EJ[i].nmin=parseInt(document.getElementById('eNmin').value);
            EJ[i].nmax=parseInt(document.getElementById('eNmax').value);
            EJ[i].fa=parseInt(document.getElementById('eFa').value);
            EJ[i].p=parseInt(document.getElementById('eP').value);
            EJ[i].z=parseInt(document.getElementById('eZ').value);
            EJ[i].d=parseInt(document.getElementById('eD').value)||6;
            EJ[i].de=document.getElementById('eDe').value||'';
            break;
          }
        }
      }else{
        var nid='E'+String(EJ.length+1).padStart(3,'0');
        EJ.push({
          id:nid,n:n,
          f:document.getElementById('eF').value,
          nmin:parseInt(document.getElementById('eNmin').value),
          nmax:parseInt(document.getElementById('eNmax').value),
          fa:parseInt(document.getElementById('eFa').value),
          p:parseInt(document.getElementById('eP').value),
          i:5,
          d:parseInt(document.getElementById('eD').value)||6,
          z:parseInt(document.getElementById('eZ').value),
          de:document.getElementById('eDe').value||''
        });
      }
      toast('Guardado');setTimeout(function(){verEjercicios();},500);
    }

    function eliminarEjercicio(id){if(!confirm('¿Eliminar?'))return;for(var i=0;i<EJ.length;i++){if(EJ[i].id===id){EJ.splice(i,1);break;}}toast('Eliminado');verEjercicios();}

    function nuevaSesionRapida(){
      var ids=Object.keys(GR);if(!ids.length)return toast('Creá un grupo',true);
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Nueva Sesión</h1></div><div class="content">';
      h+='<div class="form-group"><label>Grupo</label><select class="select-input" id="gSel">';
      for(var g=0;g<ids.length;g++){h+='<option value="'+GR[ids[g]].id+'">'+GR[ids[g]].no+'</option>';}
      h+='</select></div><div class="form-group"><label>Fecha</label><input class="form-input" id="sFe" type="date"></div>';
      h+='<div class="form-group"><label>Hora</label><input class="form-input" id="sHo" type="time"></div>';
      h+='<div class="form-group"><label>Objetivos</label><div class="checkbox-grid">';
      var ol=['Fuerza core','Rehabilitación escapular','Movilidad general','Equilibrio','Flexibilidad','Postura','Rehabilitación rodilla','Fortalecimiento glúteos'];
      for(var o=0;o<ol.length;o++){h+='<label><input type="checkbox" class="sOb" value="'+ol[o]+'"> '+ol[o]+'</label>';}
      h+='</div></div><div class="form-group"><label>Intensidad</label><div class="checkbox-grid">';
      var il=['Suave (1-2)','Moderado (3-4)','Intenso (5-6)','Avanzado (7-8)','Experto (9-10)'];
      for(var i=0;i<il.length;i++){h+='<label><input type="checkbox" class="sIn" value="'+(i+1)+'"> '+il[i]+'</label>';}
      h+='</div></div><div class="form-group"><label>Equipo</label><div class="checkbox-grid">';
      var el=['Mat','Banda','Reformer','Aro','Pelota','Bosu'];
      for(var e=0;e<el.length;e++){h+='<label><input type="checkbox" class="sEq" value="'+el[e]+'"> '+el[e]+'</label>';}
      h+='</div></div><div class="form-group"><label>Duración</label><div class="duracion-selector">';
      for(var d=0;d<DU.length;d++){h+='<div class="duracion-option'+(DU[d]===50?' selected':'')+'" onclick="window.app.selDur('+DU[d]+')"><div class="valor">'+DU[d]+'</div><div class="unidad">min</div></div>';}
      h+='</div></div><button class="btn btn-primary" onclick="window.app.irNS()">'+ICON.arrowRight+' Continuar</button></div>';
      document.getElementById('app').innerHTML=h;
      document.getElementById('sFe').value=new Date().toISOString().split('T')[0];
      document.getElementById('sHo').value='09:00';
    }

    function selDur(d){dsel=d;var o=document.querySelectorAll('.duracion-option');for(var i=0;i<o.length;i++){var v=parseInt(o[i].querySelector('.valor').textContent);o[i].classList.toggle('selected',v===d);}}

    function irNS(){
      var gid=document.getElementById('gSel').value,fe=document.getElementById('sFe').value,ho=document.getElementById('sHo').value;
      var obs=[];var co=document.querySelectorAll('.sOb:checked');for(var i=0;i<co.length;i++){obs.push(co[i].value);}
      var ins=[];var ci=document.querySelectorAll('.sIn:checked');for(var j=0;j<ci.length;j++){ins.push(parseInt(ci[j].value));}
      var eqs=[];var ce=document.querySelectorAll('.sEq:checked');for(var k=0;k<ce.length;k++){eqs.push(ce[k].value);}
      if(!fe||!ho)return toast('Fecha/hora?',true);nuevaSesion(gid,fe,ho,obs,ins,eqs);
    }

    function nuevaSesion(gid,fe,ho,obs,ins,eqs){
      var g=GR[gid];if(!g)return;gaid=gid;sa={f:{},dt:0,gid:gid,fe:fe,ho:ho,obs:obs,ins:ins,eqs:eqs};editMode=false;
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Nueva Sesión</h1></div><div class="content">';
      h+='<div class="info-card"><h3>'+g.no+'</h3><p>'+fe+' '+ho+'</p>'+(obs.length?'<p>Objetivos: '+obs.join(', ')+'</p>':'')+(ins.length?'<p>Intensidad: '+ins.join(', ')+'</p>':'')+(eqs.length?'<p>Equipo: '+eqs.join(', ')+'</p>':'')+'</div>';
      h+='<div class="form-group"><label>Duración</label><div class="duracion-selector">';
      for(var d=0;d<DU.length;d++){h+='<div class="duracion-option'+(DU[d]===dsel?' selected':'')+'" onclick="window.app.selDur('+DU[d]+')"><div class="valor">'+DU[d]+'</div><div class="unidad">min</div></div>';}
      h+='</div></div><div class="duracion-total" id="dTot">'+ICON.clock+' 0 min (objetivo: '+dsel+' min)</div>';
      h+='<div id="ejCont"><div class="empty-state">'+ICON.bolt+'<p>Tocá "Generar"</p></div></div>';
      h+='<div class="btn-group"><button class="btn btn-primary" onclick="window.app.genSes()">'+ICON.bolt+' Generar</button><button class="btn btn-outline" onclick="window.app.aprSes()">'+ICON.check+' Aprobar</button></div></div>';
      document.getElementById('app').innerHTML=h;
    }

    function genSes(){
      var r=calc(gaid,dsel);
      if(!r||!Object.keys(r.fases).length)return toast('No se pudo generar',true);
      sa.f=r.fases;sa.dt=r.dt;sa.ids=r.ids;editMode=false;
      renderSesion();
    }

    function renderSesion(){
      document.getElementById('dTot').innerHTML=ICON.clock+' '+sa.dt+' min (objetivo: '+dsel+' min)';
      var h='';
      if(editMode){
        h+='<div class="edit-mode-banner">'+ICON.edit+' Modo edición activo</div>';
      }
      for(var f=0;f<7;f++){
        var ej=sa.f[f];if(!ej||!ej.length)continue;
        h+='<div class="fase-header">'+FA[f]+'</div>';
        for(var i=0;i<ej.length;i++){var e=ej[i];
        h+='<div class="ejercicio-item"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+PO[e.p]+'</span><span class="chip chip-mauve">'+e.d+'m</span></div>';
        h+='<div style="margin-top:4px;font-size:0.75rem;color:var(--text-lighter)"><span>'+e.de+'</span></div>';
        if(editMode){
          h+='<div class="card-actions" style="margin-top:8px"><button onclick="window.app.swapEjercicio('+f+','+i+')">'+ICON.swap+' Cambiar</button><button class="danger" onclick="window.app.removeEjercicio('+f+','+i+')">'+ICON.trash+' Quitar</button></div>';
        }
        h+='</div>';}
      }
      if(editMode){
        h+='<button class="btn btn-primary" onclick="window.app.addEjercicio()">'+ICON.plus+' Agregar Ejercicio</button>';
        h+='<button class="btn btn-outline" onclick="window.app.salirEditMode()">'+ICON.check+' Listo</button>';
      } else {
        h+='<button class="btn btn-ghost" onclick="window.app.entrarEditMode()">'+ICON.edit+' Editar Manualmente</button>';
      }
      document.getElementById('ejCont').innerHTML=h;
    }

    function entrarEditMode(){editMode=true;renderSesion();}
    function salirEditMode(){editMode=false;renderSesion();}

    function removeEjercicio(f,i){
      if(sa.f[f]&&sa.f[f][i]){
        sa.dt -= sa.f[f][i].d;
        sa.f[f].splice(i,1);
        if(!sa.f[f].length) delete sa.f[f];
        renderSesion();
      }
    }

    function addEjercicio(){
      var h='<div class="header"><span class="back" onclick="window.app.renderSesion()">'+ICON.arrowLeft+'</span><h1>Agregar Ejercicio</h1></div><div class="content">';
      h+='<div class="form-group"><label>Fase</label><select class="select-input" id="eFase">';
      for(var f=0;f<7;f++){h+='<option value="'+f+'">'+FA[f]+'</option>';}
      h+='</select></div>';
      h+='<div class="form-group"><label>Buscar</label><input class="form-input" id="eBuscar" placeholder="Nombre..." oninput="window.app.filtrarEjercicios()">';
      h+='<div id="listaEjercitos" style="max-height:300px;overflow-y:auto;margin-top:8px">';
      for(var i=0;i<EJ.length;i++){var e=EJ[i];
      h+='<div class="ejercicio-item" onclick="window.app.agregarEjercicioSesion(\''+e.id+'\')"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+PO[e.p]+'</span></div><div style="font-size:0.7rem;color:var(--text-lighter);margin-top:2px">'+e.de+'</div></div>';}
      h+='</div></div></div>';
      document.getElementById('app').innerHTML=h;
    }

    function filtrarEjercicios(){
      var q=document.getElementById('eBuscar').value.toLowerCase();
      var h='';
      for(var i=0;i<EJ.length;i++){var e=EJ[i];
      if(e.n.toLowerCase().indexOf(q)<0)continue;
      h+='<div class="ejercicio-item" onclick="window.app.agregarEjercicioSesion(\''+e.id+'\')"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+PO[e.p]+'</span></div><div style="font-size:0.7rem;color:var(--text-lighter);margin-top:2px">'+e.de+'</div></div>';}
      document.getElementById('listaEjercitos').innerHTML=h;
    }

    function agregarEjercicioSesion(eid){
      var e=null;for(var i=0;i<EJ.length;i++){if(EJ[i].id===eid){e=EJ[i];break;}}
      if(!e)return;
      var f=parseInt(document.getElementById('eFase').value);
      if(!sa.f[f])sa.f[f]=[];
      sa.f[f].push(e);
      sa.dt+=e.d;
      toast('Agregado');
      renderSesion();
    }

    function swapEjercicio(f,i){
      var h='<div class="header"><span class="back" onclick="window.app.renderSesion()">'+ICON.arrowLeft+'</span><h1>Cambiar Ejercicio</h1></div><div class="content">';
      h+='<div class="form-group"><label>Fase: '+FA[f]+'</label></div>';
      h+='<div class="form-group"><label>Buscar</label><input class="form-input" id="eBuscar" placeholder="Nombre..." oninput="window.app.filtrarSwap('+f+','+i+')>';
      h+='<div id="listaSwap" style="max-height:300px;overflow-y:auto;margin-top:8px">';
      for(var j=0;j<EJ.length;j++){var e=EJ[j];
      h+='<div class="ejercicio-item" onclick="window.app.confirmSwap('+f+','+i+',\''+e.id+'\')"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+PO[e.p]+'</span></div><div style="font-size:0.7rem;color:var(--text-lighter);margin-top:2px">'+e.de+'</div></div>';}
      h+='</div></div></div>';
      document.getElementById('app').innerHTML=h;
    }

    function filtrarSwap(f,i){
      var q=document.getElementById('eBuscar').value.toLowerCase();
      var h='';
      for(var j=0;j<EJ.length;j++){var e=EJ[j];
      if(e.n.toLowerCase().indexOf(q)<0)continue;
      h+='<div class="ejercicio-item" onclick="window.app.confirmSwap('+f+','+i+',\''+e.id+'\')"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-cream">'+PO[e.p]+'</span></div><div style="font-size:0.7rem;color:var(--text-lighter);margin-top:2px">'+e.de+'</div></div>';}
      document.getElementById('listaSwap').innerHTML=h;
    }

    function confirmSwap(f,i,eid){
      var viejo=sa.f[f][i];
      var nuevo=null;for(var j=0;j<EJ.length;j++){if(EJ[j].id===eid){nuevo=EJ[j];break;}}
      if(!nuevo)return;
      sa.dt += nuevo.d - viejo.d;
      sa.f[f][i]=nuevo;
      toast('Cambiado');
      renderSesion();
    }

    function aprSes(){
      if(!sa.f||!Object.keys(sa.f).length)return toast('Generá primero',true);
      var g=GR[sa.gid];
      var fases={};
      for(var f=0;f<7;f++){if(sa.f[f]&&sa.f[f].length){fases[FA[f]]=sa.f[f];}}
      var s={id:'SES'+String(SES.length+1).padStart(3,'0'),gid:sa.gid,grupo:g?g.no:'N/A',hora:sa.ho,fecha:sa.fe,duracion:sa.dt,objetivos:sa.obs,intensidad:sa.ins,equipo:sa.eqs,fases:fases};
      SES.push(s);saveSES();
      toast('✓ '+s.id+' aprobada');
      setTimeout(function(){verHistorial();},500);
    }

    function verHistorial(){dsel2=null;mcal=new Date();renderCal();}

    function renderCal(){
      var an=mcal.getFullYear(),mo=mcal.getMonth(),nM=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],nD=['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
      var pD=new Date(an,mo,1).getDay(),dM=new Date(an,mo+1,0).getDate(),hoy=new Date();
      var porDia={};
      for(var s=0;s<SES.length;s++){
        var f=(SES[s].fecha||'').split('-');
        if(f.length===3){
          var a2=parseInt(f[0]),m2=parseInt(f[1])-1,d2=parseInt(f[2]);
          if(!isNaN(a2)&&!isNaN(m2)&&!isNaN(d2)&&a2===an&&m2===mo){
            if(!porDia[d2])porDia[d2]=[];
            porDia[d2].push(SES[s]);
          }
        }
      }
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Calendario</h1></div><div class="content"><div class="calendario"><div class="calendario-header"><button onclick="window.app.camMes(-1)">'+ICON.arrowLeft+'</button><h3>'+nM[mo]+' '+an+'</h3><button onclick="window.app.camMes(1)">'+ICON.arrowRight+'</button></div><div class="calendario-semana">';
      for(var d=0;d<nD.length;d++){h+='<div class="calendario-dia-nombre">'+nD[d]+'</div>';}
      h+='</div><div class="calendario-grid">';
      for(var i=0;i<pD;i++){h+='<div class="calendario-dia otro-men"></div>';}
      for(var dia=1;dia<=dM;dia++){
        var esHoy=hoy.getDate()===dia&&hoy.getMonth()===mo&&hoy.getFullYear()===an;
        var hay=porDia[dia]&&porDia[dia].length>0;var sel=dsel2===dia;
        var cls='calendario-dia';if(esHoy)cls+=' hoy';if(hay)cls+=' con-sesiones';if(sel)cls+=' seleccionado';
        h+='<div class="'+cls+'" onclick="window.app.selDia('+dia+')">'+dia+'</div>';
      }
      h+='</div></div>';
      if(dsel2&&porDia[dsel2]){
        h+='<div class="sesiones-dia"><div class="section-title">Clases del '+dsel2+'/'+(mo+1)+'</div>';
        for(var s2=0;s2<porDia[dsel2].length;s2++){var ses=porDia[dsel2][s2];
        h+='<div class="sesion-card" onclick="window.app.verSesion(\''+ses.id+'\')"><div class="sesion-card-header"><div><div class="sesion-card-titulo">Clase - '+ses.grupo+'</div><div class="sesion-card-detalle">'+ses.hora+' | '+ses.duracion+' min</div></div><span class="chip chip-lilac">'+ses.duracion+'m</span></div></div>';}
        h+='<button class="btn btn-ghost danger" onclick="window.app.eliminarDia('+dsel2+','+mo+','+an+')" style="margin-top:12px">🗑️ Eliminar Día</button>';
        h+='</div>';
      }else if(dsel2){h+='<div class="empty-state"><div class="icon" font-size="32">📭</div><p>Sin clases este día</p></div>';}
      else{h+='<div class="empty-state"><div class="icon" font-size="32">📅</div><p>Seleccioná un día para ver las clases</p></div>';}
      h+='<button class="btn btn-primary" onclick="window.app.nuevaSesionRapida()">'+ICON.plus+' Nueva</button></div>';
      document.getElementById('app').innerHTML=h;
    }

    function camMes(d){mcal.setMonth(mcal.getMonth()+d);renderCal();}
    function selDia(d){dsel2=d;renderCal();}

    function verSesion(sid){
      var s=null;for(var i=0;i<SES.length;i++){if(SES[i].id===sid){s=SES[i];break;}}
      if(!s)return verHistorial();
      var h='<div class="header"><span class="back" onclick="window.app.verHistorial()">'+ICON.arrowLeft+'</span><h1>Clase - '+s.grupo+'</h1></div><div class="content">';
      h+='<div class="info-card"><h3>'+s.grupo+'</h3><p>'+s.fecha+' '+s.hora+'</p><p>'+s.duracion+' min'+(s.objetivos.length?' | '+s.objetivos.join(', '):'')+(s.intensidad && s.intensidad.length?' | Intensidad: '+s.intensidad.join(', '):'')+(s.equipo && s.equipo.length?' | Equipo: '+s.equipo.join(', '):'')+'</p></div>';
      h+='<div class="section-title">Coreografía</div>';
      for(var f=0;f<7;f++){var fase=FA[f],ej=s.fases[fase];if(!ej||!ej.length)continue;
      h+='<div class="fase-header">'+fase+'</div>';for(var i2=0;i2<ej.length;i2++){var e=ej[i2];
      h+='<div class="ejercicio-item"><div class="ejercicio-nombre">'+e.n+'</div><div class="ejercicio-chips"><span class="chip chip-lilac">'+e.f+'</span><span class="chip chip-mauve">'+e.d+'m</span></div>';
      h+='<div style="margin-top:4px;font-size:0.75rem;color:var(--text-lighter)"><span>'+e.de+'</span></div></div>';}}
      h+='<button class="btn btn-ghost danger" onclick="window.app.eliminarSesion(\''+s.id+'\')" style="margin-top:16px">🗑️ Eliminar Sesión</button>';
      h+='<button class="btn btn-ghost" onclick="window.app.exportarClasePDF(\''+s.id+'\')" style="margin-top:8px">📄 Exportar PDF</button>';
      h+='</div>';document.getElementById('app').innerHTML=h;
    }

    function toast(m,e){var t=document.createElement('div');t.className='toast'+(e?' error':'');t.textContent=m;document.body.appendChild(t);setTimeout(function(){t.remove();},2500);}

    // ============================================================
    // SISTEMA DE MEMORIA COMPLETO
    // ============================================================
    
    // Persistencia de Grupos
    function saveGR(){
      try{localStorage.setItem('pilates_gr',JSON.stringify(GR));}catch(e){}
    }
    function loadGR(){
      try{
        var d=localStorage.getItem('pilates_gr');
        if(d){
          var parsed=JSON.parse(d);
          if(parsed && Object.keys(parsed).length>0){
            GR=parsed;
          }
        }
      }catch(e){}
    }
    
    // Persistencia de Alumnas
    function saveAL(){
      try{localStorage.setItem('pilates_al',JSON.stringify(AL));}catch(e){}
    }
    function loadAL(){
      try{
        var d=localStorage.getItem('pilates_al');
        if(d){
          var parsed=JSON.parse(d);
          if(parsed && Object.keys(parsed).length>0){
            AL=parsed;
          }
        }
      }catch(e){}
    }
    
    // Persistencia de Ejercicios (personalizados)
    function saveEJ(){
      try{localStorage.setItem('pilates_ej',JSON.stringify(EJ));}catch(e){}
    }
    function loadEJ(){
      try{
        var d=localStorage.getItem('pilates_ej');
        if(d){
          var parsed=JSON.parse(d);
          if(parsed && parsed.length>0){
            EJ=parsed;
          }
        }
      }catch(e){}
    }
    
    // Exportar todos los datos
    function exportarDatos(){
      var data={
        version:'2.0',
        fecha:new Date().toISOString(),
        grupos:GR,
        alumnas:AL,
        ejercicios:EJ,
        sesiones:SES
      };
      var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
      var url=URL.createObjectURL(blob);
      var a=document.createElement('a');
      a.href=url;
      a.download='pilates_studio_backup_'+new Date().toISOString().split('T')[0]+'.json';
      a.click();
      URL.revokeObjectURL(url);
      toast('✓ Datos exportados');
    }
    
    // Importar datos
    function importarDatos(){
      var input=document.createElement('input');
      input.type='file';
      input.accept='.json';
      input.onchange=function(e){
        var file=e.target.files[0];
        if(!file)return;
        var reader=new FileReader();
        reader.onload=function(ev){
          try{
            var data=JSON.parse(ev.target.result);
            if(data.grupos){GR=data.grupos;saveGR();}
            if(data.alumnas){AL=data.alumnas;saveAL();}
            if(data.ejercicios){EJ=data.ejercicios;saveEJ();}
            if(data.sesiones){SES=data.sesiones;saveSES();}
            toast('✓ Datos importados correctamente');
            renderInicio();
          }catch(err){
            toast('Error al importar: '+err.message,true);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    }
    
    // Limpiar datos - método simple con botones individuales
    function limpiarDatos(){
      var ng=Object.keys(GR).length,na=Object.keys(AL).length,ne=EJ.length,ns=SES.length;
      var h='<div class="header"><span class="back" onclick="window.app.renderInicio()">'+ICON.arrowLeft+'</span><h1>Limpiar Datos</h1></div><div class="content">';
      h+='<p style="margin-bottom:16px;font-size:0.9rem;color:var(--text-lighter)">Seleccioná qué dato querés eliminar. Esta acción no se puede deshacer.</p>';
      
      h+='<div class="card" style="margin-bottom:8px"><div class="card-body"><div class="card-info"><div class="card-title">Grupos</div><div class="card-subtitle">'+ng+' grupos cargados</div></div><button class="btn btn-ghost danger" onclick="window.app.borrarGrupos()">🗑️ Borrar</button></div></div>';
      
      h+='<div class="card" style="margin-bottom:8px"><div class="card-body"><div class="card-info"><div class="card-title">Alumnas</div><div class="card-subtitle">'+na+' alumnas cargadas</div></div><button class="btn btn-ghost danger" onclick="window.app.borrarAlumnas()">🗑️ Borrar</button></div></div>';
      
      h+='<div class="card" style="margin-bottom:8px"><div class="card-body"><div class="card-info"><div class="card-title">Ejercicios</div><div class="card-subtitle">'+ne+' ejercicios cargados</div></div><button class="btn btn-ghost danger" onclick="window.app.borrarEjercicios()">🗑️ Borrar</button></div></div>';
      
      h+='<div class="card" style="margin-bottom:8px"><div class="card-body"><div class="card-info"><div class="card-title">Sesiones/Calendario</div><div class="card-subtitle">'+ns+' sesiones cargadas</div></div><button class="btn btn-ghost danger" onclick="window.app.borrarSesiones()">🗑️ Borrar</button></div></div>';
      
      h+='<div style="margin-top:24px"><button class="btn btn-ghost danger" onclick="window.app.borrarTodo()">⚠️ Borrar Todo</button></div>';
      h+='</div>';
      document.getElementById('app').innerHTML=h;
    }
    
    function borrarGrupos(){
      if(!confirm('¿Borrar TODOS los grupos? Esta acción no se puede deshacer.'))return;
      GR={};
      localStorage.removeItem('pilates_gr');
      toast('✓ Grupos eliminados');
      limpiarDatos();
    }
    
    function borrarAlumnas(){
      if(!confirm('¿Borrar TODAS las alumnas? Esta acción no se puede deshacer.'))return;
      AL={};
      localStorage.removeItem('pilates_al');
      toast('✓ Alumnas eliminadas');
      limpiarDatos();
    }
    
    function borrarEjercicios(){
      if(!confirm('¿Borrar TODOS los ejercicios? Esta acción no se puede deshacer.'))return;
      EJ=[];
      localStorage.removeItem('pilates_ej');
      toast('✓ Ejercicios eliminados');
      limpiarDatos();
    }
    
    function borrarSesiones(){
      if(!confirm('¿Borrar TODAS las sesiones del calendario? Esta acción no se puede deshacer.'))return;
      SES=[];
      localStorage.removeItem('pilates_ses_v3');
      toast('✓ Sesiones eliminadas');
      limpiarDatos();
    }
    
    function borrarTodo(){
      if(!confirm('¿Estás seguro de borrar TODOS los datos? Esta acción no se puede deshacer.'))return;
      GR={};AL={};EJ=[];SES=[];
      localStorage.removeItem('pilates_gr');
      localStorage.removeItem('pilates_al');
      localStorage.removeItem('pilates_ej');
      localStorage.removeItem('pilates_ses_v3');
      toast('✓ Todos los datos fueron eliminados');
      renderInicio();
    }
    
    // Exportar clases a CSV (abre en Excel)
    function exportarCSV(){
      if(!SES.length){toast('No hay clases para exportar');return;}
      var csv='Grupo,Fecha,Hora,Duración (min),Intensidad,Equipamiento\n';
      for(var i=0;i<SES.length;i++){
        var s=SES[i];
        csv+='"'+s.grupo+'","'+s.fecha+'","'+s.hora+'",'+s.duracion+',"'+(s.ins?s.ins.join('; '):'')+'","'+(s.equipo?s.equipo.join('; '):'')+'"\n';
      }
      var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
      var link=document.createElement('a');
      link.href=URL.createObjectURL(blob);
      link.download='clases-pilates-'+new Date().toISOString().slice(0,10)+'.csv';
      link.click();
      toast('✓ Archivo CSV descargado');
    }
    
    // Compartir clases por WhatsApp
    function compartirWhatsApp(){
      if(!SES.length){toast('No hay clases para compartir');return;}
      var msg='📅 *CLASES DE PILATES*\n\n';
      for(var i=0;i<SES.length;i++){
        var s=SES[i];
        msg+='🏋️ *'+s.grupo+'*\n';
        msg+='📆 '+s.fecha+' | ⏰ '+s.hora+'\n';
        msg+='⏱️ '+s.duracion+' min\n';
        if(s.ins) msg+='💪 Intensidad: '+s.ins.join(', ')+'\n';
        if(s.equipo) msg+='🔧 Equipo: '+s.equipo.join(', ')+'\n';
        msg+='\n';
      }
      msg+='_\nEnviado desde Pilates Studio Pro_';
      var url='https://wa.me/?text='+encodeURIComponent(msg);
      window.open(url,'_blank');
      toast('✓ Abriendo WhatsApp...');
    }
    
    // Exportar detalle de una clase a PDF (HTML imprimible)
    function exportarClasePDF(sid){
      var s=null;
      for(var i=0;i<SES.length;i++){if(SES[i].id===sid){s=SES[i];break;}}
      if(!s){toast('Clase no encontrada');return;}
      
      var html='<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Clase - '+s.grupo+'</title>';
      html+='<style>body{font-family:Arial,sans-serif;padding:20px}h1{color:#9b8ec4;border-bottom:2px solid #9b8ec4;padding-bottom:10px}h2{color:#6b5d5d;margin-top:20px}table{width:100%;border-collapse:collapse;margin-top:10px}th,td{border:1px solid #ddd;padding:8px;text-align:left}th{background:#9b8ec4;color:#fff}</style></head><body>';
      html+='<h1>Clase - '+s.grupo+'</h1>';
      html+='<p><strong>Fecha:</strong> '+s.fecha+' | <strong>Hora:</strong> '+s.hora+'</p>';
      html+='<p><strong>Duración:</strong> '+s.duracion+' minutos</p>';
      if(s.ins) html+='<p><strong>Intensidad:</strong> '+s.ins.join(', ')+'</p>';
      if(s.equipo) html+='<p><strong>Equipamiento:</strong> '+s.equipo.join(', ')+'</p>';
      
      var fases=['Preparación','Activación','Desarrollo','Centro','Integración','Funcional','Cierre'];
      for(var f=0;f<7;f++){
        var fase=fases[f],ej=s.fases[fase];
        if(!ej||!ej.length)continue;
        html+='<h2>'+fase+'</h2>';
        html+='<table><tr><th>Ejercicio</th><th>Familia</th><th>Zona</th><th>Duración</th><th>Descripción</th></tr>';
        for(var i2=0;i2<ej.length;i2++){
          var e=ej[i2];
          html+='<tr><td>'+e.n+'</td><td>'+e.f+'</td><td>'+(e.z!==undefined?ZONAS[e.z]:'')+'</td><td>'+e.d+' min</td><td>'+(e.de||'')+'</td></tr>';
        }
        html+='</table>';
      }
      html+='</body></html>';
      
      var w=window.open('','_blank');
      w.document.write(html);
      w.document.close();
      setTimeout(function(){w.print();},500);
      toast('✓ Abriendo vista para imprimir/guardar PDF');
    }
    
    // Eliminar una sesión individual
    function eliminarSesion(sid){
      if(!confirm('¿Eliminar esta sesión?'))return;
      SES=SES.filter(function(s){return s.id!==sid;});
      saveSES();
      toast('✓ Sesión eliminada');
      verHistorial();
    }
    
    // Eliminar todas las sesiones de un día
    function eliminarDia(dia,mes,anio){
      if(!confirm('¿Eliminar todas las clases del '+dia+'/'+(mes+1)+'?'))return;
      var prefijo=anio+'-'+String(mes+1).padStart(2,'0')+'-'+String(dia).padStart(2,'0');
      SES=SES.filter(function(s){return !s.fecha.startsWith(prefijo);});
      saveSES();
      toast('✓ Clases del día eliminadas');
      verHistorial();
    }
    
    // Cargar datos al inicio
    loadGR();
    loadAL();
    loadEJ();
    
    // Guardar grupos y alumnas cuando se modifican
    var originalGuardarGrupo=guardarGrupo;
    guardarGrupo=function(id){
      originalGuardarGrupo(id);
      saveGR();
    };
    var originalEliminarGrupo=eliminarGrupo;
    eliminarGrupo=function(id){
      originalEliminarGrupo(id);
      saveGR();
    };
    var originalGuardarAlumna=guardarAlumna;
    guardarAlumna=function(id){
      originalGuardarAlumna(id);
      saveAL();
    };
    var originalEliminarAlumna=eliminarAlumna;
    eliminarAlumna=function(id){
      originalEliminarAlumna(id);
      saveAL();
    };
    var originalGuardarEjercicio=guardarEjercicio;
    guardarEjercicio=function(id){
      originalGuardarEjercicio(id);
      saveEJ();
    };
    var originalEliminarEjercicio=eliminarEjercicio;
    eliminarEjercicio=function(id){
      originalEliminarEjercicio(id);
      saveEJ();
    };

    window.app={renderInicio:renderInicio,verGrupos:verGrupos,formGrupo:formGrupo,guardarGrupo:guardarGrupo,eliminarGrupo:eliminarGrupo,verGrupo:verGrupo,agregarAlumnaGrupo:agregarAlumnaGrupo,confirmarAgregarAlumna:confirmarAgregarAlumna,quitarAlumnaGrupo:quitarAlumnaGrupo,confirmarQuitarAlumna:confirmarQuitarAlumna,verAlumnasGrupo:verAlumnasGrupo,verAlumnas:verAlumnas,formAlumna:formAlumna,guardarAlumna:guardarAlumna,eliminarAlumna:eliminarAlumna,verAlumna:verAlumna,verEjercicios:verEjercicios,formEjercicio:formEjercicio,guardarEjercicio:guardarEjercicio,eliminarEjercicio:eliminarEjercicio,nuevaSesionRapida:nuevaSesionRapida,selDur:selDur,irNS:irNS,nuevaSesion:nuevaSesion,genSes:genSes,aprSes:aprSes,verHistorial:verHistorial,verSesion:verSesion,camMes:camMes,selDia:selDia,renderSesion:renderSesion,entrarEditMode:entrarEditMode,salirEditMode:salirEditMode,removeEjercicio:removeEjercicio,addEjercicio:addEjercicio,filtrarEjercicios:filtrarEjercicios,agregarEjercicioSesion:agregarEjercicioSesion,swapEjercicio:swapEjercicio,filtrarSwap:filtrarSwap,confirmSwap:confirmSwap,exportarDatos:exportarDatos,importarDatos:importarDatos,limpiarDatos:limpiarDatos,borrarGrupos:borrarGrupos,borrarAlumnas:borrarAlumnas,borrarEjercicios:borrarEjercicios,borrarSesiones:borrarSesiones,borrarTodo:borrarTodo,eliminarSesion:eliminarSesion,eliminarDia:eliminarDia,exportarCSV:exportarCSV,compartirWhatsApp:compartirWhatsApp,exportarClasePDF:exportarClasePDF};

    renderInicio();
  }catch(e){document.getElementById('app').innerHTML='<div class="info-card" style="border-left:3px solid var(--mauve)"><h3 style="color:var(--mauve)">Error</h3><p>'+e.message+'</p></div>';}
})();
