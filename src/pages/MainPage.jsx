import { useState, useEffect } from 'react';
import '../Styles/Main.css'
import API from '../API/api';
import CreateMovie from '../components/CreateMovie';

function MainPage() {

    const [movies, setMovies] = useState([]);

    const handler = () => { 
        API.getAll().then(data => {setMovies([...movies, ...data])
        console.log('+++' + data);
        })
    }

    useEffect(() => {
        handler()
    }, [])

    return(
        <div>
            <CreateMovie/>
            {movies.map(
                movie => 
                <div
                key={movie.id}
                >
                {movie.name}
                </div>
                )}
        </div>
    )
}

export default MainPage;