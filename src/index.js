import "./style.css";
import "./modern-normalize.css";
import { emailError, countryError, showError } from "./validation";

const form = document.querySelector(".form");
const emailField = document.querySelector("#email");
const countryField = document.querySelector("#country");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

emailField.addEventListener("input", emailError);
countryField.addEventListener("input", countryError);
