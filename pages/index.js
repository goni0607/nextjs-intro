import Link from "next/link";
// import { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
    /* Client Side Renderring
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            // const json = await response.json();
            const { results } = await(
                await fetch(`/api/movies`)
            ).json();
            setMovies(results);
        })();
    }, [])
    */

    /* Example for router hook
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(
            {
                pathname: `/movies/${id}`,
                query: {
                    title,
                },
            },
            `/movies/${id}`
        );
    };
    */
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };
    
    return (
        <div className="container">
            <Seo title="Home" />
            {!results && <h4>Loading...</h4>}
            {results?.map((movie) => (
                <div key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onClick={() => onClick(movie.id, movie.original_title)} />
                    <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                        <a>
                            {movie.original_title}
                        </a>
                    </Link>
                </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    display: block;
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie a {
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                }
            `}</style>
        </div>
        /*
        <div>
            <h1>Welcome, NextJS!!</h1>
            <p>Clicks : {counter}</p>
            <button onClick={() => { setCounter((prev) => prev + 1) }}>+</button>
        </div>
        */
    );
}


export async function getServerSideProps() {
    const { results } = await (
        await fetch(`http://localhost:3000/api/movies`)
    ).json();
    return {
        props: {
            results,
        },
    };
}