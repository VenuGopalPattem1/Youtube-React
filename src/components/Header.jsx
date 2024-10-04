import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { hanldeNav, onNav } from '../utils/navSlicer';
import { YOUTUBE_SEARCH_API } from './Constants';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Header() {
  const [data, setData] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const dispatch = useDispatch();

  // Handle menu click and dispatch Redux action
  const handleMenuClick = () => {
    dispatch(hanldeNav());
  };

  // Fetch search suggestions from the API
  useEffect(() => {
    dispatch(onNav())
      const timer = setTimeout(() => {
        getSearchSuggestion();
      }, 300);  // Debounce to avoid multiple calls on each keystroke
      return () => clearTimeout(timer);  // Cleanup the timer
  }, [searchData]);

  const getSearchSuggestion = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchData);
      const result = await response.json();
      setSearchSuggestions(result[1]);  // Assuming suggestions are in the second index of the result
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
    console.log(searchSuggestions);
    
  };

  return (
    <header className="container-fluid shadow-sm mb-5">
      <div className="d-flex justify-content-between align-items-center p-2">
        {/* Logo and Menu Section */}
        <div className="d-flex align-items-center">
          <img
            src="https://th.bing.com/th/id/OIP.Au0_7mpqZMtQeoRL4iFkqAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Menu icon"
            style={{ height: '50px', cursor: 'pointer' }}
            onClick={handleMenuClick}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </div>

        {/* Search Bar */}
        <div className="d-flex align-items-center">
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="form-control fw-bold"
                placeholder="Search"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                style={{ width: '450px', height: '40px', marginRight: '10px' }}
                onFocus={() => setData(true)}
                onBlur={() => setData(false)}
              />
            </form>
            <div>
                 {
                  data?(
                    <ul className="fw-bold list-unstyled position-absolute bg-white p-3" style={{ width: '450px' }}>
                    {searchSuggestions?.map((suggestion, index) => (
                      <Link to={`/data/${suggestion[0]}`}  key={index}><li className="bi bi-search p-1 mb-1">{suggestion}</li></Link>
                    ))}
                  </ul>
                  ):null
                 }
            </div>
          </div>
          <button className="btn btn-outline-secondary">Search</button>
        </div>

        {/* User Profile Section */}
        <div className="d-flex align-items-center">
          <img
            src="https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2"
            alt="User profile"
            style={{ height: '40px', cursor: 'pointer' }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
