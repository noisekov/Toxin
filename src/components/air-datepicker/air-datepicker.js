import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

//air-datapicker
let calInTwo, onePicker,calendarInPage;

//btn apply
let apply = {
   content: 'Применить',
   className:'Add',
   onClick: (evt) => {
      evt.hide()
   }
}
//two input Dates
let valLeft = document.querySelector(".js-cal-value_left");
let valRight = document.querySelector(".js-cal-value_right");

//btn clear
let clearBtn = {
   content: 'Очистить',
   className:'clearBtn',
   onClick: () => {
      calInTwo.clear();
      valLeft.value = '';
      valRight.value = '';
   }
}
//show calendar when click on input
valLeft.addEventListener('click', () => {
   calInTwo.show();
})
valRight.addEventListener('click', () => {
   calInTwo.show();
})
//hide calendar when click document
document.addEventListener('click', (evt) => {
   if (!evt.target.closest('.js-cal-value_left') 
      && !evt.target.closest('.js-cal-value_right') 
      && !evt.target.closest('.air-datepicker')) {
      calInTwo.hide();
   }
}) 
//initialization calendar two input
calInTwo = new AirDatepicker('.calendar-two',{
   container: ".date",
   selectedDates: [Date],
   onSelect ({date}) {
      valLeft.value = date[0].toLocaleDateString('ru');
      valRight.value = date[1].toLocaleDateString('ru');
   },
   range: true,
   buttons: [clearBtn, apply],  
});
//initialization calendar one input
onePicker = new AirDatepicker('.area__input-filter-date-dropdown',{
   range: true,
   dateFormat: 'dd MMM',
   multipleDatesSeparator: ' - ',
   buttons: ['clear', apply],
});
//initialization calendar on page
calendarInPage = new AirDatepicker('.calendar',{
   buttons: ['clear', apply],
   range: true,
});
