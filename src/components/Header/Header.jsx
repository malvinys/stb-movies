import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { fetchSearchMovie, moviesSelector } from '../../models/Movies';

const Header = () => {
  const dispatch = useDispatch();
  const { search } = useSelector(moviesSelector);
  const [isSearch, setIsSearch] = useState(false);
  const [keywords, setKeywords] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(fetchSearchMovie(keywords));

    if (search.data) {
      setSearchResults(search.data);
    }
  }, [dispatch, keywords]);

  const handleSearchClick = () => {
    setIsSearch(!isSearch);
  };

  const handleKeywordsChange = (input) => {
    setKeywords(input);
  };

  return (
    <>
      <header className="base-header">
        <a href="/" className="base-header-brand">STB-Movies</a>
        <FontAwesomeIcon icon={isSearch ? faTimes : faSearch} className="base-header-seacrh-icon" onClick={handleSearchClick} />
      </header>
      {isSearch && (
        <div className="base-header-seacrh-bar">
          <div className="base-header-seacrh-bar-filter">
            <input className="base-header-seacrh-bar-filter-keywords" type="text" placeholder="Search" onChange={(e) => handleKeywordsChange(e.target.value)} />
          </div>
          {searchResults && searchResults.length > 0 && (
            <div className="base-header-seacrh-bar-result">
              {searchResults.map((item) => <a href={`/${item.imdbID}`} key={item.imdbID}>{item.Title}</a>)}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
