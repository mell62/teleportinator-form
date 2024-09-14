export { showError };

const errorMsgElement = document.querySelector(".error-msg");
const emailField = document.querySelector("#email");

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

function showError() {
  emailError();
}
