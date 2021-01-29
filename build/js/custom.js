// Toggle coupon/purchase input field
document.addEventListener("DOMContentLoaded", function () {
	let couponToggle = document.getElementById("toggle-coupon");
	let couponRemove = document.getElementById("remove-coupon");
	let couponSet = document.getElementById("coupon-set");
	let purchaseSet = document.getElementById("purchase-set");
	let countrySet = document.getElementById("country-set");
	let countrySelect = document.getElementById("country");
	let vatSet = document.getElementById("vat-set");

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
	countrySelect.addEventListener("change", function toggleVat(e){
		let vatCountries = ["Åland Islands", "Albania"];
		if (vatCountries.indexOf(e.target.value) > -1) {
			vatSet.classList.remove("d-none");
		} else {
			vatSet.classList.add("d-none");
		}
	})

	//rotate pseudo arrow
	let allSelects = document.querySelectorAll(".form__select");
	for (let i = 0; i < allSelects.length; i++){
		allSelects[i].addEventListener("click", function styleArrow(){
			this.parentNode.classList.toggle("active");
		})
		allSelects[i].addEventListener("blur", function styleArrow(){
			this.parentNode.classList.remove("active");
		})
	}
	//
	// for (let select of document.querySelectorAll(".form__select")){
	// 	select.addEventListener("click", function styleArrow(){
	// 		this.parentNode.classList.toggle("active");
	// 	})
	// 	select.addEventListener("blur", function styleArrow(){
	// 		this.parentNode.classList.remove("active");
	// 	})
	// }

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
//
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
//
// // disable coupon btn after applying
// document.getElementById("coupon-button").addEventListener("click", function makeBtnDisabled() {
// 	this.classList.add("btn_inactive")
// });
// end TMP
