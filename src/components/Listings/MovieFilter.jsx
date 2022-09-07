import { useEffect } from "react";

function Filter({setActiveGenre, activeGenre, setFiltered, movies}){

    useEffect(()=>{
        if(activeGenre === "All"){
            setFiltered(movies);
            return;
        }
        const filteredMovies = movies.filter((movie) => {
            if(movie.genre === activeGenre){
                return movie;
            }
        }
        // movie.genre.includes(activeGenre)
        );
        setFiltered(filteredMovies);
    },[activeGenre]);

    return(
        <div className="filter-container">
            <button className={activeGenre === "All" ? "active" : ""} onClick={() => setActiveGenre("All")}>All</button>
            <button className={activeGenre === "Action" ? "active" : ""}  onClick={() => setActiveGenre("Action")}>Action</button>
            <button className={activeGenre === "Comedy" ? "active" : ""}  onClick={() => setActiveGenre("Comedy")}>Comedy</button>
            <button className={activeGenre === "Drama" ? "active" : ""}  onClick={() => setActiveGenre("Drama")}>Drama</button>
            <button className={activeGenre === "Fantasy" ? "active" : ""}  onClick={() => setActiveGenre("Fantasy")}>Fantasy</button>
            <button className={activeGenre === "Horror" ? "active" : ""}  onClick={() => setActiveGenre("Horror")}>Horror</button>
            <button className={activeGenre === "Mystery" ? "active" : ""}  onClick={() => setActiveGenre("Mystery")}>Mystery</button>
            <button className={activeGenre === "Sci-Fi" ? "active" : ""}  onClick={() => setActiveGenre("Sci-Fi")}>Sci-Fi</button>
        </div>
    )
}

export default Filter;