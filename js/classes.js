class Student{
	constructor(name,age){
  	this.name = name;
    this.age = age;
  }
  addAge(){
  	var x = this.age + 100;
    return x;
  }
  
}
 var st1 = new Student("sheron",23);
 console.log(st1.addAge());