import React from 'react'

export default function index() {
    const loginHandler = () =>{
    }
    return (
        <div>
            <div>
                <label htmlFor='idInput'>id</label>
                <input type='text' id='idInput'></input>
            </div>
            <div>
                <label htmlFor='pwInput'>pw</label>
                <input type='password' id='pwInput'></input>
            </div>
            <button type='button' onClick={loginHandler}>login</button>
        </div>
    )
}
