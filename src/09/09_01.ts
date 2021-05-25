export type userType={
    name:string
    age:number
    address:{
        title: string
    }
}


function icriaseAge (user:any){
    return  user.age++

}