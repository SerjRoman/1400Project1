form.addEventListener('submit', (event)=>{
    event.preventDefault()
    fetch('', {
        method: 'POST',
        body: JSON.stringify({
            name: title.value,
            src: src.value,
            description: description.value,
            price: price.value,
            categoryId: categoryId.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})