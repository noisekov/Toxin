// $(document).ready(() => {
//    $('.field-dropdown').iqDropdown({ 
//       selectionText: 'item',
//       // max total items
//       maxItems: Infinity,
//       // min total items
//       minItems: 0,
//       // text to show on the dropdown override data-selection-text attribute
//       selectionText: 'гостя',
//       // text to show for multiple items
//       textPlural: 'гостей',
//       // optionally can use setSelectionText function to override selectionText
//       setSelectionText: (itemCount, totalItems) => { /* return string */ },
//       // buttons to increment/decrement
//       // controls: {
//       //    position: 'right',
//       //    displayCls: 'iqdropdown-item-display',
//       //    controlsCls: 'iqdropdown-item-controls',
//       //    counterCls: 'counter'
//       // },
//       // fires when an item quantity changes
//       onChange: (id, count, totalItems) => {},
//       // return false to prevent an item decrement
//       beforeDecrement: (id, itemCount) => {},
//       // return false to prevent an item increment
//       beforeIncrement: (id, itemCount) => {}
//    });
// });

//dropdown-guest
const dropdownGuest = document.querySelectorAll(".area__block-list-hidden");
const dropImg = document.querySelectorAll(".js-dropdown-hidden")
const drop = document.querySelectorAll(".js-input-guest")
const styleField = document.querySelectorAll(".area__input-guest")

if (drop.length >= 1){
   drop.forEach((btn, i) => {
      btn.addEventListener("click",function () {
         dropdownGuest[i].classList.toggle(".active-guest");
         dropImg[i].classList.toggle(".material-icons_rotate");
         styleField[i].classList.toggle(".active-guest");
      })
   })
   dropdownGuest.forEach(item => {
      item.addEventListener("click", function(e){
         e.stopPropagation()
      })
   })



   // if keydown ESC dropdown OFF
   document.addEventListener("keydown" , function (e){
      if (e.key === "Tab" || e.key === "Escape"){
         dropdownGuest.forEach(item =>{
            item.classList.remove(".active-guest");
            })
         dropImg.forEach(dropImg => {
            dropImg.classList.remove(".material-icons_rotate");
         })
         styleField.forEach(styleField => {
            styleField.classList.remove(".active-guest");
         })
      }
   })



   //counter
   const btnMinus = document.querySelector("#btnMinus");
   const btnPlus = document.querySelector("#btnPlus");
   const countValue = document.querySelector("#countValue");

   const textInput = document.querySelector(".area__input-guest");

   let count;
   btnMinus.addEventListener('click', function (e){
      e.preventDefault();
      if (parseInt(countValue.innerHTML)- 1 >= 0){
         count = parseInt(countValue.innerHTML) - 1;
         countValue.innerHTML = count;
         if (count == 1) {
            textInput.value = count + ' Гость'
         } else {
            textInput.value = count + ' Гостя'
         }
         
      } else {
         textInput.value = ""
      }
      if (count === 0){
         textInput.value = ""
      }
      
   })
   btnPlus.addEventListener('click', function (e){
      e.preventDefault();
      count = parseInt(countValue.innerHTML) + 1;
      countValue.innerHTML = count;
      if (count == 1) {
         textInput.value = count + ' Гость'
      } else {
         textInput.value = count + ' Гостя'
      }
      if (coun === 0){
         textInput.value = ""
      }
   })
   //----------------
   const btnMinusChild = document.querySelector("#btnMinusChild");
   const btnPlusChild = document.querySelector("#btnPlusChild");
   const countValueChild = document.querySelector("#countValueChild");

   let coun;
   btnMinusChild.addEventListener('click', function (e){
      e.preventDefault();
      if (parseInt(countValueChild.innerHTML)- 1 >= 0){
         coun = parseInt(countValueChild.innerHTML) - 1;
         countValueChild.innerHTML = coun;
         if (coun == 1) {
            textInput.value = coun + ' Гость'
         } else {
            textInput.value = coun + ' Гостя'
         }
      } else {
         textInput.value = ""
      }  
      if (coun === 0){
         textInput.value = ""
      }
   })
   btnPlusChild.addEventListener('click', function (e){
      e.preventDefault();
      coun = parseInt(countValueChild.innerHTML) + 1;
      countValueChild.innerHTML = coun;
      if (coun == 1) {
         textInput.value = coun + ' Гость'
      } else {
         textInput.value = coun + ' Гостя'
      }
      if (coun === 0){
         textInput.value = ""
      }
   })
   //-----------
}



