import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "favorate",
      content: v => (
        <Like liked={v.liked} onLikeToggle={() => this.props.onLike(v)} />
      )
    },
    {
      key: "delete",
      content: v => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(v._id)}
        >
          delete
        </button>
      )
    }
  ];

  render() {
    const {
      movies,
      currentPage,
      pageSize,
      onDelete,
      onLike,
      onSort,
      sortColumn
    } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        datas={movies}
        currentPage={currentPage}
        pageSize={pageSize}
        onSort={onSort}
        onDelete={onDelete}
        onLike={onLike}
      />
    );
  }
}

export default MoviesTable;
