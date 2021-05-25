import React, {useState} from "react";

export type  ManType = {
    name: string,
    age: number,
    lessons: Array<{ title: string }>,
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string,
    man: ManType,
    food: Array<string>,
    car: { module: string }
}

function useDimychState(m: string) {
    return [m, function () {
    }]


}

function useDimychState2(m: string) {
    return {
        message: m,
        setMessage: function () {
        }
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {


    const [message, setMessage] = useDimychState("hello")//USESTATE ВОЗВРОЩАЕТ МАССИВ

    return <div>
        <h1>{title}</h1>
        <h2>{man}</h2>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}