const button = document.querySelector('button');
const name_of_product = document.querySelector('#productName');
const description = document.querySelector('#productDesc');
const price = document.querySelector('#productPrice');
const src = document.querySelector('#productSrc');
const categoryId = document.querySelector('#categoryId');

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch("",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name_of_product.value,
            src: src.value,
            price: parseInt(price.value),
            description: description.value,
            categoryId: parseInt(categoryId.value)
        })
    })
})