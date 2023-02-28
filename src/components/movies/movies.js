import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from './movies.module.css'
import MoviesList from '../movies/movieCard/movieCard'
import "react-multi-carousel/lib/styles.css";

// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=7344806ea50700ffe08e1d783f23d04b&language=en-US
const Movies = () => {
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.themoviedb.org/3/discover/movie?api_key=7344806ea50700ffe08e1d783f23d04b",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setMovies(response.data.results)
            console.log(movies)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <div className={classes.main}>
                {
                    movies.map((items, index) => (
                        <div className={classes.cards}>
                            <MoviesList key={index} {...items} />
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default Movies

// $IMGPATH + poster_path
    // < div className = { classes.main } >
    // {
    //     movies.map((items, index) => (
    //         <MoviesList key={index} {...items} />
    //     ))
    // }
    //     </ >