//dropdown
const dropdown = document.querySelectorAll(".dropdown");
const iconRotate = document.querySelectorAll(".js-icon-rotate")
const drop = document.querySelectorAll(".js-input-guest")
const styleField = document.querySelectorAll(".area__input-guest")
const dropBtn = document.querySelectorAll(".js-btn-accept")


//скрывает блок при нажатии на кнопку принять
dropBtn.forEach(btnDrop => {
   btnDrop.addEventListener('click', (evt) => {
      evt.preventDefault()
      if(evt.target.closest('.js-btn-accept')) {
         dropdown.forEach(item => {
            item.classList.remove(".show");
            })
         iconRotate.forEach(icon => {
            icon.classList.remove(".material-icons_rotate");
         })
         styleField.forEach(styleField => {
            styleField.classList.remove(".show");
         })
      }
   })
})

if (drop.length >= 1){
   drop.forEach((btn, i) => {
      btn.addEventListener("click",function () {
         dropdown[i].classList.toggle(".show");
         iconRotate[i].classList.toggle(".material-icons_rotate");
         styleField[i].classList.toggle(".show");
      })
   })
   dropdown.forEach(item => {
      item.addEventListener("click", function(e){
         e.stopPropagation()
      })
   })

//clear btn
const clearBtn = document.querySelector(".js-btn-clear")

clearBtn.addEventListener('click', (evt) => {
   evt.preventDefault()
   countValue.innerHTML = 0;
   countValueChild.innerHTML = 0;
   textInput.value = '';
   clearBtn.classList.remove('show')
})

   // if keydown ESC dropdown OFF
   document.addEventListener("keydown" , function (e){
      if (e.key === "Tab" || e.key === "Escape"){
         dropdown.forEach(item =>{
            item.classList.remove(".show");
            })
         iconRotate.forEach(icon => {
            icon.classList.remove(".material-icons_rotate");
         })
         styleField.forEach(styleField => {
            styleField.classList.remove(".show");
         })
      }
   })



   //counter
   const btnMinus = document.querySelector(".btnMinus");
   const btnPlus = document.querySelector(".btnPlus");
   const countValue = document.querySelector(".countValue");

   const textInput = document.querySelector(".area__input-guest");

   let count;
   btnMinus.addEventListener('click', function (e){
      e.preventDefault();
      if (parseInt(countValue.innerHTML)- 1 >= 0){
         count = parseInt(countValue.innerHTML) - 1;
         countValue.innerHTML = count;
         clearBtn.classList.add('show');
         if (count + coun == 1) {
            textInput.value = count + coun + ' Гость'
         } else {
            textInput.value = count + coun + ' Гостя'
         }
         
      } else {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }
      if (count + coun === 0) {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }
      
   })
   btnPlus.addEventListener('click', function (e){
      e.preventDefault();
      count = parseInt(countValue.innerHTML) + 1;
      countValue.innerHTML = count;
      clearBtn.classList.add('show');
      if (count + coun == 1) {
         textInput.value = count + coun + ' Гость';
      } else {
         textInput.value = count + coun + ' Гостя';
      }
      if (coun + count === 0) {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }
   })
   //----------------
   const btnMinusChild = document.querySelector(".btnMinusChild");
   const btnPlusChild = document.querySelector(".btnPlusChild");
   const countValueChild = document.querySelector(".countValueChild");

   let coun;
   btnMinusChild.addEventListener('click', function (e){
      e.preventDefault();
      if (parseInt(countValueChild.innerHTML)- 1 >= 0){
         coun = parseInt(countValueChild.innerHTML) - 1;
         countValueChild.innerHTML = coun;
         clearBtn.classList.add('show');
         if (coun + count == 1) {
            textInput.value = coun + count + ' Гость';
         } else {
            textInput.value = coun + count + ' Гостя';
         }
      } else {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }  
      if (coun + count === 0) {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }
   })
   btnPlusChild.addEventListener('click', function (e){
      e.preventDefault();
      coun = parseInt(countValueChild.innerHTML) + 1;
      countValueChild.innerHTML = coun;
      clearBtn.classList.add('show');
      if (coun + count == 1) {
         textInput.value = coun + count + ' Гость'
      } else {
         textInput.value = coun + count + ' Гостя'
      }
      if (coun + count === 0) {
         textInput.value = "";
         clearBtn.classList.remove('show');
      }
   })
   //-----------
}

