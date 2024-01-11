const count = 10;
const apiKey = 'st_Z9szCKaRq1NoqFtNZFk3QLT692xm3P-Opftucu8k';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('img-container');
const loader  = document.getElementById('loader');
let photosArray = [];

// Create Elements For Links & Photos, Add To DOM
function displayphotos(){
    //Run Function for each object in photosArray
    Array.prototype.forEach.call(photosArray, photo  => {
        // create a new a link 
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create image elelment
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // put the elemnts inside cintainer element
        item.appendChild(img);
        imageContainer.appendChild(item);


    });
};


//Get Photos From Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = response.json();
         displayphotos();   
         console.log(photosArray)
         
    } catch(error){ 
        
    }
}

getPhotos();



