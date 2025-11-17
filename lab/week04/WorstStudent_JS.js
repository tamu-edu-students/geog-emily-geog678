function FindWorstStudent(listOfStudents) {
    let worstStudent = null;

    listOfStudents.forEach(element => {
        if (worstStudent == null) {
            worstStudent = element;
        } else {
            if (element.gpa < worstStudent.gpa) {
                worstStudent = element;
            }
        }
    });

    return worstStudent;
}

function Run4()
{
	console.log(theJSON);
	
	var students = theJSON.data;
	
	var worstStudent = FindWorstStudent(students);
	
	console.log("The worst student has been found. It is: ");
	console.log(worstStudent);
}
