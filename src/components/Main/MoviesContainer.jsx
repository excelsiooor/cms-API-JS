import { Link } from 'react-router-dom';
import { baseURL} from '../../Global/globalValues';
import { useRef } from 'react';
import Toggle from '../UI/Toggle/Toggle';

function MoviesContainer ({movies}) {

    const toggleBar = useRef();

    return (
        <div ref={toggleBar} className='main-content'>
            <Toggle movies={movies} scrollRef={toggleBar} />
            {movies.map(
                movie =>
                <div
                key={movie.id}
                className='main__item'
                // style={{backgroundImage:`url(${baseURL}/resources/images/${movie.mainImageName})`}}
                >

                    <Link
                    className='main__item-name'
                    to={'/movies/' + movie.id}
                    >
                        {movie.name}                
                    </Link>

                    <div className='main__item-cover'>

                    </div>
                </div>
            )}
        </div>
    )
}

export default MoviesContainer;