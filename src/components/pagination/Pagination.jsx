// src\components\Pagination.jsx
import { func, number } from "prop-types";
import ReactPaginate from "react-paginate";
import "./pagination.css";
// Set default values for props

const Pagination = ({ initialPage = 0, pageCount = 10, setCurrentPage }) => {
  // Return the ReactPaginate component with the necessary props

  const onPageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected+1);
  };
  return (
    <ReactPaginate
      activeClassName="pagination-active" // The class name for the active page
      breakClassName="pagination-page" // The class name for the break ('...')
      containerClassName="pagination-container" // The class name for the pagination container
      initialPage={initialPage} // The initial page
      marginPagesDisplayed={2} // The number of pages displayed at the margins
      nextClassName="pagination-next-prev" // The class name for the next button
      onPageChange={onPageChange} // The function to call when the page changes
      pageCount={pageCount} // The total number of pages
      pageRangeDisplayed={2} // The range of pages displayed
      pageClassName="pagination-page" // The class name for the page
      previousClassName="pagination-next-prev" // The class name for the previous button
      previousLabel={
        <img src="/images/next.svg" style={{ transform: "rotate(180deg)" }} />
      } // Use the icon for next button with rotation
      nextLabel={<img src="/images/next.svg" />} // Use the icon for previous button
    />
  );
};

export default Pagination;
