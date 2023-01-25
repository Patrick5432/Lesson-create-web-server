const express = require("express")
const body_parser = require("body-parser");
const pageContacts = require("./contact");
const app = express();

app.use(body_parser.urlencoded({ extended: false}))

app.get('/', (request, response) => {
    const student = {
        name: 'Maxim',
        surname: 'Slivinskiy',
        age: '18',
        class: "IS-22-11"
    }
    response.send(pageContacts)
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})