// CODE here for your Lambda Classes

class Person {
  constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a ${student.grade} on ${subject}`;
  }

  adjustGrade(student, subject) {
    let addSubtract = Math.round(Math.random() * 2);
    let adjustment = Math.round(Math.random() * 15);
    if (addSubtract === 1) {
      return `${student.name}'s grade in ${subject} is ${
        student.grade
      } but is being increased by ${adjustment} resulting in a final grade of ${student.grade +
        adjustment}`;
    } else {
      return `${student.name}'s grade in ${subject} is ${
        student.grade
      } but is being decreased by ${adjustment} resulting in a final grade of ${student.grade -
        adjustment}`;
    }
  }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }

  listsSubjects() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(projectManagerAttributes) {
    super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
  }

  standup(channel) {
    return `${this.name} announces to ${channel}, @${channel} standy times`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const pmSam = new ProjectManager({
  name: "Sam",
  age: 35,
  location: "Buffalo, NY",
  gradClassName: "Web18",
  favInstructor: "Dan Levy"
});

const mike = new Student({
  name: "Mike",
  age: 30,
  location: "Buffalo, NY",
  previousBackground: "Asst. Manager",
  className: "Web20",
  favSubjects: ["HTML", "CSS", "Javascript", "NodeJS"],
  grade: Math.round(Math.random() * 100)
});

const dan = new Instructor({
  name: "Mike",
  age: 40,
  location: "Buffalo, NY",
  specialty: "Web Dev",
  favLanguage: "Javascript",
  catchPhrase: "Get After It!"
});

console.log(mike.name);
console.log(mike.speak());
console.log(mike.grade);
mike.listsSubjects();
console.log(pmSam.adjustGrade(mike, "Javascript"));

console.log(dan.grade(mike, dan.favLanguage));

console.log(pmSam.standup("ChannelName"));
console.log(pmSam.debugsCode(mike, "Javascript"));
