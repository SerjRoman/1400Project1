const email = document.querySelector(".email")
const password = document.querySelector(".password")
const forma = document.querySelector(".forma")

forma.addEventListener('submit', (event)=>{
    event.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})