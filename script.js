// Sélection des boutons
const btnPhotographie = document.getElementById("btn-photographie");
const btnPeinture = document.getElementById("btn-peinture");
const btnAnimation = document.getElementById("btn-animation");
const gallery = document.getElementById("gallery");
const projectImages = document.querySelectorAll(".projet-image");

// Liste des médias (images et vidéos)
const media = {
  photographie: [
    "khouloud.png",
    "khouloud.png",
    "khouloud.png",
    "khouloud.png",
    "khouloud.png",
    "khouloud.png",
  ],
  peinture: [
    "assets/gallery/peinture1.jpeg",
    "assets/gallery/peinture2.jpeg",
    "assets/gallery/peinture3.jpeg",
    "assets/gallery/peinture4.jpeg",
  ],
  animation: [
    "assets/gallery/animation1.mp4",
    "assets/gallery/animation2.mp4",
    "assets/gallery/animation3.mp4",
  ],
};

// Fonction pour afficher les médias
function displayMedia(category) {
  gallery.innerHTML = ""; // Vider la galerie

  media[category].forEach((src) => {
    if (src.endsWith(".mp4")) {
      // Création d'une vidéo
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.classList.add("gallery-item");
      gallery.appendChild(video);
    } else {
      // Création d'une image
      const img = document.createElement("img");
      img.src = src;
      img.alt = category;
      img.classList.add("gallery-item");
      img.addEventListener("click", () => openLightbox(src));
      gallery.appendChild(img);
    }
  });
}
projectImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src));
});
// Gérer le bouton actif
function setActiveButton(activeBtn) {
  document.querySelectorAll(".buttons button").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}

// Afficher les images de Peinture par défaut
displayMedia("peinture");
setActiveButton(btnPeinture);

// Événements pour les boutons
btnPhotographie.addEventListener("click", () => {
  displayMedia("photographie");
  setActiveButton(btnPhotographie);
});

btnPeinture.addEventListener("click", () => {
  displayMedia("peinture");
  setActiveButton(btnPeinture);
});

btnAnimation.addEventListener("click", () => {
  displayMedia("animation");
  setActiveButton(btnAnimation);
});

// Lightbox (uniquement pour les images)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close");

// Fonction pour ouvrir la lightbox
function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

// Fonction pour fermer la lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Fermer la lightbox en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});

// Ajouter un événement de clic sur chaque image de projet
projectImages.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img.src));
});

// Fonction pour fermer la lightbox
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Fermer la lightbox en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});
