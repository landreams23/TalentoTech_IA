# Análisis de datos de un emprendimiento de bienestar (Fuxion)

Proyecto final del curso de **Inteligencia Artificial — Nivel Explorador (TalentoTech)**.

Este proyecto ilustra las primeras fases del ciclo de vida de un proyecto de
*Machine Learning* —detección del problema, identificación de datos y
*stakeholders*, y **análisis exploratorio de datos (EDA)**— aplicadas a un caso
real de **transformación productiva mediante ciencia y tecnología**: el
fortalecimiento de un emprendimiento de productos de bienestar a partir del
análisis de sus pedidos y afiliaciones.

## 🎯 Problema

Un emprendimiento toma decisiones de compra de inventario, precios y crecimiento
de su red de afiliados de forma intuitiva, sin apoyarse en sus propios datos.
El objetivo es **explorar los datos históricos de pedidos y afiliaciones** para
identificar productos y ciudades más rentables, estacionalidad, costos y
patrones de crecimiento que sirvan de base para decisiones informadas.

## 📊 Dashboard interactivo

> 🔗 **Versión publicada:** https://landreams23.github.io/TalentoTech_IA/

El dashboard estático (carpeta [docs/](docs/)) presenta los principales hallazgos con
gráficos interactivos (Plotly.js) e incluye un **catálogo de productos** con sus beneficios.

**Verlo localmente:** abre directamente `docs/index.html` en el navegador (los datos van
embebidos, no requiere servidor).

**Publicarlo en GitHub Pages:** en *Settings → Pages*, selecciona la rama `main` y la carpeta
`/docs`, y guarda.

## 📄 Informe

El informe del proyecto (con el detalle del código, las gráficas y los hallazgos) se
entrega directamente al docente y **no se incluye en este repositorio público**.

## 🗂️ Estructura del repositorio

```
data/
  processed/   Datos anonimizados y agregados (publicables)
notebooks/     Notebook con el análisis exploratorio (pandas/numpy)
docs/          Dashboard estático (HTML/CSS/JavaScript) — raíz de GitHub Pages
informe/       Documento del proyecto
```

> **Privacidad:** los datos crudos contienen información personal de clientes y
> **no se publican**. Solo se comparte el conjunto de datos anonimizado (los
> nombres se reemplazan por identificadores).

## ⚙️ Cómo ejecutar el análisis

```bash
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
jupyter notebook
```

## 🧰 Tecnologías

Python · pandas · numpy · matplotlib · seaborn · plotly · Jupyter Notebook ·
HTML/CSS/JavaScript · Plotly.js
