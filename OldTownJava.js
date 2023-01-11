/**
 * Example config:
 * {
    width: 1024, Natural width
    height: 768, Natural height
    element : '#power-puff__map' Selector
   }
 */

class ImageResize {
  /**
   * constructor - make image maps responsive
   * @param {Object} config - setting for responsive image map
   */
  constructor(config) {
    const { width, height, element } = config;

    this.imageW = width;
    this.imageH = height;
    this.imageMap = document.querySelector(element);
    const mapId = this.imageMap.getAttribute('usemap');
    const mapElem = `map[name="${mapId.substring(1, mapId.length)}"]`;
    const area = document.querySelector(mapElem).children;
    this.areaArray = Array.from(area);

    window.addEventListener('resize', this.resizeEvent);
  }
  /**
   * getCoords - get image map coordinates
   * @param  {Node} elem - area tag
   * @return {String} - area map coordinates
   */
  getCoordinates = (elem) => {
    let areaCords = elem.dataset.coords;

    if (!areaCords) {
      areaCords = elem.getAttribute('coords');

      elem.dataset.coords = areaCords;
    }

    return areaCords;
  };
  imgMap = () => {
    this.wPercent = this.imageMap.offsetWidth / 100;
    this.hPercent = this.imageMap.offsetHeight / 100;

    this.areaArray.forEach(this.areaLoop);
  };
  /**
   * areaLoop - Loop through area tags for image map
   * @param  {Node} area - Area tag
   */
  areaLoop = (area) => {
    const coordinates = this.getCoordinates(area).split(',');
    const coordsPercent = coordinates.map(this.mapCoords).join();

    area.setAttribute('coords', coordsPercent);
  };
  /**
   * mapCoords - Set new image map coordinates based on new image width and height
   * @param  {String} coordinate - coordinates from image map array
   * @param  {Num} index - Loop index
   * @return {Num} - New image map coordinates
   */
  mapCoords = (coordinate, index) => {
    const parseCord = parseInt(coordinate, 10);

    return index % 2 === 0
      ? this.coordinatesMath(parseCord, this.imageW, this.wPercent)
      : this.coordinatesMath(parseCord, this.imageH, this.hPercent);
  };
  /**
   * coordinatesMath Set new coordinates from original image map coordinates
   * @param  {number} coordinates - original image map coordinate
   * @param  {number} imgVal - Image width or height value
   * @param  {number} percentVal - New image width or height divided by 100
   * @return {number} - New image map coordinates
   */
  coordinatesMath = (coordinates, imgVal, percentVal) =>
    (coordinates / imgVal) * 100 * percentVal;

  /**
   * resizeEvent - Resize Event
   */
  resizeEvent = () => {
    this.imgMap();
  };
}
const resizeImg = new ImageResize({
  width: document.getElementById("oldtown").width,
  height: document.getElementById("oldtown").height,
  element : '#oldtown'
})

// on/off neon light
function onLight()
{
    document.getElementById("oldtown").src = "Images/OldTownOn.png"
}

function offLight(){
    document.getElementById("oldtown").src = "Images/OldTownOff.png"
}

// BURGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navitem = document.getElementById("navbar")

navitem.addEventListener("click", closeMobileMenue)

function closeMobileMenue(){
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");

}

//slider
 var slide_index = 1;  
        displaySlides(slide_index);  
  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var slides = document.getElementsByClassName("showSlide");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }  
