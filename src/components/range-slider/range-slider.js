import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

//nuUiSlider
let slider = document.querySelector('#slider');
if (slider) {
    noUiSlider.create(slider, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 15000
        }
    });
    let valueNoSlider = [
        document.querySelectorAll(".js-value-lower")[0],
        document.querySelectorAll(".js-value-upper")[0]
    ]
    slider.noUiSlider.on("update", function(values, handle) {
        valueNoSlider[handle].innerHTML = Math.round(values[handle]).toLocaleString('ru-RU') + "₽";
    })
}


//nuUiSlider
let sliderSecond = document.querySelector('#sliderSecond');
if (sliderSecond) {
    noUiSlider.create(sliderSecond, {
        start: [5000, 10000],
        connect: true,
        range: {
            'min': 0,
            'max': 15000
        }
    });
    let valueNoSlider = [
        document.querySelectorAll(".js-value-lower")[1],
        document.querySelectorAll(".js-value-upper")[1]
    ]
    sliderSecond.noUiSlider.on("update", function(values, handle) {
        valueNoSlider[handle].innerHTML = Math.round(values[handle]).toLocaleString('ru-RU') + "₽";
    })
}