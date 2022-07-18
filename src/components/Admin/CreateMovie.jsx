import {useState, useEffect} from "react";
import API from "../../API/api";
import Desc from "../UI/Desc/Desc";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";


const CreateMovie = () => {

    const [inputValue, setinputValue] = useState({
        name: '',
        trailerURL: '',
        status: '',
        description: '',
        images: [],
    });

    const [statuses, setStatus] = useState([]);

    function sendData (e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('mainImage', inputValue.images[0]);
        formData.append('name', inputValue.name);
        formData.append('trailerURL', inputValue.trailerURL);
        formData.append('statusId', inputValue.status);
        formData.append('description', inputValue.description);
        API.postMovie (formData).then((responce)=> {
            console.log(responce)
        });
    }

    const statusUpload = async () => {
        return await API.getStatus().then(data => { setStatus([...statuses, ...data]) });
    }

    let update = true
    useEffect(() => {
        if (!update) return
        // eslint-disable-next-line react-hooks/exhaustive-deps
        update = false
        statusUpload();
    },[]);

    return ( 
        <form 
        className="admin-form"
        onSubmit={e => {sendData(e)}}>
            <div className="form-content">
                <MyInput 
                    type='text' 
                    name='name'
                    placeholder='film name'
                    onChange={e => setinputValue({...inputValue, name: e.target.value})}
                />
                <MyInput 
                    type='text' 
                    name='trailerURL'
                    placeholder='trailer'
                    onChange={e => setinputValue({...inputValue, trailerURL: e.target.value})}
                />
                <select
                    value={inputValue.status}
                    name="status" 
                    onChange={e => setinputValue({...inputValue, status: e.target.value})}
                >
                    {statuses.map(
                        option => 
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.name}
                        </option>
                    )}
                </select>
                <Desc 
                    type='text' 
                    name='description'
                    onChange={e => setinputValue({...inputValue, description: e.target.value})}
                />
                <MyInput 
                    type="file" 
                    name="mainImage"
                    onChange={ e => setinputValue({...inputValue, images: e.target.files})}
                />
            </div>
            <div className="admin-submit">
                <MyButton type="submit">submit</MyButton>
            </div>
        </form>
    );
}

export default CreateMovie;