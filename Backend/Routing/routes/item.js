// ye file saare item specific routes ko store kregi

const express = require('express')
const router = express.Router()

//get request
router.get('/', (req, res) => {
    res.send('Got a GET request')
});

//to send a file in response
// router.get('/', (req, res) => {
//     res.sendFile('../dummy.html', {root: __dirname})
// });

router.post('/items', (req, res) => {
    //res.send('Got a POST request')
    res.json({x:1, y:2, z:3})
})

router.put('/items/:id', (req, res) =>{
    res.send('Got PUT request')
})

router.delete('/items/:id', (req, res) =>{
    res.send('Got DELETE request')
})

module.exports = router
