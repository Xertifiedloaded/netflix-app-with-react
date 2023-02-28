import classes from './movieCard.module.css'
const getPosterUrl = (posterpath) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterpath}`
}
const MoviesList = ({ title, poster_path, name }) => {
    return (

        <>

            <div className={classes.cards}>
            
                <img src={getPosterUrl(poster_path)} alt="" srcset="" />
                <p>{title}</p>
            </div>
        </>
    )
}
export default MoviesList