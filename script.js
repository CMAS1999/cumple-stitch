function crearCorazon() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const corazones = [
  "💙",
  "🤍",
  "🩷"
];

heart.innerHTML =
  corazones[Math.floor(Math.random() * corazones.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazon, 1800);

function crearConfeti() {
  const emojis = ["💙", "🤍", "🩷", "✨", "🌺", "🎂", "🛸"];

  for (let i = 0; i < 25; i++) {
    const confeti = document.createElement("div");
    confeti.className = "confeti";
    confeti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.fontSize = Math.random() * 18 + 14 + "px";
    confeti.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(confeti);

    setTimeout(() => {
      confeti.remove();
    }, 5000);
  }
}

function actualizarCuenta() {
  const elemento = document.getElementById("countdown");
  if (!elemento) return;

  const cumple = new Date("July 8, 2026 00:00:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = cumple - ahora;

 if (diferencia <= 0) {
  elemento.innerHTML = "🎂💙 Hoy es el cumpleaños de la más monita 💙🎂";
  crearConfeti();
  return;
}

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  elemento.innerHTML = `Faltan ${dias} días, ${horas} horas y ${minutos} minutos 🎂`;
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();
