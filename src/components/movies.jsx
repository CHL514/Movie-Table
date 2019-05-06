import React, { Component } from "react";
import _ from "lodash";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class Vidly extends Component {
  state = {
    movies: [],
    genres: [],
    selectedItem: "",
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  render() {
    return <ul>{this.renderMovies()}</ul>;
  }

  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  renderMovies() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedItem,
      sortColumn
    } = this.state;
    if (count === 0) return <p>There are no movies in database !</p>;

    const filterd =
      selectedItem && selectedItem._id
        ? allMovies.filter(v => v.genre._id === selectedItem._id)
        : allMovies;

    // 帅选之后进行排序
    const sorted = _.orderBy(filterd, [sortColumn.path], [sortColumn.order]);

    return (
      <div className="row" style={{ marginTop: "24px" }}>
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedItem}
            onItemSelect={v => this.handleGenreSelect(v)}
          />
        </div>
        <div className="col">
          <div>There are {filterd.length} movies in database !</div>
          <MoviesTable
            movies={sorted}
            currentPage={currentPage}
            pageSize={pageSize}
            sortColumn={sortColumn}
            onLike={this.handleIconClicked}
            onDelete={this.deleteMoives}
            onSort={this.handleSort}
          />
          <Pagination
            count={filterd.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChanged}
          />
        </div>
      </div>
    );
  }

  handleSort = sortColumn => {
    this.setState({
      sortColumn
    });
  };

  handleGenreSelect = genre => {
    this.setState({
      currentPage: 1,
      selectedItem: genre
    });
  };

  handlePageChanged = page => {
    // 当改变 props 或者 state 之后，当前组件及所有子组件都将重新 render
    this.setState({
      currentPage: page
    });
  };

  handleIconClicked = m => {
    // 不要直接修改 state，数组里面的对象也不要直接修改，复制一份出来
    let movies = [...this.state.movies];
    const index = movies.indexOf(m);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
    });
  };

  deleteMoives = id => {
    console.log(deleteMovie(id));
    this.setState({
      movies: getMovies()
    });
  };
}

export default Vidly;
