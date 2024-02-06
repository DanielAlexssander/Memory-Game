/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/card.ts":
/*!************************!*\
  !*** ./src/js/card.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   newShuffleCards: function() { return /* binding */ newShuffleCards; }
/* harmony export */ });
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function newShuffleCards() {
  var uniqueCards = [{
    id: "card1",
    description: "card 1",
    img: "01.png"
  }, {
    id: "card2",
    description: "card 2",
    img: "02.png"
  }, {
    id: "card3",
    description: "card 3",
    img: "03.png"
  }, {
    id: "card4",
    description: "card 4",
    img: "04.png"
  }, {
    id: "card5",
    description: "card 5",
    img: "05.png"
  }, {
    id: "card6",
    description: "card 6",
    img: "06.png"
  }, {
    id: "card7",
    description: "card 7",
    img: "07.png"
  }, {
    id: "card8",
    description: "card 8",
    img: "08.png"
  }];
  var cardsOriginal = [];
  uniqueCards.forEach(function (card) {
    cardsOriginal.push(__assign({}, card));
    cardsOriginal.push(__assign({}, card));
  });
  function shuffleNumber(min, max) {
    var n = Math.random() * (max - min + 1) + min;
    return parseInt(n.toString());
  }
  var cards = [];
  var len = cardsOriginal.length;
  while (cards.length < len) {
    var shuffled = shuffleNumber(0, cardsOriginal.length - 1);
    var item = cardsOriginal.splice(shuffled, 1);
    cards.push(item[0]);
  }
  return cards;
}

/***/ }),

/***/ "./src/js/game.ts":
/*!************************!*\
  !*** ./src/js/game.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: function() { return /* binding */ Game; }
/* harmony export */ });
var Game = /** @class */function () {
  function Game(dom, cards) {
    this.dom = dom;
    this.cards = cards;
    this.firstCard = null;
    this.secondCard = null;
  }
  Game.prototype.setCorrectAttempt = function () {
    this.firstCard = null;
    this.secondCard = null;
  };
  Game.prototype.reset = function () {
    var _a, _b;
    (_a = this.firstCard) === null || _a === void 0 ? void 0 : _a.classList.remove("show");
    (_b = this.secondCard) === null || _b === void 0 ? void 0 : _b.classList.remove("show");
    this.firstCard = null;
    this.secondCard = null;
  };
  Game.prototype.resetCards = function () {
    document.querySelectorAll(".card").forEach(function (item) {
      item.remove();
    });
  };
  Game.prototype.addListeners = function () {
    var _this = this;
    Array.from(this.dom.querySelectorAll('[data-card]')).forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (_this.firstCard === e.currentTarget || _this.secondCard === e.currentTarget || e.currentTarget.classList.contains("show")) return;
        if (!_this.firstCard) {
          _this.firstCard = e.currentTarget;
          _this.firstCard.classList.add("show");
        } else if (!_this.secondCard) {
          _this.secondCard = e.currentTarget;
          _this.secondCard.classList.add("show");
          if (_this.firstCard.getAttribute("data-card") === _this.secondCard.getAttribute("data-card")) {
            _this.setCorrectAttempt();
            if (document.querySelectorAll(".card.show").length === 16) {
              var congratsId = document.getElementById("congratsId");
              congratsId === null || congratsId === void 0 ? void 0 : congratsId.classList.remove("hidden");
            }
          } else {
            setTimeout(_this.reset.bind(_this), 500);
          }
        }
      });
    });
  };
  Game.prototype.init = function () {
    this.dom.innerHTML = "\n            ".concat(this.cards.map(function (card) {
      return "\n                <div class=\"card\" data-card=\"".concat(card.id, "\">\n                    <img src=\"img/").concat(card.img, "\" class=\"card-front\" alt=\"").concat(card.description, "\">\n                    <img src=\"img/back.png\" class=\"card-back\" alt=\"Memory card\">\n                </div>\n                ");
    }).join(''), "\n        ");
    this.addListeners();
  };
  return Game;
}();


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.ts");


var gameDOM = document.querySelector('[data-game]');
var newCards = (0,_card__WEBPACK_IMPORTED_MODULE_0__.newShuffleCards)();
var game = new _game__WEBPACK_IMPORTED_MODULE_1__.Game(gameDOM, newCards);
game.init();
var startOver = document.getElementById("startOver");
startOver.addEventListener("click", function () {
  document.querySelectorAll(".card.show").forEach(function (item) {
    item.classList.remove("show");
  });
  var congratsId = document.getElementById("congratsId");
  congratsId === null || congratsId === void 0 ? void 0 : congratsId.classList.add("hidden");
  setTimeout(function () {
    newCards = (0,_card__WEBPACK_IMPORTED_MODULE_0__.newShuffleCards)();
    game = new _game__WEBPACK_IMPORTED_MODULE_1__.Game(gameDOM, newCards);
    game.init();
  }, 300);
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map