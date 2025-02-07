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
        "doge-dogejack.png",
        "dogejack-wojack-doomer.png",
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
