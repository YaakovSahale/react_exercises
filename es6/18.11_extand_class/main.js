class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  printPerson() {
    console.log(this.name, this.age);
  }

  printBirthYear() {
    const birthYear = new Date().getFullYear();
    console.log(birthYear - this.age);
  }
}

const p1 = new Person("koko", 29);

class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }

  printStudent() {
    console.log(this.name, this.age, this.school);
  }
}

const student1 = new Student("koko", 29, "zxc");

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  printUser() {
    console.log(this.name, this.email, this.password);
  }
}

class Admin extends User {
  constructor(name, email, password, role) {
    super(name, email, password);
    this.role = role;
  }
}

const admin1 = new Admin("mevi","asd@asd","abc123","admin")

