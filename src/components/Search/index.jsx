import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../Input";
import Button from "../Button";

const SearchContent = ({ handleSearch, loading }) => {
  const [keyword, setKeyword] = useState("");

  const handleKeywordSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnClick = () => {
    handleSearch(keyword);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };
  return (
    <div className="search-content row mt-3">
      <div className="col-9">
        <Input
          placeholder="search"
          onChange={handleKeywordSearch}
          value={keyword}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="col-3">
        <Button
          text="search"
          loading={loading}
          onClick={handleOnClick}
          className="search-button"
        />
      </div>
    </div>
  );
};

SearchContent.propTypes = {
  handleSearch: PropTypes.func,
  loading: PropTypes.bool,
};
export default SearchContent;
