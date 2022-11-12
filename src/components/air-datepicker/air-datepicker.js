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
let valueDate1 = document.querySelector(".js-value1");
let valueDate2 = document.querySelector(".js-value2");

//btn clear
let clearBtn = {
   content: 'Очистить',
   className:'clearBtn',
   onClick: () => {
      calInTwo.clear();
      valueDate1.value = '';
      valueDate2.value = '';
   }
}
//show calendar when click on input
valueDate1.addEventListener('click', () => {
   calInTwo.show();
})
valueDate2.addEventListener('click', () => {
   calInTwo.show();
})
//hide calendar when click document
document.addEventListener('click', (evt) => {
   if (!evt.target.closest('.js-value1') && !evt.target.closest('.js-value2') && !evt.target.closest('.air-datepicker')) {
      calInTwo.hide();
   }
}) 
//initialization calendar two input
calInTwo = new AirDatepicker('#cal-two-input',{
   container: ".date",
   selectedDates: [Date],
   onSelect ({date}) {
      valueDate1.value = date[0].toLocaleDateString('ru');
      valueDate2.value = date[1].toLocaleDateString('ru');
   },
   range: true,
   buttons: [clearBtn, apply],  
});
//initialization calendar one input
onePicker = new AirDatepicker('#one-picker',{
   range: true,
   dateFormat: 'dd MMM',
   multipleDatesSeparator: ' - ',
   buttons: ['clear', apply],
});
//initialization calendar on page
calendarInPage = new AirDatepicker('#calendar',{
   buttons: ['clear', apply],
   range: true,
});
