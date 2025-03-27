import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function createOneCategory(){
    const category = await prisma.category.create({
        data: {
            name: 'Keyboards2',
            src: "asdasdasd"
        }
    })
}

async function createOneProduct(){
    const product = await prisma.product.create({
        data: {
            name: 'Keyboard1',
            src: '',
            price: 5,
            categoryId: 1
        }
    })
}

async function findOneProduct(){
    const product = await prisma.product.findUnique({
        where: {
            id: 1
        }
    })
    const category = await prisma.category.findUnique({
        where: {
            id: product?.categoryId
        },

        include: {
            Products: true
        }
    })
    console.log(category)
}

async function findOneCategory(){
    const category = await prisma.category.findUnique({
        where: {
            id: 1
        },

        include: {
            Products: true
        }
    })
    console.log(category)
}

async function createOneUser(){
    const user = await prisma.user.create({
        data:{
            username: "Sergey",
            email: "sergey1@gmail.com",
            password: "12345",
            role: 'admin'
        }
    })
}

// async function 

createOneProduct().then(() => {
    prisma.$disconnect()
}).catch(err => {
    console.error(err);
    prisma.$disconnect()
})

