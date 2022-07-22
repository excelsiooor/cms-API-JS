import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({...props}) => {

        return (
            <div className={cl.content}>
                <input
                className={cl.item} {...props}
                />
            </div>
        );
    };

export default MyInput;