import { useState, useEffect} from 'react';
import { useFetching } from '../../hooks/useFetching';
import API from '../../API/api';

function AllMovies() {

    const [movies, setMovies] = useState([]);

    const [fetchMovies, isLoading, fetchError] = useFetching(async () => {
        return await API.getAll().then(data => {
            setMovies(data);
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
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Date</td>
                        <td>Show In Main</td>
                    </tr>
                </thead>
                <tbody>
                    {movies?.map(
                        movie =>
                        <tr 
                        key={movie.id}
                        className='admin-table-item'
                        >
                            <td>{movie.id}</td>
                            <td>{movie.name}</td>
                            <td>{movie.description}</td>
                            <td>{new Date(movie.dateCreate).toString()}</td>
                            <td>
                                <input 
                                    type='checkbox'
                                    defaultChecked={movie.showInMain}
                                />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )}

export default AllMovies;