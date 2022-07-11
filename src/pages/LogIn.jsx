import API from '../API/api';
import { useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from '../components/UI/MyButton/MyButton';
import '../Styles/Main.css';

function Auth () {

const [inputValue, setinputValue] = useState({
    username: '',
    password: '',
    confirmPassword: '',
});

    function handleSubmit (e) {
        e.preventDefault();
        API.registration (inputValue);
    }

    return(
        <form 
        className='log'
        onSubmit={
            (e)=>{handleSubmit(e)}
        }
        >
            <h1>Log In Form</h1>
            <MyInput 
            value={inputValue.username}
            onChange={e => setinputValue({...inputValue, username: e.target.value})}
            type='text' 
            name='username' 
            placeholder="Username" 
            />
            <MyInput 
            value={inputValue.password}
            onChange={e => setinputValue({...inputValue, password: e.target.value})}
            type="password" 
            name='password' 
            placeholder="Password"
            />
            <MyInput 
            value={inputValue.confirmPassword}
            onChange={e => setinputValue({...inputValue, confirmPassword: e.target.value})}
            type="password" 
            name='passwordConfirm' 
            placeholder="Confirm"
            />
            <MyButton type="submit" children="submit"></MyButton>
        </form>
    )
}
export default Auth;