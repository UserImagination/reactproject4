import React from 'react';
import {Link} from 'react-router-dom';

class ContactPage extends React.Component {
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
        <h1>This is the Contact Us Page Sucka</h1>
        <h4>Do not hire us right now. At the moment we are breaking other projects. 
        <p>Sincerely </p>
        Cat in the hat.-</h4>
      </div>
    );
  }
}

export default ContactPage;