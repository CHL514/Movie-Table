import React from "react";

const Page = props => {
  const { count: itemsCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  if (pageCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(i => {
          return (
            <li
              className={currentPage === i ? "page-item active" : "page-item"}
              key={i}
            >
              <a className="page-link" onClick={() => onPageChange(i)}>
                {i}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Page;
