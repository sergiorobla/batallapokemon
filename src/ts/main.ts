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
  const ataquesPokemon2 = document.getElementById("botonesAtaques2");
  const cambiar = document.getElementById("cambiar");
  const huir = document.getElementById("huir");
  const imagencitaPokemon = document.querySelector(
    ".imagen-pokemon"
  ) as HTMLImageElement;

  let iActual = 0;

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
        const imagen2 = document.createElement("img");
        imagen2.src = "./src/img/Hooh.png";
        imagen2.classList.add("imagen-pokemon2");
        contenedor.appendChild(imagen2);

        setTimeout(function () {
          const indicePokemonActual = iActual % pokemons.length;
          const imagenPokemon = document.createElement("img");
          imagenPokemon.src = `./src/img/${pokemons[indicePokemonActual]}`;
          imagenPokemon.classList.add("imagen-pokemon");
          contenedor.innerHTML = "";
          contenedor.appendChild(imagenPokemon);
          contenedor.appendChild(imagen2);
        }, 800);
      }
    });
  }

  if (ataque && botonesAtaques && ataquesPokemon2) {
    ataque.addEventListener("click", function () {
      const ataque1 = document.createElement("div");
      ataque1.innerHTML = "<p>Pisotón</p>";
      const ataque2 = document.createElement("div");
      ataque2.innerHTML = "<p>Chorreo</p>";
      const ataque3 = document.createElement("div");
      ataque3.innerHTML = "<p>Guantazo</p>";
      const ataque4 = document.createElement("div");
      ataque4.innerHTML = "<p>Puñetazo</p>";

      ataque1.classList.add("ataque1");
      ataque2.classList.add("ataque2");
      ataque3.classList.add("ataque3");
      ataque4.classList.add("ataque4");

      if (ataquesPokemon) {
        ataquesPokemon.innerHTML = "";
        ataquesPokemon.appendChild(ataque1);
        ataquesPokemon.appendChild(ataque2);
      }

      ataquesPokemon2.innerHTML = "";
      ataquesPokemon2.appendChild(ataque3);
      ataquesPokemon2.appendChild(ataque4);
    });
  }

  function mostrarImagen(i: number) {
    if (contenedor) {
      contenedor.innerHTML = "";
      const imagen = document.createElement("img");
      imagen.src = `src/img/${pokemons[i]}`;
      imagen.classList.add("imagen-pokemon");
      contenedor.appendChild(imagen);
    }
  }

  if (cambiar) {
    cambiar.addEventListener("click", function () {
      // Incrementa el índice actual para mostrar la siguiente imagen
      iActual++;

      // Si el índice actual es mayor o igual a la longitud del array de pokemons, vuelve a comenzar desde el principio
      if (iActual >= pokemons.length) {
        iActual = 0;
      }

      // Muestra la imagen del Pokémon correspondiente al nuevo índice actual
      mostrarImagen(iActual);
    });
  }
  if (cambiar && ataque && ataquesPokemon && ataquesPokemon2) {
    cambiar.addEventListener("click", function () {
      if (botonesAtaques) {
        botonesAtaques.style.left = "162.7px";
      }

      ataquesPokemon.style.display = "none";
      ataquesPokemon2.style.display = "none";
      if (contenedor) {
        contenedor.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = "./src/img/pokeball.png";
        imagen.classList.add("imagen-pokemon");
        contenedor.appendChild(imagen);
        const imagen2 = document.createElement("img");
        imagen2.src = "./src/img/Hooh.png";
        imagen2.classList.add("imagen-pokemon2");
        contenedor.appendChild(imagen2);

        setTimeout(function () {
          const indicePokemonActual = iActual % pokemons.length;
          const imagenPokemon = document.createElement("img");
          imagenPokemon.src = `./src/img/${pokemons[indicePokemonActual]}`;
          imagenPokemon.classList.add("imagen-pokemon");
          contenedor.innerHTML = "";
          contenedor.appendChild(imagenPokemon);
          contenedor.appendChild(imagen2);
        }, 500);
      }
    });

    ataque.addEventListener("click", function () {
      if (botonesAtaques) {
        botonesAtaques.style.left = "220px";
      }
      ataquesPokemon.style.display = "block";
      ataquesPokemon2.style.display = "block";
      const imagenPokemonExistente =
        contenedor.querySelector(".imagen-pokemon2");
      if (!imagenPokemonExistente) {
        const imagen2 = document.createElement("img");
        imagen2.src = "./src/img/Hooh.png";
        imagen2.classList.add("imagen-pokemon2");
        contenedor.appendChild(imagen2);
      }
    });
  }

  if (huir) {
    huir.addEventListener("click", function () {
      contenedor.style.display = "none";
      if (botonesAtaques) {
        botonesAtaques.style.display = "none";
      }
      if (ataquesPokemon && ataquesPokemon2) {
        ataquesPokemon.style.display = "none";
        ataquesPokemon2.style.display = "none";
      }

      const volver = document.createElement("div");
      volver.classList.add("volver");
      const enlace = document.createElement("a");
      enlace.href = "./index.html";
      enlace.textContent = "Has huido, ¿Quieres volver a luchar?";
      volver.appendChild(enlace);
      document.body.appendChild(volver); // Agrega el enlace al cuerpo del documento
    });
  }
});
