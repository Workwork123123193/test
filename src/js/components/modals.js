const body = document.querySelector(".body");
const modalForm = document.querySelector(".form");
const modalSuccess = document.querySelector(".modal-success");
const button = document.querySelector(".footer__top-modal");
const form = document.querySelector(".form__form");
const modals = document.querySelectorAll(".modal");

button.addEventListener("click", openModal);
form.addEventListener("submit", formValidation);
body.addEventListener("click", closeModalByBody);
modals.forEach((modal) => {
  modal.addEventListener("click", closeModalByCross);
});

function openModal() {
  modalForm.classList.add("active");
  body.classList.add("active");
}

function closeModalByCross(e) {
  if (e.target.classList.contains("form__close")) {
    const currentModal = e.target.closest(".modal");

    currentModal.classList.remove("active");
    body.classList.remove("active");
  }
}

function closeModalByBody() {
  if (body.classList.contains("active")) {
    body.classList.remove("active");
    modals.forEach((modal) => {
      modal.classList.remove("active");
    });
  }
}

function formValidation(e) {
  e.preventDefault();
  const isNameValid = checkName();
  const isEmailValid = checkEmail();
  const isMessageValid = checkMessage();

  if (!isNameValid || !isEmailValid || !isMessageValid) return;

  modalForm.classList.add("sending");

  const formData = new FormData(e.target);

 fetch("mail.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        e.target.reset();
        modalForm.classList.remove("active");
        modalSuccess.classList.add("active");
      } else {
        throw new Error("Form submission failed.");
      }
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      modalForm.classList.remove("sending");
    });
}

function checkName() {
  const inputName = document.querySelector(".form__name");
  const minNameLength = 2;

  if (inputName.value.trim().length < minNameLength) {
    inputName.classList.add("error");
    return false;
  } else {
    inputName.classList.remove("error");
    return true;
  }
}

function checkEmail() {
  const inputEmail = document.querySelector(".form__email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!inputEmail.value.match(emailPattern)) {
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
    return true;
  }
}

function checkMessage() {
  const inputMessage = document.querySelector(".form__message");
  const minMessageLength = 4;

  if (inputMessage.value.trim().length < minMessageLength) {
    inputMessage.classList.add("error");
    return false;
  } else {
    inputMessage.classList.remove("error");
    return true;
  }
}
