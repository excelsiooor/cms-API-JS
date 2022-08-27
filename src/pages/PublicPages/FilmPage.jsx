import API from "../../API/api";
import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";
import { baseURL } from "../../Global/globalValues";

function FilmPage() {

    const pathname = window.location.pathname
    const [fetchMovie, setFetchMovie] = useState({});

    const [sendId, isLoading, fetchError] = useFetching(async () => {
        return await API.getMovieById(pathname).then(data => {
            setFetchMovie( {...fetchMovie, ...data} )
            console.log(data);
        });
    });

    function showId () {
        console.log(pathname);
        console.log(fetchMovie);
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
        <div className='film__container'>

            {fetchError &&
                <Error>
                    Error to load data from server
                </Error>
            }

            {isLoading &&
                <Loader/>
            }

                <div className="film__content">
                    <div className="film__info">
                        <div className="film__info-colm1">
                            <div className="poster__container">
                                <img src={fetchMovie.mainImageName} alt="woops" title={fetchMovie.name} />
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="mobile">
                            <div className="mobile__jumbo">
                                <div className="bg" style={{backgroundImage:`url(${baseURL}/resources/images/${fetchMovie.mainImageName})`}}></div>
                                <div className="mobile__trailer"></div>
                            </div>
                            <div className="mobile__title">
                                {fetchMovie.name}
                            </div>
                        </div>
                        <div className="film__info-colm3">
                            <div className="film__info-dates">
                                <svg width='22' height='23' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0v1H0v22h22V1h-4V0h-2v1H6V0H4zM2 3h2v1h2V3h10v1h2V3h2v2H2V3zm0 4h18v14H2V7zm6 2v2h2V9H8zm4 0v2h2V9h-2zm4 0v2h2V9h-2zM4 13v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM4 17v2h2v-2H4zm4 0v2h2v-2H8zm4 0v2h2v-2h-2z" fill="#000" fill-rule="nonzero"></path>
                                </svg>
                                <span>
                                    {/* {fetchMovie.dates} */}
                                    25.07.2022-27.07.2022
                                    </span>
                            </div>
                        </div>
                        <div className="film__info-colm2">
                            Info:{fetchMovie.desc}
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default FilmPage;