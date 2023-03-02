import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import classes from './movies.module.css'
import MoviesList from '../movieList/movieCard'
import Loader from '../../../assets/images/loader.gif'

// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=7344806ea50700ffe08e1d783f23d04b&language=en-US
const Movies = () => {
    const [video, setVideo] = useState([])
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const getMovies = async () => {
        try {
            setLoading(!loading)
            const response = await axios({
                method: "GET",
                // url: "https://api.themoviedb.org/3/movie/top_rated?api_key=7344806ea50700ffe08e1d783f23d04b&language=en-US&page=1",
                url: "https://api.themoviedb.org/3/discover/movie?api_key=7344806ea50700ffe08e1d783f23d04b",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            setMovies(response.data.results)
            // console.log(movies)
            setLoading(loading)
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }
    }
    // video
    const getVideo = async () => {
        try {
            setLoading(!loading)
            const response = await axios({
                method: "GET",
                // url: "https://api.themoviedb.org/3/movie/top_rated?api_key=7344806ea50700ffe08e1d783f23d04b&language=en-US&page=1",
                url: "https://official-joke-api.appspot.com/random_joke",
                headers: {
                    "Content-Type": "application/json"
                },
            })

            // setVideo(response.data.results)
            console.log(response)
            setLoading(loading)
        } catch (error) {
            console.log(error)
            setLoading(loading)
        }
    }
    useEffect(() => {
        getMovies()
        getVideo()
    }, [])




    return (
        <>
            {loading ? (
                <div>
                    <img src={Loader} />
                </div>
            ) : (
                <div>
                    <div className={classes.main}>

                        {
                            movies.map((items, index) => (
                                <div className={classes.card}>
                                    <MoviesList key={index} {...items} />
                                </div>

                            ))

                        }


                    </div>

                </div>
            )
            }

        </>
    )
}

export default Movies
