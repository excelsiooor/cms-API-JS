import React from 'react';
import classes from './Desc.module.css';

const Desc = ({...props}) => {
        return (
            <div className={classes.descControl}>
                <textarea
                className={classes.desc} {...props}
                />
            </div>
        );
    };

export default Desc;