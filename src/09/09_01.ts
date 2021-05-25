export type userType={
    name:string
    age:number
}
export let user:userType = {
    name:"Dima",
    age:28
}

function icriaseAge (user:any){
    return  user.age++

}