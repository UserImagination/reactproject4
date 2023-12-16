import React from 'react';
import './originalPage.css';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'api/todoitems',
      todos: [],
      show: false
    }
  }

  // *************************** //
  // ******** HIDE STATE ******* //
  // *************************** //
  toggleText = () => {
    if (this.state.show === true) {
      this.setState({ show: false })
    }
    if (this.state.show === false) {
      this.setState({ show: true })
    }
  }

  render() {
    return (
      <div className='centered'>
        <button onClick={this.toggleText}>I-Spy with my-Stinky eye.</button>
        {this.state.show && <h1>This is THE Blog PAGE</h1>}
      </div>
    );
  }
}

export default BlogPage;