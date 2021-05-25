import {createGreetingMessages, ManType} from "./05";

let people:Array<ManType> =[]

beforeEach(()=>{
    people = [
        {name:"Andrew Ivanov", age:33},
        {name:"Petya Ivanov", age:23},
        {name:"Dima Ivanov", age:18},
    ]
})

test("sould get array of greeting messages", ()=>{
    const messages = createGreetingMessages(people);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andrew. Wellcom to it-incubator");
    expect(messages[1]).toBe("Hello Petya. Wellcom to it-incubator");
    expect(messages[2]).toBe("Hello Dima. Wellcom to it-incubator");
})