import {userType} from "./09_01";
import {UsersType} from "../08/08_01";

function icriaseAge(u: userType) {
    return u.age++

}



test("reference type test", () => {

    let user: userType = {
        name: "Dima",
        age: 28,
        address: {
            title: "Misnk"
        }
    }
    icriaseAge(user)
    expect(user.age).toBe(29)
// expect(user['1']).toEqual({id:1,name:"Ekaterina"})
})

test("array  test", () => {

    let users: Array<userType> = [{
        name: "Dima",
        age: 28,
        address:{
            title:"asd"
        }
    },
        {
            name: "Hellga",
            age: 20,
            address:{
                title:"asd"
            }
        }]

    let admins =users
    admins.push({name:"band", age:20,address:{title:"asdas"}})

    expect(admins[0].age).toBe(29)
// expect(user['1']).toEqual({id:1,name:"Ekaterina"})
})

test ('value type test',()=>{
    let usersCount = 100;
    let admins = usersCount


})



test("reference type ", () => {
    let address = {
        title:"Minsk City"
    }
    let user: userType = {
        name: "Dima",
        age: 28,
        address: {
            title: "Misnk"
        }
    }

    let user2:userType ={
        name:"Natali",
        age:30,
        address: user.address
    }
    address.title = "Minsk Luka"

    const userss = [user, user2, {name:"Misha", age:4, address:address}]

    expect(user.address.title).toBe("Kanary")
})