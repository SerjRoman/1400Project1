var button = document.querySelector('button');
var name_of_category = document.querySelector('#name');
var description = document.querySelector('#description');
var image = document.querySelector('#image');

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/category/createCategory',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name_of_category.value,
            description: description.value,
            src: image.value
        })
    })
})