import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

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
  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render()
    {
      return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo}/>
        </div>
      );
    }
}

export default App;
