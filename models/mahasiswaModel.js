const mongoose = require('mongoose')

const mahasiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    npm: {
        type: Number,
        required: true,
        unique: true,
    },
    alamat: {
        provinsi: {
            type: String,
            required: true,
        },
        kota: {
            type: String,
            required: true,
        },
        jalan: {
            type: String,
            required: true,
        }
    },
    hobi: {
        type: [
            "String"
        ]
    }
})

mahasiswaSchema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret){
        delete ret._id;
    }
})

module.exports = mongoose.model('mahasiswa', mahasiswaSchema)