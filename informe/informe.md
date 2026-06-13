# Análisis de datos para la transformación productiva de un emprendimiento de bienestar

### Proyecto Final · Inteligencia Artificial — Nivel Explorador (TalentoTech)

**Línea temática:** transformación productiva mediante ciencia y tecnología
**Caso de estudio:** emprendimiento de productos de bienestar (Fuxion)
**Fecha:** junio de 2026

---

## Resumen ejecutivo

Este proyecto aplica las primeras fases del ciclo de vida de un proyecto de *Machine
Learning* —comprensión del negocio, comprensión de los datos y preparación/análisis
exploratorio— a los datos reales de 2025 de un emprendimiento de distribución de
productos de bienestar. A partir de un libro de Excel mantenido manualmente, se construyó
un proceso reproducible de limpieza, anonimización y análisis que permitió responder la
pregunta central del negocio: **qué productos, ciudades y momentos concentran la mayor
rentabilidad**.

Los principales hallazgos: el negocio movió **$8.3 M** en ingreso a precio de catálogo con
un **margen potencial del 16,7 %**; depende fuertemente de **un solo producto (Thermo T3)**
y de **una sola ciudad (Manizales, ~80 % del ingreso)**; y mantiene **$2.4 M de capital
inmovilizado en inventario**, con varios productos **ya vencidos** que representan pérdida
directa. Se entregan recomendaciones accionables y un **tablero interactivo** publicable.

---

## 1. Introducción teórica: el ciclo de vida de un proyecto de ML

Un proyecto de *Machine Learning* no comienza con algoritmos, sino con el entendimiento del
problema y los datos. La metodología **CRISP-DM** (*Cross Industry Standard Process for Data
Mining*) organiza este ciclo en seis fases:

1. **Comprensión del negocio** — definir el problema y los objetivos.
2. **Comprensión de los datos** — recolectar y explorar.
3. **Preparación de los datos** — limpiar, transformar, normalizar.
4. **Modelado** — entrenar algoritmos.
5. **Evaluación** — medir el desempeño.
6. **Despliegue** — poner el modelo en producción.

El **análisis exploratorio de datos (EDA)** es el núcleo de las fases 1 a 3: mediante
estadística descriptiva y visualización busca patrones, tendencias, relaciones y anomalías.
Este trabajo, de **Nivel Explorador**, abarca precisamente las fases **1, 2 y 3**, dejando
los datos comprendidos y listos para un futuro modelo predictivo.

## 2. Selección del contexto y problema

El caso es un emprendimiento real de distribución de productos de bienestar (marca Fuxion)
con varias fuentes de ingreso: reventa de productos, comisión por venta directa, comisión
por afiliación y venta de inventario en distintas ciudades.

**Problema:** las decisiones de compra de inventario, precios, enfoque geográfico y
crecimiento de la red se toman de forma intuitiva, sin apoyo en los datos. Esto genera
capital inmovilizado, riesgo de vencimiento y desconocimiento de la rentabilidad real.

> **Pregunta de negocio:** ¿Qué productos, ciudades y momentos concentran la mayor
> rentabilidad, y qué decisiones permitirían maximizar las ganancias del emprendimiento?

## 3. Datos y *stakeholders*

**Stakeholders:** la emprendedora (decisiones de negocio), la red de afiliados, los clientes
finales y el analista de datos.

**Fuente:** libro de Excel `seguimiento_fuxion_2025.xlsx` (10 hojas) con pedidos, inventario
por ciudad, ventas directas, afiliaciones, gastos y resumen de ganancias.

> **Privacidad:** los datos contienen nombres reales de clientes; se **anonimizan**
> (identificadores) antes de publicar cualquier resultado.

## 4. Metodología (preparación de los datos)

- **Evaluación de calidad:** se detectaron celdas combinadas, encabezados repetidos, filas
  de subtotales, nombres de productos y ciudades inconsistentes, valores monetarios escritos
  como texto y datos personales.
