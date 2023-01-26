const express = require("express")
const body_parser = require("body-parser");
const pageContacts = require("./contact");
const { request, response } = require("express");
const aboutMe = require("./about_me");
const shop = require("./shop");
const main = require("./main");
const app = express();

app.use(body_parser.urlencoded({ extended: false}))

app.get('/', (request, response) => {
    
})

app.get('/conctact', (request, response) => {
    const student = {
        name: 'Maxim',
        surname: 'Slivinskiy',
        age: '18',
        class: "IS-22-11"
    }
    response.send(main)
})

app.get('/aboutMe', (request, response) => {
    response.send(aboutMe)
})

app.get('/shop', (request, response) => {
    response.send(shop)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})