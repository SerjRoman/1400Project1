const form = document.querySelector('#createProduct')
const button = document.querySelector('button');
const namee = document.querySelector('#productName');
const description = document.querySelector('#productDesc');
const price = document.querySelector('#productPrice');
const image = document.querySelector('#image');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('./createProduct',{
        method: 'POST',
        
        body: JSON.stringify({
            name: namee.value,
            description: description.value,
            price: price.value,
            src: image.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})