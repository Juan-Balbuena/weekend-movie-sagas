import { useHistory } from 'react-router-dom/cjs/react-router-dom.min.js';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

function Details(){

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const handleClick = (movie) => () => {
        dispatch({type: 'CLEAR_DETAILS', payload: movie});
        history.push('/');
        };
    
    return(
        <>
            <button onClick={handleClick(movies)}>Return To Main Page</button>
            {movies.map(movie => {
                return (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <h4>{movie.genre_id}</h4>
                        {/* <img src={movie.poster} alt={movie.title} /> */}
                        <p>{movie.description}</p>
                    </div>
            );
    })}
    </>)
        
    
}

export default Details;