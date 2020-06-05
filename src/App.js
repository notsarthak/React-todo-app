import React, {Component} from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos:[
      {id:1, content:'Buy milk'},
      {id:2, content:'Play Mario Kart'}
    ]
  }
  render()
    {
      return (
        <div className="App">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} />
        </div>
      );
    }
}

export default App;
