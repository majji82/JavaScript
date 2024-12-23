let student = {
    studentName : "Janardhan",
    studentAge: 21,
    collegeName: "KLU"
};

let student2 = {
    studentName : "Pujitha",
    studentAge: 19,
    collegeName: "LPU"
};

console.log(student.studentAge)
console.log(typeof student)
console.log(student["collegeName"])

student.id = "2100032153"
console.log(student);

student.id = "2100030105"
student.studentName = "Pujitha"

console.log(student);

let students = [student, student2]
console.log(students[1].studentName)