"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// COMPILED BY BABEL
// Toggle coupon/purchase input field
document.addEventListener("DOMContentLoaded", function () {
  var couponToggle = document.getElementById("toggle-coupon");
  var couponRemove = document.getElementById("remove-coupon");
  var couponSet = document.getElementById("coupon-set");
  var purchaseSet = document.getElementById("purchase-set");
  var countrySet = document.getElementById("country-set");
  var vatSet = document.getElementById("vat-set");
  var searchWrap = document.querySelector(".form__select-search");
  var searchInput = document.getElementById("country-search");
  couponToggle.addEventListener("click", function toggleCoupon() {
    couponSet.classList.toggle("d-none");
    purchaseSet.classList.toggle("d-none");
  });
  couponRemove.addEventListener("click", function toggleCoupon() {
    couponSet.classList.toggle("d-none");
    purchaseSet.classList.toggle("d-none");
  }); // Toggle country selection when Business radio is checked

  document.getElementById("order-form").addEventListener("change", function toggleCountry() {
    if (document.getElementById("business").checked) {
      countrySet.classList.remove("d-none");
    } else {
      countrySet.classList.add("d-none");
    }
  }); // Toggle VAT after certain countries selection, called from a custom select

  function toggleVat(selected) {
    var vatCountries = ["Albania", "Afghanistan"];

    if (vatCountries.includes(selected.dataset.value)) {
      vatSet.classList.remove("d-none"); // console.info(selected.dataset.value)
    } else {
      vatSet.classList.add("d-none"); // console.info("NO VAT")
    }
  } // Custom select
  // based on https://andrejgajdos.com/custom-select-dropdown/


  var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".form__select-option")),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var option = _step.value;
      option.addEventListener("click", function selectOption() {
        //select clicked option & set as select-trigger text
        this.parentNode.querySelector(".form__select-option.selected").classList.remove("selected");
        this.classList.add("selected");
        this.closest(".form__select").querySelector(".form__select-trigger span").textContent = this.textContent; //close selects

        document.querySelector(".form__select-wrapper").classList.remove("open"); //toggle vat for some countrues

        if (this.closest(".form__select").id === "country") {
          toggleVat(this);
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;

  var _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".form__select-wrapper")),
      _step2;

  try {
    var _loop = function _loop() {
      var dropdown = _step2.value;
      dropdown.addEventListener("click", function openSelect() {
        this.querySelector(".form__select").classList.toggle("open");

        if (dropdown.classList.contains("form__select-country")) {
          toggleSearch();
        }
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  ; //TODO close select by clicking anywhere (inc itself - causes problems)
  // document.addEventListener("click", function closeSelect(e) {
  // 		for (const select of document.querySelectorAll(".form__select")) {
  // 			if (!select.contains(e.target)) {
  // 				select.classList.remove("open");
  // 				// hideSearch()
  // 				console.log("clicked outside & closed select")
  // 			}
  // 		}
  // });
  // country search
  // function showSearch(){//tmp
  // 	searchWrap.classList.add("visible");
  // }
  // function hideSearch(current){//tmp
  // 	// if (current.classList.contains("form__select-country")) {
  // 		searchWrap.classList.remove("visible");
  // 	// }
  // }

  function toggleSearch(current) {
    searchWrap.classList.toggle("visible");
  } //Filter country options on typing in search


  var allOptions = [];
  var allCountries = []; //populate allCountries

  searchInput.addEventListener("focus", function () {
    allOptions = document.getElementById("country").querySelectorAll(".form__select-option");
    console.info(allOptions);

    var _iterator3 = _createForOfIteratorHelper(allOptions),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var country = _step3.value;
        allCountries.push(country.dataset.value.toLowerCase());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }); //populate
  // restore options visibility

  searchInput.addEventListener("blur", function () {
    var _iterator4 = _createForOfIteratorHelper(allOptions),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var opt = _step4.value;
        opt.style.color = "white"; // opt.style.display = "block"
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }); //restore
  // live filtering

  searchInput.addEventListener("keyup", function (e) {
    var searchTerm = e.target.value.toLowerCase();
    console.info(searchTerm);
    var filteredCountries = allCountries.filter(function (country) {
      return country.startsWith(searchTerm);
    });
    console.info(filteredCountries);

    var _iterator5 = _createForOfIteratorHelper(allOptions),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var opt = _step5.value;
        console.info(opt.dataset.value); // console.info(filteredCountries.includes(opt.dataset.value))
        // console.info(filteredCountries.indexOf(opt.dataset.value) > -1)

        filteredCountries.includes(opt.dataset.value) ? // opt.style.display = "block"
        opt.style.color = "white" : // opt.style.display = "none"
        opt.style.color = "red";
      } //for

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }); //filtering
  // end custom select
}); //DOMContentLoaded
//////////////////////////////////////
// TMP - for demonstration purposes
// style label of invalid input
// document.addEventListener("DOMContentLoaded", function () {
// 	document.querySelectorAll(".form__field:invalid").forEach(function(thisField){
// 		if (thisField.previousElementSibling) {
// 			thisField.previousElementSibling.classList.add("form__label_invalid");
// 		}
// 	});
// });
// document.querySelectorAll(".form__field").forEach(function toggleLabelError(thisField) {
// 	thisField.addEventListener("change", function () {
// 		if (thisField.previousElementSibling) {
// 			if (!thisField.validity.valid) {
// 				thisField.previousElementSibling.classList.add("form__label_invalid")
// 			} else {
// 				thisField.previousElementSibling.classList.remove("form__label_invalid");
// 			}
// 		}
// 	});
// });
// disable coupon btn after applying
// document.getElementById("coupon-button").addEventListener("click", function makeBtnDisabled() {
// 	this.classList.add("btn_inactive")
// });
// end TMP