import React, { Component } from "react";

// 高度复用的表头
// columns: Array
// sortColumn: Object
// onSort: Function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    // 调用父组件的 setState() 方法
    this.props.onSort(sortColumn);
  };

  // 渲染 sort icon
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => {
            return (
              <th
                className="clickable"
                key={column.path || column.key}
                onClick={() => this.raiseSort(column.path)}
              >
                {column.label}
                {this.renderSortIcon(column)}
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
