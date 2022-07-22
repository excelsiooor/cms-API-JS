import cl from './MyImage.module.css';

const Navbar = ({src, alt}) => {
    return (
        <img className={cl.item} src={src} alt={alt}/>
    );
};

export default Navbar;