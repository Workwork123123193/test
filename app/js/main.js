/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/animation.js":
/*!****************************************!*\
  !*** ./src/js/components/animation.js ***!
  \****************************************/
/***/ (() => {

const animationItems = document.querySelectorAll(".what__animation, .clients__animation");
window.addEventListener("scroll", animation);
document.addEventListener("DOMContentLoaded", animation);
function animation() {
  for (let i = 0; i < animationItems.length; i++) {
    const animItem = animationItems[i];
    animateItem(animItem);
  }
}
function animateItem(animItem) {
  const animItemHeight = animItem.offsetHeight;
  const animItemOffset = getOffset(animItem).top - 100;
  const animStart = 4;
  let animItemPoint = window.innerHeight - animItemHeight / animStart;
  if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
  }
  if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
    animItem.classList.add("active");
  }
}
function getOffset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollY || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

const header = document.querySelector(".header");
window.addEventListener("scroll", checkScroll);
function checkScroll() {
  header.classList.toggle("active", scrollY > 150);
}

/***/ }),

/***/ "./src/js/components/modals.js":
/*!*************************************!*\
  !*** ./src/js/components/modals.js ***!
  \*************************************/
/***/ (() => {

const body = document.querySelector(".body");
const modalForm = document.querySelector(".form");
const modalSuccess = document.querySelector(".modal-success");
const button = document.querySelector(".footer__top-modal");
const form = document.querySelector(".form__form");
const modals = document.querySelectorAll(".modal");
button.addEventListener("click", openModal);
form.addEventListener("submit", formValidation);
body.addEventListener("click", closeModalByBody);
modals.forEach(modal => {
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
    modals.forEach(modal => {
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
    body: formData
  }).then(response => {
    if (response.ok) {
      e.target.reset();
      modalForm.classList.remove("sending", "active");
      modalSuccess.classList.add("active");
    } else {
      throw new Error("Form submission failed.");
    }
  }).catch(error => {
    console.error(error);
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

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/***/ (() => {

window.addEventListener("load", preloader);
function preloader() {
  const preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/animation */ "./src/js/components/animation.js");
/* harmony import */ var _components_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_animation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modals */ "./src/js/components/modals.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_preloader__WEBPACK_IMPORTED_MODULE_3__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map