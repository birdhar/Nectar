import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import styles from "./Pagination.module.css";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((user) => (
          <div className="row my-4" key={user.userId}>
            <div className={`col-2 p-0 ${styles.paginationAllUsersFont}`}>
              <img src={user.userPhoto} alt="not found" />
            </div>
            <div className={`col-3 p-0 ${styles.paginationAllUsersFont}`}>
              {user.userFullName}
            </div>
            <div className={`col-1 p-0 ${styles.paginationAllUsersFont}`}>
              {user.userGender}
            </div>
            <div className={`col-2 p-0 ${styles.paginationAllUsersFont}`}>
              {user.userPhone}
            </div>
            <div className={`col-2 p-0 ${styles.paginationAllUsersFont}`}>
              {user.userId}
            </div>
            <div
              className={`col-1 p-0 ${styles.paginationAllUsersFont}`}
              style={
                user.userStatus === "Active"
                  ? { color: "#EBB261" }
                  : user.userStatus === "Blocked"
                  ? { color: "#35B446" }
                  : { color: "#39C7E1" }
              }
            >
              {user.userStatus}
            </div>
            <div className={`col-1 p-0 ${styles.paginationAllUsersFont}`}>
              <img
                src={user.userView}
                alt="not found"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, users }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState("");
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        activeClassName={styles.paginationActive}
        pageLinkClassName={styles.paginationPageLink}
        // breakLinkClassName="page-link"
        nextLinkClassName={styles.paginationNextLink}
        previousLinkClassName={styles.paginationPreviousLink}
        // pageClassName="page-item"
        // breakClassName="page-item"
        // nextClassName="page-item"
        // previousClassName="page-item"
        pageRangeDisplayed={20}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
