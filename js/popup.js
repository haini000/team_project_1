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

/*

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

function deleteCookie(name) {
  // 과거 날짜로 만료시켜 삭제
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function hasCookie(name, value) {
  return document.cookie
    .split('; ')
    .some((c) => c === `${name}=${value}`);
}

// 팝업 공통 초기화 함수
function initPopup(popupId, cookieName, checkboxId) {
  const popup = document.getElementById(popupId);
  if (!popup) return;

  const btn = popup.querySelector('button');
  const checkbox = popup.querySelector(`#${checkboxId}`);

  // 쿠키에 not_view가 있으면 숨기고, 없으면 보이게
  if (hasCookie(cookieName, 'not_view')) {
    popup.style.display = 'none';
  } else {
    popup.style.display = 'block';
  }

  btn.addEventListener('click', () => {
    popup.style.display = 'none';

    if (checkbox.checked) {
      // 오늘 그만 보기
      setCookie(cookieName, 'not_view', 1);
    } else {
      // 체크 안 했으면 쿠키 삭제
      deleteCookie(cookieName);
    }
  });
}

// 팝업 2개 초기화
initPopup('popup1', 'popup1', 'agree1');
initPopup('popup2', 'popup2', 'agree2')

*/