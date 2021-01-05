// toggle coupon/purchase input field
let couponToggle = document.getElementById("toggle-coupon");
let couponRemove = document.getElementById("remove-coupon");
let couponSet = document.getElementById("coupon-set");
let purchaseSet = document.getElementById("purchase-set");

couponToggle.addEventListener("click", function toggleCoupon() {
    couponSet.classList.toggle("d-none");
    purchaseSet.classList.toggle("d-none");
});

couponRemove.addEventListener("click", function toggleCoupon() {
    couponSet.classList.toggle("d-none");
    purchaseSet.classList.toggle("d-none");
});

// Custom select (there's also another non-js version, see in scss comments)
// based on https://andrejgajdos.com/custom-select-dropdown/
document.querySelector('.form__select-wrapper').addEventListener('click', function() {
    this.querySelector('.form__select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".form__select-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.form__select-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.form__select').querySelector('.form__select-trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    const select = document.querySelector('.form__select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
// end custom select

//////////////////////////////////////

// TMP - for demonstration purposes
// style label of invalid input
let fields = document.querySelectorAll(".form__field");
let invalidFields = document.querySelectorAll(".form__field:invalid");

document.addEventListener("DOMContentLoaded", function() {
    invalidFields.forEach(function(field){
        field.previousElementSibling.classList.add("form__label_invalid");
        }
    )
});
document.addEventListener("change", function() {
    fields.forEach(function(field){
        field.previousElementSibling.classList.remove("form__label_invalid");
        }
    )
})

// disable coupon btn after applying
document.getElementById("coupon-button").addEventListener("click", function (){
    this.classList.add("btn_inactive")
})
// end TMP
