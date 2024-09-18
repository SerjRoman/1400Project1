const express = require('express')
const path = require('path')

const app = express()

// '127.0.0.1'
const HOST = 'localhost'
const PORT = 8000
// створення посилання на static файли за посиланням /static/, використовую метод static() бібліотеки express.
app.use('/static/', express.static(path.join(__dirname, 'static'))) 


// метод додатку express, який очікує запит по вказаному посиланню
// другим аргументом передається функція, яка здійсниться в момент запиту
// функція приймає req та res, req - request, res - response
app.get('/', (req, res) => {
    // метод send об'єкта res дозволяє надіслати відповідь
    // res.send("hello world")
    // res.sendFile(path.join(__dirname, "templates", "index.html"))
    // res.sendFile(path.join(__dirname, "./templates/index.html"))
    res.sendFile(path.resolve(__dirname, "./templates/index.html"))
})

app.get('/products', (req, res) => {
    // res.send("products")
    res.sendFile(path.join(__dirname, './templates/products.html'))
})

app.listen(PORT, HOST, () =>{
    console.log('http://localhost:8000')
})