{
  //Constraints in typescript
  //I am enforcing here that inside the G whatever it happens i must recive name, id and email. 
  //Basically this is constraints
  const addCourseToStudent = < G extends { name: string; id: number; email: string } > (student: G) => {
    const course = "Basic Web Dev";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 123,
    name: "riyal",
    email: "riyalashikur@gmail.com",
    devType: "Frontend",
  });
  const student2 = addCourseToStudent({
    id: 456,
    name: "ashik",
    email: "ashikur@gmail.com",
    hasWatch: "Apple Watch",
  });
}
