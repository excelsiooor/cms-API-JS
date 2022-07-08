import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


const CreateMovie = () => {
    return ( 
        <form action="http://134.249.102.244:8080/admin/movies" method="post">
            <MyInput type='text' name='name'/>
            <MyButton type="submit">submit</MyButton>
        </form>
    );
}

export default CreateMovie;