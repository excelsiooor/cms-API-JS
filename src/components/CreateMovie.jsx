import {useState} from "react";
import API from "../API/api";
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import '../Styles/Main.css';

const CreateMovie = () => {

    const [inputValue, setinputValue] = useState({
        name: '',
        images: [],
    });

    function sendData (e) {
        e.preventDefault();
        let formData= new FormData();
        formData.append("images", inputValue.images[0]);
        formData.append('name', inputValue.name);
        API.postMovie (formData).then((responce)=> {
            console.log(responce)
        })
    }

    return ( 
        <form 
        className="admin"
        onSubmit={e => {sendData(e)}}>
            <MyInput 
            type='text' 
            name='name'
            onChange={e => setinputValue({...inputValue, name: e.target.value})}
            />
            <MyInput 
            type="file" 
            name="images"
            onChange={ e => setinputValue({...inputValue, images: e.target.files})}
            />
            <MyButton type="submit">submit</MyButton>
        </form>
    );
}

export default CreateMovie;