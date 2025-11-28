const popup1 = document.querySelector('#popup1')
const popupBtn1 = popup1.querySelector('button');
const closeCheck1 = popup1.querySelector('#agree1');

const result1 = document.cookie.includes('popup1=not_view');

if (result1) {
    popup1.style.display = 'none';
} else {
    popup1.style.display = 'block';
}

popupBtn1.addEventListener('click', () => {
    popup1.style.display = 'none';
   
    if (closeCheck1.checked) {
        createCookie('popup1', 'not_view', 1);
    } else {
        deleteCookie('popup1', 'view', -1)
    }
});


const popup2 = document.querySelector('#popup2')
const popupBtn2 = popup2.querySelector('button');
const closeCheck2 = popup2.querySelector('#agree2');

const result2 = document.cookie.includes('popup2=not_view');

if (result2) {
    popup2.style.display = 'none';
} else {
    popup2.style.display = 'block';
}

popupBtn2.addEventListener('click', () => {
    popup2.style.display = 'none';
   
    if (closeCheck2.checked) {
        createCookie('popup2', 'not_view', 1);
    } else {
        deleteCookie('popup2', 'view', -1)
    }
});

function deleteCookie(name, value, due) {
    let today = new Date();
    today.setDate(today.getDate() + due);

    document.cookie = `${name}=; Expires=${today.toUTCString()}`
}

function createCookie(name, value, due) {
    let today = new Date();
    today.setDate(today.getDate() + due);

    document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`
}