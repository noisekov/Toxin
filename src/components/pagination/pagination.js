const pagination = document.querySelectorAll('.pagination');

pagination.forEach(pagEl => {
    const paginationBtn = pagEl.querySelectorAll('.pagination__button');
    const paginationArrLeft = pagEl.querySelector('.pagination__button-arrow_left');
    const paginationArrRight = pagEl.querySelector('.pagination__button-arrow_right');

    paginationBtn.forEach( (btn, i) => {
        btn.addEventListener('click', (evt) => {

            if (evt.target.closest('.pagination__button')) {

                paginationBtn.forEach( allBtn => allBtn.classList.remove('active'));
                btn.classList.add('active');

                if (evt.target.closest('.pagination__button') !== paginationBtn[0]) {
                    paginationArrLeft.classList.add('show');
                } else {
                    paginationArrLeft.classList.remove('show');
                }
                if (evt.target.closest('.pagination__button') == paginationBtn[paginationBtn.length-1]) {
                    paginationArrRight.classList.remove('show');
                } else {
                    paginationArrRight.classList.add('show');
                }
            }
        })
    })

    paginationArrLeft.addEventListener('click', () => {

        const findClassActiveinArr = Array.from(paginationBtn)
            .map(x => x.classList.contains('active'));

        paginationBtn[findClassActiveinArr.indexOf(true)].classList.remove('active');
        paginationBtn[findClassActiveinArr.indexOf(true) - 1].classList.add('active');

        if (paginationBtn[findClassActiveinArr.indexOf(true) - 1] === paginationBtn[0]) {
            paginationArrLeft.classList.remove('show');
            paginationArrRight.classList.add('show');
        } else {
            paginationArrLeft.classList.add('show');
            paginationArrRight.classList.add('show');
        }
    })

    paginationArrRight.addEventListener('click', ()  => {

        const findClassActiveinArr = Array.from(paginationBtn)
            .map(x => x.classList.contains('active'));

        paginationBtn[findClassActiveinArr.indexOf(true)].classList.remove('active');
        paginationBtn[findClassActiveinArr.indexOf(true) + 1].classList.add('active');

        if (paginationBtn[findClassActiveinArr.indexOf(true) + 1] === paginationBtn[paginationBtn.length-1]) {
            paginationArrLeft.classList.add('show');
            paginationArrRight.classList.remove('show');
        } else {
            paginationArrLeft.classList.add('show');
            paginationArrRight.classList.add('show');
        }
    })
})


// let currentPage = 1;
// let lastPage = 15; //last page

// const paginationBody = document.querySelector('.pagination__body');

// window.onload = function() {
//     renderPag();
// }

// function renderPag () {
//     let firstPage = 1; //first page
//     let pageHTML = ``; //generate button page

//     for (let i = firstPage; i <= lastPage; i++) {
//         pageHTML += `<li class="pagination__button ${currentPage === i ? 'active' : ''}" onclick="pageMovePagination(${i})">${i}</li>`;
//     }

//     let paginationBtn = `
//     <li class="pagination__button-arrow_left ${currentPage === firstPage ? '' : 'show'}">
//         <span class="material-icons material-icons__pagination_left">arrow_forward  </span>
//     </li>

//     ${pageHTML}

//     <li class="pagination__button-arrow_right ${currentPage === lastPage ? '' : 'show'}">
//         <span class="material-icons material-icons__pagination_right">arrow_forward</span>
//     </li>
//     `
//     paginationBody.innerHTML = paginationBtn;
// }

// function pageMovePagination(i) {
//     currentPage = i;
//     renderPag();
// }