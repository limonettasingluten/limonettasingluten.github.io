const courses = [
  {
    id: "basica",
    name: "Carrera Básica",
    category: "carreras",
    label: "Carrera",
    details: "3 meses · Con certificado",
    description: "Bases de panadería y pastelería sin gluten para comprender ingredientes, técnicas y procesos."
  },
  {
    id: "avanzada",
    name: "Carrera Avanzada",
    category: "carreras",
    label: "Carrera",
    details: "3 meses · Con certificado",
    description: "Formulación, corrección y creación de recetas para profundizar y desarrollar productos propios."
  },
  {
    id: "donas",
    name: "Taller de Donas",
    category: "talleres",
    label: "Taller",
    details: "Curso virtual",
    description: "Masas clásicas y especiales, fermentación, cocción, rellenos, glaseados y conservación."
  },
  {
    id: "cookies",
    name: "Cookies Americanas",
    category: "talleres",
    label: "Taller",
    details: "Curso grabado",
    description: "Técnicas para lograr cookies con buena estructura, textura, sabor y terminaciones."
  },
  {
    id: "pizzas",
    name: "Pizzas Sin Gluten",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado · 2 clases",
    description: "Masas semilíquidas y amasables, fermentación, cocción, conservación y uso del freezer."
  },
  {
    id: "pastas",
    name: "Pastas Sin Gluten",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado · 2 clases",
    description: "Pastas frescas, secas y rellenas, ñoquis, salsas, cocción, conservación y freezer."
  },
  {
    id: "panes-sandwich",
    name: "Panes de Sándwich",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado · 3 clases",
    description: "Panes de miga, ciabatta y choripán, con técnicas de amasado, fermentación y conservación."
  },
  {
    id: "factureria",
    name: "Facturería Sin Gluten",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado",
    description: "Facturas de grasa, leche, manteca y hojaldre, con cremas, rellenos, almíbares y terminaciones."
  },
  {
    id: "panaderia",
    name: "Panadería Sin Gluten",
    category: "talleres",
    label: "Curso",
    details: "Curso virtual",
    description: "Masas, fermentación, horneado y conservación para elaborar diferentes panes sin gluten."
  },
  {
    id: "empanadas-tartas",
    name: "Empanadas y Tartas",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado · 2 clases",
    description: "Masas para horno y fritura, repulgues, tartas y alternativas adaptadas para diferentes necesidades."
  },
  {
    id: "panes-semiliquidos",
    name: "Panes Semilíquidos",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado",
    description: "Sustitutos, premezclas, freezer y horneado aplicados a pan de lomo, baguette e integral con semillas."
  },
  {
    id: "panes-amasables",
    name: "Panes Amasables",
    category: "talleres",
    label: "Curso",
    details: "Curso grabado",
    description: "Pan de campo, pancitos sin goma xántica ni psyllium y figazas, con múltiples sustituciones."
  },
  {
    id: "panes-amasables-2026",
    name: "Panes Amasables 2026",
    category: "talleres",
    label: "Nuevas recetas",
    details: "Curso grabado · 1 clase de 3 horas",
    description: "Baguette, hamburguesa, PBT y ciabatta, con costos, conservación y opciones veganas o sin lactosa."
  },
  {
    id: "panaderia-saludable",
    name: "Panadería Saludable",
    category: "saludable",
    label: "Saludable",
    details: "Curso grabado · 3 clases",
    description: "Preparaciones sin gluten con ingredientes elegidos por su aporte y funcionalidad."
  },
  {
    id: "pasteleria-saludable",
    name: "Pastelería Saludable",
    category: "saludable",
    label: "Saludable",
    details: "Curso grabado",
    description: "Alternativas sin azúcares refinados y recursos para crear pastelería rica y equilibrada."
  },
  {
    id: "keto",
    name: "Keto y Sin Gluten",
    category: "saludable",
    label: "Especial",
    details: "Curso grabado",
    description: "Recetas y técnicas para elaborar preparaciones keto, sin gluten y llenas de sabor."
  },
  {
    id: "personalizadas",
    name: "Clases Personalizadas",
    category: "personalizados",
    label: "A medida",
    details: "Clases virtuales",
    description: "Una propuesta individual o grupal creada según lo que necesitás aprender o resolver."
  }
];

const selected = new Set();
let activeFilter = "todos";

const courseGrid = document.querySelector("#course-grid");
const selectionCount = document.querySelector("#selection-count");
const selectionList = document.querySelector("#selection-list");
const selectionHelp = document.querySelector("#selection-help");
const prepareQuery = document.querySelector("#prepare-query");
const queryDialog = document.querySelector("#query-dialog");
const dialogSummary = document.querySelector("#dialog-summary");
const toast = document.querySelector("#toast");
const testimonialDialog = document.querySelector("#testimonial-dialog");
const testimonialDialogImage = document.querySelector("#testimonial-dialog-image");
const whatsappNumber = "5493513988585";

