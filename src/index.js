import "./style.css";
import "./modern-normalize.css";
import { showError } from "./validation";

const form = document.querySelector(".form");
const emailField = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

emailField.addEventListener("input", showError);
