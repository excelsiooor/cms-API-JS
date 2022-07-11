import { useState, useEffect } from 'react';
import '../Styles/Main.css';
import API from '../API/api';
import { baseURL } from '../Global/globalValues';

function MainPage() {

    const [movies, setMovies] = useState([]);

    const handler = () => { 
        API.getAll().then(data => {setMovies([...movies, ...data])
        })
    }

    useEffect(() => {
        handler()
    }, [])

    return(
        <div>
            {movies.map(
                movie => 
                <div
                key={movie.id}
                >
                {movie.name}
                <img 
                src={ baseURL + '/resources/images/' + movie.mainImageName}
                alt="woops"
                />
                </div>
                )}
        </div>
    )
}

export default MainPage;