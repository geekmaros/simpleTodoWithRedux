import React from 'react';
import './App.sass';
import SearchBarComponents from "./components/search-bar/search-bar.components";
import AllTodoComponent from "./components/allTodo/AllTodo.component";
import {connect} from 'react-redux'


class App extends React.Component {
    constructor() {
        super();
    }
  render() {
        const{todos} = this.props
      console.log(todos)
    return (
        <div className="App">
            <SearchBarComponents/>
            <AllTodoComponent todos={todos}/>

        </div>
    )
  }
}
const mapStateToProps = state => ({
    todos: state.todos.todo
})
export default connect(mapStateToProps)(App);
