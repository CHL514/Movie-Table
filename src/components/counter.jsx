import React, { Component } from "react";

// 受控组件，没有自己的 state ，实现来源的真实性。即数据都是从父组件传来的
class Counter extends Component {
  render() {
    let { counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={counter.value === 0 ? true : false}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
