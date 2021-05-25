import {mult, splitInto, sum} from "./01";
import {strict} from "assert";
let a : number;
let b : number;
let c : number;

beforeEach(()=>{
    a=1;
    b=2;
    c=3;

})
test('sum should be correct', () =>{
    //data

    //action
    const result= sum(a,b);

    //expect result
    expect(result).toBe(3);
})

test('sum should be correc', () =>{
    //data

    //action
    const result= mult(c,c);

    //expect result
    expect(result).toBe(9);
})

test('splitting into words should be correct', ()=>{
    const sent1="Hello My Friend";
    const sent2='Js - is  programming language';


    const result1= splitInto(sent1);
    const result2= splitInto(sent2);

        expect(result1.length).toBe(3)
        expect(result1[0]).toBe("hello")
        expect(result1[1]).toBe("my")
        expect(result1[2]).toBe("friend")


        expect(result2.length).toBe(4)
        expect(result2[0]).toBe("js")
        expect(result2[1]).toBe("is")
        expect(result2[2]).toBe("programming")
        expect(result2[3]).toBe("language")

})