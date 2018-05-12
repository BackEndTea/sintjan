/* Start of with importing Css*/
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/images.scss';
import './css/global.scss';


/*Handling images*/
import front_picture from './img/front_picture.png';
import wagen_huis from './img/wagen_huis.png';
import header_image from './img/header_image.png';


var front_picture_element = document.getElementById('front_image');
var wagen_huis_element = document.getElementById('wagen_huis');

var header_image_element = document.getElementById('header-bar');

header_image_element.src = header_image;

if (front_picture_element) {
    front_picture_element.src = front_picture;
}

if (wagen_huis_element) {
    wagen_huis_element.src = wagen_huis;
}
