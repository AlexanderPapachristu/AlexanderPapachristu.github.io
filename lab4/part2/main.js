/*
* Alex Papachristu
* 04 April 2025
* main.js
* This file contains the JavaScript code for the Image Gallery project.
* The code will create a gallery of thumbnail images that can be clicked to display the full-size image.
* The code will also create a Darken/Lighten button that will darken or lighten the image when clicked.
*/

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

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
