export { emailError, countryError, showError };

const errorMsgElement = document.querySelector(".error-msg");
const emailField = document.querySelector("#email");
const countryField = document.querySelector("#country");

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
      "Please enter a valid country name. We promise in the next update, we will bring the feature to teleport you to stars and planets.";
  } else if (countryField.validity.valueMissing) {
    errorMsgElement.textContent =
      "Please enter a country name, so we can proudly deliver our services at your...countrystep!";
  } else {
    errorMsgElement.textContent = "";
  }
};

function showError() {
  countryError();
  emailError();
}
