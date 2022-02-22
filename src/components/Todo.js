import React from "react";
import "./Todo.css";
import DateTime from "./date";
import Card from "./UI/Card";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      todo: "",
    };
  }

  onValueChange = (e) => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.getElementById("bt").style.display = "inline-block";
        document.getElementById("input1").style.display = "none";
      }
    });
    this.setState({ todo: e.target.value });
  };
  removeItem = (props) => {
    const { todoList } = this.state;
    todoList.splice(props, 1);
    this.setState({
      todoList,
    });
  };
  onItemClick(index) {
    index.target.style.textDecoration = "line-through";
    index.target.style.color = "#cfd2d9";
  }

  onSubmitBtn = () => {
    document.getElementById("bt").style.display = "none";
    document.getElementById("input1").style.display = "block";
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length === 0) {
      alert("enter something");
    } else {
      const { todoList, todo } = this.state;
      this.setState({ todoList: [...todoList, todo] });
      this.setState({ todo: "" });
    }
  };

  render() {
    const myList = this.state.todoList.map((todo, index) => (
      <>
        <li className="li" key={index} onClick={this.onItemClick}>
          {todo}
        </li>
      </>
    ));
    return (
      <Card className="Todo">
        <h3>
          <DateTime />
        </h3>
        <ol className="TodoList">{myList}</ol>
        <form onSubmit={this.onSubmit}>
          <input
            className="inp"
            id="input1"
            type="text"
            autoFocus
            value={this.state.todo}
            onChange={this.onValueChange}
          />
        </form>
        <br />
        <button id="bt" className="btn" onClick={this.onSubmitBtn}>
          +
        </button>
      </Card>
    );
  }
}

export default TodoList;
