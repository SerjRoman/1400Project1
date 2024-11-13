var button = document.querySelector('button');
var name = document.querySelector('#name');
var description = document.querySelector('#description');
var image = document.querySelector('#image');

button.addEventListener('click', function() {
    fetch('/category/create',{
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