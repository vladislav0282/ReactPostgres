require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors') //для того чтобы можно было отправлять запросы к БД
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middlewere/ErrorHandlingMiddlewere')
const path = require('path')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())//что бы можно было парсить json формат
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))//Для того чтобы можно работать с файлами
app.use('/api', router)


//Обработка ошибок, последний Middlewere
app.use(errorHandler)

const start = async () => {
try{
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
} catch (e) {
    console.log(e)
}
}

start()