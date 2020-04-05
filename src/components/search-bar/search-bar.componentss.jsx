import React,{Component} from 'react'
import './search-bar.styles.sass'
import {connect} from 'react-redux'
import {addTodo} from "../../redux/todo.action";

class SearchBarComponentss extends Component{

    constructor() {
        super();
        this.state = {
            userInput: ''
        }

    }

    handleSubmit = async e => {
        e.preventDefault()
        const userInputs = this.state.userInput
        console.log(userInputs)
        if (userInputs === '') {
            alert('Invalid Input')
            return
        }
        try{
            await this.props.addTodo(this.state.userInput)
            this.setState({userInput: ''})

        }catch (e) {
            console.log(e)
        }


    }

    handleChange = e => {
        e.preventDefault()
        const {value} = e.target;
        this.setState({userInput: value})

    }
    render() {
        return (
            <div className='searchWrapper'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onKeyUp={this.handleChange}  className='input'  placeholder="Enter Todo "/>
                </form>
            </div>
        );
    }

}
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})
export default connect(null, mapDispatchToProps)(SearchBarComponentss)