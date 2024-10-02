const express = require('express')
const path = require('path')
const products = [
    {
        "name": 'cat1',
        "src": "https://i.ytimg.com/vi/l3hoa-stJs4/maxresdefault.jpg",
        "price": "1.5 БСМ",
        "description": "Не дорогий кіт, крива комплектація, передній привід"
    },
    {
        "name": 'cat2',
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z4GJDIYppz98EzOpP0-8sv6vANTnYtFSYg&s",
        "price": "1 ПК",
        "description": "Збірка котів, банда чотирьох."
    },
    {
        "name": 'cat3',
        "src": "https://masterpiecer-images.s3.yandex.net/5f8da4a62a42a89:upscaled",
        "price": "1 КФВ",
        "description": "Кіт елітної комплектації."
    },
    {
        "name": 'cat4',
        "src": "https://img.freepik.com/free-photo/close-up-on-adorable-kitten-in-nature_23-2150782221.jpg",
        "price": "2 К",
        "description": "Звичайний кіт, осінній."
    },
    {
        "name": 'cat5',
        "src": "https://fbi.cults3d.com/uploaders/16600790/illustration-file/16a0b6ea-d282-444a-b222-5853ccd49e35/IMG_0316.webp",
        "price": "200 БСМ",
        "description": "Некоарт"
    }
]
const app = express()

// '127.0.0.1'
const HOST = 'localhost'
const PORT = 8000
//ставимо движок 
app.set('view engine', 'ejs')
//встановлюємо папки з шаблонами для ejs
app.set('views', path.join(__dirname, 'templates'))
//доустановка обробника json формату тому що express не вміє працювати з json за замовчуванням
app.use(express.json()) 
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
    // res.sendFile(path.resolve(__dirname, "./templates/index.html"))
    // Создаем переменную контекст, которая отвечает за передачу данных в ejs шаблон.
    const context = {
       // words: ['hello', 'world', 'rinat']
       title: 'super shop'
    }
    // Для отправки ejs-шаблонов используем метод render.
    // Первым аргументом пишем навание шаблона БЕЗ РАСШИРЕНИЯ!
    // Вторым аргументом передаются данные(context) которые нужны шаблону.
    res.render('index', context)
})

app.get('/products', (req, res) => {
    const context = {
        products: products
    }
    console.log(req.query)
    const max = req.query.max
    if (max <= products.length) {
        context.products = products.slice(0, max)
    }
    res.render('products', context)
})
// Данная ссылка называется route параметром  
app.get('/product/:id', (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const context = {
        product: products[id-1]
    }
    if (id <= products.length){
        res.render('product', context)
    } else{
        res.send("ban")
    }
})

app.post('/product/create', (req, res) => {
    const data = req.body
    console.log(data)
    products.push(data)
    res.send('okay');
})

app.listen(PORT, HOST, () =>{
    console.log('http://localhost:8000')
})