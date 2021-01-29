const express = require('express')
const app = express()

const port = 3000
app.get('/', (req, res) => {
res.send( {
"message": "API response message",
"status": "success",
"data": {
  "name": "Umeh Obioma David",
"github": "@daveumeh",
"email": "david.umeh93@gmail.com",
"mobile": "2348136373911",
"twitter": "@dave_da_CEO"  } } )
})


app.listen(port, () => {
console.log( 'listening at http://localhost:${port}')
})
