
import classes from './Error.module.css';

const Error = ({children}) => {
    return (
        <div className={classes.error}>
            <div className={classes.errorContent}>
                <div className={classes.errorItem}>
                {children}
                </div>
            </div>
        </div>
    )
}

export default Error;