import { useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import API from '../../API/api';
import { baseURL} from '../../Global/globalValues';

function AllMovies() {

    const [movies, setMovies] = useState([]);

    const [fetchMovies, isLoading, fetchError] = useFetching(async () => {
            return await API.getAll().then(data => {setMovies([...movies, ...data])
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
        <div className='admin-all'>
            {fetchError &&
                <h1>Error to load data from server</h1>
            }
            <table className='admin-table'>
            
            {movies.map(
                movie =>
                <tr 
                key={movie.id}
                className='admin-table-item'
                >
                    <td>{movie.name}</td>
                    <td>{movie.description}</td>
                    <td>{movie.dateCreate}</td>
                    <td>{movie.status}</td>
                </tr>
            )}
        </table>
        </div>
    )}

export default AllMovies;