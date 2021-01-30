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


// your validate-rule route handler
app.post('/validate-rule', function(req, res, next) {
  const { rule, data } = req.body || {};

  // making sure rule is defined and present in request body
  if(!rule) {
    return res.status(400).json(errorMessage('rule is required'));
  }

  // rule must be an object
  // and not array since type of array returns object
  if (!(typeof rule === 'object' && !Array.isArray(rule))) {
    return res.status(400).json(errorMessage('rule should be an object.'));
  }

  // making sure rule is defined and present in request body
  if(!data) {
    res.status(400).json(errorMessage('data is required'));
  }

  // destructuring the rule object for validation
  const { field, condition, condition_value } = rule;

  // making sure rule.field is defined and present
  if(!field) {
      return res.status(400).json(errorMessage('rule must have a \'field\' field.'));
  }

  // making sure rule.condition is defined and present
  if (!condition) {
    return res.status(400).json(errorMessage('rule must have a \'condition\' field.'));
  }

  // an array showing allowed conditions
  const validConditions = ['eq', 'neq', 'gte', 'gt', 'contains'];

  // making sure condition gotten from user matched the ones allowed
  if(!validConditions.includes(condition)) {
    return res.status(400).json(errorMessage(`invalid rule condition passed.`);
  }


  // condition_value has to be present in the rule field
  if (!condition_value) {
    return res.status(400).json(errorMessage('rule must have a \'condition_value\' field.'));
  }

  // if data is a string or array
  // and field is not equal to zero
  // then the field does not exist
  if(
    (typeof data === 'string' || Array.isArray(data))
    && field !== '0'
  ) {
    return res.status(400).json(errorMessage(`field ${field} is missing from data.`));
  }

  // if data is an object
  // and field is not a key present in that object
  // return error message
  if(typeof data === 'object' && !data[field]) {
      return res.status(400).json(errorMessage(`field ${field} is missing from data.`));
  }

  // extract the field value
  // if it is array or string return whole data
  // if it is objet return the key corresponding to field in data
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
