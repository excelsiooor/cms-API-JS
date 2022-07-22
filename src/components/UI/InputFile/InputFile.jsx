import { useState } from 'react';
import cl from './InputFile.module.css';

const InputFile = ({type, name, onChange}) => {

    const [countFiles, setCountFiles] = useState('');

    const onChangeHandler = (e) => {
        onChange(e)
        let countInputFiles = '';
        for (let i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            if ('name' in file) {
                countInputFiles += "name: " + file.name;
            }
        }
        setCountFiles('Выбрано файл: ' + countInputFiles)
    }

    return (
            <div className={cl.wrapper}>
                <input 
                id="field__file" 
                className={cl.file}
                type={type}
                name={name}
                onChange={onChangeHandler}
                />

                <div 
                className={cl.file__fake}
                >
                    {countFiles}
                </div>

                <label 
                className={cl.file__item} 
                htmlFor="field__file"
                >
                    <div 
                    className={cl.file__button}
                    >
                        Выбрать
                    </div>
                </label>
            </div>
        );
    };

export default InputFile;