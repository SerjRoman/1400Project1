const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})