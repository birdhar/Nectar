import React from "react";
import styles from "./Search.module.css";
const Search = () => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className={`form ${styles.searchForm}`}>
        <img
          className={styles.searchImg}
          src="/images/search.svg"
          alt="not found"
        />
        <input
          type="text"
          className="form-control form-input"
          placeholder="Search "
          style={{ backgroundColor: "#f7f8fa" }}
        />
      </div>
    </div>
  );
};

export default Search;
