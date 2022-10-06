const express = require('express')
const router = express.Router()
const hemaclient = require('../UserModal/usermodal')

router.post('/', async(req, res) => {
    try {
        const { name, email, project, message } = req.body
        const user = await hemaclient.create({ name, email, project, message })

    } catch (error) {
        console.log(error);
    }

})

module.exports = router