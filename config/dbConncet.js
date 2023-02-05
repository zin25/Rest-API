const { default: mongoose } = require('mongoose')
require('dotenv').config()

const dbConncet = () => {
    try {
        mongoose.connect(process.env.MONGODB_LOCAL, {
            useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log('Database Connected Success')
    } catch (error) {
        console.log("Database Error")
    }
}

module.exports = dbConncet