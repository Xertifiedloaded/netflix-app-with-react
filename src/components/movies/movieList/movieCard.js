import { Link } from 'react-router-dom'
import classes from './movieCard.module.css'
export const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}

const MoviesList = ({ title, poster_path,movies, id }) => {
    return (

        <>
            <div className={classes.cards}>
                <div className={classes.imgContainer}>
                    <img src={getPosterUrl(poster_path)} alt="poster"  />

                </div>
                <Link to={`/profile/:${id}`} >{ title}</Link>
            </div>
        </>
    )
}
export default MoviesList;