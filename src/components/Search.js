import React from "react";
import TextField from "@mui/material/TextField";

function Search({ handleSearch }) {
  const handleChange = (e) => {
    const search = e.target.value;
    handleSearch(search);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search here:"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Search;
