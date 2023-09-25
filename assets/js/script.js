// Eventos paa mudança de estilo de inputs ao focar ou inserir valores na input
const inputLogin = document.querySelectorAll("[data-input]");
const labelLogin = document.querySelectorAll("[data-label]");

function handleFocus(index) {
  // Function que verifica se a input está com foco para mudança no estilo
  labelLogin[index].classList.add("focus");
  if (mainLogin.classList.contains("inactive")) {
    labelLogin[index].blur();
  }
}

function handleBlur(input, index) {
  // Function que verifica se o valor da input mudou e remove a classe "focus" apenas se estiver vazia
  if (input.value.length === 0) {
    labelLogin[index].classList.remove("focus");
  }
}

inputLogin.forEach((input, index) => {
  input.addEventListener("focus", () => {
    handleFocus(index);
  });

  input.addEventListener("blur", () => {
    handleBlur(input, index);
  });
});

// Eventos para mostrar ou esconder senha
const passwordInputs = document.querySelectorAll("[data-password]");
const eyeIcons = document.querySelectorAll("[data-password-icon]");

passwordInputs.forEach((input, index) => {
  // remove a visibilidade da senha
  input.classList.remove("visible");

  eyeIcons[index].addEventListener("click", () => {
    // Pega o icone por meio do index e adiciona a classe para visualisar a senha
    input.classList.toggle("visible");

    // Condicional para verificar a classe, e modificar o icone e o input type
    if (input.classList.contains("visible")) {
      eyeIcons[index].src = "./assets/img/icons/eye_off.svg";
      input.type = "text";
    } else {
      eyeIcons[index].src = "./assets/img/icons/eye.svg";
      input.type = "password";
    }
  });
});

// Alterna entre as paginas login e sign up

const login = document.querySelector(".go-to-login");
const sign = document.querySelector(".go-to-sign");
const mainLogin = document.querySelector(".main-login");
const mainSign = document.querySelector(".main-sign");

mainSign.classList.add("inactive");

function handleSwith() {
  mainLogin.classList.toggle("inactive");
  mainSign.classList.toggle("inactive");
}

sign.addEventListener("click", handleSwith);
login.addEventListener("click", handleSwith);
