document.addEventListener("DOMContentLoaded", function () {
  const pokemons = [
    "blastoise.png",
    "bulbasur.png",
    "carterpie.png",
    "charizard.png",
    "charmeleon.png",
    "ekkans.png",
    "ivyasur.png",
    "meotwh.png",
    "nidoran.png",
    "pidgey.png",
    "pikachu.png",
    "raticate.png",
    "sandshrew.png",
    "squirtle.png",
    "zubat.png",
  ];

  const contenedor = document.getElementById("contenedor") as HTMLDivElement;
  const anteriorBtn = document.getElementById("anteriorBtn");
  const siguienteBtn = document.getElementById("siguienteBtn");
  const botonesAtaques = document.getElementById("botones-ataque");
  const ataque = document.getElementById("luchar");
  const ataquesPokemon = document.getElementById("botonesAtaques");

  let iActual = 0; // Declarar iActual fuera de la función addEventListener

  if (contenedor && anteriorBtn && siguienteBtn) {
    function mostrarImagen(i: number) {
      if (contenedor) {
        contenedor.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = `src/img/${pokemons[i]}`;
        imagen.classList.add("imagen-pokemon");
        contenedor.appendChild(imagen);
        if (botonesAtaques) {
          botonesAtaques.style.display = "none";
        }
      }
    }

    function siguienteImagen() {
      iActual++;
      if (iActual >= pokemons.length) {
        iActual = 0;
      }
      mostrarImagen(iActual);
    }

    function anteriorImagen() {
      iActual--;
      if (iActual < 0) {
        iActual = pokemons.length - 1;
      }
      mostrarImagen(iActual);
    }

    siguienteBtn.addEventListener("click", siguienteImagen);
    anteriorBtn.addEventListener("click", anteriorImagen);

    mostrarImagen(iActual);
  }

  if (contenedor) {
    let rotation = 0;
    contenedor.addEventListener("click", function () {
      contenedor.style.transform = `rotate(${rotation + 15}deg)`;

      setTimeout(() => {
        contenedor.style.transition = "transform 0.5s ease";
        contenedor.style.transform = "rotate(0deg)";
        rotation = 0;
      }, 200);
    });
  }

  const lanzarPokemon = document.getElementById("lanzar");
  if (lanzarPokemon) {
    lanzarPokemon.addEventListener("click", function () {
      if (contenedor) {
        contenedor.innerHTML = "";
        const imagen = document.createElement("img");
        const botonesCambio = document.querySelector(
          ".botones-cambio"
        ) as HTMLDivElement;
        const titlePokemon = document.getElementById(
          "title-pokemon"
        ) as HTMLElement;
        const botonesAtaque = document.getElementById(
          "botones-ataque"
        ) as HTMLElement;
        imagen.src = "./src/img/pokeball.png";
        imagen.classList.add("imagen-pokemon");
        contenedor.appendChild(imagen);
        botonesCambio.style.display = "none";
        lanzarPokemon.style.display = "none";
        titlePokemon.style.display = "none";
        botonesAtaque.style.display = "flex";
        botonesAtaque.style.transform = "translate(-230%, 80%)";

        setTimeout(function () {
          const indicePokemonActual = iActual % pokemons.length;
          const imagenPokemon = document.createElement("img");
          imagenPokemon.src = `./src/img/${pokemons[indicePokemonActual]}`;
          imagenPokemon.classList.add("imagen-pokemon");
          contenedor.innerHTML = "";
          contenedor.appendChild(imagenPokemon);
        }, 800);
      }
    });
  }

  if (ataque && botonesAtaques) {
    ataque.addEventListener("click", function () {
      // Verificar si ataquesPokemon no es null antes de usarlo
      if (ataquesPokemon) {
        const ataque1 = document.createElement("div");
        ataque1.textContent = "Pisotón";
        const ataque2 = document.createElement("div");
        ataque2.textContent = "Chorreo";
        const ataque3 = document.createElement("div");
        ataque3.textContent = "Guantazo";
        const ataque4 = document.createElement("div");
        ataque4.textContent = "Puñetazo";

        ataque1.classList.add("ataque");
        ataque2.classList.add("ataque");
        ataque3.classList.add("ataque");
        ataque4.classList.add("ataque");

        ataquesPokemon.innerHTML = "";
        ataquesPokemon.appendChild(ataque1);
        ataquesPokemon.appendChild(ataque2);
        ataquesPokemon.appendChild(ataque3);
        ataquesPokemon.appendChild(ataque4);
      }
    });
  }
});
