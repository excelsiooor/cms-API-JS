import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({...props}) => {

        return (
            <div className={classes.formControl}>
                <input
                className={classes.myInput} {...props}
                />
            </div>
        );
    };

export default MyInput;