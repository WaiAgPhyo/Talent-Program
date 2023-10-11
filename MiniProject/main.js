let faq = document.querySelectorAll('.faq');
for (let i = 0; i < faq.length; i++) {
    faq[i].querySelector('.faq-head').addEventListener('click', function (e) {
        e.preventDefault();
       
        faq[i].classList.toggle('show');

        let show = document.querySelector('.show');

        let p = faq[i].querySelector('.test');

        if (show) {
            p.innerHTML = '<p>-</p>';
        }
        else{
            p.innerHTML = '<p>+</p>';
        }


    });
}