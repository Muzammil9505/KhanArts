// window.onload = function() {
//     const imageContainer = document.getElementById("image-container");

//     // Fetch the list of image files from the PHP script
//     fetchImagesList()
//         .then(images => {
//             const imageArray = images.split(','); // Split the plain text into an array
//             imageArray.forEach(image => {
//                 const imgElement = document.createElement("img");
//                 imgElement.src = "images/" + image;
//                 imageContainer.appendChild(imgElement);
//             });
//         })
//         .catch(error => {
//             console.error("Error loading images: " + error);
//         });
// };

// async function fetchImagesList() {
//     try {
//         // Change the URL if needed
//         const response = await fetch('./images.php');

//         const images = await response.text(); // Handle response as plain text
//         return images;
//     } catch (error) {
//         throw error;
//     }
// }


// -------------------------------------category code-----------------------
const categorySelect = document.getElementById("category");
const nextLink = document.getElementById("nextLink");

nextLink.addEventListener("click", () => {
    const selectedCategory = categorySelect.value;
    
    // Define URLs for each category
    const categoryURLs = {
        number_plates: "number_plates.html",
        stickering: "stickering.html",
        acrylic: "acrylic.html",
        laser: "laser.html",
        steel: "steel.html"
    };

    // Get the URL for the selected category
    const categoryPageURL = categoryURLs[selectedCategory];

    // Set the href attribute of the link
    if (categoryPageURL) {
        nextLink.href = categoryPageURL;
    }
});