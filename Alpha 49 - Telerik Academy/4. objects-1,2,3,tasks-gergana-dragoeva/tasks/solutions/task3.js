// Graduates

  export default function (data) { 
    // your code starts here
    const graduates = [];
  
    data.students.forEach(student => {
      const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
      const average = parseFloat((sum / student.grades.length).toFixed(1));
  
      if (average >= data.minPassingGrade) {
        graduates.push({
          name: student.name,
          score: average,
        });
      }
    });
  
    const courseAverage = parseFloat(
      (graduates.reduce((acc, graduate) => acc + graduate.score, 0) / graduates.length || 0).toFixed(1)
    );
  
    return {
      course: data.course,
      minPassingGrade: data.minPassingGrade,
      courseAverage,
      graduates,
    };
    // your code ends here
  }
  
 
  
