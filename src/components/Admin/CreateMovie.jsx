import {useState, useEffect} from "react";
import API from "../../API/api";
import Desc from "../UI/Desc/Desc";
import InputFile from "../UI/InputFile/InputFile";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";


const CreateMovie = () => {
    const [state, setState] = useState({
        inputValue: {
            name: '',
            trailerURL: '',
            statusId: '',
            description: '',
            showInMain: false,
            images: [],
        },
        statuses: [],
    });

    function sendData (e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('mainImage', state.inputValue.images[0]);
        formData.append('name', state.inputValue.name);
        formData.append('trailerURL', state.inputValue.trailerURL);
        formData.append('showInMain', state.inputValue.showInMain);
        formData.append('statusId', state.inputValue.statusId);
        formData.append('description', state.inputValue.description);
        API.postMovie (formData).then((responce)=> {
            console.log(responce)
        });
    }

    const statusUpload = async () => {
        return await API.getStatus().then(data => {
            let newStatusId = data.find(st => { return st.defaultStatus === true }).id;
            setState({ 
                inputValue: {
                    ...state.inputValue,
                    statusId: newStatusId,
                },
                statuses: data
            });
        });
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
                    onChange={e => setState({...state, inputValue: { ...state.inputValue, name: e.target.value }})} 
                />
                <MyInput 
                    type='text' 
                    name='trailerURL'
                    placeholder='trailer'
                    onChange={e => setState({...state, inputValue: { ...state.inputValue, trailerURL: e.target.value }})}
                />
                <input 
                type='checkbox'
                name="chackbox"
                onChange={e => setState({...state, inputValue: { ...state.inputValue, showInMain: e.target.value === 'on' }})}
                />
                <select
                    value={state.inputValue.statusId}
                    name="status" 
                    onChange={e => setState({...state, inputValue: { ...state.inputValue, statusId: e.target.value }})}
                >
                    {state.statuses?.map(
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
                    onChange={e => setState({...state, inputValue: { ...state.inputValue, description: e.target.value }})}
                />
                <InputFile
                    type="file" 
                    name="mainImage"
                    onChange={(e) => {setState({...state, inputValue: { ...state.inputValue, images: e.target.files }})}}
                />
            </div>
            <div className="admin-submit">
                <MyButton type="submit">submit</MyButton>
            </div>
        </form>
    );
}

export default CreateMovie;