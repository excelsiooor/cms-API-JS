import { useState } from 'react';
import classes from './InputFile.module.css';

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
            <div className={classes.field__wrapper}>
                <input 
                id="field__file" 
                className={classes.field__file}
                type={type}
                name={name}
                onChange={onChangeHandler}
                />
                <label 
                className={classes.field__fileWrapper} 
                htmlFor="field__file"
                >
                    <div 
                    className={classes.field__fileFake}
                    >
                        {countFiles}
                    </div>
                    <div 
                    className={classes.field__fileButton}
                    >
                        Выбрать
                    </div>
                </label>
            </div>
        );
    };

export default InputFile;