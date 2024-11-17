var form = document.querySelector('#form');
var button = document.querySelector('button');
var namee = document.querySelector('#namee');
var description = document.querySelector('#description');
var image = document.querySelector('#image');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetch('./createCategory',{
        method: 'POST',
        
        body: JSON.stringify({
            name: namee.value,
            description: description.value,
            src: image.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})