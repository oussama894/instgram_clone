document.addEventListener('DOMContentLoaded', function() {
    let signin_form = document.querySelector('#signin-form');
    let signin_btn = document.querySelector('#signinbtn');
    let darkmode_toggle = document.querySelector('#darkmode-toggle');

    
    document.querySelectorAll('.animate-input').forEach(e => {
        let input = e.querySelector('input');
        let button = e.querySelector('button');

        input.onkeyup = () => {                                        //hadi than
            if (input.value.trim().length > 0) {
                e.classList.add('active');
            } else {
                e.classList.remove('active');
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
    
    /*document.getElementById("signinbtn").addEventListener("click", function () {
        window.location.href = "https://www.instagram.com/";  
    });*/

    darkmode_toggle.onclick = (e) => {
        e.preventDefault();
        let body = document.querySelector('body');
        body.classList.toggle('dark');
        darkmode_toggle.innerHTML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
    };
});


  // تعطيل نوافذ التنبيه باستخدام دالة العنصر window.alert
window.alert = function() {};

