// COMPILED BY BABEL
// Toggle coupon/purchase input field
document.addEventListener("DOMContentLoaded", function () {
	let couponToggle = document.getElementById("toggle-coupon");
	let couponRemove = document.getElementById("remove-coupon");
	let couponSet = document.getElementById("coupon-set");
	let purchaseSet = document.getElementById("purchase-set");
	let countrySet = document.getElementById("country-set");
	let vatSet = document.getElementById("vat-set");
	let searchWrap = document.querySelector(".form__select-search");
	let searchInput = document.getElementById("country-search");

	couponToggle.addEventListener("click", function toggleCoupon() {
		couponSet.classList.toggle("d-none");
		purchaseSet.classList.toggle("d-none");
	});

	couponRemove.addEventListener("click", function toggleCoupon() {
		couponSet.classList.toggle("d-none");
		purchaseSet.classList.toggle("d-none");
	});

	// Toggle country selection when Business radio is checked
	document.getElementById("order-form").addEventListener("change",
		function toggleCountry() {
			if (document.getElementById("business").checked) {
				countrySet.classList.remove("d-none");
			} else {
				countrySet.classList.add("d-none");
			}
	});
	// Toggle VAT after certain countries selection, called from a custom select
	function toggleVat(selected) {
		let vatCountries = ["Albania", "Afghanistan"];
		if(vatCountries.includes(selected.dataset.value)) {
			vatSet.classList.remove("d-none");
			// console.info(selected.dataset.value)
		} else {
			vatSet.classList.add("d-none");
			// console.info("NO VAT")
		}
	}


// Custom select
// based on https://andrejgajdos.com/custom-select-dropdown/
	for (const option of document.querySelectorAll(".form__select-option")) {
		option.addEventListener("click", function selectOption() {
			//select clicked option & set as select-trigger text
			this.parentNode.querySelector(".form__select-option.selected").classList.remove("selected");
			this.classList.add("selected");
			this.closest(".form__select").querySelector(".form__select-trigger span").textContent = this.textContent;
			//close selects
			document.querySelector(".form__select-wrapper").classList.remove("open");
			//toggle vat for some countrues
			if (this.closest(".form__select").id === "country") {
				toggleVat(this);
			}
		})
	};

	for (const dropdown of document.querySelectorAll(".form__select-wrapper")) {
			dropdown.addEventListener("click", function openSelect() {
				this.querySelector(".form__select").classList.toggle("open");
				if (dropdown.classList.contains("form__select-country")) {
					toggleSearch()
				}
			})
	};
	//TODO close select by clicking anywhere (inc itself - causes problems)
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
	function toggleSearch(current){
		searchWrap.classList.toggle("visible");
	}
	//Filter country options on typing in search
	let allOptions = []
	let allCountries = []
	//populate allCountries
	searchInput.addEventListener("focus", () => {
		allOptions = document.getElementById("country").querySelectorAll(".form__select-option")
		console.info(allOptions)
		for(const country of allOptions) {
			allCountries.push(country.dataset.value.toLowerCase())
		}
	})//populate

	// restore options visibility
	searchInput.addEventListener("blur", () => {
		for(const opt of allOptions){
			opt.style.color = "white"
			// opt.style.display = "block"
		}
	})//restore

	// live filtering
	searchInput.addEventListener("keyup", (e) => {
		let searchTerm = e.target.value.toLowerCase()
		console.info(searchTerm)
		const filteredCountries = allCountries.filter(country => country.startsWith(searchTerm))
		console.info(filteredCountries)
		for (const opt of allOptions){
			console.info(opt.dataset.value)
			// console.info(filteredCountries.includes(opt.dataset.value))
			// console.info(filteredCountries.indexOf(opt.dataset.value) > -1)
			filteredCountries.includes(opt.dataset.value) ?
			// opt.style.display = "block"
				opt.style.color = "white" :
				// opt.style.display = "none"
				opt.style.color = "red"
		}//for
	})//filtering






// end custom select

});//DOMContentLoaded

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
