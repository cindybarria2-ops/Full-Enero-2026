const mongoose = require('mongoose');
const {readCSV, writeCSV} = require('../persons');

const listPersons = () => {
    return readCSV('persons.csv');
}

const getPersonById = (id) => {
   return listPersons().find(person => person.id === id);
}

/* const usersSchema = new mongoose.Schema({
    id:{ type: String, required: true },
    name:{ type: String, required: true },
    surname: String,
    isTeacher: { type: Boolean, required: true },
    birthdate: { type: Date, required: true },
});
 */

const createPearson = (personData) => {
    const { id, name, surname, isTeacher, birthdate } = personData;
    const persons = listPersons();
    const newPerson = { id, name, surname, isTeacher, birthdate };

    const updatedPersons = [...persons, newPerson];
    writeCSV('persons.csv', updatedPersons);

    return newPerson;
}

const users = mongoose.model('users', usersSchema);

module.exports = users;