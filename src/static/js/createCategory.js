const button = document.querySelector('button');
const name = document.querySelector('#name');
const description = document.querySelector('#description');
const image = document.querySelector('#image');
button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    fetch('/category/createCategory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            description: description.value,
            image: image.value
        })
    })
})