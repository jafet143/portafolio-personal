const copyButton = document.querySelector("#copyEmail");
const email = "jafet14306@gmail.com";

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Correo copiado";

      window.setTimeout(() => {
        copyButton.textContent = "Copiar correo";
      }, 1800);
    } catch {
      copyButton.textContent = "No se pudo copiar";
    }
  });
}
