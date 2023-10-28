import React from 'react';


class BlogPage extends React.Component {
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
        <p><h1>This is THE Blog PAGE </h1></p>
        <p>I-Spy with my-Stinky eye. </p>

        <button>Submit</button>
      </div>
    );
  }
}

export default BlogPage;