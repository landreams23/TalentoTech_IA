/* ============================================================
   Tablero de negocio Fuxion — lógica de render
   Lee los datos de window.DASHBOARD (generados desde el notebook).
   ============================================================ */

// 📱 Configura aquí tu número de WhatsApp (formato internacional, sin +).
const WHATSAPP = ""; // ej: "573001234567"

const COLORS = ["#0E9594", "#16C172", "#F2C14E", "#077187", "#F78154", "#5B6CF0", "#C44E9B", "#0A8754"];
const FONT = { family: "Poppins, sans-serif", color: "#13233b" };

const cop = n => "$" + Math.round(n).toLocaleString("es-CO");
const copK = n => n >= 1e6 ? "$" + (n/1e6).toFixed(1) + "M" : "$" + Math.round(n/1e3) + "k";
const num = n => Number(n).toLocaleString("es-CO");

async function getData() {
  if (window.DASHBOARD) return window.DASHBOARD;
  try { const r = await fetch("data/dashboard.json"); return await r.json(); } catch (e) { return null; }
}

const baseLayout = (extra = {}) => Object.assign({
  font: FONT, margin: { t: 36, r: 16, b: 48, l: 60 },
  paper_bgcolor: "rgba(0,0,0,0)", plot_bgcolor: "rgba(0,0,0,0)",
  showlegend: false, autosize: true
}, extra);
const CONFIG = { responsive: true, displayModeBar: false };

/* ---------------------------- KPIs ---------------------------- */
function renderKPIs(d) {
  const k = d.kpis;
  const items = [
    { label: "Pedidos realizados", value: num(k.pedidos), hint: k.unidades + " unidades" },
    { label: "Ingreso (precio catálogo)", value: copK(k.ingreso_catalogo), hint: "Ticket prom. " + copK(k.ticket_promedio) },
    { label: "Margen potencial", value: copK(k.margen_total), hint: k.margen_pct_global + "% sobre ingreso" },
    { label: "Productos distintos", value: num(k.productos_distintos), hint: k.ciudades + " ciudades" },
    { label: "Capital en inventario", value: copK(k.capital_disponible), hint: k.items_inventario + " ítems en stock", alert: true },
    { label: "Ganancia total del negocio", value: copK(k.ganancia_total_negocio), hint: "Todas las fuentes 2025" },
  ];
  document.getElementById("kpiGrid").innerHTML = items.map(i => `
    <div class="kpi ${i.alert ? "alert" : ""}">
      <div class="kpi__label">${i.label}</div>
      <div class="kpi__value">${i.value}</div>
      <div class="kpi__hint">${i.hint}</div>
    </div>`).join("");
}

/* ------------------------- PRODUCTOS -------------------------- */
function renderProductos(d) {
  const t = [...d.productos.tabla];

  const porIngreso = [...t].sort((a, b) => a.ingreso - b.ingreso).slice(-12);
  Plotly.newPlot("chartProductosIngreso", [{
    type: "bar", orientation: "h",
    x: porIngreso.map(p => p.ingreso), y: porIngreso.map(p => p.producto),
    marker: { color: "#0E9594" }, hovertemplate: "%{y}: %{x:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Ingreso por producto", margin: { t: 40, r: 16, b: 40, l: 130 } }), CONFIG);

  const porMargen = [...t].sort((a, b) => a.margen - b.margen).slice(-12);
  Plotly.newPlot("chartProductosMargen", [{
    type: "bar", orientation: "h",
    x: porMargen.map(p => p.margen), y: porMargen.map(p => p.producto),
    marker: { color: "#F2C14E" }, hovertemplate: "%{y}: %{x:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Margen potencial por producto", margin: { t: 40, r: 16, b: 40, l: 130 } }), CONFIG);

  const orden = [...t].sort((a, b) => b.ingreso - a.ingreso);
  document.getElementById("tablaProductos").innerHTML = `
    <thead><tr><th>Producto</th><th>Unid.</th><th>Pedidos</th><th>Ingreso</th><th>Costo</th><th>Margen</th><th>Margen %</th></tr></thead>
    <tbody>${orden.map(p => `<tr>
      <td>${p.producto}</td><td>${num(p.unidades)}</td><td>${num(p.pedidos)}</td>
      <td>${cop(p.ingreso)}</td><td>${cop(p.costo)}</td><td>${cop(p.margen)}</td><td>${p.margen_pct}%</td>
    </tr>`).join("")}</tbody>`;
}

/* -------------------------- CIUDADES -------------------------- */
function renderCiudades(d) {
  const c = [...d.ciudades].sort((a, b) => b.ingreso - a.ingreso);
  Plotly.newPlot("chartCiudades", [{
    type: "bar", x: c.map(x => x.ciudad), y: c.map(x => x.ingreso),
    marker: { color: COLORS }, hovertemplate: "%{x}: %{y:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Ingreso por ciudad" }), CONFIG);

  Plotly.newPlot("chartCiudadesMargen", [{
    type: "pie", labels: c.map(x => x.ciudad), values: c.map(x => x.ingreso),
    hole: .55, marker: { colors: COLORS },
    textinfo: "label+percent", hovertemplate: "%{label}: %{value:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Participación de cada ciudad", margin: { t: 40, r: 10, b: 10, l: 10 } }), CONFIG);
}

