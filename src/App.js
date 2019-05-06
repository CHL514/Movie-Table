import React, { Component } from "react";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(v => v.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({
      counters
    });
  };

  handleReset = () => {
    let counters = this.state.counters.map(v => {
      v.value = 0;
      return v;
    });
    this.setState({
      counters
    });
  };

  handleDelete = id => {
    // 不能直接操作 state 以及 props
    let counters = this.state.counters.filter(v => v.id !== id);
    this.setState({
      counters
    });
  };
}

export default App;
