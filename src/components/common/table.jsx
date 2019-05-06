import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = props => {
  const {
    columns,
    sortColumn,
    datas,
    currentPage,
    pageSize,
    onSort,
    onDelete,
    onLike
  } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody
        datas={datas}
        columns={columns}
        currentPage={currentPage}
        pageSize={pageSize}
        onDelete={onDelete}
        onLike={onLike}
      />
    </table>
  );
};

export default Table;
