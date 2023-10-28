import React from 'react';
import {Link} from 'react-router-dom';

class ShopPage extends React.Component {
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
        <h1>THIS Shop Page UNGAH UNGAH</h1>
      </div>
    );
  }
}

export default ShopPage;