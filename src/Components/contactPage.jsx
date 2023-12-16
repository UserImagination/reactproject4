import React from 'react';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'api/todoitems',
      todos: [],
    }
  }

  // *************************** //
  // ******** INPUT STATE ****** //
  // *************************** //
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>This is the Contact Us Page Sucka</h1>
        <h4>Do not hire us right now. At the moment we are breaking other projects. </h4>
        <h4>Sincerely</h4>
        <h4>Cat in the hat.-</h4>

        <p>
          <input type="text" onChange={this.handleInputChange} />
          <br></br><br></br>
          <span>{this.state.inputValue}</span>
        </p>
      </div>
    );
  }
}

export default ContactPage;