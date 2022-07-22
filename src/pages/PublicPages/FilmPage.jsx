import API from "../../API/api";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

function FilmPage() {

    const pathname = window.location.pathname
    const [fetchMovie, setFetchMovie] = useState({});

    const [sendId, isLoading, fetchError] = useFetching(async () => {
        return await API.getMovieById(pathname).then(data => {
            setFetchMovie( ...fetchMovie, ...data )
            console.log(data);
        });
    });

    function showId () {
        console.log(pathname);
    }

    let update = true
    useEffect(() => {
        if (!update) return
        // eslint-disable-next-line react-hooks/exhaustive-deps
        update = false
        sendId();
        showId();
    },[]);

    return(
        <div className='filmpage'>

            {fetchError &&
                <Error>
                    Error to load data from server
                </Error>
            }

            {isLoading &&
                <Loader/>
            }

            {fetchMovie.map( 
                movie => 

                <div>
                    {movie.name}
                </div>

                )}

        </div>
    )
}

export default FilmPage;