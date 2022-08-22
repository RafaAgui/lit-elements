export class Person {
  name: string;
  age: number;
  mail: string;

  constructor(_name = "", _age = 0, _mail = "") {
  this.name = _name;
  this.age = _age;
  this.mail = _mail;
  }
 }