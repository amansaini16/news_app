import React, { useState } from 'react';

const Navbar = ({ setCategory, setSearchQuery }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchValue);
    // Reset search input after search is performed
    setSearchValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    // Reset search query when a category is selected
    setSearchQuery('');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge text-bg-light">News App</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("entertainment")}>Entertainment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("science")}>Science</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleCategoryClick("technology")}>Technology</a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center flex-grow-1">
          <input 
            type="text" 
            className="form-control me-2 flex-grow-1" 
            placeholder="Search" 
            aria-label="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
