export { emailError, countryError, showError, zipError };

const errorMsgElement = document.querySelector(".error-msg");
const emailField = document.querySelector("#email");
const countryField = document.querySelector("#country");
const zipField = document.querySelector("#zip");

const emailError = function showEmailError() {
  if (emailField.validity.typeMismatch) {
    errorMsgElement.textContent =
      "Please enter a valid email ID so we can contact you in cases where you teleport somewhere...unexpected.";
  } else if (emailField.validity.valueMissing) {
    errorMsgElement.textContent =
      "Please enter a valid email ID so we can contact you in cases where you teleport somewhere...unexpected.";
  } else {
    errorMsgElement.textContent = "";
  }
};

const countryError = function showCountryError() {
  if (countryField.validity.patternMismatch) {
    errorMsgElement.textContent =
      "Please enter a valid country name. We promise in the next update, you will be able to teleport to stars and planets.";
  } else if (countryField.validity.valueMissing) {
    errorMsgElement.textContent =
      "Please enter a country name, so we can proudly deliver our services at your...countrystep!";
  } else {
    errorMsgElement.textContent = "";
  }
};

const zipError = function showZipError() {
  if (zipField.validity.valueMissing) {
    errorMsgElement.textContent =
      "Please enter a zip code to pinpoint your landing spot. Precision!";
  } else {
    errorMsgElement.textContent = "";
  }
};

function showError() {
  zipError();
  countryError();
  emailError();
}
