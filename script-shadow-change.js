/*
Author: Roberto Cabral (https://betofc89.github.io)
Date: Oct 23rd, 2022

To write this code, I used the following references:
https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript
*/

const declaration = document.styleSheets[0].cssRules[0].style;

let sliderShadow = document.getElementById("sliderShadow");
let sunAngle = sliderShadow.value;
let sunAngleRad = (sunAngle / 180) * Math.PI; // conversion from deg to radians

let sliderElevation = document.getElementById("sliderElementsElevation");
let elemElevation = sliderElevation.value;

let cbBorderRadius = document.getElementById("cbBorderRadius");
let cbShadow = document.getElementById("cbShadow");

let angleObject = document.getElementById("angle-object");

const sunPathRadius = getComputedStyle(
  document.documentElement
).getPropertyValue("--sun-path-radius");
const sunObjRadius = getComputedStyle(
  document.documentElement
).getPropertyValue("--sun-object-radius");

let coordX;
let coordY;
let sun_coordX;
let sun_coordY;
let angleObj_coordX;
let angleObj_coordY;

calculateValues();
setValues();
declaration.setProperty("--box-shadow-alpha", 0);
sliderShadow.disabled = true;
sliderElevation.disabled = true;
sliderShadow.classList.add("inactive-slider");
sliderElevation.classList.add("inactive-slider");

// When this element changes, an anonymous function is triggered.
sliderElevation.oninput = function () {
  elemElevation = this.value;

  calculateValues();
  setValues();
  logValues();
};

// When this element changes, an anonymous function is triggered.
sliderShadow.oninput = function () {
  sunAngle = this.value;
  sunAngleRad = (sunAngle / 180) * Math.PI; // conversion from deg to radians

  calculateValues();
  setValues();
  logValues();
};

cbBorderRadius.onchange = function () {
  // console.log(this.checked);
  if (this.checked) {
    declaration.setProperty("--border-radius", "10px");
  } else {
    declaration.setProperty("--border-radius", "0px");
  }
};

cbShadow.onchange = function () {
  if (this.checked) {
    declaration.setProperty("--box-shadow-alpha", 1);
    sliderShadow.disabled = false;
    sliderElevation.disabled = false;

    sliderShadow.classList.remove("inactive-slider");
    sliderElevation.classList.remove("inactive-slider");
  } else {
    declaration.setProperty("--box-shadow-alpha", 0);
    sliderShadow.disabled = true;
    sliderElevation.disabled = true;

    sliderShadow.classList.add("inactive-slider");
    sliderElevation.classList.add("inactive-slider");
  }
};

function calculateValues() {
  // This function calculates the values of x and y coordinates
  // of the box-shadow property. Since I want the sun following
  // the standard trigonometric cycle, I multiplied the coordX to -1.
  coordX = elemElevation * Math.cos(sunAngleRad).toFixed(2) * -1;
  coordY = elemElevation * Math.sin(sunAngleRad).toFixed(2);
  console.log("sunPathRadius" + sunPathRadius);
  sun_coordX =
    parseInt(sunPathRadius) +
    parseInt(sunPathRadius) * Math.cos(sunAngleRad).toFixed(2) -
    parseInt(sunObjRadius) -
    1;
  sun_coordY =
    parseInt(sunPathRadius) -
    parseInt(sunPathRadius) * Math.sin(sunAngleRad).toFixed(2) -
    parseInt(sunObjRadius) -
    1;

  angleObj_coordX =
    parseInt(sunPathRadius) +
    parseInt(sunPathRadius) * 0.65 * Math.cos(sunAngleRad).toFixed(2) -
    parseInt(sunObjRadius) -
    1;

  angleObj_coordY =
    parseInt(sunPathRadius) -
    parseInt(sunPathRadius) * 0.65 * Math.sin(sunAngleRad).toFixed(2) -
    parseInt(sunObjRadius) -
    1;
}

function setValues() {
  declaration.setProperty("--box-shadow-x", coordX + "px");
  declaration.setProperty("--box-shadow-y", coordY + "px");

  declaration.setProperty(
    "--box-shadow-blur-radius",
    parseInt(elemElevation / 2) + "px"
  );
  // declaration.setProperty("--box-shadow-spread-radius", 0 + "px");
  declaration.setProperty("--sun-object-position-x", sun_coordX + "px");
  declaration.setProperty("--sun-object-position-y", sun_coordY + "px");

  declaration.setProperty("--angle-object-position-x", angleObj_coordX + "px");
  declaration.setProperty("--angle-object-position-y", angleObj_coordY + "px");

  angleObject.innerHTML = sunAngle + "º";
}

function logValues() {
  console.log("elemElevation: " + elemElevation);
  console.log("sunAngle: " + sunAngle);
  console.log(`(coordX, coordY): (${coordX},${coordY})`);
  console.log("- - - - - - - -");
}
