import { Container, MovieList, Movie } from "./styles";
import { apikey } from "../../confi/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [movies, setMovies] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(() => {
        //consumir API

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id} >

                            <Link to={`/details/${movie.id}`}>
                                <img
                                    src={`${image_path}${movie.poster_path}`}
                                    alt={movie.title}/>
                            </Link>

                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}

export default Home;