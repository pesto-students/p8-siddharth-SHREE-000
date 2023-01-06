const Person = function() {};
Person.prototype.initialize = function (name,age) {
    this.name=name;
    this.age=age;
}
// TODO: create the class Teacher and a method teach
function Teacher() {
    Person.call(this.name)
    this.teach = function(subject) {
        this.subject = subject
        return (`${this.name} is now teaching ${this.subject}`);
    }
}
Object.setPrototypeOf(Teacher.prototype, Person.prototype)
const him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance")
console.log(him.teach("Inheritance"));
