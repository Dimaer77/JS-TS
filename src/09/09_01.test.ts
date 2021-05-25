import {userType} from "./09_01";

function icriaseAge(u: userType) {
    return u.age++

}


test("reference type test", () => {

    let user: userType = {
        name: "Dima",
        age: 28
    }
    icriaseAge(user)
    expect(user.age).toBe(29)
// expect(user['1']).toEqual({id:1,name:"Ekaterina"})
})

test("array  test", () => {

    let users: Array<userType> = [{
        name: "Dima",
        age: 28
    },
        {
            name: "Hellga",
            age: 20
        }]

    let admins =users
    admins.push({name:"band", age:20})

    expect(admins[0].age).toBe(29)
// expect(user['1']).toEqual({id:1,name:"Ekaterina"})
})

test ('value type test',()=>{
    let usersCount=100;
    let admins=users
})