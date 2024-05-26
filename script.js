// Popup for Roadmap
const roadmapBtn = document.getElementById("roadmapBtn");
const roadmapPopup = document.getElementById("roadmapPopup");
const closeRoadmap = document.getElementById("closeRoadmap");

roadmapBtn.addEventListener("click", function() {
    roadmapPopup.style.display = "block";
});

closeRoadmap.addEventListener("click", function() {
    roadmapPopup.style.display = "none";
});

// Popup for Memes Gallery
const memesBtn = document.getElementById("memesBtn");
const memesGallery = document.getElementById("memesGallery");
const closeMemes = document.getElementById("closeMemes");
const imagesContainer = document.getElementById("imagesContainer");

memesBtn.addEventListener("click", function() {
    memesGallery.style.display = "block";
    loadImages();
});

closeMemes.addEventListener("click", function() {
    memesGallery.style.display = "none";
});

// Function to load images from a predefined list (simulating a folder)
function loadImages() {
    // Define the folder path
    const folderPath = "memes/";

    // Clear previous images
    imagesContainer.innerHTML = "";

    // Predefined list of image filenames (you can add all your images here)
    const imagesList = [
        "doge-dogejack-smell.png",
        "woge-base-closeeyes.png",
        "woge-base-ooft copy.png",
        "doge-dogejack.png",
        "dogejack-wojack-doomer.png",
        "doge-dogejack-logo-nobg.png",
        "Untitled-3.png",
        "woge-base-happy.png",
        "woge-base-very_happy.png",
        "woge-pepe-nobg-2.png",
        "woge-marie-green-uparrows.png",
        "woge-wojack-hug.png",
        "woge-protection-soldier-fees.png",
        "woge-dogekevinjames.png",
        "woge-drinking-milk-cheems.png",
        "woge-woge-greenpsd.png",
        "woge-darth-woge.png",
        "woge-ooof(woof)-'.png",
        "woge-buff.png",
        "woge-townmeeting-doge-nobg.png",
        "woge-cube-wif-hat.png",
        "woge-doge-mask.png",
        "woge-pepe-wogelove.png",
        "woge-rubbing-hands.png",
        "woge-sniper-bear.png",
        "woge-lockin.png",
        "woge-sleeping-simpsons.png",
        "woge-baller-plane.png",
        "woge-woge-unbothered.png",
        "woge-boyfriend-meme-wojak-pepepsd.png",
        "woge-iwantyou-army.png",
        "woge-door.png",
        "woge-get-in-loser-memecoins.png",
        "woge-kabosu-tribute.png",
        // Add more image filenames as needed
    ];

    // Create and append img elements for each image
    imagesList.forEach(image => {
        const imageUrl = folderPath + image;
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imagesContainer.appendChild(imgElement);
    });
}
