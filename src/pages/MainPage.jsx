import { useState, useEffect} from 'react';
import API from '../API/api';
import { baseURL} from '../Global/globalValues';

function MainPage() {

    const [movies, setMovies] = useState([]);
    const handler = async () => { 
        return await API.getAll().then(data => {setMovies([...movies, ...data])
        })
    }

    let start = 0;
    const step = 350;

    const moveLeft = () => {
        if (start>0) start = start-step
        let toScroll = document.getElementById('content')
        toScroll.scroll({
            left: start,
            behavior: 'smooth'
        })
    }
    const moveRight = () => {
        if (movies.length*step>start) start = start +step
        let toScroll = document.getElementById('content')
        toScroll.scroll({
            left: start,
            behavior: 'smooth'
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
            <div 
                className='main-mp-topleft'
                onClick={moveLeft}
            ></div>
            <div 
                className='main-mp-topright'
                onClick={moveRight}
            ></div>
            <div id='content' className='main-content'>
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