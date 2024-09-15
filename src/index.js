import "./style.css";
import "./modern-normalize.css";
import {
  emailError,
  countryError,
  zipError,
  passwordError,
  confirmPasswordError,
  showError,
} from "./validation";

const form = document.querySelector(".form");
const emailField = document.querySelector("#email");
const countryField = document.querySelector("#country");
const zipField = document.querySelector("#zip");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

emailField.addEventListener("input", emailError);
countryField.addEventListener("input", countryError);
zipField.addEventListener("input", zipError);
passwordField.addEventListener("input", passwordError);
confirmPasswordField.addEventListener("input", confirmPasswordError);
