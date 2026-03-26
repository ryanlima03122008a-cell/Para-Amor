const envelope = document.querySelector(".envelope");
const button = document.getElementById("goToFlowers");

let opened = false;

// 📱 Melhor suporte pra celular (touch + click)
envelope.addEventListener("touchstart", toggle);
envelope.addEventListener("click", toggle);

function toggle() {
  envelope.classList.toggle("open");

  if (!opened) {
    opened = true;

    // Mostrar botão com delay suave
    setTimeout(() => {
      button.classList.add("show");
    }, 600);

    // ❤️ chuva leve (não trava celular)
    rainHearts(1500);
  } else {
    button.classList.remove("show");
    opened = false;
  }
}

// 🔘 botão com proteção (evita bug de clique duplicado)
button.addEventListener("touchstart", go);
button.addEventListener("click", go);

function go(e) {
  e.stopPropagation();
  window.location.href = "index1.html";
}

// ❤️ versão otimizada da chuva
function rainHearts(duration) {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "❤️";

    // estilo direto (mais leve que CSS externo)
    heart.style.position = "fixed";
    heart.style.top = "-10px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.animation = "fall 2.5s linear";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }, 150); // menos frequência = menos lag

  setTimeout(() => clearInterval(interval), duration);
}

// animação leve (criada via JS)
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
