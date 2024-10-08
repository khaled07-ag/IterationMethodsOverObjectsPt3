const students = [
    {
      "id": 1,
      "name": "Alice",
      "courses": ["Math", "Science", "History"]
    },
    {
      "id": 2,
      "name": "Bob",
      "courses": ["History", "English", "Math", "Art"]
    },
    {
      "id": 3,
      "name": "Charlie",
      "courses": ["Science", "English", "Music"]
    },
    {
      "id": 4,
      "name": "David",
      "courses": ["Math", "History", "Art", "PE"]
    },
    {
      "id": 5,
      "name": "Eva",
      "courses": ["Science", "Math", "Music"]
    },
    {
      "id": 6,
      "name": "Frank",
      "courses": ["English", "Art"]
    },
    {
      "id": 7,
      "name": "Grace",
      "courses": ["Math", "Science", "English", "Music"]
    },
    {
      "id": 8,
      "name": "Helen",
      "courses": ["History", "Art", "PE"]
    },
    {
      "id": 9,
      "name": "Ivy",
      "courses": ["Science", "English", "Art"]
    },
    {
      "id": 10,
      "name": "Jack",
      "courses": ["Math", "History", "Music"]
    }
  ]
  function getStudentName(student) {
    return student.name
  }
  console.log(getStudentName(students[0]))  
  function getCourse(student, courseIndex) {
    return student.courses[courseIndex]
  }
  console.log(getCourse(students[4], 2));  
  function addCourseToStudent(student, course) {
    student.courses.push(course)
    return student
  }
  
   console.log(addCourseToStudent(students[7], "Physics"));
   let courseNum=0
   function countCourses(student) {
    return student.courses.length
  }
  console.log(countCourses(students[1]));
  
  function listAllCourses(students) {
    const allCourses = [];
  students.forEach(student => {
    student.courses.forEach(course => {
      if (!allCourses.includes(course)) {
        allCourses.push(course);
      }
    });
  });
  return allCourses
  }
   console.log(listAllCourses(students));
   function removeCourseFromStudent(student, course) {

    const indexesToRemove = student.courses.filter((elem, index) => elem === course).map(course => student.courses.indexOf(course));
  
  
    for (let i = indexesToRemove.length - 1; i >= 0; i--) {
      student.courses.splice(indexesToRemove[i], 1);
    }
  
    return student;
  }
  console.log(removeCourseFromStudent(students[6],"Science"));

  function findStudentById(studentId, students) {
    return students[studentId-1]
  
  }
  
  console.log(findStudentById(10,students));
  
  function getStudentsByCourse(course, students) {
    return students.filter(student => student.courses.find((c)=>c==course));
     
  }
  
   console.log(getStudentsByCourse("Music",students));
  