import API from "../../API/api";
import { useEffect } from "react";
import { useFetching } from "../../hooks/useFetching";

function FilmPage() {

    const pathname = window.location.pathname

    const [sendId, isLoading, fetchError] = useFetching(async () => {
        return await API.getMovieById(pathname).then(data => {
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
        <div className='FilmPage'>
            {fetchError &&
                <h1>Error to load data from server</h1>
            }
        </div>
    )
}

export default FilmPage;