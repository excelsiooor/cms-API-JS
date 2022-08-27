import { Link } from 'react-router-dom';
import { baseURL} from '../../Global/globalValues';
import { useRef} from 'react';
import Toggle from '../UI/Toggle/Toggle';
import React from 'react';

const MoviesContainer = ({movies}) => {

    const toggleBar = useRef();

    return (
        <div ref={toggleBar} className='main-content'>

            <Toggle movies={movies} scrollRef={toggleBar} />

            {movies.map(
                movie =>
                <div
                key={movie.id}
                className='main__item'
                >

                    <div className='main__item-br'
                    style={{backgroundImage:`url(${baseURL}/resources/images/${movie.mainImageName})`}}
                    ></div>

                    <div className='main__item-mask'></div>

                    <Link
                    className='main__item-name'
                    to={'/movies/' + movie.id}
                    title={movie.name}
                    >
                        <span>{movie.name}</span>
                    </Link>

                </div>
            )}
        </div>
    )
}

export default MoviesContainer;