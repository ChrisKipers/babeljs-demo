function createPerson(firstName, lastName) {
  //Enhanced Object Literals
  return {
    firstName,
    lastName
  };
}

var superDevelopers = [
  createPerson('Chris', 'Kipers'),
  createPerson('Olivier', 'Scherrer')
];

var superHeros = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    alias: 'Iron Man'
  },
  {
    firstName: 'Bruce',
    lastName: 'Wayne',
    alias: 'Batman'
  }
];

//Spread Operator
var allPeople = [...superDevelopers, ...superHeros];

//Destructuring with defaults
var greetings = allPeople.map(({firstName, lastName, alias='Super Developer'}) => {
  return `Hello ${firstName} ${lastName}, aka ${alias}`;
});

//Arrow function
greetings.forEach(greeting => console.log(greeting));