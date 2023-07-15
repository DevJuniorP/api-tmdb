import { Container, MovieList, Movie } from "./styles";
import { apikey } from "../../confi/key";
import { useState, useEffect } from "react";

const Home = () => {

    // eslint-disable-next-line
    const [movies, setMovies] = useState([])

    useEffect(() => {
        //consumir API

        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=5e26c577935e94516e7f507ce6f05e8f')
        .then(response => response.json())
        .then(data => console.log())
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