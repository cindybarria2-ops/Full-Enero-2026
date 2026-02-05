const mongoose = require('mongoose');
const {readCSV, writeCSV} = require('../persons');

const listPersons = () => {
    return readCSV('persons.csv');
}

const getPersonById = (id) => {
   return listPersons().find(person => person.id === id);
}

const createPearson = (personData) => {
    const { id, name, surname, isTeacher, birthdate } = personData;
    const persons = listPersons();
    const newPerson = { id, name, surname, isTeacher, birthdate };

    const updatedPersons = [...persons, newPerson];
    writeCSV('persons.csv', updatedPersons);

    return newPerson;
}

const updatedPersons = (id, personData) => {
    const persons = listPersons();
    const personIndex = persons.findIndex(person => person.id === id);  
    if (personIndex === -1) {
        return null;
    }

    const updatedPerson = { ...persons[personIndex], ...personData };
    persons[personIndex] = updatedPerson;
    writeCSV('persons.csv', persons);   
    return updatedPerson;
}

const deletePerson = (id) => {
    const persons = listPersons();
    const updatedPersons = persons.filter(person => person.id !== id);
    writeCSV('persons.csv', updatedPersons);
    return updatedPersons;
}

module.exports = { listPersons, getPersonById, createPearson, updatedPersons, deletePerson };