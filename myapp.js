const express = require('express')
const app = express()

const port = 3000
app.get('/', (req, res) => {
res.send( {
"message": "My Rule-validation API",
"status": "success",
"data": {
  "name": "Umeh Obioma David",
"github": "@daveumeh",
"email": "david.umeh93@gmail.com",
"mobile": "2348136373911",
"twitter": "@dave_da_CEO"  } } )
}) ;

app.post('/validate-rule', function (req, res));
res.send(
  function (err, data, message) {
  if (err)
    console.log("error");
  else
    console.log("result", data);

  }
)


app.listen(port, () => {
console.log( 'listening at http://localhost:${port}')
})