- **Limpieza:** reconstrucción de las líneas de pedido (asignación de `order_id` y
  propagación de los datos por bloque), unificación de nombres (p. ej. `NOCARBO-T`→`NOCARB-T`,
  `VITA XTRA T`→`VITA XTRA T+`, `MANIZALEZ`→`MANIZALES`) y tipado de variables.
- **Tratamiento de datos ausentes:** los `NaN` por celdas combinadas se completaron por
  propagación; los ausentes legítimos (p. ej. fecha de venta de un producto aún en stock) se
  conservaron por su significado de negocio.
- **Anonimización:** nombres de clientes y afiliados reemplazados por identificadores.
- **Normalización:** de categorías (productos/ciudades) y *Min-Max* de variables numéricas
  para el análisis multivariado.

De una hoja desordenada de 110 filas se obtuvo una tabla ordenada de **49 líneas de pedido**
sin valores ausentes.

## 5. Análisis exploratorio

### 5.1 Análisis univariado
![Análisis univariado](figuras/univariado.png)

Thermo T3 domina la demanda en unidades; la operación se concentra en Manizales; el margen
por línea se agrupa alrededor del 16 %; y el inventario combina productos vendidos,
disponibles, de consumo y gratuitos.

### 5.2 Análisis bivariado
![Análisis bivariado](figuras/bivariado.png)

El ingreso confirma a Thermo T3 como motor del negocio; Manizales aporta la mayoría del
margen; la serie mensual muestra los meses pico; y existe una relación lineal estable entre
costo y precio de catálogo (margen porcentual constante).

### 5.3 Análisis multivariado
![Análisis multivariado](figuras/multivariado.png)

Las variables monetarias están fuertemente correlacionadas. El mapa de calor producto ×
ciudad revela qué productos sostienen cada plaza y confirma la dependencia de Manizales.

### 5.4 Inventario y riesgo de vencimiento
![Vencimientos](figuras/vencimientos.png)

Hay **$2.4 M** de capital en inventario disponible y **productos ya vencidos** sin vender
(Liquid Fiber, Off, Thermo T3), lo que representa pérdida directa de capital.

### 5.5 Composición de ingresos
![Ingresos](figuras/ingresos.png)

La comisión por venta directa es la principal fuente de ganancia (66 %), seguida por la
venta de stock (27 %); la afiliación aún aporta poco (7 %).

## 6. Hallazgos y recomendaciones

**Hallazgos**
1. Producto estrella: **Thermo T3** (líder en demanda, ingreso y presencia).
2. **Alta dependencia geográfica** de Manizales (~80 % del ingreso).
3. **Margen estable (~16–20 %)**: la rentabilidad se gana por volumen y rotación.
4. **Capital en riesgo**: inventario inmovilizado y productos vencidos.
5. Ingresos concentrados en la comisión por venta directa; **afiliación subutilizada**.

**Recomendaciones**
- Gestionar el inventario por vencimiento (**FEFO**): priorizar lo próximo a vencer y ajustar
  compras a la rotación real.
- Reforzar los productos y la ciudad ganadores, pero **diversificar geográficamente**.
- **Impulsar la afiliación** como ingreso recurrente y escalable.
- **Institucionalizar el dato** para construir, en una fase siguiente, un modelo predictivo
  de demanda.

## 7. Conclusiones

El EDA cumple las fases 1–3 del ciclo de vida de ML y convierte un registro manual y
desordenado en conocimiento accionable. El emprendimiento ahora cuenta con un diagnóstico
basado en evidencia y un tablero interactivo para el seguimiento continuo, sentando las
bases para futuras fases de modelado predictivo.

## Anexos
- **Notebook del análisis:** `notebooks/analisis_fuxion.ipynb`
- **Tablero interactivo:** carpeta `docs/` (publicable en GitHub Pages)
- **Datos procesados (anonimizados):** `data/processed/`
