var fortune = require('fortune')
  , app = fortune({
    db: 'petstore'
  })
  .resource('person', {
    name: String,
    age: Number,
    pets: ['pet'] // "has many" relationship to pets
  })
  .resource('pet', {
    name: String,
    age: Number,
    owner: 'person' // "belongs to" relationship to a person
  })
  .resource('shape', {
    colour: String,
    type: Number
  })
  .listen(1337);