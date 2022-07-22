import { useState, useEffect} from 'react';
import API from '../../API/api';
import MoviesContainer from '../../components/Main/MoviesContainer';
import Loader from '../../components/UI/Loader/Loader';
import Error from '../../components/UI/Error/Error';
import { useFetching } from '../../hooks/useFetching';

function MainPage() {

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'film about shit',
        },
        {
            id: 2,
            name: 'film',
        },
        {
            id: 3,
            name: 'film',
        },
        {
            id: 4,
            name: 'film',
        },
        {
            id: 5,
            name: 'film',
        },
    ]);
    const [fetchMovies, isLoading, fetchError] = useFetching(async () => {
            return await API.getAll().then(data => {
                setMovies([...movies, ...data])
            });
        });

    // let update = true
    // useEffect(() => {
    //     if (!update) return
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     update = false
    //     fetchMovies();
    // },[]);

    return(
        <div className='main'>

            {/* {fetchError &&
                <Error>
                    Error to load data from server
                </Error>
            }

            {isLoading &&
                <Loader/>
            } */}

            <MoviesContainer movies={movies}/>

        </div>
    )
}

export default MainPage;