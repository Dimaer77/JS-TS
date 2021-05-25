// export const usersArray = ["Di", "Nat", "Val", "Kat"]
export type UsersType = {
    [key: string]: {
        id: number,
        name: string
    }
}

export const userObj = {
    0: "Di",
    1: "Nat",
    2: "Val",
    3: "Kat"
}
export const users: UsersType = {
    101: {id: 101, name: "Di"},
    1002: {id: 1002, name: "Nat"},
    1030: {id: 1030, name: "Val"},
    1044: {id: 1044, name: "Kat"},

}

let user = {id: 100500, name: "Igor"}
let user2 = {id: 999, name: "sda"}

users[user2.id] = user2;

users[user.id] = user;

 users[1002].name = "yo"

console.log(users)
export const usersArray = [
    {id: 101, name: "Di"},
    {id: 1002, name: "Nat"},
    {id: 1030, name: "Val"},
    {id: 1044, name: "Kat"}
]

usersArray.push(user) //Имутабельное добавление
// let copyUsers = [...usersArray.filter(),user]

