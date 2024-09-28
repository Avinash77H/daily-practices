// this is normal object that's we know very well
const student = {
  name : 'avinash',
  age : 23,
  marks : 77,
  printMarks : function (){
    console.log("marks = ",this.marks);
  }
}
// also write method like this is totally valid 
const methods = {
  tax(){
    console.log('tax rate is 10%')
  },
  sallery : ()=>{
    console.log('your sellery is good')
  }
}

// prototype
const tax = {
  calcTax : ()=>{
    console.log("tax is 10%")
  }
}

const karan = {
  sallery:4000,
  calcTax : ()=>{
    console.log("tax is 20%")
  }

}
karan.__proto__ = tax;
// console.log(karan.calcTax())

// Note:- when object and prototype have same method(samename method), object's method will be used.




/* classes */

// -> class is a program code template for creating objects
// -> those object will have some state(variables) & some behaviour  (function) inside it.

class toyotaCar{
  constructor(brand,mileage){
    console.log('i am constructor')
    this.brand = brand;
    this.mileage = mileage;
  }
  start(){
    console.log("start the car");
  }
  stop(){
    console.log("stop the car");
  }
  setBrand(brand){
    this.brandName = brand
  }
}

// let fortuner = new toyotaCar();
// fortuner.start()
// fortuner.stop()
// let lexus = new toyotaCar()
// lexus.setBrand("lexus")

// let fortuner = new toyotaCar("fortuner",'10')
// console.log(fortuner)
// let lexus = new toyotaCar("lexus","14")
// console.log(lexus)




          /* inheritance */

class firstClass{
  hello(){
    console.log('hello, how are you?')
  }
}

class secondClass extends firstClass{}

let obj = new secondClass()
// obj.hello()


  /**  second example of inheritance **/

class Person{
  constructor(aboutMe){
    this.aboutMe = aboutMe;
  }
  eat(){
    console.log("eat")
  }

  sleep(){
    console.log("sleep")
  }

  work(){
    console.log("do nothing")
  }
}

class Engineer extends Person{
  work(){
    console.log("solve some problem and to be build something")
  }
}

class Doctor extends Person{
  work(){
    console.log("give medicine")
  }
}

// let milan = new Engineer()
// milan.sleep()
// milan.work()

// let obj1 = new Doctor("good person")
// console.log(obj1)

// Note:- if child & parent have same method,child's method will be used.(method Overriding).




/**  let's practice **/

// 1. your are creating a website for your college.create a class user with 2 property, name & email. it also has a method called viewData() that allows user to view website data.
// 2. create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

let Data = "secret information"
class User{
  constructor(name,email){
    this.name = name;
    this.email = email;
  }
  ViewData(){
    console.log("data =",Data)
  }
}

class Admin extends User{
  constructor(name,email){
    super(name,email)
  }
  editData(){
    Data = "some new Value"
    console.log(Data)
  }
}

// let student1 = new User('avinash','abc@gmail.com')
// let student2 = new User('ugam','ugam@gmail.com')

// student1.ViewData()


let admin1 = new Admin('admin','admin@collage.com')
// console.log(admin1)
