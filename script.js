// BOM DIA | BOA TARDE | BOA NOITE
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";

if (greetingElement) {
  greetingElement.textContent = greetingMessage;
}

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

if (container) {
  const observer = new ResizeObserver(() => {
    const containerWidth = container.offsetWidth;
    let numColumns = Math.floor(containerWidth / 200);

    // Garantir que pelo menos 1 coluna seja criada
    if (numColumns < 1) numColumns = 1;

    // Atualizar o grid apenas se houver mudança para evitar loops
    if (container.style.gridTemplateColumns !== `repeat(${numColumns}, minmax(200px, 1fr))`) {
      container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;
    }

    console.log({ container });
    console.log({ numColumns });
  });

  observer.observe(container);
}
