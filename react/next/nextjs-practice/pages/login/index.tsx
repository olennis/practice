import React from 'react'
import { useState } from 'react'

type LoginInfo =  {
    id : string,
    pw : string
};
export default function Index() {
    const [inputObj, setInputObj] = useState<LoginInfo>({
        id : '',
        pw : ''
    })
    const loginInputHandler = (e) => {
        setInputObj({...inputObj,[e.target.name] : e.target.value})
    }
    const loginBtnHandler = () =>{
        console.log(inputObj)
    }
    return (
        <div>
            <div>
                <label htmlFor='idInput'>id</label>
                <input type='text' id='idInput' name='id' onChange={loginInputHandler}></input>
            </div>
            <div>
                <label htmlFor='pwInput'>pw</label>
                <input type='password' id='pwInput' name='pw' onChange={loginInputHandler}></input>
            </div>
            <button type='button' onClick={loginBtnHandler}>login</button>
        </div>
    )
}
