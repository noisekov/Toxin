const pagination = document.querySelectorAll('.pagination');

pagination.forEach(pagEl => {
    const paginationBtn = pagEl.querySelectorAll('.pagination__button');
    const paginationArrLeft = pagEl.querySelector('.pagination__button-arrow_left');
    const paginationArrRight = pagEl.querySelector('.pagination__button-arrow_right');

    
    paginationBtn.forEach( btn => {
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


    paginationArrLeft.addEventListener('click', function(evt) {
        let index = [...paginationBtn]
        .findIndex(btn => {
            btn.classList.contains('active')
        })
        console.log(index)
    })
})


