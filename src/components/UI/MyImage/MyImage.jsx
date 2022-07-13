import classes from './MyImage.module.css';

const Navbar = ({src, alt}) => {
    return (
        <img className={classes.myImage} src={src} alt={alt}/>
    );
};

export default Navbar;