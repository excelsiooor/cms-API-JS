import API from '../API/api';
import { useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from '../components/UI/MyButton/MyButton';

function LogIn () {

const [inputValue, setinputValue] = useState({
    username: '',
    password: '',
});

    function postReg (e) {
        e.preventDefault();
        API.logIn (inputValue)
        .then((responce) => {
            console.log(responce.text().then(val => {console.log(val);}));
        }).catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className='auth'>
            <form 
            className='auth-form'
            onSubmit={
            (e)=>{postReg(e)}}
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
                <MyButton type="submit" children="submit"></MyButton>
            </form>
        </div>
    )
}
export default LogIn;