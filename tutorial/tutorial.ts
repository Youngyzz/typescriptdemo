class Student {
    fullName: string;
    constructor(public firstName, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

//type annotations 
//明确指定类型，但是生成js文件又没有，可能是为了防止错误，而特定修饰的吧？
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);

//在使用tsc tutorial.ts生成js以后，文件还不能并存