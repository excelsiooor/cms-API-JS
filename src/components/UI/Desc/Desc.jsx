import React from 'react';
import cl from './Desc.module.css';

const Desc = ({...props}) => {
        return (
            <div className={cl.container}>
                <textarea
                className={cl.item} {...props}
                />
            </div>
        );
    };

export default Desc;