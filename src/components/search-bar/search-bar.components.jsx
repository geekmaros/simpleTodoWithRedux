import React, { Component } from "react";
import "./search-bar.styles.sass";
import { connect } from "react-redux";
import * as TodoActions from "../../redux/todo.action";
import { bindActionCreators } from "redux";

class SearchBarComponents extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userInput === "") {
      alert("Invalid Input");
      return;
    }
    // console.log('working')
    // this.setState({userInput: ''})
    this.props.actions.addTodo(this.state.userInput);

    this.setState({ userInput: "" }, function () {
      console.log(this.state.userInput);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ userInput: value });
  };

  render() {
    return (
      <div className="searchWrapper">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.userInput}
            className="input"
            placeholder="Enter Todo "
          />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // addTodo: todo => dispatch(addTodo(todo))
  actions: bindActionCreators(TodoActions, dispatch),
});
export default connect(null, mapDispatchToProps)(SearchBarComponents);
