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

a
// a function to format response
function dataResponse({ message, data, status }) {
  return {
    message,
    status,
    data
  }
}

// a helper function to return error response
function errorMessage(message) {
  return dataResponse({
    message,
    status: 'error',
    data: null
  })
}

function validator({ condition, field, conditionValue }) {
  const ruleSet = {
    gte(field, conditionValue) {
        return field >= conditionValue;
    },

    gt(field, conditionValue) {
        return field > conditionValue;
    },

    eq(field, conditionValue) {
        return field === conditionValue;
    },

    contains(field, conditionValue) {
        return !!(field.includes && field.includes(conditionValue));
    },

    neq(field, conditionValue) {
        return field !== conditionValue;
    }
  };

  const method = ruleSet[condition];

  return method(field, conditionValue);
}


app.post('/validate-rule', function(req, res, next) {
  const { rule, data } = req.body || {};


  if(!rule) {
    return res.status(400).json(errorMessage('rule is required'));
  }


  if (!(typeof rule === 'object' && !Array.isArray(rule))) {
    return res.status(400).json(errorMessage('rule should be an object.'));
  }


  if(!data) {
    res.status(400).json(errorMessage('data is required'));
  }


  const { field, condition, condition_value } = rule;


  if(!field) {
      return res.status(400).json(errorMessage('rule must have a \'field\' field.'));
  }


  if (!condition) {
    return res.status(400).json(errorMessage('rule must have a \'condition\' field.'));
  }


  const validConditions = ['eq', 'neq', 'gte', 'gt', 'contains'];


  if(!validConditions.includes(condition)) {
    return res.status(400).json(errorMessage(`invalid rule condition passed.`);
  }



  if (!condition_value) {
    return res.status(400).json(errorMessage('rule must have a \'condition_value\' field.'));
  }


  if(
    (typeof data === 'string' || Array.isArray(data))
    && field !== '0'
  ) {
    return res.status(400).json(errorMessage(`field ${field} is missing from data.`));
  }


  if(typeof data === 'object' && !data[field]) {
      return res.status(400).json(errorMessage(`field ${field} is missing from data.`));
  }


  const fieldValue = (Array.isArray(data) || typeof data === 'string') ? data : data[field];;


  const isValid = validator({ condition, conditionValue, field: fieldValue });

  if(isValid) {
    return res.json(dataResponse({
      message:
    }))
  } else {

  }
});


app.listen(port, () => {
console.log( 'listening at http://localhost:${port}')
})
