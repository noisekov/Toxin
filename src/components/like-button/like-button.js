//like counter
const likeImg = document.querySelectorAll('.material-icons__like');
const likeLabel = document.querySelectorAll(".js-like-count");

likeLabel.forEach((btn, i) =>{
    btn.addEventListener("click", function(){
        let resultLikeCount;
        if (likeImg[i].textContent == "favorite_border"){
            likeImg[i].classList.remove('material-icons__like');
            likeImg[i].classList.add('material-icons__like-color');
            likeImg[i].innerHTML = "favorite";
            resultLikeCount = +likeLabel[i].innerHTML;
            resultLikeCount++;
        } else {
            likeImg[i].classList.add('material-icons__like');
            likeImg[i].classList.remove('material-icons__like-color');
            likeImg[i].innerHTML = "favorite_border";
            resultLikeCount = +likeLabel[i].innerHTML;
            resultLikeCount--;  
        }
        likeLabel[i].innerHTML="";
        likeLabel[i].innerHTML = resultLikeCount;
    })
})

//ES5
// for (let i = 0; i < likeLabel.length; i++ ){
//     likeLabel[i].addEventListener("click", function(){
//         if (likeImg[i].textContent == "favorite_border"){
//             likeImg[i].classList.remove('material-icons__like');
//             likeImg[i].classList.add('material-icons__like-color');
//             likeImg[i].innerHTML = "favorite";
//             resultLikeCount = +likeLabel[i].innerHTML;
//             resultLikeCount++;
//             likeLabel[i].innerHTML="";
//             likeLabel[i].innerHTML = resultLikeCount;
//         } else {
//             likeImg[i].classList.add('material-icons__like');
//             likeImg[i].classList.remove('material-icons__like-color');
//             likeImg[i].innerHTML = "favorite_border";
//             resultLikeCount = +likeLabel[i].innerHTML;
//             resultLikeCount--;
//             likeLabel[i].innerHTML="";
//             likeLabel[i].innerHTML = resultLikeCount;   
//         }
//     })
// }
