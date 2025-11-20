const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContents = document.querySelectorAll('.tab-contents > div');
const highlight = document.querySelector('.highlight');

tabMenu.forEach((tm, idx) => {
    tm.addEventListener('click', (e) => {
        e.preventDefault();
        

        for (let menu of tabMenu) {
            menu.classList.remove('active');
        }

        tm.classList.add('active');

        for (let tc of tabContents) {
            tc.classList.remove('active');
        }

        tabContents[idx].classList.add('active');

        let highlightLeft = tm.offsetLeft + 'px';
        let highlightWidth = tm.offsetWidth + 'px';

        highlight.style.left = highlightLeft;
        highlight.style.width = highlightWidth;
        
    });
})