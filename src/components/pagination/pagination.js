const paginationBtn = document.querySelectorAll('.pagination__button');
paginationBtn.forEach( btn => {
    btn.addEventListener('click', (evt) => {
        if (evt.target.closest('.pagination__button')) {
            paginationBtn.forEach( allBtn => allBtn.classList.remove('active'))
            btn.classList.add('active');
        }
    })
})

