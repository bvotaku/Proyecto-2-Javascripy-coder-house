const canciones = [
    {
        titulo: "21 Quenstion",
        descripcion: "El amor de los ángeles en los 2000",
        imagen: "./img/50-cent.jpg",
        audio: "./audio/21 Questions.mp3"
    },
    {
        titulo: "Locked Out of Heaven",
        descripcion: "Una mezcla innovadora de sonidos y emociones en la canción",
        imagen: "./img/bruno-mars.jpg",
        audio: "./audio/Bruno Mars - Locked Out Of Heaven (Official Music Video).mp3"
    },
    {
        titulo: "Bohemian Rhapsody",
        descripcion: "Esta canción lleva a los oyentes a un viaje sonoro único.",
        imagen: "./img/queen-3.jpg",
        audio: "./audio/Queen – Bohemian Rhapsody (Official Video Remastered).mp3"
    },
    {
        titulo: "Without Me",
        descripcion: "La canción da estilos que dan lugar a una experiencia auditiva envolvente.",
        imagen: "./img/eminen.jpg",
        audio: "./audio/Eminem - Without Me (Official Music Video).mp3"
    },
    {
        titulo: "Yellow",
        descripcion: "Un viaje experimental que mezcla sonidos electrónicos y acústicos.",
        imagen: "./img/coldplay.jpg",
        audio: "./audio/Coldplay - Yellow Sub. Español.mp3"
    },
    {
        titulo: "Black in Black",
        descripcion: "Canción llena de energía, perfecto para esos momentos de alta adrenalina.",
        imagen: "./img/acdc-4.jpg",
        audio: "./audio/AC DC - Back In Black (Lyrics).mp3"
    },
    {
        titulo: "Call Out My Name",
        descripcion: "Sumérgete en una atmósfera melódica única, ideal para relajarte.",
        imagen: "./img/the-weeknd.jpg",
        audio: "./audio/The Weeknd - Call Out My Name (Official Audio).mp3"
    },
    {
        titulo: "You Know How We Do It",
        descripcion: "Una mezcla de ritmos que te harán vibrar.",
        imagen: "./img/ice-cube.jpg",
        audio: "./audio/You Know How We Do It.mp3"
    },
    {
        titulo: "Billie Jean",
        descripcion: "Una conceptual que juega con la voz y los sonidos ambientales.",
        imagen: "./img/miachael-jackson.jpg",
        audio: "./audio/Michael Jackson - Billie Jean (Lyrics).mp3"
    },
    {
        titulo: "Sweet Child O Mine",
        descripcion: "Estilos y letras profundas definen esta impactante canción.",
        imagen: "./img/guns-n-roses.jpg",
        audio: "./audio/Guns N' Roses - Sweet Child O' Mine (Lyrics).mp3"
    },
    {
        titulo: "Numb",
        descripcion: "Una producción que explora las raíces del rock con toques modernos.",
        imagen: "./img/linkin-park.jpg",
        audio: "./audio/Linkin Park - Numb.mp3"
    },
    {
        titulo: "Rock and Roll All Nite",
        descripcion: "Sonidos experimentales que rompen las barreras tradicionales de la música.",
        imagen: "./img/kiss.jpg",
        audio: "./audio/Rock And Roll All Nite.mp3"
    }
];

const reproducir = document.getElementById("cards-music");

function crearCards(){
    canciones.forEach((item) => {
        const music = document.createElement("div");
        music.innerHTML = `
            <div class="card">
                <img src="${item.imagen}" alt="${item.titulo}">
                <div class="card-content">
                    <h3>${item.titulo}</h3>
                    <p>${item.descripcion}</p>
                    <audio controls>
                    <source src="${item.audio}" type="audio/mp3">
                </audio>
                </div>
            </div>
        `;
        reproducir.appendChild(music);
    });
};

crearCards(canciones);

const crearPlaylist = document.getElementById("crear-playlis");

const selecciondecaniones = document.getElementById("playlist-creada")

function playlis() {
    crearPlaylist.addEventListener("click", (e) => {
        e.preventDefault(); 

        const cancionSeleccionadaIndex = document.getElementById("song").value;

        if (cancionSeleccionadaIndex === "") {
            alert("Por favor, selecciona una canción.");
            return;
        }
        
        localStorage.setItem("playlist", JSON.stringify(cancionSeleccionadaIndex));

        const index = parseInt(cancionSeleccionadaIndex.replace('song', '')) - 1;

        const cancion = canciones[index];

       
        const nuevaseccion = document.createElement("div");

        nuevaseccion.innerHTML = `
            <div class="card">
                <img src="${cancion.imagen}" alt="${cancion.titulo}">
                <div class="card-content">
                    <h3>${cancion.titulo}</h3>
                    <p>${cancion.descripcion}</p>
                    <audio controls>
                        <source src="${cancion.audio}" type="audio/mp3">
                    </audio>
                </div>
            </div>
        `;

        const card = nuevaseccion.querySelector(".card");
        card.style.width = "100%";
        card.style.maxWidth = "350px";
        card.style.backgroundColor = "#fff";
        card.style.borderRadius = "8px";
        card.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
        card.style.margin = "10px 0";
        card.style.padding = "15px";
        card.style.textAlign = "center";
        card.style.transition = "transform 0.3s ease";

        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });

        const img = card.querySelector("img");
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.borderRadius = "8px";
        img.style.objectFit = "cover";
        img.style.maxHeight = "200px";
        img.style.marginBottom = "15px";

        const content = card.querySelector(".card-content");
        content.style.padding = "10px";

        const title = content.querySelector("h3");
        title.style.fontSize = "1.2rem";
        title.style.marginBottom = "10px";
        title.style.color = "#333";

        const description = content.querySelector("p");
        description.style.fontSize = "0.9rem";
        description.style.color = "#666";
        description.style.marginBottom = "15px";

        
        const audio = card.querySelector("audio");
        audio.style.width = "100%";
        audio.style.borderRadius = "4px";

        selecciondecaniones.innerHTML = ""; 

        selecciondecaniones.appendChild(nuevaseccion);
    });
}

playlis();