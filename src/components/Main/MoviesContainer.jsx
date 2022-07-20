import { Link } from 'react-router-dom';
import { baseURL} from '../../Global/globalValues';

function MoviesContainer ({movies}) {

    return (
        <div>
            {movies.map(
                movie =>
                <div
                key={movie.id}
                className='main-item'
                style={{backgroundImage:`url(${baseURL}/resources/images/${movie.mainImageName})`}}
                >
                <Link to={'/movies/' + movie.id}>
                    {movie.name}                
                </Link>
                </div>
            )}
        </div>
    )
}

export default MoviesContainer;