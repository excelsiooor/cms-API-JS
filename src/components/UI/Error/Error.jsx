
import cl from './Error.module.css';

const Error = ({children}) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.item}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default Error;