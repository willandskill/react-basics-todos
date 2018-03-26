import React, { Component } from "react";

import TaskList from "./components/TaskList";

const initialState = {
  tasks: [],
  inputValue: "",
  counter: 0
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    // Use .bind(this) on methods that need to access this.state...
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleToggleDone = this.handleToggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
  }

  handleInput(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      name: this.state.inputValue,
      isDone: false,
      id: this.state.counter
    };
    const newState = {
      tasks: [...this.state.tasks, newTask],
      inputValue: "",
      counter: this.state.counter + 1
    };
    this.setState(newState);
  }

  handleToggleDone(id) {
    // Change task to "DONE" if passed id matches task.id in array `state.tasks`
    const newState = Object.assign(this.state, {
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    });
    this.setState(newState);
  }

  handleDelete(id) {
    // Delete task if passed id matches task.id in array `state.tasks`
    const newState = {
      ...this.state,
      tasks: this.state.tasks.filter(task => task.id !== id)
    };
    this.setState(newState);
  }

  handleClearAll() {
    this.setState(initialState);
  }

  renderEmptyMessage() {
    if (!this.state.tasks.length) {
      return (
        <p className="text-center text-muted">
          No TODOs yet! Please add a TODO by typing in the input field above.
        </p>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container" style={styles}>
        <br />
        <div className="row mb-2">
          <div className="col-sm-12 col-md-10">
            <h2>Todos</h2>
          </div>
          <div className="col-sm-12 col-md-2 text-right">
            <button
              onClick={this.handleClearAll}
              className="btn btn-block btn-outline-danger"
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <form onSubmit={this.handleSubmit}>
                <input
                  placeholder="What do You want to accomplish today?"
                  type="text"
                  className="form-control form-control-lg"
                  value={this.state.inputValue}
                  onChange={this.handleInput}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <TaskList
              tasks={this.state.tasks}
              handleToggleDone={this.handleToggleDone}
              handleDelete={this.handleDelete}
            />
            {this.renderEmptyMessage()}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {};

export default App;
