import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    // 组合 key, 最后两项没有 path 属性，用 key 代替
    return item._id + (column.path || column.key);
  };

  render() {
    const { datas, columns, currentPage, pageSize } = this.props;
    return (
      <tbody>
        {datas.slice((currentPage - 1) * 4, pageSize * currentPage).map(v => {
          return (
            <tr key={v._id}>
              {columns.map(column => {
                return (
                  <td key={this.createKey(v, column)}>
                    {this.renderCell(v, column)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
