// Catálogo de productos Fuxion con beneficios tomados del portafolio oficial.
// "stock" = true indica productos que el emprendimiento maneja según sus datos 2025.
window.PRODUCTOS = [
  // ---------- LÍNEA LIMPIEZA ----------
  { nombre:"Prunex 1", linea:"Limpieza", icono:"🫧", eslogan:"Limpia el colon y combate el estreñimiento",
    beneficio:"Mix de fibras (psyllium, inulina, linaza) con efecto laxante y digestivo. Desintoxica el colon, promueve la regularidad y la correcta absorción de nutrientes.", stock:true },
  { nombre:"Detox (Kit Detox Colon)", linea:"Limpieza", icono:"🌀", eslogan:"Programa de desintoxicación de 7 días",
    beneficio:"Combina Prunex (noche) y Floraliv (mañana) para limpiar el colon y reequilibrar la flora intestinal en una semana.", stock:true },
  { nombre:"Flora Liv", linea:"Limpieza", icono:"🦠", eslogan:"Protege tu organismo desde adentro",
    beneficio:"Cultivos probióticos + fibra prebiótica. Regenera la flora intestinal, mejora la digestión, reduce la acidez y refuerza la inmunidad. 10 mil millones de probióticos por toma.", stock:true },
  { nombre:"Liquid Fiber", linea:"Limpieza", icono:"💧", eslogan:"La puntualidad de tu sistema digestivo",
    beneficio:"Fibras prebióticas + vitaminas y minerales. Garantiza la depuración intestinal y ralentiza la absorción de azúcar y grasas.", stock:true },
  { nombre:"Alpha Balance", linea:"Limpieza", icono:"🥬", eslogan:"Mantén tu cuerpo balanceado y desintoxicado",
    beneficio:"Chlorella, espirulina y alfalfa. Bebida alcalinizante que depura toxinas y metales pesados, equilibra el pH y fortalece el sistema inmunológico.", stock:true },

  // ---------- LÍNEA REVITALIZA / ENERGÍA ----------
  { nombre:"Vita Xtra T+", linea:"Energía", icono:"⚡", eslogan:"Vive cada día con la energía del número uno",
    beneficio:"Maca, ginseng, guayusa, té verde y açai. Energía prolongada, mejor rendimiento físico y mental, alto poder antioxidante. Ideal para personas con anemia.", stock:true },
  { nombre:"Nutraday", linea:"Energía", icono:"🌟", eslogan:"Los nutrientes que necesitas desde niños hasta adultos",
    beneficio:"Moringa, camu camu, açai, vitaminas (A, B, C, D, E) y minerales. Bebida altamente nutritiva que da vitalidad y fortalece las defensas.", stock:true },

  // ---------- LÍNEA CONTROL DE PESO ----------
  { nombre:"Thermo T3", linea:"Control de peso", icono:"🔥", eslogan:"Acelera la quema de grasa localizada",
    beneficio:"Acción termogénica que ayuda a controlar el peso y las medidas, y eleva la energía. Tómalo después de las comidas o antes de entrenar.", stock:true },
  { nombre:"NoCarb-T", linea:"Control de peso", icono:"🚫", eslogan:"Pon los carbohidratos a raya",
    beneficio:"Yacón, té verde, canela y cromo. Inhibe parcialmente la asimilación de carbohidratos y azúcares y evita la formación de reservas de grasa.", stock:true },
  { nombre:"BioProFit", linea:"Control de peso", icono:"🥤", eslogan:"Mantén el peso y la grasa en su estado óptimo",
    beneficio:"Batido proteico bajo en calorías con 100% de biodisponibilidad. Reduce el apetito, acelera el metabolismo y tonifica la masa muscular.", stock:true },
  { nombre:"Chocolate Fit", linea:"Control de peso", icono:"🍫", eslogan:"Date un gusto sin perder la línea",
    beneficio:"Delicioso chocolate funcional que ayuda a controlar el apetito entre comidas, apoyando el control de peso.", stock:true },

  // ---------- LÍNEA INMUNOLÓGICA ----------
  { nombre:"Ganocafé / Ganomás Cappuccino", linea:"Inmunológica", icono:"☕", eslogan:"Tu salud gana más",
    beneficio:"Extracto de Ganoderma Lucidum. Antioxidante, regula el sistema inmunológico, mejora la circulación y protege el hígado.", stock:true },
  { nombre:"Vera+", linea:"Inmunológica", icono:"🛡️", eslogan:"Con tus defensas al tope, adiós alergias y virus",
    beneficio:"Aloe vera + betaglucanos. Fortalece y modula el sistema inmune, aumenta la resistencia a enfermedades respiratorias como gripe y asma.", stock:true },

  // ---------- LÍNEA ANTIEDAD / BELLEZA ----------
  { nombre:"Cool Age", linea:"Antiedad", icono:"✨", eslogan:"La verdadera belleza viene desde adentro",
    beneficio:"Péptidos de colágeno bioactivo + Q10 + biotina. Piel más firme y elástica, fortalece cabello y uñas y previene el envejecimiento prematuro.", stock:true },
  { nombre:"HGH", linea:"Antiedad", icono:"⏳", eslogan:"Vive tu juventud por más tiempo",
    beneficio:"Aminoácidos, resveratrol y glutatión. Estimula la hormona de la juventud, retarda el envejecimiento y mejora la calidad del sueño.", stock:true },
  { nombre:"Passion", linea:"Antiedad", icono:"❤️‍🔥", eslogan:"La pasión durará una eternidad",
    beneficio:"Guaraná, jalea real, maca y ginseng. Incrementa la energía y la libido, mejora la circulación y el vigor.", stock:true },
  { nombre:"Golden FLX", linea:"Antiedad", icono:"🦴", eslogan:"Protege y nutre tus articulaciones",
    beneficio:"Cúrcuma + jengibre + cardamomo. Efecto antinflamatorio y analgésico natural; mejora la flexibilidad y movilidad articular.", stock:true },

  // ---------- LÍNEA VIGOR MENTAL ----------
  { nombre:"ON", linea:"Vigor mental", icono:"🧠", eslogan:"Mente alerta y activa todo el día",
    beneficio:"Aminoácidos, cafeína y complejo B. Mejora la concentración, la memoria y el rendimiento intelectual; elimina la sensación de fatiga.", stock:true },
  { nombre:"OFF", linea:"Vigor mental", icono:"😌", eslogan:"Mente sin estrés, relajada y enfocada",
    beneficio:"L-teanina, ashwagandha y magnesio. Relaja sin somnolencia, reduce el estrés y la ansiedad y mejora la calidad del sueño.", stock:true },

  // ---------- LÍNEA GASTRONÓMICA ----------
  { nombre:"Probix", linea:"Gastronómica", icono:"🧂", eslogan:"Realza tu comida, realza tu salud",
    beneficio:"Sales naturales + probióticos para espolvorear en tus platos. 10 mil millones de probióticos por sobre; ayuda a reducir la grasa visceral y regular el metabolismo.", stock:true }
];

window.LINEAS = {
  "Limpieza":      "#16C172",
  "Energía":       "#F2C14E",
  "Control de peso":"#0E9594",
  "Inmunológica":  "#077187",
  "Antiedad":      "#C44E9B",
  "Vigor mental":  "#5B6CF0",
  "Gastronómica":  "#B4744B"
};
