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

let cumpleCelebrado = false;

function actualizarCuenta() {
  const elemento = document.getElementById("countdown");
  if (!elemento) return;

  const cumple = new Date("June 19, 2026 00:00:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = cumple - ahora;

  if (diferencia <= 0) {
    elemento.innerHTML =
    `<div style="font-size:1.2em;margin-top:10px;">
      🎂 Feliz cumpleaños Monita 💙
    </div>`;

    if (!cumpleCelebrado) {
      crearConfeti();
      lanzarFuegosArtificiales();

      cumpleCelebrado = true;

      setInterval(() => {
        crearConfeti();
        lanzarFuegosArtificiales();
      }, 600000);
    }

    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  elemento.innerHTML =
    `Faltan ${dias} días, ${horas} horas y ${minutos} minutos 🎂`;
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();



function lanzarFuegosArtificiales() {
  const colors = ['#ffd700','#ff6b9d','#7dd3fc','#a78bfa','#6ee7b7'];

  function burst(cx, cy) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 14; i++) {

      const angle = (i / 14) * 2 * Math.PI;
      const dist = 50 + Math.random() * 60;

      const dot = document.createElement("div");

      dot.style.cssText = `
      position:fixed;
      left:${cx}px;
      top:${cy}px;
      width:8px;
      height:8px;
      border-radius:50%;
      background:${color};
      pointer-events:none;
      z-index:9999;`;

      document.body.appendChild(dot);

      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;

      dot.animate([
        {
          transform:'translate(0,0) scale(0)',
          opacity:1
        },
        {
          transform:`translate(${tx}px,${ty}px) scale(1)`,
          opacity:0
        }
      ], {
        duration:800,
        easing:'ease-out',
        fill:'forwards'
      });

      setTimeout(() => dot.remove(), 900);
    }
  }

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      burst(
        Math.random() * window.innerWidth,
        Math.random() * 300
      );
    }, i * 250);
  }
}
