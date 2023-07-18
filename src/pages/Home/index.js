import { Container, MovieList, Movie } from "./styles";
import { apikey } from "../../confi/key";
import { useState, useEffect } from "react";

const Home = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        //consumir API

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return(
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key={movie.id} >
                            <a href="https://google.com.br">
                                <img src={movie.image_url} alt={movie.title}/>
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>
        </Container>
    )
}

export default Home;