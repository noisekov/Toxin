const appartments = document.querySelectorAll(".appartment");

appartments.forEach(appartment => {
    const appartDots = appartment.querySelectorAll(".appartment__dot");
    const appartImg = appartment.querySelectorAll(".appartment__slider-img");

    appartDots.forEach(dots => {
        dots.addEventListener("click", function(evt) {
            if (evt.target.closest(".appartment__dot")){
                appartDots.forEach(dot => {
                    dot.classList.remove("current");
                })
                this.classList.add("current");
                appartImg.forEach((img, i) => {
                    img.classList.remove("current");
                    if (this == appartDots[i]) {
                        appartImg[i].classList.add("current")
                    }
                })
            }
        })
    });
})

