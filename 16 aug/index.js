
const student = {
    name: "vansh",
    age: 21,
    grade: 85,
    subjects: ["Math", "Science", "English"]
  };
  

  console.log(student);

  function displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  

  const boundDisplayInfo = displayInfo.bind(student);

  boundDisplayInfo();


  function displayInfoWithMessage(message) {
    console.log(`${message}: Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
  

  displayInfoWithMessage.apply(student, ["Student Information"]);
  

  displayInfoWithMessage.call(student, "Details");
  
  
  function processSubjects(subjects, callback) {
    subjects.forEach(callback);
  }
  

  function logSubject(subject) {
    console.log(subject);
  }
  
  
  processSubjects(student.subjects, logSubject);





  function doubleGrades(grades) {
    return grades.map(grade => grade * 2);
  }
  

  student.grades = [75, 85, 95]; 
  

  const doubledGrades = doubleGrades(student.grades);
  
  console.log("Original Grades:", student.grades);
  console.log("Doubled Grades:", doubledGrades);




  function passingSubjects(subjects, passorfail) {
    return subjects.filter(subject => subject.grade >= passorfail);
  }
  
  // Example: Adding grades to each subject for demonstration
  student.subjectsWithGrades = [
    { subject: "Math", grade: 75 },
    { subject: "Science", grade: 65 },
    { subject: "English", grade: 85 }
  ];
  
  // Filter subjects with grades above 70
  const passing = passingSubjects(student.subjectsWithGrades, 70);
  console.log("Passing Subjects:", passing);
  
  
  