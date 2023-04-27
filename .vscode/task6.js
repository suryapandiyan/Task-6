class Person {
  constructor(name, age, address, email) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }
}
const person = new Person("surya", 30, "134 2 nd street", "surya.surya@gmail.com");
person.setName("surya p");
person.setAge(29);
console.log(person.getName());     
console.log(person.getAge());      
console.log(person.getAddress());  
console.log(person.getEmail());    
