 
const btnRate = document.querySelector('.rate')
const btn = document.querySelectorAll('.rate-btn')
const submitBtn = document.querySelector('.submit-btn')
const thankinSection =document.querySelector('.thankyou_card')
const yourRate = document.querySelector('.your_rate')
const ratingSection =document.querySelector('.rating-card')
const error =document.querySelector('.error')
submitBtn.addEventListener("click", function () {
    btn.forEach((el, i) => {
      if (el.classList.contains("selected")) {
        thankinSection.classList.remove("hidden");
        ratingSection.classList.add("hidden");
        yourRate.textContent = `${i + 1}`;
      } else
        error.classList.remove('hidden')  ;
    });
  });

btn.forEach((el) => {
    el.addEventListener("click", function () {
        if (!el.classList.contains("selected")) {
            btn.forEach((el) => el.classList.remove("selected"));
            el.classList.add("selected");
        } else {
            el.classList.remove("selected");
        }
    });
});

 
