form.addEventListener('submit', (event)=>{
    event.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            name: title.value,
            description: description.value,
            src: src.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})