import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { apikey } from "../../confi/key";

import { Container } from "./styles";

const Details = () => {

    const {id} = useParams()

    const [movie, setMovie] = useState({})
    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data
            
            const movie = {
                id,
                title: title,
                sinopse: overview,
                image: `${image_path}${poster_path}`,
                data_lancamento: release_date
            }

            setMovie(movie)

        })
    }, [id])

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.sinopse}/>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span className="release-date">Data Lançamento: {movie.data_lancamento}</span>
                    <Link to="/">
                        <button>Go Back</button>
                    </Link>

                </div>
            </div>
        </Container>
    )
}

export default Details; 