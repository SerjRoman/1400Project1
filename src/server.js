"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const productRouter_1 = __importDefault(require("./ProductApp/productRouter"));
const userRouter_1 = __importDefault(require("./UserApp/userRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const categoryRouter_1 = __importDefault(require("./CategoryApp/categoryRouter"));
// Yuppi
const app = (0, express_1.default)();
const HOST = 'localhost';
const PORT = 8000;
//ставимо движок 
app.set('view engine', 'ejs');
//встановлюємо папки з шаблонами для ejs
app.set('views', path_1.default.join(__dirname, 'templates'));
//доустановка обробника json формату тому що express не вміє працювати з json за замовчуванням
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// створення посилання на static файли за посиланням /static/, використовую метод static() бібліотеки express.
app.use('/static/', express_1.default.static(path_1.default.join(__dirname, 'static')));
app.use('/product/', productRouter_1.default);
app.use('/category/', categoryRouter_1.default);
app.use('/', userRouter_1.default);
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
    };
    // Для отправки ejs-шаблонов используем метод render.
    // Первым аргументом пишем навание шаблона БЕЗ РАСШИРЕНИЯ!
    // Вторым аргументом передаются данные(context) которые нужны шаблону.
    res.render('index', context);
});
app.listen(PORT, HOST, () => {
    console.log('http://localhost:8000');
});
