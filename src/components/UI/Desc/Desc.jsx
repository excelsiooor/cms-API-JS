import React from 'react';

const Desc = ({...props}) => {
        return (
                <textarea
                className='desk' {...props}
                />
        );
    };

export default Desc;