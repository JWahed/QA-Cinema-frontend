import { useState } from 'react';
import { ReactComponent as MagGlass } from '../../../assets/magnifyingGlass.svg';
import axios from 'axios';
import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const findMovie = async (term) => {
    // Reject falsy and string with only whitespaces
    if (!term || /^\s*$/.test(term)) {
        return console.log("ejected");
    }
    // Removes excessive whitespace 
    term = term.trim().replace(/\s+/g, ' ');
    setSearchTerm(term);
    try {
        const res = await axios.get(`http://www.omdbapi.com/?apikey=dd7f33e1&s=${term}`);
        const result = res.data.Search;
        if (!result) {
            return
        }
        setData(result);
    } catch (err) {
        window.alert("Invalid query \nCheck console for error");
    }
  };

  return (
    <div className="search">

      <div className="search-container">
        <div className="search-inner">
          <input 
            type="text"
            placeholder="Search Term"
            value={searchTerm}
            onChange={onChange}
          />
          <button
            onClick={() => findMovie(searchTerm)}
          >
            <MagGlass />
          </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => (
            item.Title.toLowerCase().startsWith(searchTerm.toLowerCase())
            ))
            .map((item) => (
              <div
                className="dropdown-row"
                key={item.Title}
              >
                <a href={`/movies/${item.imdbID}`}>
                    {item.Title}&nbsp;({item.Year})
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
