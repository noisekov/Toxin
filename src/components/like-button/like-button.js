//like counter
const btnsLike = document.querySelectorAll(".js-like-color");
const likeImg = document.querySelectorAll('.material-icons_like');
const likeLabel = document.querySelectorAll(".js-like-count");

btnsLike.forEach((btn, i) =>{
    btn.addEventListener("click", function(){
        let resultLikeCount;
        if (likeImg[i].textContent == "favorite_border"){
            likeImg[i].classList.remove('material-icons_like');
            likeImg[i].classList.add('material-icons_like-color');
            likeImg[i].innerHTML = "favorite";
            resultLikeCount = +likeLabel[i].innerHTML;
            resultLikeCount++;
        } else {
            likeImg[i].classList.add('material-icons_like');
            likeImg[i].classList.remove('material-icons_like-color');
            likeImg[i].innerHTML = "favorite_border";
            resultLikeCount = +likeLabel[i].innerHTML;
            resultLikeCount--;  
        }
        likeLabel[i].innerHTML="";
        likeLabel[i].innerHTML = resultLikeCount;
    })
})

//ES5
// for (let i = 0; i < btnsLike.length; i++ ){
//     btnsLike[i].addEventListener("click", function(){
//         if (likeImg[i].textContent == "favorite_border"){
//             likeImg[i].classList.remove('material-icons_like');
//             likeImg[i].classList.add('material-icons_like-color');
//             likeImg[i].innerHTML = "favorite";
//             resultLikeCount = +likeLabel[i].innerHTML;
//             resultLikeCount++;
//             likeLabel[i].innerHTML="";
//             likeLabel[i].innerHTML = resultLikeCount;
//         } else {
//             likeImg[i].classList.add('material-icons_like');
//             likeImg[i].classList.remove('material-icons_like-color');
//             likeImg[i].innerHTML = "favorite_border";
//             resultLikeCount = +likeLabel[i].innerHTML;
//             resultLikeCount--;
//             likeLabel[i].innerHTML="";
//             likeLabel[i].innerHTML = resultLikeCount;   
//         }
//     })
// }
