//Import express
const express = require('express');
const router = express.Router();
//Import Student Controller
const {
    indexPage,
    getStudent,
    createStudent,
    deleteStudent,
    updateStudent
} = require('./studentController');

router.get("/", function (req, res) {
    res.json({
        status: "API Working Correctly",
        message: "Welcome to RESTUser"
    });
});

//Student Routes
router.get("/students", indexPage);
router.post("/students", createStudent);

router.get('/students/:student_id', getStudent);
router.delete('/students/:student_id', deleteStudent);
router.patch('/students/:student_id', updateStudent);
router.put('/students/:student_id', updateStudent);

module.exports = router;