/* --------------------------- TIEMPO -------------------------- */
function renderTiempo(d) {
  const m = d.tiempo.por_mes;
  Plotly.newPlot("chartTiempo", [
    { type: "scatter", mode: "lines+markers", name: "Ingreso", x: m.map(x => x.mes), y: m.map(x => x.ingreso),
      line: { color: "#0E9594", width: 3 }, marker: { size: 8 } },
    { type: "scatter", mode: "lines+markers", name: "Margen", x: m.map(x => x.mes), y: m.map(x => x.margen),
      line: { color: "#F78154", width: 3 }, marker: { size: 8 } }
  ], baseLayout({ title: "Evolución mensual", showlegend: true,
      legend: { orientation: "h", y: 1.12 }, hovermode: "x unified" }), CONFIG);
}

/* ------------------------- INVENTARIO ------------------------ */
function renderInventario(d) {
  const e = d.inventario.por_estado;
  Plotly.newPlot("chartInventario", [{
    type: "pie", labels: e.map(x => x.estado), values: e.map(x => x.valor),
    hole: .55, marker: { colors: ["#0A8754", "#0E9594", "#F2C14E", "#F78154"] },
    textinfo: "label+percent", hovertemplate: "%{label}: %{value:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Capital en inventario por estado", margin: { t: 40, r: 10, b: 10, l: 10 } }), CONFIG);

  const ing = d.ingresos;
  Plotly.newPlot("chartIngresos", [{
    type: "pie", labels: ing.map(x => x.fuente), values: ing.map(x => x.valor),
    hole: .55, marker: { colors: COLORS },
    textinfo: "percent", hovertemplate: "%{label}: %{value:$,.0f}<extra></extra>"
  }], baseLayout({ title: "Composición de ganancias del negocio", showlegend: true,
      legend: { orientation: "h", y: -0.05 }, margin: { t: 40, r: 10, b: 40, l: 10 } }), CONFIG);

  const v = d.inventario.por_vencer;
  document.getElementById("tablaVencer").innerHTML = `
    <thead><tr><th>Producto</th><th>Ubicación</th><th>Vence</th><th>Días</th><th>Valor</th><th>Estado</th></tr></thead>
    <tbody>${v.map(r => {
      const dias = r.dias_para_vencer;
      const badge = dias < 0 ? `<span class="badge-danger">Vencido</span>`
                  : dias < 90 ? `<span class="badge-warn">Por vencer</span>` : "OK";
      return `<tr><td>${r.producto}</td><td>${r.ubicacion}</td><td>${r.fecha_vencimiento}</td>
        <td>${num(dias)}</td><td>${cop(r.valor)}</td><td style="text-align:right">${badge}</td></tr>`;
    }).join("")}</tbody>`;
}

/* -------------------------- CATÁLOGO ------------------------- */
function renderCatalogo() {
  const prods = window.PRODUCTOS, lineas = window.LINEAS;
  const cats = ["Todos", ...Object.keys(lineas)];
  const cont = document.getElementById("filtros");
  cont.innerHTML = cats.map((c, i) =>
    `<button class="filtro ${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");

  const pintar = (cat) => {
    const lista = cat === "Todos" ? prods : prods.filter(p => p.linea === cat);
    document.getElementById("catalogoGrid").innerHTML = lista.map(p => {
      const color = lineas[p.linea] || "#0E9594";
      return `<article class="prod">
        <div class="prod__top">
          <div class="prod__icon" style="background:${color}22;color:${color}">${p.icono}</div>
          <div>
            <div class="prod__linea" style="color:${color}">${p.linea}</div>
            <div class="prod__nombre">${p.nombre}</div>
          </div>
        </div>
        <div class="prod__eslogan">“${p.eslogan}”</div>
        <p class="prod__beneficio">${p.beneficio}</p>
        ${p.stock ? `<div class="prod__stock">✔ Disponible bajo pedido</div>` : ""}
      </article>`;
    }).join("");
  };
  pintar("Todos");

  cont.addEventListener("click", e => {
    if (!e.target.classList.contains("filtro")) return;
    cont.querySelectorAll(".filtro").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    pintar(e.target.dataset.cat);
  });

  const cta = document.getElementById("ctaWhatsapp");
  cta.href = WHATSAPP ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola, vi tu tablero y quiero conocer los productos Fuxion 🌿")}` : "#";
}

/* --------------------------- INIT --------------------------- */
(async function () {
  renderCatalogo();
  const d = await getData();
  if (!d) { document.getElementById("kpiGrid").innerHTML = "<p class='muted'>No se pudieron cargar los datos.</p>"; return; }
  renderKPIs(d);
  renderProductos(d);
  renderCiudades(d);
  renderTiempo(d);
  renderInventario(d);
})();
