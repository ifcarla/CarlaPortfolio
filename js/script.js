const botaoModo = document.getElementById("modo-toggle");
const body = document.body;

if (localStorage.getItem("modo") === "escuro") {
  body.classList.add("dark-mode");
  botaoModo.textContent = "☀️";
}

botaoModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const modoAtual = body.classList.contains("dark-mode") ? "escuro" : "claro";
  localStorage.setItem("modo", modoAtual);
  botaoModo.textContent = modoAtual === "escuro" ? "☀️" : "🌙";
});

const elementos = document.querySelectorAll('.fade-in');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada, index) => {
    if (entrada.isIntersecting) {
      setTimeout(() => {
        entrada.target.classList.add('visible');
      }, index * 300); 
    }
  });
}, {
  threshold: 0.1
});

elementos.forEach((el) => observador.observe(el));
