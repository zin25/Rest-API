const mahasiswaModel = require('../models/mahasiswaModel')

//? Tambah user
const tambahData = async (req, res) => {
    const newUser = new mahasiswaModel(req.body);

    const cekNpm = await mahasiswaModel.findOne({ npm: req.body.npm });
    if (cekNpm) {
        return res.status(400).json({
            message: `Npm ${cekNpm.npm} sudah terdaftar`
        })
    }
    try {
        const response = await newUser.save();
        const data = response;
        res.status(201).json({
            message: "Success",
            data,
        })
    } catch (error) {
        console.log(error);
    }
}

//? Get all mahasiswa
const getAllData = async (req, res) => {
    try {
        const response = await mahasiswaModel.find();
        const data = response
        res.status(200).json({
            message: "All Data",
            data,
    })
    } catch (error) {
        console.log(error);
    }
}

//? Get Data by NPM
const getDatabyNpm = async (req, res) => {
    const ambilNpm = req.params.npm

    try {
        const response = await mahasiswaModel.findOne({npm: ambilNpm})
        if (!response) {
            return res.status(400).json({
                message: "npm tidak di temukan"
            })
        }
        const data = response
        res.status(200).json({
            message: "Data By NPM",
            data,
        })
    } catch (error) {
        console.log(error);
    }
}

//? Update Data
const updateData = async (req, res) => {
    const ambilNpm = req.params.npm

    try {
        const response = await mahasiswaModel.findOneAndUpdate({npm: ambilNpm}, {$set: req.body});
        const data = response
        if (!response) {
            return res.status(400).json({
                message: "npm tidak di temukan"
            })
        }
        res.status(200).json({
            message: "Data berhasil di update",
            data,
        })
    } catch (error) {
        console.log(error)
    }
}

// ? Delete data
const deleteData = async (req, res) => {
    const ambilNpm = req.params.npm

    try {
        const response = await mahasiswaModel.findOneAndRemove({npm: ambilNpm})
        const data = response
        if (!response) {
            return res.status(400).json({
                message: "npm tidak di temukan"
            })
        }
        res.status(200).json({
            message: "Data berhasil di hapus",
            data,
    })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {tambahData, getAllData, getDatabyNpm, updateData, deleteData}