import {userObj, UsersType} from "./08_01";


let users: UsersType
beforeEach(() => {
    users = {
        101: {id: 101, name: "Di"},
        1002: {id: 1002, name: "Nat"},
        1030: {id: 1030, name: "Val"},
        1044: {id: 1044, name: "Kat"},

    }
})
test("sss", () => {

    users[101].name = "Dim"
    expect(users[101].name).toBe("Dim")
    // expect(userObj[0]).toBe("Di")
    // expect(userObj[1]).toBe("Nat")
    // expect(userObj[2]).toBe("Val")
    // expect(userObj[3]).toBe("Kat")

})
