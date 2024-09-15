export { emailError, countryError, zipError, passwordError, showError };

const errorMsgElement = document.querySelector(".error-msg");
const emailField = document.querySelector("#email");
const countryField = document.querySelector("#country");
const zipField = document.querySelector("#zip");
const passwordField = document.querySelector("#password");

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

const currentPasswordLength = function getPasswordLength() {
  const passwordLength = passwordField.value.length;
  return passwordLength;
};

const passwordError = function showPasswordError() {
  if (passwordField.validity.tooShort) {
    errorMsgElement.textContent = `You need to enter ${
      10 - currentPasswordLength()
    } more characters for takeoff! Please include at least one lowercase, uppercase, number and special character.`;
  } else if (passwordField.validity.patternMismatch) {
    errorMsgElement.textContent =
      "Please include at least one lowercase, uppercase, and number (no special characters). Nobody wants their teleportation to get hacked, ideally.";
  } else {
    errorMsgElement.textContent = "";
  }
};

function showError() {
  passwordError();
  zipError();
  countryError();
  emailError();
}
