import { useState, useEffect, useRef} from 'react';
import API from '../../API/api';
import MoviesContainer from '../../components/Main/MoviesContainer';
import Loader from '../../components/UI/Loader/Loader';
import Error from '../../components/UI/Error/Error';
import Toggle from '../../components/UI/Toggle/Toggle';
import { useFetching } from '../../hooks/useFetching';

function MainPage() {

    const [movies, setMovies] = useState([]);
    const toggleBar = useRef();

    const [fetchMovies, isLoading, fetchError] = useFetching(async () => {
            return await API.getAll().then(data => {
                setMovies([...movies, ...data])
            });
        });

    let update = true
    useEffect(() => {
        if (!update) return
        // eslint-disable-next-line react-hooks/exhaustive-deps
        update = false
        fetchMovies();
    },[]);

    return(
        <div className='main'>

            <Toggle movies={movies} scrollRef={toggleBar} />

            <div ref={toggleBar} className='main-content'>

            {fetchError &&
                <Error>
                    Error to load data from server
                </Error>
            }

            {isLoading &&
                <Loader/>
            }

            <MoviesContainer movies={movies} />


            </div>
        </div>
    )
}

export default MainPage;