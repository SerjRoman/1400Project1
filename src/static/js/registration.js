const username = document.querySelector(".login")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const forma = document.querySelector(".forma")


forma.addEventListener('submit', (event)=>{
    event.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value,
            role: 'user'
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})