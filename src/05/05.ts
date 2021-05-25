export type ManType = {
    name:string,
    age:number
}


const people:Array<ManType> =[
    {name:"Andrew Ivanov", age:33},
    {name:"Petya Ivanov", age:23},
    {name:"Dima Ivanov", age:18},

]

const  dimycjTransformator = (man: ManType) =>{
    return{
        stack:["css, html", "js", "tdd", "react"],
        firstName:man.name.split(" ")[0],
        lastName:man.name.split(" ")[1],
    }
}


let dev1 = dimycjTransformator(people[0]);
let dev2 = dimycjTransformator(people[1]);
let dev3 = dimycjTransformator(people[2]);

const messages = people.map(man =>`Hello ${man.name.split(" ")[0]}. Wellcom to it-incubator`)

export const createGreetingMessages = (type:Array<ManType>)=>{
    return people.map(man =>`Hello ${man.name.split(" ")[0]}. Wellcom to it-incubator`)
}