import React, {Component} from 'react';

class AddTodo extends Component{
    state={
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    render()
    {
        return(
            <div>
                <form onSubmit={}>
                    <label>Add Todo:</label>
                    <input type="text" onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;
