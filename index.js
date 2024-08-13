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
    let AllCourses = students.courses.from(new Set(students))
    return AllCourses
  }
   console.log(listAllCourses(students));
  
  