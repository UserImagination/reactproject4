import React from 'react';
import {Link} from 'react-router-dom';

class NewFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'api/todoitems',
      todos: [],
    }
  }


  render() {
    return (
      <div>
        <Link to='/'>link to original page</Link>
        <button>This does nothing</button>
        <h1>This is the About Us Page</h1>
      </div>
    );
  }
}

export default NewFile;