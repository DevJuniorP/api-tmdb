import { Container, MovieList, Movie } from "./styles";

const Home = () => {

    const movies = [
        {
            id: 1,
            title: 'Spider-Man',
            image_url: 'https://tse4.mm.bing.net/th?id=OIP.gjIsgVxqtJgTrvpHvUMp_wHaK-&pid=Api&P=0&h=180',
        },  
        {
            id: 2,
            title: 'Batman',
            image_url: 'https://tse4.mm.bing.net/th?id=OIP.gjIsgVxqtJgTrvpHvUMp_wHaK-&pid=Api&P=0&h=180',
        },
        {
            id: 3,
            title: 'Dracula',
            image_url: 'https://tse4.mm.bing.net/th?id=OIP.gjIsgVxqtJgTrvpHvUMp_wHaK-&pid=Api&P=0&h=180',
        }
    ]

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