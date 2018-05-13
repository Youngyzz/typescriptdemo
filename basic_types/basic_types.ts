//boolean types
let isDone: boolean = false;

//number types.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1100;
let octal:number = 0o744;

//string types. "" && `` 
//you can user `` to span multiple line(like golang)
//and have embedded expression.(eg.sentence, the " can't) 
let color: string = "blue";
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${fullName}`;

//array types.[] && Array<elemType>
let list: number[] = [1, 2, 3];
let array: Array<number> = [1, 2, 3]

//tuple types.
//usage:express an array with a fixed number of elements.but type not be same.
let x: [string, number];
x = ["hello", 10] //ok.
//x=[10, "hello"] //error!!! type can't be correspond one by one.
//access element.
x[0], x[1]
//how about invalid range? union types would be made? what is union types?


//enum types.
//like c++
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Blue;
//you can get name for specified value.
let colorName: string = Color[2];
//how about invalid value?

//any types.
//we want to let variables be any types without type-checking(static check),
//and let the values pass through compile-time checks.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.ifItExists(); //okay, ifItExists might exist at runtime
notSure.toFixed(); //okay toFixed exists (but the complier doesnt' check)

//you might consider Object to play a similiar role,
//but variables of type Object only allow you to assign any value to them
//that you can't call arbitary methods on them; even acutally exist:
let prettySure: Object = 4
//prettySure.toFixed() //Error: Property 'toFixed' doesn't exist on type 'Object'


//void types.
//like c++
function warnUser() : void {
    alert("This is my warning message");
}
//you can assign undefined or null to void variables.
let unusable : void = undefined;

//Null and Undefined.
//when using the --strictNullChecks flag, null and undefined are only assignable to void 
//and their respective types.
let u: undefined = undefined;
let n: null = null;

//--strictNullChecks - switches to a new strict null checking mode. 
//when compiled with --strictNullChecks
// let m: number = null; //error
// m = undefined;  //error


//never types.
//never type represents the type of values that never occur.
//functions return never must have unreachable end point
function error(message: string) :never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}

//type assertions
//type assertions are a way to tell the compilier "trust me, i know what i'm doing"
//a type assertion is like a type cast in other languages, 
//but performs no special checking or restructing of data. 
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
//as - syntax. equivalent to 'angle-bracket' syntax, 
//however, when using TypeScript with JSX, only as-style assertions are allowed.
strLength = (someValue as string).length;

//let 
//we use let keyword instead of var
//let keyword is actually a newer JS construct that TS makes available.
//many common problems in JS are alleviated by using let. so what?


