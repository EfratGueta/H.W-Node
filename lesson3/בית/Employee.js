class Employee {
    
    constructor(id,name,age) {
        this.id=id
        this.name=name
        this.age=age
    }
    toString(){
        return `the identify is${this.id}, the employee's name is: ${this.name}, the employee's age is: ${this.age}`
    }
}
module.exports=Employee