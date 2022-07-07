import {logIn} from '../API/api';
import { useState} from 'react';
import MyInput from "./UI/MyInput/MyInput";
import MyButton from './UI/MyButton/MyButton';
import '../App.css';

function LogIn () {

const [inputValue, setinputValue] = useState({
    username: '',
    password: '',
    confirmPassword: '',
});

    function handleSubmit (e) {
        e.preventDefault();
        logIn(inputValue);
    }

    return(
        <form
        onSubmit={
            (e)=>{handleSubmit(e)}
        }
        >
            <MyInput 
            value={inputValue.username}
            onChange={e => setinputValue({...inputValue, username: e.target.value})}
            type='text' 
            name='username' 
            placeholder="username" 
            />
            <MyInput 
            value={inputValue.password}
            onChange={e => setinputValue({...inputValue, password: e.target.value})}
            type="password" 
            name='password' 
            placeholder="password"
            />
            <MyInput 
            value={inputValue.confirmPassword}
            onChange={e => setinputValue({...inputValue, confirmPassword: e.target.value})}
            type="password" 
            name='passwordConfirm' 
            placeholder="passwordConfirm"
            />
            <MyButton type="submit">submit</MyButton>
        </form>
    )
}
export default LogIn;