function renderCourses() {
  const visible = courses.filter((course) => activeFilter === "todos" || course.category === activeFilter);
  courseGrid.innerHTML = visible.map((course) => {
    const isSelected = selected.has(course.id);
    const number = String(courses.findIndex((item) => item.id === course.id) + 1).padStart(2, "0");
    return `
      <article class="course-card${isSelected ? " selected" : ""}" data-course-id="${course.id}">
        <span class="course-number">${number}</span>
        <div class="course-badges">
          <span class="course-tag">${course.label}</span>
          <span class="course-format">100% virtual</span>
        </div>
        <h3>${course.name}</h3>
        <strong class="course-details">${course.details}</strong>
        <p>${course.description}</p>
        <button class="select-course" type="button" aria-pressed="${isSelected}" data-select-course="${course.id}">
          <span class="select-icon" aria-hidden="true">${isSelected ? "✓" : "+"}</span>
          <span>${isSelected ? "Elegido" : "Elegir curso"}</span>
        </button>
      </article>`;
  }).join("");
}

function updateSelection() {
  const chosen = courses.filter((course) => selected.has(course.id));
  selectionCount.textContent = chosen.length;
  selectionHelp.textContent = chosen.length ? "Podés seguir agregando o quitar cualquiera." : "Podés marcar todos los cursos que quieras.";
  selectionList.innerHTML = chosen.map((course) => `<span class="selection-chip">${course.name}</span>`).join("");
  prepareQuery.disabled = chosen.length === 0;
  renderCourses();
}

function getQueryText() {
  const chosen = courses.filter((course) => selected.has(course.id));
  const name = document.querySelector("#visitor-name").value.trim();
  const greeting = name ? `Hola, soy ${name}.` : "Hola.";
  const list = chosen.map((course) => `• ${course.name}`).join("\n");
  return `${greeting} Quiero recibir información sobre estas capacitaciones 100% virtuales de Limonetta Sin Gluten:\n\n${list}\n\n¿Me cuentan contenido, acceso y valor?`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

courseGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-course]");
  if (!button) return;
  const id = button.dataset.selectCourse;
  selected.has(id) ? selected.delete(id) : selected.add(id);
  updateSelection();
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
    renderCourses();
  });
});

prepareQuery.addEventListener("click", () => {
  const chosen = courses.filter((course) => selected.has(course.id));
  dialogSummary.innerHTML = chosen.map((course) => `<span>${course.name}</span>`).join("");
  queryDialog.showModal();
});

document.querySelector("[data-open-consulting]").addEventListener("click", () => {
  dialogSummary.innerHTML = "<span>Consultoría gastronómica</span>";
  document.querySelector("#dialog-title").textContent = "Contanos sobre tu proyecto";
  document.querySelector("#dialog-intro").textContent = "Prepararemos una consulta para comenzar a conversar.";
  queryDialog.dataset.consulting = "true";
  queryDialog.showModal();
});

queryDialog.addEventListener("close", () => {
  document.querySelector("#dialog-title").textContent = "Ya elegiste tus capacitaciones";
  document.querySelector("#dialog-intro").textContent = "Vamos a preparar un mensaje con tu selección.";
  delete queryDialog.dataset.consulting;
});

function finalMessage() {
  if (queryDialog.dataset.consulting) {
    const name = document.querySelector("#visitor-name").value.trim();
    return `${name ? `Hola, soy ${name}.` : "Hola."} Quiero consultar por la consultoría gastronómica de Limonetta Sin Gluten. Me gustaría contarles sobre mi proyecto.`;
  }
  return getQueryText();
}

document.querySelector("#copy-query").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(finalMessage());
    showToast("Consulta copiada");
  } catch {
    showToast("No se pudo copiar automáticamente");
  }
});

document.querySelector("#share-whatsapp").addEventListener("click", () => {
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage())}`, "_blank", "noopener,noreferrer");
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("open", !open);
});
mainNav.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.querySelectorAll("[data-testimonial-image]").forEach((button) => {
  button.addEventListener("click", () => {
    testimonialDialogImage.src = button.dataset.testimonialImage;
    testimonialDialogImage.alt = button.dataset.testimonialAlt;
    testimonialDialog.showModal();
  });
});

document.querySelector("[data-close-testimonial]").addEventListener("click", () => {
  testimonialDialog.close();
});

testimonialDialog.addEventListener("click", (event) => {
  if (event.target === testimonialDialog) testimonialDialog.close();
});

renderCourses();
