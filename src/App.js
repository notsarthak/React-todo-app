import React, {Component} from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos:[
      {id:1, content:'Buy milk'},
      {id:2, content:'Play Mario Kart'}
    ]
  }
  deleteTodo=(id)=>{
    const ntodos = this.state.todos.filter(todo=>{
      if(todo.id===id)
      return false;
      else
      return true;
    })
    this.setState({
      todos:ntodos
    })
  }
  render()
    {
      return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      );
    }
}

export default App;
