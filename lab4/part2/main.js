const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altArray = ['Closeup of a human eye', 'abstract painting', 'flowers', 'egyption drawings', 'large moth on a leaf'];

/* Looping through images */
for(const image of imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    thumbBar.appendChild(newImage);
  }

// add event listener for each image in the thumbBar
thumbBar.addEventListener('click', function(e) {
    if(e.target.nodeName === 'IMG') {
        displayedImage.src = e.target.src;
    }
    });
const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
