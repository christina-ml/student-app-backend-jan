const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');

controller.get('/hello', (req, res) => {
    res.send('hello from students controller');
})

// route to get a single student by their id -> pagination, filtering/searching
controller.get('/:startId/:limit', (req, res) => {
    const { startId=0, limit=Infinity } = req.params;
    // console.log(startId, limit)

    // find the index of the student with startId
    const studentArr = studentData.students;
    const firstStudentIndex = studentArr.findIndex(student => student.id === startId);
    // console.log(firstStudentIndex)
    const selectedStudents = studentArr.slice(firstStudentIndex, Number(firstStudentIndex) + Number(limit))

    res.json(selectedStudents);
})

controller.get('/:id', (req, res) => {
    const { id } = req.params;

    try {
        // if id is not all digits
        if (!/[0-9]/g.test(id)){
            // send an error with a message to only use digits
            console.log("Error: is not all digits")
            throw ("Student id must be all digits");
        }
        
        // find one student by their id
        const student = studentData.students.find(student => student.id === id);

        if (!student){
            throw ("Error: No student found with this id.")
        }

        res.json(student);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

controller.get('/', (req, res) => {
    const students = studentData.students;

    res.json(students)
})

module.exports = controller;