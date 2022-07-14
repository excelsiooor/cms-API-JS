import { useState, useEffect, useRef} from 'react';
import API from '../API/api';
import Toggle from '../components/UI/Toggle/Toggle';
import { baseURL} from '../Global/globalValues';

function MainPage() {

    const [movies, setMovies] = useState([]);
    const toggleBar = useRef();
    const handler = async () => { 
        return await API.getAll().then(data => {setMovies([...movies, ...data])
        })
    }

    let update = true
    useEffect(() => {
        if (!update) return
        // eslint-disable-next-line react-hooks/exhaustive-deps
        update = false
        handler();
    },[])

    return(
        <div className='main'>
            <Toggle movies={movies} scrollRef={toggleBar} />
            <div ref={toggleBar} id='content' className='main-content'>
            {movies.map(
                movie => 
                <div
                key={movie.id}
                className='main-item'
                style={{backgroundImage:`url(${baseURL}/resources/images/${movie.mainImageName})`}}
                >
                {movie.name}
                <br />
                {new Date(movie.dateCreate).toDateString()}
                {new Date(movie.dateCreate).toTimeString()}
                </div>
            )}
            </div>
        </div>
    )
}

export default MainPage;