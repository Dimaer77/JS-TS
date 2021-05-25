import React, {ChangeEvent, MouseEvent} from 'react';



export let User = ()=>{
    const deleteUser=(event:MouseEvent<HTMLButtonElement>)=>{
        console.log(event.currentTarget.name )

    }


    const onAgeChanged =(event:ChangeEvent<HTMLInputElement>)=>{
        console.log("age  changed" + event.currentTarget.value)
    }

    const onNameChanged = () =>{
        console.log("name changed")
    }
    const focusLostHandler = ()=>{
        console.log("focus lost")
    }
    return <div><textarea onChange={onNameChanged}
                          onBlur={focusLostHandler}>
        Dimych</textarea>
        <input type="number" onChange={onAgeChanged}/>
        <button name="delete"  onClick={deleteUser}>delete</button>
        <button name="save"  onClick={deleteUser}>save</button>

    </div>
}
