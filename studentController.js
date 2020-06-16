const Student = require('./studentModel');

// Handle index actions
exports.indexPage = function (req, res) {
   Student.get(function (err, student) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Student retrieved successfully",
            data: student
        });
    });
};

//Addiing new Student
exports.createStudent = (req, res) => {
    const student = new Student();
    student.name = req.body.name ? req.body.name : student.name;
    student.age = req.body.age;
    student.std = req.body.std;

    student.save((err, student) => {
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New Student Added",
            data: student
        });
    });
};
//Get Student Data
exports.getStudent = (req, res) => {
    const id = req.params.student_id;
    Student.findById(id, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Student Data got',
            data: student
        });
    });
};
//Delete Student Data
exports.deleteStudent = (req, res) => {
    Student.remove({
        _id: req.params.student_id
    }, (err, student) => {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: 'Student Data deleted'
        });
    });
};
//Update Student Data
exports.updateStudent = (req, res) => {
    const id = req.params.student_id;

    Student.findById(id, (err, student) => {
        if (err) {
            res.send(err);
        }
        student.name = req.body.name ? req.body.name : student.name;
        student.age = req.body.age;
        student.std = req.body.std;

        student.save((err, student) => {
            if (err) {
                res.json(err);
            }
            res.json({
                message: 'Student Data updated',
                data: student
            });
        });
    });
};