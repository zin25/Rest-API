const router = require ('express').Router();
const mahasiswaController = require('../controller/mahasiswaController')

router.post('/mahasiswa/add', mahasiswaController.tambahData)
router.get('/mahasiswa', mahasiswaController.getAllData)
router.get('/mahasiswa/:npm', mahasiswaController.getDatabyNpm)
router.put('/mahasiswa/update/:npm', mahasiswaController.updateData)
router.delete('/mahasiswa/delete/:npm', mahasiswaController.deleteData)

module.exports = router; 