const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//get request
// app.get('/', (req, res) => {
//     //res.send('Got a GET request')
//     res.sendFile('./dummy.html', {root: __dirname})
// });

// app.post('/items', (req, res) => {
//     //res.send('Got a POST request')
//     res.json({x:1, y:2, z:3})
// })

// app.put('/items/:id', (req, res) =>{
//     res.send('Got PUT request')
// })

// app.delete('/items/:id', (req, res) =>{
//     res.send('Got DELETE request')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//simpler - modular way

//import item ki router file
const item = require('./routes/item')

//load into app
app.use('/api', item);
// -> /api/ -> homePage
// -> /api/items/ -> item post request
// -> /api/items/id -> item delete request

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

